import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLORS } from "../../../constants";

export default function ProjectInfo({
  infoName,
  text,
}: {
  infoName: "team" | "tool";
  text: string;
}) {
  return (
    <View style={styles.container} wrap={false}>
      <Image src={`./images/icons/${infoName}.png`} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    fontWeight: 700,
  },
  icon: {
    width: 11,
    height: 10,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    color: COLORS.primary,
  },
});
