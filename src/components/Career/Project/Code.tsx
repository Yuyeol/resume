import { StyleSheet, Text } from "@react-pdf/renderer";

export default function Code({ children }: { children: React.ReactNode }) {
  return <Text style={styles.code}>{children}</Text>;
}

const styles = StyleSheet.create({
  code: {
    backgroundColor: "#f0f0f0",
    fontFamily: "Courier-Bold", // Using a monospaced font
  },
});
