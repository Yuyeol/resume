import { StyleSheet, Text, View } from "@react-pdf/renderer";
import BulletList from "./BulletList";
import SectionTitle from "./SectionTitle";
import BulletItem from "./BulletList/BulletItem";
import Strong from "./Strong";

export default function Intro() {
  return (
    <View style={styles.container}>
      <SectionTitle isFirst title="소개" />
      <BulletList>
        <BulletItem
          content={
            <Text>
              업무 난이도나 상황에 큰 영향을 받지 않고{" "}
              <Strong>기복 없이 안정적인 아웃풋을</Strong> 만들어냅니다. 동시에
              3~4개의 고객사 프로젝트를 동시에 진행하면서도 업무 밀도를 유연하게
              조절하여 지속 가능한 개발 환경을 유지해본 경험이 있습니다.
            </Text>
          }
        />
        <BulletItem
          content={
            <Text>
              3~4인 규모의 <Strong>소규모 팀을 리드</Strong>하며 프로젝트를 이끈
              경험이 있습니다. 팀원들의 업무 상황과 역량을 파악하여 적절히
              업무를 분배하고, 세분화된 지시와 점검을 통해 프로젝트의 방향성을
              유지합니다.
            </Text>
          }
        />
        <BulletItem
          content={
            <Text>
              복잡한 문제에 직면했을때 <Strong>문제를 작은 단위로 분해</Strong>
              하여 핵심과 부수적인 요소를 구분해서 불필요한 업무에 대한 몰입을
              방지하고 있습니다.
            </Text>
          }
        />
        <BulletItem
          content={
            <Text>
              <Strong>프로덕트에 대한 높은 이해도를 기반으로 프로그래밍</Strong>{" "}
              합니다. 기획과 디자인의 의도를 쉽게 알아차려 정확한 아웃풋과
              유기적인 피드백을 제공할 수 있습니다.
            </Text>
          }
        />
      </BulletList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
