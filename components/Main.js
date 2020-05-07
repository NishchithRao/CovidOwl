import React from "react";
import { View, ScrollView, Text } from "react-native";
import ModalStyle from "../css/Main.js";

const Main = (props) => {
  return !props.type ? (
    <ScrollView>
      <View style={{ padding: 20, backgroundColor: "#272638" }}>
        {props.districtName.map((title, index) => (
          <View style={{ flexDirection: "row" }} key={index}>
            <Text style={[ModalStyle.stateText, { flex: 2 }]} key={index}>
              {title}
            </Text>
            <Text style={[ModalStyle.nums, { flex: 1 }]} key={index + 1}>
              {props.districtValue[index].confirmed}
            </Text>
            <Text style={[ModalStyle.nums, { flex: 1 }]} key={index - 1}>
              {props.districtValue[index].recovered}
            </Text>
            <Text style={[ModalStyle.nums, { flex: 1 }]} key={index + 2}>
              {props.districtValue[index].deceased}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  ) : (
    <ScrollView>
      <View style={{ padding: 20, backgroundColor: "#272638" }}>
        {props.data.map((title, index) => (
          <View style={{ flexDirection: "row" }} key={index}>
            <Text style={[ModalStyle.stateText, { flex: 2 }]} key={index}>
              {title.state}
            </Text>
            <Text style={[ModalStyle.nums, { flex: 1 }]} key={index + 1}>
              {title.confirmed}
            </Text>
            <Text style={[ModalStyle.nums, { flex: 1 }]} key={index - 1}>
              {title.recovered}
            </Text>
            <Text style={[ModalStyle.nums, { flex: 1 }]} key={index + 2}>
              {title.deaths}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
export default Main;
