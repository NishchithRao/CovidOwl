9; //import liraries
import React, { useState } from "react";
import { View, Text } from "react-native";
// create a component
const Home = (props) => {
  const [tableTitle] = useState(props.Statetitle);
  const [confirmData] = useState(props.confirmed);
  const [recoverData] = useState(props.recovered);
  const [deceaseData] = useState(props.deceased);
  return (
    <View style={{ backgroundColor: "#faf" }}>
      {tableTitle.map((title, index) => {
        <View>
          <Text style={{ color: "#000" }}>{title}</Text>
          {/* <Text style={{ color: "#000" }}>{confirmData[index]}</Text>
          <Text style={{ color: "#000" }}>{deceaseData[index]}</Text>
          <Text style={{ color: "#000" }}>{recoverData[index]}</Text> */}
        </View>;
      })}
    </View>
  );
};

//make this component available to the app
export default Home;
