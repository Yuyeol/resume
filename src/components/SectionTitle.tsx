import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLORS } from "../constants";

export default function SectionTitle({
  title,
  isFirst,
}: {
  title: string;
  isFirst?: boolean;
}) {
  const marginTop = isFirst ? 0 : 20;
  return (
    <View style={[styles.mainTitleContainer, { marginTop }]}>
      <Text style={styles.mainTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitleContainer: {
    borderBottomWidth: 1.5,
    borderColor: COLORS.primary,
    paddingBottom: 3,
    paddingTop: 3,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
});
