import { Image, Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLORS } from "../constants";

const ItemInfos = [
  {
    title: "Email",
    content: "uy930720@gmail.com",
  },
  {
    title: "Phone",
    content: "01040573260",
  },
  {
    title: "Github",
    content: "https://github.com/Yuyeol",
  },
  {
    title: "Blog",
    content: "https://ure93.tistory.com/",
  },
];

export default function Header() {
  return (
    <>
      <View style={styles.blank}></View>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image src="/images/profile.jpeg" style={styles.profileImage} />
          </View>
          <View style={styles.MainInfoContainer}>
            <Text style={styles.MainInfoTitle}>정유열</Text>
            <Text style={styles.MainInfoSubtitle}>Frontend</Text>
            <Text style={styles.MainInfoSubtitle}>Developer</Text>
          </View>
          <View style={styles.subInfoContainer}>
            {ItemInfos.map((item) => (
              <View style={styles.subInfoItem}>
                <Text style={styles.subInfoItemTitle}>{item.title}</Text>

                {item.title === "Github" || item.title === "Blog" ? (
                  <Link
                    src={item.content}
                    style={styles.subInfoItemLinkContent}
                  >
                    <Text style={styles.subInfoItemContent}>바로가기</Text>
                  </Link>
                ) : (
                  <Text style={styles.subInfoItemContent}>{item.content}</Text>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  blank: {
    height: 140,
    marginBottom: -20,
  },
  container: {
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 25,
    color: "white",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 140,
  },
  profileContainer: {
    marginVertical: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  profileImageContainer: {
    padding: 3,
    paddingLeft: 30,
    backgroundColor: COLORS.secondary,
    borderBottomRightRadius: 999,
    borderTopRightRadius: 999,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 999,
  },
  MainInfoContainer: {
    borderRightWidth: 2,
    borderRightColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 40,
    marginRight: 40,
    marginLeft: 30,
  },
  MainInfoTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  MainInfoSubtitle: {
    fontSize: 16,
  },

  subInfoContainer: { gap: 5 },
  subInfoItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  subInfoItemTitle: {
    fontSize: 12,
    fontWeight: "700",
    width: 42,
  },
  subInfoItemContent: {
    fontSize: 12,
  },
  subInfoItemLinkContent: {
    color: "white",
  },
});
