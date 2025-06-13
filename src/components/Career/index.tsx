import { StyleSheet, View } from "@react-pdf/renderer";
import SectionTitle from "../SectionTitle";
import CompanyTitle from "./CompanyTitle";
import Poomang from "./Project/Poomang";
import Mingo from "./Project/Mingo";
import MyCarPage from "./Project/MyCarPage";

export default function Career() {
  return (
    <View style={styles.container}>
      <SectionTitle title="경력" />
      <CompanyTitle
        title="마이카페이지"
        description="중고차 거래 서비스"
        period="23.10 ~ (재직중)"
        isFirst
      />
      <MyCarPage />
      <CompanyTitle
        title="푸망"
        description="심리테스트 플랫폼"
        period="21. 04 ~ 23.02 (22개월)"
      />
      <Poomang />
      <CompanyTitle
        title="[외주] 밍고"
        description="VRChat 플랫폼"
        period="24. 06 ~ 24.08 (2개월)"
      />
      <Mingo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
});
