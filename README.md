
# Resume

Vite와 React로 만든 이력서 웹사이트입니다.

## 로컬 실행

```bash
pnpm install
pnpm dev
```

`pnpm-workspace.yaml`의 `allowBuilds`는 Tailwind와 Esbuild의 설치 스크립트를 허용하기 위한 설정입니다. 운영체제별 네이티브 의존성은 pnpm이 실행 환경에 맞게 자동 설치합니다.

## 배포 전 검증

```bash
pnpm deploy:check
```

Vercel과 동일하게 frozen lockfile로 설치한 뒤 프로덕션 빌드를 실행합니다.

## GitHub 연동 Vercel 배포

사전 준비:

- GitHub CLI 설치 및 `gh auth login` 완료
- Vercel 계정 생성
- Vercel GitHub App에 대상 저장소 접근 권한 부여

새 GitHub 저장소를 만들고 Vercel 프로젝트까지 연결하려면 다음을 실행합니다.

```bash
pnpm deploy:setup -- resume private
```

첫 번째 인자는 GitHub 저장소 이름이며 `owner/repository` 형식도 사용할 수 있습니다. 두 번째 인자는 `private`, `public`, `internal` 중 하나이고 기본값은 `private`입니다. 이미 `origin`이 있으면 새 저장소를 만들지 않고 기존 원격 저장소에 현재 브랜치를 push합니다.

스크립트는 다음 작업을 수행합니다.

1. frozen lockfile 설치 및 Vite 프로덕션 빌드 검증
2. 필요 시 Git 저장소 초기화와 커밋 생성
3. GitHub 저장소 생성 또는 기존 `origin`으로 push
4. Vercel 프로젝트 연결
5. Vercel 프로젝트와 GitHub 저장소 연결

연결 후 브랜치 push와 Pull Request는 Preview 배포를 만들고, Vercel에서 지정한 Production Branch(일반적으로 `main`)에 push하면 Production 배포가 생성됩니다.
  
