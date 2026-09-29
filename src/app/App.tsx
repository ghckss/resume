import { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Globe,
  MapPin,
  ExternalLink,
  Printer,
  FileText,
  User,
  PenLine,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────
const profile = {
  name: "황호찬",
  title: "Frontend Engineer",
  tagline:
    "React와 Next.js로 약 8년간 웹 제품을 만들었습니다. 스토어, 콘텐츠 서비스와 운영 도구를 새로 만들거나 오래된 구조를 고쳤고, 상태관리·성능·배포 환경처럼 사용자 화면 밖의 문제도 직접 맡아왔습니다.",
  contact: {
    email: "ghckss93@gmail.com",
    phone: "010-9077-4782",
    github: "github.com/ghckss",
    website: "",
    location: "서울, 대한민국",
  },
};

const resume = {
  skills: {
    Languages: ["TypeScript", "JavaScript"],
    Frontend: ["React", "Next.js", "App Router"],
    State: ["TanStack Query", "Jotai"],
    Architecture: ["Turborepo", "SSR", "SSG"],
    Platform: ["Cloudflare", "Vercel", "GitHub Actions"],
    Quality: ["Playwright", "Lighthouse"],
  },
  experience: [
    {
      company: "노머스",
      role: "Frontend Engineer",
      period: "2021.06 - 2026.07",
      points: [
        "스토어 프론트엔드를 단독 설계·개발하고, 3인 프론트엔드 팀에서 채널·백오피스·파트너센터의 구조 설계, 과제 분리와 운영 이슈 대응 주도",
        "스토어·채널을 Turborepo 모노레포로 통합하고 공통 컴포넌트를 패키지화해 서비스 간 재사용 기반 구축",
        "App Router 전환과 렌더링·데이터 패칭·리소스 최적화로 FCP를 4.2초에서 1.1초로, Lighthouse 성능 점수를 61점에서 80점으로 개선",
        "Cloudflare 배포 환경과 Vercel Failover 구조를 구축해 운영 안정성을 확보하고 월 인프라 비용을 $300 이상 절감",
        "댓글·미디어 서버 상태를 TanStack Query 중심으로 바꾸고 낙관적 업데이트, 오류 복구와 캐시 갱신 기준을 한 흐름으로 정리",
        "국내외 결제, 카드 등록, 빌링키와 0원 주문을 구현하고 운영 중 발견된 결제 예외를 보완",
      ],
    },
    {
      company: "넷스루",
      role: "Fullstack Developer",
      period: "2018.05 - 2021.05",
      points: [
        "고객사 납품형 웹 분석·태그 관리 솔루션 개발 및 유지보수",
        "기존 Spring·Thymeleaf 환경에서 신규 프로젝트에 React 도입을 제안하고 사내 최초로 적용",
        "분석 데이터 조회·시각화를 위한 프론트엔드 UI 개발 참여",
      ],
    },
  ],
  certifications: [{ name: "정보처리기사", year: "2021" }],
  languages: [{ lang: "일본어", level: "JLPT N1" }],
};

interface Task {
  title: string;
  detail: string;
}

interface Issue {
  title: string;
  problem: string;
  solution: string;
  result?: string;
}

interface Project {
  name: string;
  period?: string;
  role: string;
  summary: string;
  stack: string[];
  tasks: Task[];
  issues?: Issue[];
  result: string;
}

interface Company {
  company: string;
  role: string;
  period: string;
  employment: string;
  team: string;
  overview: string;
  projects: Project[];
}

const careerDetails: Company[] = [
  {
    company: "노머스",
    role: "Frontend Engineer",
    period: "2021.06 - 2026.07",
    employment: "정규직",
    team: "프론트엔드 팀",
    overview:
      "노머스에서 스토어·채널·백오피스·파트너센터를 처음 만들 때부터 운영까지 맡았습니다. 스토어 프론트엔드는 혼자 설계하고 개발했고, 이후 3인 프론트엔드 팀에서는 서비스 구조를 잡고 도메인별로 일을 나눴습니다. 모노레포와 App Router 전환, 배포 환경, 결제, 상태관리와 성능 개선도 직접 진행했습니다.",
    projects: [
      {
        name: "App Router 전환 및 웹 성능·배포 인프라 개선",
        role: "프론트엔드 설계·구현 주도",
        summary:
          "Cloudflare 배포 환경으로 이전하는 과정에서 기존 Pages Router 구조를 App Router로 전환하고, 렌더링·데이터 패칭·리소스 로딩의 성능 병목을 함께 개선했습니다. 또한 모노레포 기반 공통 모듈, 멀티 앱 CI/CD와 Vercel 대체 배포 경로를 구축했습니다.",
        stack: [
          "Next.js",
          "TypeScript",
          "Turborepo",
          "Cloudflare",
          "Wrangler",
          "Vercel",
          "GitHub Actions",
          "Lighthouse",
        ],
        tasks: [
          {
            title: "App Router 및 모노레포 전환",
            detail:
              "스토어·채널을 Pages Router에서 App Router로 전환하고 서버 컴포넌트와 loading.tsx를 활용한 스트리밍 렌더링 구조를 적용했습니다. 별도 저장소로 운영되던 두 서비스를 Turborepo 기반 모노레포로 통합하고 공통 컴포넌트를 패키지화했습니다.",
          },
          {
            title: "렌더링 및 데이터 패칭 최적화",
            detail:
              "페이지 특성에 따라 SSG·SSR을 적용하고 TanStack Query 캐시와 Next.js의 데이터 재검증 정책을 구성했습니다. 재검증 시점 전까지 캐시된 데이터를 재사용하도록 변경해 동일 데이터에 대한 반복 API 호출을 제거하고, 초기 렌더링을 차단하던 번역 데이터 로딩과 마스크 스크린을 제거했습니다.",
          },
          {
            title: "이미지 및 초기 번들 최적화",
            detail:
              "이미지 Lazy Loading을 적용하고 업로드 시점의 WebP 변환을 제안해 백엔드 담당자와 함께 반영했습니다. 초기 화면에 필요하지 않은 컴포넌트에는 Lazy Loading과 Code Splitting을 적용해 초기 JavaScript 로드 범위를 축소했습니다.",
          },
          {
            title: "Cloudflare·Wrangler 배포 환경 구축",
            detail:
              "이미지 바인딩, 캐시, 로깅과 앱별 디렉터리 구조를 정비하고 Cloudflare Pages·Workers 배포 환경을 구축했습니다. Cloudflare 환경 변수 값 변경만으로 추가 배포 없이 Vercel 환경으로 트래픽을 전환할 수 있는 Failover 컨트롤러를 구현했습니다.",
          },
        ],
        issues: [
          {
            title:
              "dangerouslySetInnerHTML 영역 이벤트 핸들러 유실",
            problem:
              "App Router 전환 후 dangerouslySetInnerHTML로 삽입한 HTML 내부의 이벤트가 동작하지 않는 문제가 발생했습니다. 클라이언트 렌더링 시 DOM이 교체되며 개별 요소에 직접 등록한 이벤트 리스너가 유실되는 것을 확인했습니다.",
            solution:
              "개별 요소에 이벤트를 직접 바인딩하는 대신 상위 컨테이너에서 이벤트 위임 방식으로 처리했습니다. 클라이언트 컴포넌트의 useEffect에서 단일 리스너를 등록하고 하위 요소의 클릭 이벤트를 판별하도록 변경했습니다.",
            result:
              "이벤트 유실 문제를 해결하고 동일한 유형의 콘텐츠에 재사용할 수 있도록 이벤트 처리 패턴을 문서화해 팀에 공유했습니다.",
          },
        ],
        result:
          "FCP를 4.2초에서 1.1초로, Lighthouse 성능 점수를 61점에서 80점으로 개선하고 주요 Web Vitals 측정 항목을 평균 47.6% 개선했습니다. Cloudflare 전환으로 월 인프라 비용을 $300 이상 절감했으며, 최적화 이후 CS 채널에서 로딩 성능 관련 사용자 불편 제보가 감소하는 경향을 확인했습니다.",
      },
      {
        name: "스토어 프론트엔드 현대화 및 결제 시스템 확장",
        role: "프론트엔드 단독 설계·개발 및 운영",
        summary:
          "상품·주문·결제·멤버십을 포함한 스토어 전반을 개발·운영하고, 스타일링 기술 스택 전환과 결제 시스템 확장을 진행했습니다.",
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "Panda CSS",
          "Playwright",
          "Toss Payments",
          "PortOne",
        ],
        tasks: [
          {
            title:
              "PandaCSS 선정·전환 및 시각적 회귀 테스트 구축",
            detail:
              "styled-components 지원 중단에 대응해 Tailwind CSS 등 대체 기술을 검토했습니다. 기존 컴포넌트 기반 개발 방식과의 적합성, 스타일 작성 편의성, 빌드 타임 정적 CSS 생성 방식을 고려해 PandaCSS를 선정했습니다. 공통 위젯, 상품, 주문, 결제, 멤버십, 약관과 회원가입 등 스토어 전체 화면을 마이그레이션하고 styled-components 의존성을 제거했으며, Playwright 기반 시각적 회귀 테스트를 구축했습니다.",
          },
          {
            title: "Toss Payments 신규 PG 도입",
            detail:
              "KRW 일반결제와 네이버페이 분기, 해외카드·FrommPay 카드 등록, 빌링키·MID와 0원 결제 흐름을 구현했습니다. 결제수단과 주문 상태에 따른 주문 완료 처리도 함께 구성했습니다.",
          },
          {
            title: "결제·주문 운영 안정화",
            detail:
              "UnionPay를 포함한 결제수단의 도입·종료와 노출 조건, Provider 처리를 관리했습니다. 배송비, 결제 MID, PortOne Webhook, 0원 결제와 멤버십 중복 갱신 등 운영 중 발견된 예외 흐름을 보완했습니다.",
          },
        ],
        result:
          "스토어 전체 화면의 스타일링 기술 스택 전환을 완료하고 국내외 결제·카드 등록·정기결제와 0원 주문을 포함한 복합 결제 흐름 구축",
      },
      {
        name: "채널 서버 상태관리 및 대규모 콘텐츠 UX 개선",
        role: "프론트엔드 설계·구현 주도",
        summary:
          "댓글·답글·좋아요·미디어 등 여러 화면에 분산되어 있던 클라이언트 상태를 서버 상태 중심으로 재설계하고, 대량 콘텐츠 렌더링과 피드 UX를 개선했습니다.",
        stack: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Jotai",
          "Virtualized List",
          "Playwright",
        ],
        tasks: [
          {
            title: "서버 상태관리 구조 개선",
            detail:
              "댓글·답글과 미디어·아티스트·팬 콘텐츠에 무분별하게 사용되던 Jotai atom을 제거하고 TanStack Query 기반으로 전환했습니다. Query Key와 캐시 무효화 기준을 도메인별로 정리했습니다.",
          },
          {
            title: "낙관적 업데이트와 오류 복구",
            detail:
              "댓글·답글 작성·삭제와 좋아요에 낙관적 업데이트를 적용하고 요청 실패 시 이전 상태로 롤백하도록 구성했습니다. 미디어·아티스트·팬 댓글에도 동일한 갱신 구조를 적용했습니다.",
          },
          {
            title: "대규모 콘텐츠 렌더링 개선",
            detail:
              "팬피드와 상품·채널 목록에 Virtualized List와 무한 스크롤을 적용했습니다. 복수 이미지 피드, 이미지 확대·축소와 라이브 PIP 등 콘텐츠 탐색과 시청 UX를 개선했습니다.",
          },
          {
            title: "해시태그 기능 전체 구축",
            detail:
              "해시태그 검색·결과 화면, WebView 커맨드, HTML 링크·해시태그 파싱 등 전체 기능을 구현했습니다.",
          },
        ],
        result:
          "클라이언트 전역 상태 의존도를 줄이고 댓글·미디어 도메인의 데이터 갱신, 캐시 무효화와 오류 복구 흐름을 TanStack Query 중심으로 일원화",
      },
    ],
  },
];

// AI 관련 포지션에 지원할 때 선택적으로 포함
const personalProjects: Project[] = [
  {
    name: "Runner — Codex 에이전틱 소프트웨어 개발 스킬",
    role: "개인 프로젝트 (설계·개발·반복 활용)",
    summary:
      "AI가 요구사항을 임의로 해석하거나 검증 없이 구현하는 문제를 줄이기 위해 요구사항 정의부터 계획·구현·리뷰·검증까지 통제하는 Codex 사용자 정의 스킬을 설계하고 개발했습니다.",
    stack: [
      "Codex",
      "Custom Skills",
      "Multi-Agent Orchestration",
      "Git",
    ],
    tasks: [
      {
        title: "요구사항 계약과 승인 게이트 설계",
        detail:
          "구현 전에 목표·비목표·제약·완료 조건을 Requirement Contract로 확정하고, 요구사항과 구현 계획에 각각 명시적인 승인 게이트를 적용하도록 구성했습니다.",
      },
      {
        title: "역할별 Agent와 State Store 구성",
        detail:
          "Spec·Tech Lead·Executor·Reviewer·Validator 역할을 분리하고 State Store를 통해 각 역할에 필요한 컨텍스트와 결과물만 전달하도록 설계했습니다.",
      },
      {
        title: "증분 구현과 검증 루프 구성",
        detail:
          "작업을 단위별로 구현·검증·커밋하고 자기 수정, 역할별 리뷰, 회귀 검증과 최종 개선 루프를 수행하도록 구성했습니다.",
      },
    ],
    result:
      "Runner를 실제 개발 작업과 AI Fairy 프로젝트에 반복 적용하며 요구사항 분석, 증분 구현, 코드 리뷰와 회귀 검증 과정을 체계화",
  },
];

const coverLetterSections = [
  {
    question: "문제 해결을 위해 가장 깊이 몰입했던 경험",
    answer: [
      "가장 오래 붙잡고 했던 일은 스토어의 styled-components를 PandaCSS로 바꾸는 작업이었습니다. 상품, 주문, 결제, 멤버십과 회원가입까지 운영 중인 화면 대부분이 대상이라서 단순히 문법만 바꿀 수는 없었습니다.",
      "Tailwind CSS를 포함해 몇 가지 대안을 직접 써봤습니다. 기존 컴포넌트 작성 방식과 잘 맞는지, 스타일을 옮기기 편한지, 런타임 비용을 줄일 수 있는지를 비교한 뒤 PandaCSS를 골랐습니다. 공통 위젯부터 시작해 상품과 주문처럼 영역별로 순서를 정했고, 새 기능 개발을 멈추지 않아도 되도록 작업을 잘게 나눴습니다.",
      "화면이 비슷해 보인다는 이유만으로 완료 처리하지 않으려고 Playwright 시각 회귀 테스트도 만들었습니다. 테스트를 통과한 영역부터 기존 의존성을 걷어냈고, 마지막에는 스토어 전체 화면과 styled-components 의존성을 모두 정리했습니다.",
      "이 작업 이후에는 기술을 고르는 일보다 어디까지 바꾸고, 무엇으로 확인하고, 언제 끝났다고 볼지를 먼저 정하는 편이 됐습니다.",
    ],
  },
  {
    question: "제가 생각하는 좋은 코드",
    answer: [
      "좋은 코드는 다음 사람이 고칠 때 덜 불안한 코드라고 생각합니다. 짧거나 영리한 코드보다는 누가 데이터를 가지고 있는지, 어디까지 바뀌는지, 실패하면 어떻게 돌아가는지가 보이는 코드를 선호합니다.",
      "채널의 댓글·답글·미디어 상태관리를 고칠 때 이 기준을 적용했습니다. 당시에는 여러 Jotai atom에 서버 데이터와 화면 상태가 섞여 있어서, 한 곳을 수정하면 다른 화면이 언제 갱신되는지 따라가기 어려웠습니다. 서버 데이터는 TanStack Query로 옮기고 Query Key와 캐시 갱신 기준을 도메인별로 정리했습니다. 작성·삭제·좋아요는 먼저 화면에 반영하되 요청이 실패하면 이전 값으로 돌리게 했습니다.",
      "추상화를 많이 했다는 것보다 변경 범위와 실패 경로를 코드에서 바로 확인할 수 있는지가 더 중요하다고 봅니다. 여기에 테스트와 짧은 문서가 있으면 다른 사람도 훨씬 편하게 손댈 수 있습니다.",
    ],
  },
  {
    question: "꾸준히 실천하고 있는 학습 방법과 관점",
    answer: [
      "새 기술을 볼 때 API 목록부터 외우는 편은 아닙니다. 지금 겪고 있는 문제를 먼저 적고, 공식 문서에서 동작 방식과 제약을 확인한 뒤 작은 예제로 직접 돌려봅니다.",
      "PandaCSS를 고를 때도 Tailwind CSS와 작성 방식, 빌드 결과를 비교했습니다. App Router와 Cloudflare를 도입할 때는 별도 환경을 만들어 빌드, 미들웨어와 렌더링이 예상대로 동작하는지 먼저 확인했습니다. 적용이 끝나면 그때 알게 된 내용을 디렉터리 구조, 공통 코드, 테스트나 문서 중 하나로 남기려고 합니다.",
      "AI 도구도 비슷하게 사용합니다. 곧바로 코드를 만들어 달라고 하기보다 요구사항과 하지 않을 일, 제약과 완료 조건을 먼저 적습니다. 이 과정을 매번 반복하기 번거로워 Codex용 Runner 스킬도 직접 만들었습니다.",
      "기술 이름을 많이 아는 것보다 선택할 때 쓸 기준과 결과를 확인하는 방법을 갖고 있는 편이 오래 도움이 됐습니다.",
    ],
  },
  {
    question: "지원 동기",
    answer: [
      "지난 8년 동안 스토어, 콘텐츠 서비스, 백오피스와 파트너센터를 만들고 운영했습니다. 사용자 화면뿐 아니라 상품, 결제, 멤버십, 정산과 권한처럼 운영자 업무와 맞닿은 기능도 계속 다뤘습니다.",
      "제가 재미를 느끼는 지점은 복잡한 조건을 사용자가 실수하지 않는 화면과 흐름으로 바꾸는 일입니다. 정산이나 권한처럼 작은 불편도 매일 반복되면 실제 업무 시간이 늘어나는 모습을 봤고, 운영 도구를 만들 때는 기능 수보다 사용 순서와 예외 상황을 더 꼼꼼히 보게 됐습니다.",
      "콘텐츠 서비스에서는 대량 피드, 무한 스크롤, 여러 이미지, 확대·축소, 라이브 PIP와 댓글을 구현했습니다. 이 일을 하면서 로딩 방식이나 작은 인터랙션 하나가 서비스의 체감 품질을 크게 바꾼다는 것도 알게 됐습니다.",
      "다음 회사에서도 제품 화면만 만드는 역할보다는 사용자 경험과 운영 조건, 기술 구조를 함께 살펴야 하는 문제를 맡고 싶습니다.",
    ],
  },
  {
    question: "기술적으로 가장 어려웠던 문제",
    answer: [
      "가장 난도가 높았던 일은 App Router 전환과 성능 개선, 배포 환경 이전을 한 번에 진행한 작업입니다. 프론트엔드 쪽 설계와 구현은 제가 맡았습니다.",
      "Cloudflare 이전을 검토하다가 당시 환경에서 Pages Router 지원에 제약이 있다는 사실을 알게 됐습니다. 라우터만 바꾸면 끝나는 문제가 아니었습니다. 기존 SSR 구조, 느린 첫 화면, 배포 비용과 장애 시 복구 방법까지 같이 손봐야 했습니다.",
      "getServerSideProps 중심의 페이지를 서버 컴포넌트와 loading.tsx를 쓰는 구조로 옮겼습니다. 페이지별로 SSG와 SSR을 나누고, TanStack Query 캐시와 Next.js 재검증 시점을 맞춰 같은 API를 반복 호출하지 않게 했습니다. 첫 화면을 막던 번역 데이터와 마스크 스크린도 없앴고 이미지 지연 로딩, WebP 변환과 코드 분할을 함께 적용했습니다.",
      "기존 Vercel 환경은 바로 없애지 않았습니다. Cloudflare Pages와 Workers 환경을 따로 만든 뒤 통합 테스트를 마치고 한 번에 전환했습니다. 장애가 나면 새 배포 없이 환경 변수만 바꿔 Vercel로 트래픽을 돌릴 수 있게 했습니다.",
      "두 라우터를 오래 같이 운영하는 방법도 검토했지만 레이아웃과 데이터 패칭을 이중으로 관리해야 해서 제외했습니다. Cloudflare만 남기는 방법도 복구 수단이 없어 선택하지 않았습니다.",
      "전환 후 FCP는 4.2초에서 1.1초로 줄었고 Lighthouse 성능 점수는 61점에서 80점으로 올랐습니다. 주요 Web Vitals는 평균 47.6% 개선됐고 월 인프라 비용도 $300 이상 줄었습니다.",
    ],
  },
  {
    question: "다른 직군·팀과 협업한 경험",
    answer: [
      "네이티브 채팅을 Web·WebView로 옮길 수 있는지 확인하는 PoC를 진행한 적이 있습니다. 처음에는 웹에서 채팅을 만들 수 있는지만 보면 된다고 생각했지만, 살펴볼수록 메시징 구조뿐 아니라 서비스 정책과 운영 방식까지 바뀌는 일이었습니다.",
      "요구사항이 아직 흐린 상태라 바로 구현부터 하지 않고 팀원들과 먼저 확인할 항목을 정했습니다. 저는 MQTT 연결, 메시지 동기화와 clientId 충돌, 대량 메시지의 메모리 사용량, 모바일 키보드·포커스·스크롤을 테스트했습니다. 네이티브와 웹의 차이는 기술 문제와 정책 문제로 나눠 문서에 적었고, 각 항목이 실제 개발 범위와 운영 비용을 얼마나 늘리는지도 함께 정리했습니다.",
      "결론은 ‘만들 수는 있지만 지금 시작하지 않는 편이 낫다’였습니다. 기존 네이티브 수준을 맞추려면 서비스 정책과 시스템 구조를 넓게 바꿔야 했고, 기대 효과보다 위험과 비용이 컸습니다. 이 내용을 근거로 본 개발을 보류했습니다.",
      "협업 결과가 항상 출시일 필요는 없다고 생각합니다. 여러 직군이 같은 자료를 보고 하지 않을 일을 결정할 수 있게 만든 것도 이 PoC의 성과였습니다.",
    ],
  },
  {
    question: "AI 도구를 활용해 개발 방식을 개선한 경험",
    answer: [
      "Codex를 계속 쓰다 보니 반복되는 문제가 보였습니다. 요구사항이 정해지기 전에 구현을 시작하거나, 작업이 길어지면 앞에서 정한 조건을 놓치고, 리뷰와 수정이 끝없이 이어지는 경우가 있었습니다. 그래서 이 과정을 제어하는 Runner 스킬을 직접 만들었습니다.",
      "Runner는 코드를 쓰기 전에 목표, 하지 않을 일, 제약과 완료 조건부터 적게 합니다. 이 내용과 구현 계획을 각각 사람이 확인한 뒤에만 다음 단계로 넘어갑니다. 구현할 때는 요구사항 정리, 실행, 리뷰와 검증 역할을 나누고, 각 역할에는 필요한 정보만 전달합니다.",
      "작업 단위도 작게 잘라 구현, 검증과 커밋을 반복합니다. 리뷰나 재시도 횟수에는 상한을 두었고, 범위가 바뀌거나 위험한 작업이 나오면 다시 확인을 받게 했습니다.",
      "Runner는 실제 개발 업무와 개인 프로젝트인 AI Fairy에 계속 사용하고 있습니다. 덕분에 AI가 만든 결과를 매번 처음부터 확인하기보다 요구사항과 완료 조건을 기준으로 검토할 수 있게 됐습니다.",
      "AI를 잘 쓰는 일은 더 많은 코드를 빨리 받는 것보다, 사람이 결정할 부분과 확인할 방법을 먼저 정하는 데 가깝다고 봅니다.",
    ],
  },
];

// ─── Shared UI ───────────────────────────────────────────────────────────────

function mono(s?: string) {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    ...(s ? {} : {}),
  };
}
function serif() {
  return { fontFamily: "'DM Serif Display', serif" };
}
function sans() {
  return { fontFamily: "'Plus Jakarta Sans', sans-serif" };
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        className="text-[10px] tracking-[0.18em] uppercase font-medium text-primary"
        style={mono()}
      >
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function SkillTag({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-2 py-0.5 text-[11px] border border-border text-muted-foreground leading-5 rounded-sm"
      style={mono()}
    >
      {label}
    </span>
  );
}

function DocHeader({
  label,
  name,
  sub,
}: {
  label: string;
  name: string;
  sub?: React.ReactNode;
}) {
  return (
    <header className="px-14 pt-12 pb-10 border-b border-border">
      <p
        className="text-[11px] tracking-[0.2em] uppercase text-primary mb-2 font-medium"
        style={mono()}
      >
        {label}
      </p>
      <h1
        className="text-5xl font-normal text-foreground leading-tight mb-4"
        style={serif()}
      >
        {name}
      </h1>
      {sub}
    </header>
  );
}

// ─── Resume View ─────────────────────────────────────────────────────────────

function ResumeView() {
  return (
    <div
      className="pdf-document w-full bg-white shadow-sm print:shadow-none"
      style={sans()}
    >
      <DocHeader
        label="이력서"
        name={profile.name}
        sub={
          <div className="grid grid-cols-[1fr_auto] items-end gap-8 -mt-1">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md font-light whitespace-pre-line">
              {profile.tagline}
            </p>
            <div className="flex flex-col gap-2 text-[12px] text-muted-foreground shrink-0">
              {[
                { icon: Mail, text: profile.contact.email },
                { icon: Phone, text: profile.contact.phone },
                { icon: Github, text: profile.contact.github },
                ...(profile.contact.website
                  ? [
                      {
                        icon: Globe,
                        text: profile.contact.website,
                      },
                    ]
                  : []),
                {
                  icon: MapPin,
                  text: profile.contact.location,
                },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2"
                >
                  <Icon
                    size={12}
                    className="text-primary shrink-0"
                  />
                  <span style={mono()}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <div className="grid grid-cols-[1fr_2.2fr] divide-x divide-border">
        <aside className="px-10 py-10 flex flex-col gap-8">
          <section>
            <SectionLabel>Skills</SectionLabel>
            <div className="flex flex-col gap-4">
              {Object.entries(resume.skills).map(
                ([cat, items]) => (
                  <div key={cat}>
                    <p
                      className="text-[10px] text-muted-foreground mb-2 tracking-wider uppercase"
                      style={mono()}
                    >
                      {cat}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((s) => (
                        <SkillTag key={s} label={s} />
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </section>

          <section>
            <SectionLabel>Certifications</SectionLabel>
            <div className="flex flex-col gap-2">
              {resume.certifications.map((c) => (
                <div
                  key={c.name}
                  className="flex items-start justify-between gap-2"
                >
                  <p className="text-[12px] text-foreground leading-snug">
                    {c.name}
                  </p>
                  <span
                    className="text-[11px] text-muted-foreground shrink-0 mt-0.5"
                    style={mono()}
                  >
                    {c.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel>Languages</SectionLabel>
            <div className="flex flex-col gap-2">
              {resume.languages.map((l) => (
                <div
                  key={l.lang}
                  className="flex items-center justify-between"
                >
                  <p className="text-[12px] text-foreground">
                    {l.lang}
                  </p>
                  <span
                    className="text-[11px] text-muted-foreground"
                    style={mono()}
                  >
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <main className="px-12 py-10 flex flex-col gap-10">
          <section>
            <SectionLabel>Experience</SectionLabel>
            <div className="flex flex-col gap-8">
              {resume.experience.map((exp) => (
                <div key={exp.company}>
                  <div className="flex items-baseline justify-between mb-1 flex-wrap gap-2">
                    <div>
                      <span
                        className="text-base font-semibold text-foreground"
                        style={serif()}
                      >
                        {exp.company}
                      </span>
                      <span className="mx-2 text-border">
                        ·
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {exp.role}
                      </span>
                    </div>
                    <span
                      className="text-[11px] text-primary"
                      style={mono()}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {exp.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-[13px] leading-relaxed"
                      >
                        <span className="text-primary shrink-0 leading-relaxed">
                          —
                        </span>
                        <span className="font-light">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

// ─── Career Detail View (flat, print-ready) ──────────────────────────────────

function CareerDetailView() {
  return (
    <div
      className="pdf-document w-full bg-white shadow-sm print:shadow-none"
      style={sans()}
    >
      <DocHeader
        label="경력기술서"
        name={profile.name}
        sub={
          <div
            className="flex items-center gap-6 text-[12px] text-muted-foreground flex-wrap"
            style={mono()}
          >
            <span className="flex items-center gap-1.5">
              <Mail size={11} className="text-primary" />
              {profile.contact.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Github size={11} className="text-primary" />
              {profile.contact.github}
            </span>
            {profile.contact.website && (
              <span className="flex items-center gap-1.5">
                <Globe size={11} className="text-primary" />
                {profile.contact.website}
              </span>
            )}
          </div>
        }
      />

      <div className="px-14 py-12 flex flex-col gap-16">
        {careerDetails.map((company, ci) => (
          <section key={company.company}>
            {/* Company header */}
            <div className="flex items-start justify-between gap-6 mb-2 flex-wrap">
              <div>
                <h2
                  className="text-[26px] font-normal text-foreground leading-tight"
                  style={serif()}
                >
                  {company.company}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {company.role} · {company.team} ·{" "}
                  {company.employment}
                </p>
              </div>
              <span
                className="text-[12px] text-primary mt-1 shrink-0"
                style={mono()}
              >
                {company.period}
              </span>
            </div>
            <p className="text-[13px] text-muted-foreground leading-relaxed font-light mb-10 max-w-2xl">
              {company.overview}
            </p>

            {/* Projects */}
            <div className="flex flex-col gap-12">
              {company.projects.map((proj) => (
                <div
                  key={proj.name}
                  className="pl-6 border-l-2 border-border"
                >
                  {/* Project title */}
                  <div className="flex items-baseline justify-between gap-4 mb-1 flex-wrap">
                    <h3
                      className="text-[18px] font-normal text-foreground leading-snug"
                      style={serif()}
                    >
                      {proj.name}
                    </h3>
                    {proj.period && (
                      <span
                        className="text-[11px] text-muted-foreground shrink-0"
                        style={mono()}
                      >
                        {proj.period}
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex gap-6 mb-5 flex-wrap">
                    <div>
                      <p
                        className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5"
                        style={mono()}
                      >
                        역할
                      </p>
                      <p className="text-[12px] text-foreground">
                        {proj.role}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5"
                        style={mono()}
                      >
                        기술 스택
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {proj.stack.map((s) => (
                          <SkillTag key={s} label={s} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  {proj.summary && (
                    <p className="text-[13px] text-foreground leading-relaxed font-light mb-6 pl-3 border-l border-primary/30">
                      {proj.summary}
                    </p>
                  )}

                  {/* Tasks — 작업 내역 */}
                  {proj.tasks.length > 0 && (
                    <div className="mb-6">
                      <p
                        className="text-[10px] text-muted-foreground uppercase tracking-wider mb-4"
                        style={mono()}
                      >
                        작업 내역
                      </p>
                      <div className="flex flex-col gap-5">
                        {proj.tasks.map((task, ti) => (
                          <div
                            key={ti}
                            className="flex gap-4 print-avoid-break"
                          >
                            <span
                              className="text-[11px] text-primary shrink-0 mt-0.5 w-5 text-right leading-tight"
                              style={mono()}
                            >
                              {String(ti + 1).padStart(2, "0")}
                            </span>
                            <div className="flex-1">
                              <p className="text-[13px] font-semibold text-foreground mb-1">
                                {task.title}
                              </p>
                              {task.detail && (
                                <p className="text-[12px] text-muted-foreground leading-relaxed font-light">
                                  {task.detail}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Issues — 이슈 및 해결 과정 */}
                  {proj.issues && proj.issues.length > 0 && (
                    <div className="mb-6">
                      <p
                        className="text-[10px] text-muted-foreground uppercase tracking-wider mb-4"
                        style={mono()}
                      >
                        이슈 및 해결 과정
                      </p>
                      <div className="flex flex-col gap-4">
                        {proj.issues!.map((issue, ii) => (
                          <div
                            key={ii}
                            className="border border-border rounded-sm overflow-hidden print-avoid-break"
                          >
                            <div className="px-4 py-2.5 bg-muted/60 border-b border-border">
                              <p className="text-[12px] font-semibold text-foreground">
                                {issue.title}
                              </p>
                            </div>
                            <div className="divide-y divide-border">
                              <div className="flex gap-0 px-0">
                                <span
                                  className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium px-4 py-3 w-16 shrink-0 bg-muted/30 flex items-start pt-3.5"
                                  style={mono()}
                                >
                                  문제
                                </span>
                                <p className="text-[12px] text-foreground leading-relaxed font-light px-4 py-3 flex-1">
                                  {issue.problem}
                                </p>
                              </div>
                              <div className="flex gap-0 px-0">
                                <span
                                  className="text-[10px] text-primary uppercase tracking-wider font-medium px-4 py-3 w-16 shrink-0 bg-primary/5 flex items-start pt-3.5"
                                  style={mono()}
                                >
                                  해결
                                </span>
                                <p className="text-[12px] text-foreground leading-relaxed font-light px-4 py-3 flex-1">
                                  {issue.solution}
                                </p>
                              </div>
                              {issue.result && (
                                <div className="flex gap-0 px-0">
                                  <span
                                    className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium px-4 py-3 w-16 shrink-0 bg-muted/30 flex items-start pt-3.5"
                                    style={mono()}
                                  >
                                    결과
                                  </span>
                                  <p className="text-[12px] text-foreground leading-relaxed font-medium px-4 py-3 flex-1">
                                    {issue.result}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Result */}
                  {proj.result && (
                    <div className="flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-sm px-4 py-3 print-avoid-break">
                      <span
                        className="text-[10px] text-primary uppercase tracking-wider shrink-0 mt-0.5 font-medium whitespace-nowrap"
                        style={mono()}
                      >
                        성과
                      </span>
                      <p className="text-[13px] text-foreground font-medium leading-relaxed">
                        {proj.result}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {ci < careerDetails.length - 1 && (
              <div className="mt-14 h-px bg-border" />
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

// ─── Cover Letter View ───────────────────────────────────────────────────────

function CoverLetterView() {
  return (
    <div
      className="pdf-document w-full bg-white shadow-sm print:shadow-none"
      style={sans()}
    >
      <DocHeader
        label="자기소개서"
        name={profile.name}
        sub={
          <div className="flex items-end justify-between gap-6 -mt-1 flex-wrap">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl font-light">
              기술 선택의 기준부터 협업과 AI 활용 방식까지,
              일하는 과정과 판단을 일곱 가지 질문으로
              정리했습니다.
            </p>
            <span
              className="text-[11px] text-primary tracking-[0.14em] uppercase"
              style={mono()}
            >
              07 Questions · 07 Answers
            </span>
          </div>
        }
      />

      <div className="px-6 sm:px-14 py-10 sm:py-12">
        {coverLetterSections.map((sec, i) => (
          <article
            key={sec.question}
            className="py-10 first:pt-0 border-b border-border last:border-b-0 last:pb-0"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              <span
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-primary/25 bg-primary/5 text-[11px] text-primary shrink-0 rounded-sm"
                style={mono()}
              >
                Q{String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-0.5 min-w-0">
                <p
                  className="text-[10px] tracking-[0.18em] uppercase font-medium text-primary mb-1.5"
                  style={mono()}
                >
                  Question
                </p>
                <h2
                  className="text-xl sm:text-[22px] font-normal text-foreground leading-snug"
                  style={serif()}
                >
                  {sec.question}
                </h2>
              </div>
            </div>

            <div className="mt-6 sm:ml-[60px] pl-5 sm:pl-6 border-l-2 border-primary/15">
              <p
                className="text-[10px] tracking-[0.18em] uppercase font-medium text-muted-foreground mb-3"
                style={mono()}
              >
                Answer
              </p>
              <div className="flex flex-col gap-4">
                {sec.answer.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[14px] text-foreground/90 leading-[1.9] font-light break-keep"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// ─── ATS Print Views ─────────────────────────────────────────────────────────

function ATSHeader({ documentTitle }: { documentTitle: string }) {
  return (
    <header className="border-b-2 border-black pb-5 mb-7">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2">
        {documentTitle}
      </p>
      <h1 className="text-[28px] font-bold leading-tight">
        {profile.name}
      </h1>
      <p className="text-[14px] font-semibold mt-1">
        {profile.title}
      </p>
      <address className="not-italic mt-4 flex flex-col gap-1 text-[11px] leading-relaxed">
        <p>Email: {profile.contact.email}</p>
        <p>Phone: {profile.contact.phone}</p>
        <p>GitHub: https://{profile.contact.github}</p>
        <p>Location: {profile.contact.location}</p>
      </address>
    </header>
  );
}

function ATSSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="ats-keep-with-next text-[15px] font-bold border-b border-black pb-1.5 mb-4">
      {children}
    </h2>
  );
}

function ATSResumeView() {
  return (
    <article className="ats-document pdf-document" lang="ko">
      <ATSHeader documentTitle="이력서 (Resume)" />

      <section className="mb-7">
        <ATSSectionTitle>전문 요약 (Professional Summary)</ATSSectionTitle>
        <p className="text-[12px] leading-[1.75]">{profile.tagline}</p>
      </section>

      <section className="mb-7">
        <ATSSectionTitle>경력 (Work Experience)</ATSSectionTitle>
        <div className="flex flex-col gap-6">
          {resume.experience.map((experience) => (
            <section key={experience.company} className="ats-entry">
              <div className="ats-keep-with-next mb-2">
                <h3 className="text-[13px] font-bold">
                  {experience.company} | {experience.role}
                </h3>
                <p className="text-[11px] mt-0.5">
                  {experience.period}
                </p>
              </div>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-[11px] leading-[1.65]">
                {experience.points.map((point) => (
                  <li key={point} className="print-avoid-break">
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="mb-7">
        <ATSSectionTitle>기술 (Technical Skills)</ATSSectionTitle>
        <dl className="flex flex-col gap-2 text-[11px] leading-relaxed">
          {Object.entries(resume.skills).map(([category, items]) => (
            <div key={category} className="grid grid-cols-[105px_1fr] gap-3">
              <dt className="font-bold">{category}</dt>
              <dd>{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-7">
        <ATSSectionTitle>자격증 (Certifications)</ATSSectionTitle>
        {resume.certifications.map((certification) => (
          <p key={certification.name} className="text-[11px] leading-relaxed">
            {certification.name} | {certification.year}
          </p>
        ))}
      </section>

      <section>
        <ATSSectionTitle>언어 (Languages)</ATSSectionTitle>
        {resume.languages.map((language) => (
          <p key={language.lang} className="text-[11px] leading-relaxed">
            {language.lang} | {language.level}
          </p>
        ))}
      </section>
    </article>
  );
}

function ATSCareerDetailView() {
  return (
    <article className="ats-document pdf-document" lang="ko">
      <ATSHeader documentTitle="경력기술서 (Career Description)" />

      {careerDetails.map((company) => (
        <section key={company.company} className="mb-9">
          <div className="ats-keep-with-next mb-4">
            <h2 className="text-[17px] font-bold">
              {company.company} | {company.role}
            </h2>
            <p className="text-[11px] mt-1">
              {company.period} | {company.team} | {company.employment}
            </p>
          </div>
          <p className="text-[11px] leading-[1.7] mb-6">
            {company.overview}
          </p>

          <div className="flex flex-col gap-8">
            {company.projects.map((project) => (
              <section key={project.name} className="ats-entry">
                <div className="ats-keep-with-next border-b border-black/30 pb-2 mb-3">
                  <h3 className="text-[14px] font-bold">{project.name}</h3>
                  <p className="text-[11px] mt-1">역할: {project.role}</p>
                  <p className="text-[11px] mt-1">
                    기술: {project.stack.join(", ")}
                  </p>
                </div>

                <p className="text-[11px] leading-[1.7] mb-4">
                  {project.summary}
                </p>

                <h4 className="ats-keep-with-next text-[12px] font-bold mb-2">
                  주요 작업
                </h4>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-[11px] leading-[1.65]">
                  {project.tasks.map((task) => (
                    <li key={task.title} className="print-avoid-break">
                      <strong>{task.title}:</strong> {task.detail}
                    </li>
                  ))}
                </ul>

                {project.issues?.map((issue) => (
                  <section
                    key={issue.title}
                    className="mt-4 print-avoid-break"
                  >
                    <h4 className="ats-keep-with-next text-[12px] font-bold mb-2">
                      문제 해결: {issue.title}
                    </h4>
                    <dl className="text-[11px] leading-[1.65] flex flex-col gap-1.5">
                      <div><dt className="inline font-bold">문제: </dt><dd className="inline">{issue.problem}</dd></div>
                      <div><dt className="inline font-bold">해결: </dt><dd className="inline">{issue.solution}</dd></div>
                      {issue.result && (
                        <div><dt className="inline font-bold">결과: </dt><dd className="inline">{issue.result}</dd></div>
                      )}
                    </dl>
                  </section>
                ))}

                <p className="mt-4 text-[11px] leading-[1.65] print-avoid-break">
                  <strong>성과:</strong> {project.result}
                </p>
              </section>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}

function ATSCoverLetterView() {
  return (
    <article className="ats-document pdf-document" lang="ko">
      <ATSHeader documentTitle="자기소개서 (Cover Letter)" />
      <div className="flex flex-col gap-8">
        {coverLetterSections.map((section, index) => (
          <section key={section.question} className="ats-entry">
            <h2 className="ats-keep-with-next text-[14px] font-bold mb-3">
              질문 {index + 1}. {section.question}
            </h2>
            <div className="flex flex-col gap-3 text-[11px] leading-[1.75]">
              {section.answer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

// ─── Print Dialog ─────────────────────────────────────────────────────────────

type DocId = "resume" | "career" | "cover";
type PrintMode = "ats" | "design";

const DOC_META: {
  id: DocId;
  label: string;
  desc: string;
  icon: React.ElementType;
}[] = [
  {
    id: "resume",
    label: "이력서",
    desc: "기본 이력 및 스킬 요약",
    icon: User,
  },
  {
    id: "career",
    label: "경력기술서",
    desc: "프로젝트별 작업 및 이슈 상세",
    icon: FileText,
  },
  {
    id: "cover",
    label: "자기소개서",
    desc: "공고에서 요구할 때 선택",
    icon: PenLine,
  },
];

function PrintDialog({
  onClose,
  onPrint,
}: {
  onClose: () => void;
  onPrint: (sel: DocId[], mode: PrintMode) => void;
}) {
  const [selected, setSelected] = useState<Set<DocId>>(
    new Set(["resume", "career"]),
  );
  const [mode, setMode] = useState<PrintMode>("ats");

  const toggle = (id: DocId) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const ordered = DOC_META.filter((d) =>
    selected.has(d.id),
  ).map((d) => d.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={sans()}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative bg-white rounded-sm shadow-xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-border">
          <p
            className="text-[10px] text-primary uppercase tracking-widest font-medium mb-1"
            style={mono()}
          >
            PDF 출력
          </p>
          <h2
            className="text-xl font-normal text-foreground"
            style={serif()}
          >
            출력할 문서 선택
          </h2>
        </div>

        <div className="px-6 pt-5">
          <p className="text-[11px] font-medium text-foreground mb-2">
            출력 형식
          </p>
          <div className="grid grid-cols-2 gap-2" role="group" aria-label="출력 형식">
            <button
              type="button"
              aria-pressed={mode === "ats"}
              onClick={() => setMode("ats")}
              className={`p-3 border rounded-sm text-left transition-colors ${
                mode === "ats" ? "border-primary bg-primary/5" : "border-border hover:bg-muted/60"
              }`}
            >
              <span className="block text-[12px] font-semibold text-foreground">
                ATS 제출용
              </span>
              <span className="block text-[10px] text-primary mt-1">
                권장 · 단일 컬럼
              </span>
            </button>
            <button
              type="button"
              aria-pressed={mode === "design"}
              onClick={() => setMode("design")}
              className={`p-3 border rounded-sm text-left transition-colors ${
                mode === "design" ? "border-primary bg-primary/5" : "border-border hover:bg-muted/60"
              }`}
            >
              <span className="block text-[12px] font-semibold text-foreground">
                디자인 유지
              </span>
              <span className="block text-[10px] text-muted-foreground mt-1">
                기존 레이아웃
              </span>
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="px-6 py-5 flex flex-col gap-2">
          <p className="text-[11px] font-medium text-foreground mb-1">
            출력 문서
          </p>
          {DOC_META.map(({ id, label, desc, icon: Icon }) => {
            const active = selected.has(id);
            return (
              <button
                key={id}
                onClick={() => toggle(id)}
                className={`flex items-center gap-4 px-4 py-3 rounded-sm border text-left transition-colors duration-150 ${
                  active
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted/60"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-[2px] border flex items-center justify-center shrink-0 transition-colors ${
                    active
                      ? "bg-primary border-primary"
                      : "border-border"
                  }`}
                >
                  {active && (
                    <svg
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                    >
                      <path
                        d="M1 3.5L3.5 6L8 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <Icon
                  size={13}
                  className={
                    active
                      ? "text-primary"
                      : "text-muted-foreground"
                  }
                />
                <div>
                  <p
                    className={`text-[13px] font-medium ${active ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {label}
                  </p>
                  <p className="text-[11px] text-muted-foreground font-light">
                    {desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex items-center justify-between gap-3">
          <p
            className="text-[11px] text-muted-foreground font-light"
            style={mono()}
          >
            {ordered.length}개 문서 선택됨
          </p>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-[12px] text-muted-foreground border border-border rounded-sm hover:bg-muted transition-colors"
              style={mono()}
            >
              취소
            </button>
            <button
              onClick={() =>
                ordered.length > 0 && onPrint(ordered, mode)
              }
              disabled={ordered.length === 0}
              className="flex items-center gap-1.5 px-4 py-2 text-[12px] bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={mono()}
            >
              <Printer size={12} />
              출력
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

type Tab = "resume" | "career" | "cover";

const tabs: {
  id: Tab;
  label: string;
  icon: React.ElementType;
}[] = [
  { id: "resume", label: "이력서", icon: User },
  { id: "career", label: "경력기술서", icon: FileText },
  { id: "cover", label: "자기소개서", icon: PenLine },
];

export default function App() {
  const [tab, setTab] = useState<Tab>("resume");
  const [showDialog, setShowDialog] = useState(false);
  const [printDocs, setPrintDocs] = useState<DocId[]>([]);
  const [printMode, setPrintMode] = useState<PrintMode>("ats");

  const handlePrint = async (sel: DocId[], mode: PrintMode) => {
    const previousTitle = document.title;
    const selectedLabels = DOC_META.filter(({ id }) =>
      sel.includes(id),
    ).map(({ label }) => label);

    document.title = `${profile.name}_${selectedLabels.join("_")}${
      mode === "ats" ? "_ATS" : ""
    }`;
    setPrintMode(mode);
    setPrintDocs(sel);
    setShowDialog(false);

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });

    await document.fonts.ready;

    window.addEventListener(
      "afterprint",
      () => {
        document.title = previousTitle;
        setPrintDocs([]);
      },
      { once: true },
    );
    window.print();
  };

  return (
    <div
      className="min-h-screen bg-[#f5f4f0] flex flex-col items-center py-10 px-4 print:py-0 print:px-0 print:bg-white"
      style={sans()}
    >
      {/* ── Screen UI (hidden on print) ── */}
      <div className="w-full max-w-[900px] flex items-center justify-between mb-4 print:hidden">
        <div
          className="flex items-center border border-border rounded-sm overflow-hidden bg-white"
          style={mono()}
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-1.5 px-4 py-2 text-[12px] transition-colors duration-150 ${
                tab === id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon size={12} />
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowDialog(true)}
          className="flex items-center gap-2 text-[12px] text-muted-foreground hover:text-foreground transition-colors border border-border px-3 py-2 rounded-sm hover:bg-white bg-white"
          style={mono()}
        >
          <Printer size={12} />
          PDF 출력
        </button>
      </div>

      {/* ── Current tab view (screen only) ── */}
      <div className="w-full max-w-[900px] print:hidden">
        {tab === "resume" && <ResumeView />}
        {tab === "career" && <CareerDetailView />}
        {tab === "cover" && <CoverLetterView />}
      </div>

      <p
        className="mt-6 text-[11px] text-muted-foreground print:hidden"
        style={mono()}
      >
        PDF 출력 시 A4 · 여백 없음 설정을 권장합니다.
      </p>

      {/* ── Print area (hidden on screen, shown on print) ── */}
      {printDocs.length > 0 && (
        <div className="hidden print:block w-full">
          {printDocs.map((id, i) => (
            <div
              key={id}
              style={
                i < printDocs.length - 1
                  ? { pageBreakAfter: "always" }
                  : {}
              }
            >
              {printMode === "ats" ? (
                <>
                  {id === "resume" && <ATSResumeView />}
                  {id === "career" && <ATSCareerDetailView />}
                  {id === "cover" && <ATSCoverLetterView />}
                </>
              ) : (
                <>
                  {id === "resume" && <ResumeView />}
                  {id === "career" && <CareerDetailView />}
                  {id === "cover" && <CoverLetterView />}
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── Print dialog ── */}
      {showDialog && (
        <PrintDialog
          onClose={() => setShowDialog(false)}
          onPrint={handlePrint}
        />
      )}
    </div>
  );
}
