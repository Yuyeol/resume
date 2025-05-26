import { StyleSheet, Text, View } from "@react-pdf/renderer";
import SectionTitle from "./SectionTitle";
import { COLORS } from "../constants";

const Item = ({ content, period }: { content: string; period: string }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemContent}>{content}</Text>
      <Text style={styles.itemPeriod}>{period}</Text>
    </View>
  );
};

const items = [
  { content: "부경대학교 경영학과 졸업", period: "19. 02" },
  { content: "정보처리기사 취득", period: "20. 08" },
];
export default function Etc() {
  return (
    <View style={styles.container}>
      <SectionTitle title="기타" />
      {items.map((item) => (
        <Item key={item.content} {...item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  itemContent: {
    fontSize: 14,
    fontWeight: 700,
  },
  itemPeriod: {
    fontSize: 12,
    color: COLORS.muted,
  },
});
