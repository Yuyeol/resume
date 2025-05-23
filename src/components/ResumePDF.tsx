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
    padding: 30,
    fontFamily: "SpoqaHanSans",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  contactItem: {
    fontSize: 10,
    marginHorizontal: 5,
  },
});

// 이력서 컴포넌트
const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>홍길동</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>이메일: hong@example.com</Text>
          <Text style={styles.contactItem}>전화번호: 010-1234-5678</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>학력</Text>
        <Text style={styles.title}>한국대학교</Text>
        <Text style={styles.text}>컴퓨터공학과 | 2016.03 - 2020.02</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>경력</Text>
        <Text style={styles.title}>ABC 기업</Text>
        <Text style={styles.text}>웹 개발자 | 2020.03 - 현재</Text>
        <Text style={styles.text}>
          • React와 TypeScript를 활용한 웹 애플리케이션 개발
        </Text>
        <Text style={styles.text}>• 사용자 경험 개선 및 성능 최적화</Text>
        <Text style={styles.text}>• 팀 내 코드 리뷰 및 기술 멘토링</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>기술 스택</Text>
        <Text style={styles.text}>
          • 프론트엔드: React, TypeScript, HTML, CSS
        </Text>
        <Text style={styles.text}>• 백엔드: Node.js, Express</Text>
        <Text style={styles.text}>• 기타: Git, Docker, AWS</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
