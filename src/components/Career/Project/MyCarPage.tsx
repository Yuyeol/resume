import { Text, View } from "@react-pdf/renderer";
import BulletItem from "../../BulletList/BulletItem";
import Section from "./Section";
import Code from "./Code";
import Strong from "../../Strong";

export default function MyCarPage() {
  return (
    <View>
      <Section title="[프로젝트 리드] Next.js 14 App Router 기반 신규 플랫폼 아키텍처 설계">
        <BulletItem
          content={
            <Text>
              <Code>Streaming SSR</Code> 사용으로 정적 페이지의 빠른 초기 로딩
              장점과 싱글 페이지 애플리케이션(SPA)의 인터랙티브한 사용자 경험
              결합
            </Text>
          }
        />
        <BulletItem
          content={
            <Text>
              서버 컴포넌트 비중을 높여 클라이언트의 JS 번들을 최소화하고,{" "}
              <Code>dynamic import</Code> 코드 스플리팅을 통한 전략적인 UI
              분리로 <Strong>렌더링 최적화</Strong>
            </Text>
          }
        />
      </Section>
    </View>
  );
}
