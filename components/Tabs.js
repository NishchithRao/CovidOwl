import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  TouchableHighlight,
  BackHandler,
} from "react-native";
import TabStyle from "../css/TabStyle";
import Main from "./Main";

// create a component
const Tab = (props) => {
  const [data, setData] = useState("");
  const [isVisible, SetIsVisible] = useState(false);
  const [districtName, setDistrictName] = useState([]);
  const [districtValue, setDistrictValue] = useState([]);
  const [states, setStates] = useState(true);

  const setModal = (types) => {
    setData(props.Statedata);
    setDistrictValue(props.districtValue);
    setDistrictName(props.districtName);
    setStates(types);
    SetIsVisible(true);
  };
  return (
    <View>
      <Modal
        visible={isVisible}
        animationType="slide"
        hardwareAccelerated={true}
      >
        <TouchableWithoutFeedback onPress={() => SetIsVisible(!isVisible)}>
          <View style={{ backgroundColor: "#272638" }}>
            <Text
              style={{
                fontSize: 22,
                color: "#fff",
                padding: 10,
                fontFamily: "Oswald-Bold",
              }}
            >
              X
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={[TabStyle.headText, { flex: 2 }]}></Text>
              <Text style={[TabStyle.headText, { flex: 1 }]}>confirmed</Text>
              <Text style={[TabStyle.headText, { flex: 1 }]}>recovered</Text>
              <Text style={[TabStyle.headText, { flex: 1 }]}>deaths</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Main
          data={data}
          districtName={districtName}
          districtValue={districtValue}
          type={states}
        />
      </Modal>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={Dimensions.get("window").width - 60} //your element width
        snapToAlignment={"center"}
        contentInset={{
          to: 0,
          left: 30,
          right: 30,
          bottom: 0,
        }}
      >
        <View style={[TabStyle.tab, { height: props.height }]}>
          <Text style={TabStyle.tabHead}>India</Text>
          <View style={TabStyle.statList}>
            <View>
              <Text style={TabStyle.num}>{props.Statedata[0].confirmed}</Text>
              <Text style={TabStyle.type}>Confirmed</Text>
            </View>
            <View>
              <Text style={TabStyle.num}>{props.Statedata[0].recovered}</Text>
              <Text style={TabStyle.type}>Recovered</Text>
            </View>
            <View>
              <Text style={TabStyle.num}>{props.Statedata[0].deaths}</Text>
              <Text style={TabStyle.type}>Deceased</Text>
            </View>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => setModal(true)}
              style={{
                backgroundColor: "#272638",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontFamily: "Oswald-Regular",
                  fontSize: 16,
                  paddingVertical: 9,
                  paddingBottom: 12,
                }}
              >
                Know More
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={[TabStyle.tab, { height: props.height }]}>
          <Text style={TabStyle.tabHead}>Karnataka</Text>
          <View style={TabStyle.statList}>
            <View>
              <Text style={TabStyle.num}>{props.Statedata[13].confirmed}</Text>
              <Text style={TabStyle.type}>Confirmed</Text>
            </View>
            <View>
              <Text style={TabStyle.num}>{props.Statedata[13].recovered}</Text>
              <Text style={TabStyle.type}>Recovered</Text>
            </View>
            <View>
              <Text style={TabStyle.num}>{props.Statedata[13].deaths}</Text>
              <Text style={TabStyle.type}>Deceased</Text>
            </View>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => setModal(false)}
              style={{
                backgroundColor: "#272638",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontFamily: "Oswald-Regular",
                  fontSize: 16,
                  paddingVertical: 9,
                  paddingBottom: 12,
                }}
              >
                Know More
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default Tab;
