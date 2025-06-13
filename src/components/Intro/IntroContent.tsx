import { StyleSheet, View } from "@react-pdf/renderer";

export default function IntroContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
  },
});
