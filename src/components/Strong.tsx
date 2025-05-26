import { StyleSheet, Text } from "@react-pdf/renderer";

export default function Strong({ children }: { children: React.ReactNode }) {
  return <Text style={styles.strongText}>{children}</Text>;
}

const styles = StyleSheet.create({
  strongText: {
    fontWeight: 700,
  },
});
