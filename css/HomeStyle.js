import { StyleSheet, Dimensions } from "react-native";

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#272638",
  },
  section: {
    marginBottom: 80,
    marginVertical: 5,
    paddingBottom: 50,
    paddingLeft: 10,
  },
  sectionHead: {
    color: "#fff",
    paddingTop: 20,
    paddingLeft: 10,
    fontSize: 20,
    fontFamily: "Oswald-Regular",
  },
  appHead: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Oswald-Bold",
    textAlign: "center",
    padding: 40,
  },
  headDesc: {
    fontFamily: "Oswald-ExtraLight",
    fontSize: 40,
  },
  DescHead: {
    marginVertical: 50,
    marginHorizontal: 5,
    marginLeft: 20,
  },
});

export default HomeStyle;
