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
  title: "Frontend Developer",
  tagline:
    "React·Next.js 기반 웹 서비스를 약 8년간 개발했습니다. 레거시 구조 전환, 웹 성능 최적화, 배포 인프라 개선과 기술 타당성 검증을 주도하며 서비스의 성능·비용·운영 안정성을 높여 왔습니다.",
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
    Core: ["TypeScript", "JavaScript"],
    Frameworks: ["React", "Next.js"],
    Styling: ["Panda CSS"],
    Testing: ["Playwright"],
  },
  experience: [
    {
      company: "노머스",
      role: "Frontend Engineer",
      period: "2021.06 — 2026.07",
      points: [
        "스토어 프론트엔드를 단독 설계·개발하고, 3인 프론트엔드 팀에서 채널·백오피스·파트너센터 등 주요 웹 서비스의 구조 설계, 과제 배분 및 운영 이슈 대응 총괄",
        "스토어·채널을 Turborepo 기반 모노레포로 통합하고 공통 컴포넌트를 패키지화해 서비스 간 재사용 체계 구축",
        "스토어 전체 화면을 styled-components에서 PandaCSS로 전환하고 Playwright 기반 시각적 회귀 테스트 구축",
        "Toss Payments를 비롯한 국내외 결제·카드 등록·빌링키·0원 결제 처리 구현",
        "채널의 댓글·미디어 서버 상태를 TanStack Query 중심으로 재설계하고 낙관적 업데이트·오류 롤백·캐시 무효화 구조 정비",
        "App Router 전환과 렌더링·데이터 패칭·리소스 최적화를 병행해 FCP 4.2초 → 1.1초, Lighthouse 61점 → 80점 및 주요 Web Vitals 개선",
        "Cloudflare/Wrangler 배포 환경과 추가 배포 없는 Failover 구조를 구축해 월 인프라 비용 $300 이상 절감",
      ],
    },
    {
      company: "넷스루",
      role: "Fullstack Developer",
      period: "2018.05 — 2021.05",
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
    period: "2021.06 — 2026.07",
    employment: "정규직",
    team: "프론트엔드 팀",
    overview:
      "스토어·채널·백오피스·파트너센터 등 주요 웹 서비스의 초기 구축과 운영을 담당했습니다. 스토어 프론트엔드는 단독으로 설계·개발했으며, 이후 3인 프론트엔드 팀에서 나머지 서비스의 구조 설계, 도메인별 작업 분리와 과제 배분을 주도했습니다. 또한 모노레포·App Router 전환, 배포 인프라와 CI/CD 구축, 결제 시스템 확장, 상태관리와 성능 개선 등 서비스 전반의 기술 개선을 제안하고 실행했습니다.",
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
          "FCP 4.2초 → 1.1초, Lighthouse 성능 점수 61점 → 80점, 주요 Web Vitals 측정 항목 평균 47.6% 개선, 월 인프라 비용 $300 이상 절감. 최적화 이후 CS 채널에서 로딩 성능 관련 사용자 불편 제보가 감소하는 경향을 확인했습니다.",
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
      "스토어 전체 화면을 styled-components에서 PandaCSS로 전환한 경험입니다. 프로젝트 내 styled-components 지원 종료가 결정되면서 단순한 문법 변환이 아니라, 운영 중인 상품·주문·결제·멤버십·회원가입 화면 전체를 안전하게 마이그레이션해야 했습니다.",
      "먼저 Tailwind CSS를 포함한 대안을 비교했습니다. 기존 컴포넌트 기반 개발 방식과의 적합성, 스타일 작성 편의성, 빌드 타임에 정적 CSS를 생성해 런타임 처리 비용을 줄일 수 있다는 점을 근거로 PandaCSS를 선택했습니다. 이후 공통 위젯부터 도메인별 화면까지 전환 순서를 정하고, 기존 기능 개발과 병행할 수 있도록 작업 단위를 나눴습니다.",
      "가장 신경 쓴 부분은 화면이 정상적으로 보인다는 감각적인 판단에 의존하지 않는 것이었습니다. Playwright 기반 시각적 회귀 테스트를 구축해 주요 화면의 변경을 비교하고, 마이그레이션이 끝난 영역부터 styled-components 의존성을 단계적으로 제거했습니다. 최종적으로 스토어 전체 화면의 전환과 기존 의존성 제거를 완료했습니다.",
      "이 경험을 통해 큰 규모의 기술 전환에서는 새로운 기술을 선택하는 것보다 전환 범위, 검증 방법과 종료 조건을 먼저 정의하는 것이 더 중요하다는 점을 배웠습니다.",
    ],
  },
  {
    question: "제가 생각하는 좋은 코드",
    answer: [
      "제가 생각하는 좋은 코드는 다음 사람이 변경 결과를 예측할 수 있는 코드입니다. 짧거나 영리한 코드보다 책임과 데이터의 소유권이 분명하고, 정상 흐름뿐 아니라 실패했을 때의 동작도 설명할 수 있는 코드가 좋다고 생각합니다.",
      "Channel의 댓글·답글·미디어 상태관리 구조를 개선할 때 이 기준을 적용했습니다. 여러 Jotai atom에 서버 데이터와 UI 상태가 섞여 있어, 한 화면에서 데이터를 변경하면 다른 화면의 갱신 여부를 추적하기 어려웠습니다. 이를 TanStack Query 중심으로 전환하고 Query Key와 캐시 무효화 기준을 도메인별로 정리했습니다. 작성·삭제·좋아요에는 낙관적 업데이트를 적용하되, 실패 시 이전 상태로 복구되는 흐름도 함께 구성했습니다.",
      "이 경험을 통해 좋은 코드는 단순히 추상화가 잘된 코드가 아니라 데이터의 원천, 변경 범위와 오류 복구 방식이 드러나는 코드라고 생각하게 됐습니다. 여기에 자동화된 검증과 문서가 더해졌을 때 비로소 동료가 안심하고 변경할 수 있는 코드가 된다고 생각합니다.",
    ],
  },
  {
    question: "꾸준히 실천하고 있는 학습 방법과 관점",
    answer: [
      "저는 기술을 기능 목록으로 학습하기보다, 실제 문제를 기준으로 가설을 세우고 작은 검증을 거쳐 선택하는 방식을 선호합니다. 공식 문서를 통해 기술의 동작 원리와 제약을 확인하고, 후보 기술을 비교한 뒤 현재 프로젝트에 필요한 기준을 먼저 정의합니다.",
      "PandaCSS를 선택할 때는 Tailwind CSS 등과 사용 방식과 빌드 결과를 비교했고, App Router와 Cloudflare 전환 시에는 별도 환경에서 빌드·미들웨어·렌더링 동작을 검증한 뒤 전체 전환을 진행했습니다. 새로운 기술을 적용한 뒤에는 문제 해결 과정을 일회성으로 끝내지 않고 디렉터리 구조, 공통 패턴, 테스트나 문서로 남기려고 합니다.",
      "최근에는 AI를 활용한 개발 과정도 같은 관점으로 다루고 있습니다. AI에게 바로 구현을 요청하기보다 요구사항, 비목표, 제약과 완료 조건을 먼저 정의하고 구현·리뷰·검증 단계를 분리합니다. 이를 반복적으로 활용하기 위해 Codex용 Runner 스킬을 직접 설계하고 개발했습니다.",
      "빠르게 바뀌는 API를 많이 암기하는 것보다, 기술을 선택하는 기준과 결과를 검증하는 방법을 갖추는 것이 장기적으로 더 중요한 학습 역량이라고 생각합니다.",
    ],
  },
  {
    question: "지원 동기",
    answer: [
      "약 8년 동안 React와 Next.js를 기반으로 Store, Channel, Backoffice와 Partner Center를 구축하고 운영했습니다. 사용자용 서비스뿐 아니라 상품·결제·멤버십, 정산·권한·콘텐츠 관리처럼 운영자와 파트너의 업무가 연결되는 기능도 함께 경험했습니다.",
      "B2B 플랫폼에서는 화면을 만드는 것보다 복잡한 권한과 업무 흐름을 사용자가 실수 없이 처리할 수 있도록 구조화하는 과정에 매력을 느낍니다. 파트너센터와 백오피스를 개발하며 정산, 통계, 권한, 엑셀 추출과 대용량 파일 업로드 기능을 경험했고, 운영 도구의 작은 불편이 실제 업무 비용으로 이어진다는 점을 배웠습니다.",
      "글로벌 서비스 측면에서는 해외카드, UnionPay, 배송 국가, 다국어와 시간대 등 국가별로 달라지는 조건을 하나의 제품 안에서 안정적으로 다루는 문제에 관심이 있습니다.",
      "그중에서도 가장 끌리는 영역은 콘텐츠 뷰어입니다. Channel에서 대량 피드 가상화, 무한 스크롤, 복수 이미지, 확대·축소, 라이브 PIP와 댓글 상태관리를 구현하며 콘텐츠의 로딩 방식과 인터랙션이 사용자 체감 품질에 직접 연결된다는 것을 경험했습니다. 이러한 경험을 바탕으로 복잡한 B2B 운영 조건과 글로벌 요구사항을 안정적인 콘텐츠 경험으로 연결하는 데 기여하고 싶어 지원했습니다.",
    ],
  },
  {
    question: "기술적으로 가장 어려웠던 문제",
    answer: [
      "가장 어려웠던 작업은 App Router 전환과 웹 성능·배포 인프라 개선을 하나의 작업으로 진행한 경험입니다. 저는 해당 작업의 프론트엔드 설계와 구현을 단독으로 담당했습니다.",
      "Cloudflare 배포 환경으로 이전하는 과정에서 당시 대상 환경의 Pages Router 지원 제약을 확인했습니다. 이 문제를 단순한 라우터 교체로 정의하지 않고, 기존 페이지 단위 SSR 구조, 초기 렌더링 병목, 배포 비용과 장애 대응 구조를 함께 개선해야 하는 아키텍처 전환으로 정의했습니다.",
      "먼저 getServerSideProps 중심의 구조를 서버 컴포넌트와 loading.tsx를 활용한 스트리밍 렌더링 구조로 변경했습니다. 페이지 특성에 따라 SSG·SSR을 구분하고, TanStack Query 캐시와 Next.js 재검증 정책을 구성해 반복 API 호출을 줄였습니다. 초기 렌더링을 차단하던 번역 데이터 로딩과 마스크 스크린을 제거하고, 이미지 Lazy Loading·WebP 변환·Code Splitting도 함께 적용했습니다.",
      "배포 환경은 기존 Vercel을 유지한 상태에서 Cloudflare Pages·Workers 환경을 별도로 구축하고 통합 테스트 후 일괄 전환했습니다. Cloudflare 환경에 장애가 발생하면 환경 변수 값 변경만으로 추가 배포 없이 Vercel로 트래픽을 전환할 수 있는 Failover 구조도 구현했습니다.",
      "Pages Router와 Vercel을 그대로 유지하는 대안은 비용과 배포 환경 전환 목표를 해결하지 못해 선택하지 않았습니다. 두 라우터를 장기간 병행하는 단계적 전환도 검토했지만, 레이아웃과 데이터 패칭 구조를 이중으로 관리하는 기간이 길어지는 문제가 있어 별도 환경에서 전체 전환과 테스트를 완료한 뒤 한 번에 교체하는 방식을 선택했습니다. Cloudflare 단일 환경만 운영하는 방안은 장애 시 복구 선택지가 사라지기 때문에 제외했습니다.",
      "그 결과 FCP를 4.2초에서 1.1초로, Lighthouse 성능 점수를 61점에서 80점으로 개선했습니다. 주요 Web Vitals 측정 항목은 평균 47.6% 개선됐으며, Cloudflare 전환으로 월 인프라 비용을 $300 이상 절감했습니다.",
    ],
  },
  {
    question: "다른 직군·팀과 협업한 경험",
    answer: [
      "Native 채팅 기능을 Web·WebView로 전환할 수 있는지 검증한 PoC 경험이 있습니다. 처음에는 ‘채팅 기능을 웹으로 구현할 수 있는가’라는 기술 구현 문제로 시작했지만, 검토 과정에서 메시징 구조뿐 아니라 서비스 정책, 운영 방식과 시스템 아키텍처까지 변경해야 하는 과제임을 확인했습니다.",
      "요구사항이 명확하지 않은 상태에서 바로 구현 범위를 확정하지 않고, 팀원들과 검증 기준부터 정리했습니다. 저는 MQTT 연결 안정성, 메시지 동기화와 clientId 충돌, 대량 메시지 렌더링과 메모리 사용량, 모바일 키보드·포커스·스크롤 UX를 검증했습니다. Native와 Web·WebView의 차이를 기술 문제와 정책 문제로 나누어 문서화하고, 각 항목이 실제 본 개발 범위와 운영 비용에 어떤 영향을 주는지 정리했습니다.",
      "결과적으로 구현 자체는 가능하지만 기존 Native 수준을 충족하려면 서비스 정책과 시스템 구조 전반의 변경이 필요하고, 기대 효과보다 리스크가 크다는 결론을 도출했습니다. 이를 근거로 본격적인 개발 착수를 보류했습니다.",
      "이 경험을 통해 협업에서 중요한 것은 자신의 대안을 설득하는 것이 아니라, 서로 다른 직군이 같은 기준으로 판단할 수 있도록 불확실한 문제를 검증 가능한 항목으로 바꾸는 것임을 배웠습니다. 때로는 구현을 완료하는 것보다 시작하지 않아야 할 이유를 명확하게 만드는 것이 더 큰 기여가 될 수 있다고 생각합니다.",
    ],
  },
  {
    question: "AI 도구를 활용해 개발 방식을 개선한 경험",
    answer: [
      "Codex를 자주 사용하면서 AI가 요구사항이 확정되기 전에 구현을 시작하거나, 긴 작업에서 기존 결정과 제약을 잃고, 리뷰와 수정이 반복되는 문제를 경험했습니다. 이를 해결하기 위해 에이전틱 소프트웨어 개발 워크플로인 Runner 스킬을 직접 설계하고 개발했습니다.",
      "Runner에서는 구현 전에 목표·비목표·제약·완료 조건을 Requirement Contract로 작성하고 사용자 승인을 받도록 했습니다. 이후 Tech Lead 역할이 구현 계획을 작성하고 두 번째 승인을 받은 뒤에만 구현을 시작합니다. 구현 단계에서는 Spec, Executor, Reviewer와 Validator의 책임을 분리하고 State Store를 통해 각 역할에 필요한 정보만 전달하도록 구성했습니다.",
      "작업은 작은 단위로 구현·검증·커밋하며, 자기 수정·역할별 리뷰·회귀 검증 횟수에 상한을 두어 무한 반복을 방지했습니다. 위험하거나 요구사항 범위를 변경하는 작업은 다시 승인을 받도록 했고, 전체 구현이 끝난 뒤에는 완료 조건을 기준으로 최종 검증과 제한된 개선 루프를 수행하도록 설계했습니다.",
      "Runner를 실제 개발 작업과 개인 AI Assistant Platform인 AI Fairy 구현에 반복적으로 적용했습니다. 그 결과 AI를 단순한 코드 생성 도구가 아니라 요구사항 분석, 구현, 리뷰와 검증을 역할별로 수행하는 개발 시스템으로 활용할 수 있었습니다.",
      "AI를 통해 구현 속도를 높이는 것만큼, 어떤 결정을 사람이 통제하고 결과를 어떻게 검증할지를 설계하는 것이 중요하다고 생각합니다.",
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
      className="w-full bg-white shadow-sm print:shadow-none"
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
      className="w-full bg-white shadow-sm print:shadow-none"
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
                          <div key={ti} className="flex gap-4">
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
                            className="border border-border rounded-sm overflow-hidden"
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
                    <div className="flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-sm px-4 py-3">
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
      className="w-full bg-white shadow-sm print:shadow-none"
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

// ─── Print Dialog ─────────────────────────────────────────────────────────────

type DocId = "resume" | "career" | "cover";

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
    desc: "질문과 답변으로 구성된 자기소개",
    icon: PenLine,
  },
];

function PrintDialog({
  onClose,
  onPrint,
}: {
  onClose: () => void;
  onPrint: (sel: DocId[]) => void;
}) {
  const [selected, setSelected] = useState<Set<DocId>>(
    new Set(["resume", "career", "cover"]),
  );

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
      <div className="relative bg-white rounded-sm shadow-xl w-full max-w-sm mx-4 overflow-hidden">
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

        {/* Options */}
        <div className="px-6 py-5 flex flex-col gap-2">
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
                ordered.length > 0 && onPrint(ordered)
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

  const handlePrint = (sel: DocId[]) => {
    setPrintDocs(sel);
    setShowDialog(false);
    // Wait one frame for the print area to render, then print
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.print();
        // Reset after print dialog closes
        setTimeout(() => setPrintDocs([]), 500);
      });
    });
  };

  return (
    <div
      className="min-h-screen bg-[#f5f4f0] flex flex-col items-center py-10 px-4 print:py-0 print:bg-white"
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
              {id === "resume" && <ResumeView />}
              {id === "career" && <CareerDetailView />}
              {id === "cover" && <CoverLetterView />}
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
