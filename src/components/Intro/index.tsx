import { StyleSheet, Text, View } from "@react-pdf/renderer";
import SectionTitle from "../SectionTitle";
import Strong from "../Strong";
import BulletList from "../BulletList";
import BulletItem from "../BulletList/BulletItem";

export default function Intro() {
  return (
    <View style={styles.container}>
      <SectionTitle isFirst title="소개" />
      <BulletList>
        <BulletItem
          content={
            <Text>
              <Strong>문제의 본질에 집중</Strong>하고, 실질적인 해결책과
              합리적인 결과물을 만드는 것을 지향합니다.
            </Text>
          }
        />
        <BulletItem
          content={
            <Text>
              기술을 선택할 때 트렌드보다{" "}
              <Strong>문제의 특성과 서비스의 맥락</Strong>을 먼저 고려합니다.
            </Text>
          }
        />
        <BulletItem
          content={
            <Text>
              팀을 리딩할 때에도, <Strong>팀원의 역량과 상황이라는 본질</Strong>
              에 집중하여 안정적인 성과를 이끌어내려고 노력합니다.
            </Text>
          }
        />
        <BulletItem
          content={
            <Text>
              이러한 <Strong>본질에 집중하는 사고방식</Strong>을 통해, 팀과
              서비스에 실질적인 가치를 만들어가고 있습니다.
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
