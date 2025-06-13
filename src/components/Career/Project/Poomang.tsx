import { Text, View } from "@react-pdf/renderer";
import BulletItem from "../../BulletList/BulletItem";
import Strong from "../../Strong";
import Section from "./Section";
import Code from "./Code";

export default function Poomang() {
  return (
    <View>
      <Section title="웹 성능 최적화를 통한 비즈니스 성과 창출">
        <BulletItem
          content={
            <Text>
              <Code>Lighthouse</Code>, <Code>Webpack</Code>,{" "}
              <Code>React Profiler</Code>를 이용한 성능 분석 및 최적화 작업을
              주도하여 페이지 로드 시간(TTI)을{" "}
              <Strong>3.1초 → 1.2초로 약 60% 단축</Strong>
            </Text>
          }
        />
        <BulletItem
          content={
            <Text>
              콘텐츠 유형에 따른 이미지 지연 로딩, WebP 형식 변환 및 번들링
              최적화로 사용자 경험 극대화
            </Text>
          }
        />
        <BulletItem
          isArrowBullet
          content={
            <Text>
              위 최적화 작업을 통해{" "}
              <Strong>주간 활성 사용자(WAU) 8% 증가</Strong>
            </Text>
          }
        />
      </Section>
      <Section title="재사용 가능한 콘텐츠 엔진 개발로 개발 효율성 증대">
        <BulletItem
          content={
            <Text>
              콘텐츠의 핵심 로직을 담당하는{" "}
              <Strong>자체 엔진을 설계 및 개발</Strong>하여 UI 코드와 비즈니스
              로직을 명확하게 분리
            </Text>
          }
        />
        <BulletItem
          isArrowBullet
          content={
            <Text>
              위 아키텍처 개선작업을 통해{" "}
              <Strong>중복 코드 60% 이상 제거</Strong> 및 신규 콘텐츠 개발
              생산성 향상
            </Text>
          }
        />
      </Section>
    </View>
  );
}
