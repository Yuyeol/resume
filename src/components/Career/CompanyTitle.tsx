import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLORS } from "../../constants";

export default function CompanyTitle({
  title,
  description,
  period,
  isFirst,
}: {
  title: string;
  description: string;
  period: string;
  isFirst?: boolean;
}) {
  return (
    <View style={[styles.container, { marginTop: isFirst ? 0 : 10 }]}>
      <View style={styles.titleContainer} wrap={false}>
        <View style={styles.titleBullet}></View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}> - {description}</Text>
      <Text style={styles.period}>{period}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    fontSize: 15,
  },
  titleContainer: {
    borderColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  titleBullet: {
    width: 3,
    height: 12,
    backgroundColor: COLORS.primary,
    marginRight: 5,
  },
  title: {
    fontWeight: "bold",
  },
  description: {},
  period: {
    marginLeft: 5,
    fontSize: 12,
    color: COLORS.muted,
  },
});
