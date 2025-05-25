import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "SpoqaHanSans",
  src: "https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansLight.ttf",
});

// 스타일 정의
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    fontFamily: "SpoqaHanSans",
  },
  headerContainer: {
    backgroundColor: "lightgray",
    borderBottomRightRadius: 25,
  },
  header: {
    fontSize: 24,
  },
});

// 이력서 컴포넌트
const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>홍길동</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
