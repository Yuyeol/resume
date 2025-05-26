import { StyleSheet, View } from "@react-pdf/renderer";
import SectionTitle from "../SectionTitle";
import CompanyTitle from "./CompanyTitle";
import Project from "./Project";

export default function Career() {
  return (
    <View style={styles.container}>
      <SectionTitle title="경력" />
      <CompanyTitle
        title="마이카페이지"
        description="중고차 거래 서비스"
        period="23.10 ~ (재직중)"
        isFirst
      />
      <Project
        title="중고차 거래 플랫폼 신규 개발"
        period="24.03 ~ (진행중)"
        team="프로젝트 리드 (FE 2명 / BE 2명)"
        skills="Typescript / Next.js / ReactQuery / Zustand / ChatGPT"
        descripttions={[
          "Next14 Approuter 채택하여 컴포넌트 단위 렌더링 제어 및 번들 최적화",
          "보유 차량 데이터 기반 Ai 추천 상담 기능 구현을 위한 RAG 환경 구축(GPT Embed, Pinecone)",
        ]}
      />
      <Project
        title="KB차차차 촬영앱 유지보수"
        period="23. 10 ~ 24. 10"
        team="프론트엔드 담당 (FE 1명 / BE 1명)"
        skills="ReactNative / ReactQuery / Zustand"
        descripttions={["촬영 플로우 및 딜러 사용 편의성 개선"]}
      />
      <CompanyTitle
        title="푸망"
        description="심리테스트 플랫폼"
        period="21. 04 ~ 23.02 (22개월)"
      />
      <Project
        title="콘텐츠 게임엔진 제작"
        period="22. 03 ~ 22. 06 (3개월)"
        team="프론트엔드 담당(FE 1명 / BE 1명)"
        skills="Next.js / Typescript / Recoil / SWR"
        descripttions={[
          "컨텐츠 플로우의 코어 로직을 엔진으로 제작하여 화면 구현부와 분리하여 중복되어 작성되는 코드의 약 60% 제거",
        ]}
      />
      <Project
        title="프로젝트 최적화"
        period="21. 08 ~ 21. 12 (4개월)"
        team="프론트엔드  메인페이지 파트 담당(FE 3명 / BE 2명)"
        skills="Next.js / Lighthouse / webpack / React Profiler"
        descripttions={[
          "웹 성능도구를 통한 성능점검 / 콘텐츠 유형에 따른 이미지처리 / 번들링 최적화 수행",
          "Lighthouse 점수 60점 → 90점대로 개선",
          "페이지 로드 TTI 3.1초 → 1.2초(약 60%) 단축",
          "메인페이지를 통한 사용자 유입 약 8% 증가(WAU 기준)",
        ]}
      />
      <Project
        title="정기 콘텐츠 제작"
        period="21. 04 ~ 23. 02 (22개월)"
        team="프론트엔드 담당(FE 1명)"
        skills="Next.js / Typescript / Recoil"
        descripttions={["매월 8 ~ 12개의 심리테스트 콘텐츠 페이지 제작"]}
      />
      <CompanyTitle
        title="[외주] 밍고"
        description="VRChat 플랫폼"
        period="24. 06 ~ 24.08 (2개월)"
      />
      <Project
        title="Next.js 마이그레이션"
        period="24. 06 ~ 24. 08 (2개월)"
        team="프로젝트 리드(FE 3명 / BE 1명)"
        skills="Next.js / ReactQuery / Zustand / websocket"
        descripttions={[
          "기존 프로젝트(React)의 검색 엔진 최적화를 위한 Next.js 도입",
          "next-intl 도입으로 i18n 대비 성능 20~25% 개선, 다국어 처리 효율화 및 SEO 대응력 강화",
          "React Query 도입으로 클라이언트 데이터 페칭 로직 개선하여 데이터 로드 기준 성능 25~30% 개선",
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
});
