import { StyleSheet, Dimensions } from "react-native";
const TabStyle = StyleSheet.create({
  tab: {
    width: Dimensions.get("window").width - 80,
    marginTop: 20,
    margin: 10,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  tabHead: {
    textAlign: "center",
    fontSize: 28,
    color: "#272638",
    fontFamily: "Oswald-Light",
  },
  statList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  num: {
    fontSize: 28,
    color: "#F87180",
    fontFamily: "Oswald-ExtraLight",
    textAlign: "center",
  },
  type: {
    fontFamily: "Oswald-Regular",
    textAlign: "center",
  },
  headText: {
    color: "#fff",
    backgroundColor: "#F87180",
    marginHorizontal: 3,
    paddingVertical: 8,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Oswald-SemiBold",
    textTransform: "capitalize",
  },
});

export default TabStyle;
