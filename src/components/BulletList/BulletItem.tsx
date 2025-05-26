import { StyleSheet, Text, View } from "@react-pdf/renderer";

export default function BulletItem({ content }: { content: React.ReactNode }) {
  return (
    <View style={styles.bulletItem}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.bulletContent}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bulletItem: {
    flexDirection: "row",
    gap: 4,
  },
  bullet: {
    fontSize: 12,
  },
  bulletContent: {
    fontSize: 12,
    flex: 1,
  },
});
