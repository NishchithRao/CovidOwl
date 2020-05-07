//import liraries
import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import TabStyle from "../css/TabStyle";

// create a component
const Symptoms = (props) => {
  return (
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
      <View
        style={[
          TabStyle.tab,
          { height: props.height, backgroundColor: "#272638" },
        ]}
      >
        <View>
          <Image
            source={require("../assets/img/symptoms/s1.png")}
            style={{ width: 250, height: 250, justifyContent: "center" }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Oswald-Regular",
              fontSize: 24,
            }}
          >
            Cough
          </Text>
        </View>
      </View>
      <View
        style={[
          TabStyle.tab,
          { height: props.height, backgroundColor: "#272638" },
        ]}
      >
        <View>
          <Image
            source={require("../assets/img/symptoms/s2.png")}
            style={{ width: 250, height: 250, resizeMode: "stretch" }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Oswald-Regular",
              fontSize: 24,
            }}
          >
            Fever
          </Text>
        </View>
      </View>
      <View
        style={[
          TabStyle.tab,
          { height: props.height, backgroundColor: "#272638" },
        ]}
      >
        <View>
          <Image
            source={require("../assets/img/symptoms/s3.png")}
            style={{ width: 250, height: 250, resizeMode: "stretch" }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Oswald-Regular",
              fontSize: 24,
            }}
          >
            Diarrohea
          </Text>
        </View>
      </View>
      <View
        style={[
          TabStyle.tab,
          { height: props.height, backgroundColor: "#272638" },
        ]}
      >
        <View>
          <Image
            source={require("../assets/img/symptoms/s5.png")}
            style={{ width: 250, height: 250, resizeMode: "stretch" }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Oswald-Regular",
              fontSize: 24,
            }}
          >
            Muscle aches
          </Text>
        </View>
      </View>
      <View
        style={[
          TabStyle.tab,
          { height: props.height, backgroundColor: "#272638" },
        ]}
      >
        <View>
          <Image
            source={require("../assets/img/symptoms/s6.png")}
            style={{ width: 250, height: 250, resizeMode: "stretch" }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Oswald-Regular",
              fontSize: 24,
            }}
          >
            Sore throat
          </Text>
        </View>
      </View>
      <View
        style={[
          TabStyle.tab,
          { height: props.height, backgroundColor: "#272638" },
        ]}
      >
        <View>
          <Image
            source={require("../assets/img/symptoms/s7.png")}
            style={{ width: 250, height: 250, resizeMode: "stretch" }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Oswald-Regular",
              fontSize: 24,
            }}
          >
            Unexplained loss of taste or smell
          </Text>
        </View>
      </View>

      <View
        style={[
          TabStyle.tab,
          { height: props.height, backgroundColor: "#272638" },
        ]}
      >
        <View>
          <Image
            source={require("../assets/img/symptoms/s8.png")}
            style={{ width: 250, height: 250, resizeMode: "stretch" }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Oswald-Regular",
              fontSize: 24,
            }}
          >
            Shortness of breath
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Symptoms;
