import { Image, Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLORS } from "../../../constants";
import BulletItem from "../../BulletList/BulletItem";
import ProjectTitle from "./ProjectTitle";

export default function Project({
  title,
  period,
  team,
  skills,
  descripttions,
  techDocumentUrl,
}: {
  title: string;
  period: string;
  team: string;
  skills: string;
  descripttions: string[];
  techDocumentUrl?: string;
}) {
  return (
    <View style={[styles.container]}>
      <ProjectTitle title={title} period={period} />
      <View style={styles.projectContentContainer}>
        <View style={styles.projectContentTeamInfoContainer}>
          <Image
            src={"./images/icons/team.png"}
            style={styles.projectContentTeamInfoIcon}
          />
          <Text style={styles.projectContentTeamInfoText}>{team}</Text>
        </View>
        <View style={styles.projectContentTeamInfoContainer}>
          <Image
            src={"./images/icons/tool.png"}
            style={styles.projectContentTeamInfoIcon}
          />
          <Text style={styles.projectContentTeamInfoText}>{skills}</Text>
        </View>
        {descripttions.map((description: string) => (
          <BulletItem content={<Text>{description}</Text>} />
        ))}
        {techDocumentUrl && (
          <View style={styles.techDocumentContainer}>
            <Link src={techDocumentUrl} style={styles.techDocumentLink}>
              <Text style={styles.techDocumentText}>
                📄 상세 기술 문서 보기
              </Text>
            </Link>
          </View>
        )}
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
  projectContentTeamInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    fontWeight: 700,
  },
  projectContentTeamInfoIcon: {
    width: 11,
    height: 10,
  },
  projectContentTeamInfoText: {
    fontSize: 12,
    lineHeight: 1.5,
    color: COLORS.primary,
  },
  techDocumentContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    fontWeight: 700,
  },
  techDocumentLink: {
    color: COLORS.primary,
  },
  techDocumentText: {
    fontSize: 12,
    lineHeight: 1.5,
    color: COLORS.primary,
  },
});
