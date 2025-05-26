import { StyleSheet, View } from "@react-pdf/renderer";

export default function BulletList({
  children,
}: {
  children: React.ReactNode;
}) {
  return <View style={styles.bulletList}>{children}</View>;
}

const styles = StyleSheet.create({
  bulletList: { gap: 4 },
});
