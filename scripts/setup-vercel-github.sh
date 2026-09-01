#!/usr/bin/env bash

set -Eeuo pipefail

project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$project_dir"

if [[ "${1:-}" == "--" ]]; then
  shift
fi

repository_name="${1:-$(basename "$project_dir")}"
repository_visibility="${2:-private}"

case "$repository_visibility" in
  private|public|internal) ;;
  *)
    echo "오류: 공개 범위는 private, public, internal 중 하나여야 합니다." >&2
    exit 2
    ;;
esac

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "오류: '$1' 명령이 필요합니다. $2" >&2
    exit 1
  fi
}

require_command git "Git을 먼저 설치해 주세요."
require_command gh "GitHub CLI를 설치한 뒤 'gh auth login'을 실행해 주세요."
require_command pnpm "Corepack 또는 pnpm을 먼저 설치해 주세요."

if ! gh auth status --hostname github.com >/dev/null 2>&1; then
  echo "오류: GitHub CLI 로그인이 필요합니다. 'gh auth login'을 먼저 실행해 주세요." >&2
  exit 1
fi

echo "[1/5] 의존성과 프로덕션 빌드를 검증합니다."
pnpm install --frozen-lockfile
pnpm run build

echo "[2/5] Git 저장소와 초기 커밋을 준비합니다."
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git init -b main
fi

current_branch="$(git branch --show-current)"
if [[ -z "$current_branch" ]]; then
  git switch -c main
  current_branch="main"
fi

git add .
if ! git diff --cached --quiet; then
  git commit -m "chore: prepare GitHub and Vercel deployment"
fi

if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
  echo "오류: 배포할 커밋이 없습니다." >&2
  exit 1
fi

echo "[3/5] GitHub 저장소를 연결합니다."
if git remote get-url origin >/dev/null 2>&1; then
  origin_url="$(git remote get-url origin)"
  echo "기존 origin을 사용합니다: $origin_url"
  git push --set-upstream origin "$current_branch"
else
  gh repo create "$repository_name" "--$repository_visibility" --source=. --remote=origin --push
fi

echo "[4/5] 로컬 디렉터리를 Vercel 프로젝트에 연결합니다."
pnpm dlx vercel@latest link --yes

echo "[5/5] Vercel 프로젝트를 GitHub 저장소에 연결합니다."
pnpm dlx vercel@latest git connect --yes

echo
echo "설정 완료: 이후 브랜치 push는 Preview, 프로덕션 브랜치 push는 Production 배포를 생성합니다."
echo "Vercel이 저장소를 찾지 못하면 Vercel 대시보드에서 GitHub App의 저장소 접근 권한을 허용한 뒤 다시 실행하세요."
