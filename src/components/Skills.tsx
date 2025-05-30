import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import SectionTitle from "./SectionTitle";

const skillList = [
  {
    icon: "./images/skills/react.png",
    title: "React",
  },
  {
    icon: "./images/skills/next.png",
    title: "Next.js",
  },
  {
    icon: "./images/skills/typescript.png",
    title: "TypeScript",
  },
  {
    icon: "./images/skills/tailwind.png",
    title: "Tailwind",
  },
  {
    icon: "./images/skills/zustand.png",
    title: "Zustand",
  },
  {
    icon: "./images/skills/reactquery.png",
    title: "ReactQuery",
  },
];

const SkillItem = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <View style={styles.skillItem}>
      <Image src={icon} style={styles.skillItemIcon} />
      <Text style={styles.skillItemTitle}>{title}</Text>
    </View>
  );
};

export default function Skills() {
  return (
    <View style={styles.container}>
      <SectionTitle title="주요 기술" />
      <View style={styles.skillList}>
        {skillList.map((skill) => (
          <SkillItem key={skill.title} {...skill} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  skillList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: "25%",
    marginBottom: 10,
  },
  skillItemIcon: {
    width: 15,
    height: 15,
  },
  skillItemTitle: {
    fontSize: 12,
    fontWeight: 500,
  },
});
