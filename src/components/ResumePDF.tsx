import { Document, Page, StyleSheet, Font, View } from "@react-pdf/renderer";
import Header from "./Header";
import Intro from "./Intro";
import Skills from "./Skills";
import { COLORS } from "../constants";
import Career from "./Career";
import Etc from "./Etc";

Font.register({
  family: "Pretendard",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Light.woff",
      fontWeight: 300,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Regular.woff",
      fontWeight: 400,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Medium.woff",
      fontWeight: 500,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Bold.woff",
      fontWeight: 700,
    },
  ],
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <View style={styles.mainContainer}>
        <Intro />
        <Career />
        <Skills />
        <Etc />
      </View>
    </Page>
  </Document>
);

export default ResumePDF;

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    fontFamily: "Pretendard",
    padding: 32,
  },
  mainContainer: {
    color: COLORS.primary,
  },
});
