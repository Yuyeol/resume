import { StyleSheet, Text, View } from "@react-pdf/renderer";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 5,
    gap: 4,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
  },
  sectionContent: {
    gap: 4,
    paddingLeft: 5,
  },
});
