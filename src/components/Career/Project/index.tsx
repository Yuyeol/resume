import { StyleSheet, Text, View } from "@react-pdf/renderer";
import BulletItem from "../../BulletList/BulletItem";
import ProjectTitle from "./ProjectTitle";
import ProjectInfo from "./ProjectInfo";

export default function Project({
  title,
  period,
  team,
  skills,
  descripttions,
}: {
  title: string;
  period: string;
  team: string;
  skills: string;
  descripttions: string[];
}) {
  return (
    <View style={[styles.container]}>
      <ProjectTitle title={title} period={period} />
      <View style={styles.projectContentContainer}>
        <ProjectInfo infoName="team" text={team} />
        <ProjectInfo infoName="tool" text={skills} />
        {descripttions.map((description: string, index: number) => (
          <BulletItem key={index} content={<Text>{description}</Text>} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: 5,
  },

  projectContentContainer: { flex: 1, gap: 4 },
});
