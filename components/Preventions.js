//import liraries
import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import TabStyle from "../css/TabStyle";
import Main from "./Main";

// create a component
const Preventions = (props) => {
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
            source={require("../assets/img/prevention/p1.png")}
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
              marginTop: 4,
            }}
          >
            Wash your hands frequently and thoroughly, using soap and water for
            at least 20 seconds. Use alcohol-based hand sanitizer if soap and
            water aren’t available.
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
            source={require("../assets/img/prevention/p3.png")}
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
              marginTop: 4,
            }}
          >
            Avoid touching your eyes, nose or mouth with unwashed hands.
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
            source={require("../assets/img/prevention/p2.png")}
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
              marginTop: 4,
            }}
          >
            Cough or sneeze into a tissue or flexed elbow, then throw the tissue
            in the trash.
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
            source={require("../assets/img/prevention/p4.png")}
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
              marginTop: 4,
            }}
          >
            Avoid close contact with people who are sick, sneezing or coughing.
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
            source={require("../assets/img/prevention/p5.png")}
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
              marginTop: 4,
            }}
          >
            Stay home when you are ill.
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
            source={require("../assets/img/prevention/p6.png")}
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
              marginTop: 4,
            }}
          >
            Clean and disinfect surfaces and objects that people frequently
            touch.
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
            source={require("../assets/img/prevention/p7.jpg")}
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
              marginTop: 4,
            }}
          >
            The CDC recommends wearing cloth face coverings in public settings
            where other social distancing measures are difficult to maintain
            (e.g., grocery stores and pharmacies) especially in areas of
            significant community-based transmission.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Preventions;
