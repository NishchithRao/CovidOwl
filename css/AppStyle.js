import { StyleSheet, Dimensions } from "react-native";

const AppStyle = StyleSheet.create({
  head: {
    color: "#0172CC",
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 6,
    paddingLeft: 5,
    fontFamily: "Oswald-Bold",
  },
  listcontainer: {
    padding: 15,
  },
  listItem: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontWeight: "bold",
  },
  numStyle: {
    fontWeight: "bold",
    color: "#888",
    fontSize: 17,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
});

export default AppStyle;
