import { Text, View } from "@react-pdf/renderer";
import BulletItem from "../../BulletList/BulletItem";
import Strong from "../../Strong";
import Section from "./Section";
import Code from "./Code";

export default function Mingo() {
  return (
    <View>
      <Section title="[프로젝트 리드] Next.js 마이그레이션 및 성능 최적화">
        <BulletItem
          content={
            <Text>
              컴포넌트 상호작용 특성 및 캐싱 전략에 맞춰 서버 페칭과 클라이언트
              페칭(<Code>React Query</Code>)을 선별 적용하여{" "}
              <Strong>데이터 로드 기준 성능을 25-30% 개선</Strong>
            </Text>
          }
        />
        <BulletItem
          content={
            <Text>
              <Code>next-intl</Code> 도입을 통해 다국어 지원 프로세스 효율화로{" "}
              <Strong>관련 성능을 20-25% 개선</Strong> 및 SEO 대응력 강화
            </Text>
          }
        />
      </Section>
    </View>
  );
}
