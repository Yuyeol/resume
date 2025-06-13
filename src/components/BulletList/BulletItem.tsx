import { StyleSheet, Text, View } from "@react-pdf/renderer";

export default function BulletItem({
  content,
  isArrowBullet = false,
}: {
  content: React.ReactNode;
  isArrowBullet?: boolean;
}) {
  return (
    <View style={styles.bulletItem} wrap={false}>
      {isArrowBullet ? (
        <Text style={[styles.bullet, styles.arrowBullet]}>→</Text>
      ) : (
        <Text style={styles.bullet}>•</Text>
      )}
      <Text style={styles.bulletContent}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bulletItem: {
    flexDirection: "row",
    gap: 4,
  },
  arrowBullet: {
    marginLeft: 12,
  },
  bullet: {
    fontSize: 12,
  },
  bulletContent: {
    fontSize: 12,
    flex: 1,
  },
});
