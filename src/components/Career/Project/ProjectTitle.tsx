import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLORS } from "../../../constants";

export default function ProjectTitle({
  title,
  period,
}: {
  title: string;
  period: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.period}>{period}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 160 },
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  period: {
    fontSize: 10,
    color: COLORS.muted,
  },
});
