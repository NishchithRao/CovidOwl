import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Modal,
  TouchableHighlight,
  Button,
  TouchableOpacity,
} from "react-native";
import TabStyle from "../css/TabStyle";
import * as OpenBrowser from "expo-web-browser";
// create a component
const NewsTab = (props) => {
  const [isVisible, SetIsVisible] = useState(false);
  const date = new Date();

  const OpenLink = (link) => OpenBrowser.openBrowserAsync(link);

  return (
    <View>
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
        {props.articles.map((news) => (
          <View
            style={[
              TabStyle.tab,
              { display: "flex", justifyContent: "space-between" },
            ]}
            key={date.getMilliseconds() * Math.random()}
          >
            <View>
              <Text
                style={{
                  color: "#272638",
                  fontFamily: "Oswald-SemiBold",
                  fontSize: 18,
                  paddingBottom: 8,
                }}
              >
                {news.title.substring(0, news.title.lastIndexOf("-"))}
              </Text>
              <Text
                style={{
                  color: "#F87180",
                  fontFamily: "Oswald-Regular",
                  fontSize: 16,
                  paddingBottom: 6,
                }}
              >
                - {news.source.name}
              </Text>
              <Text
                style={{
                  color: "#F87180",
                  fontFamily: "Oswald-Regular",
                  fontSize: 14,
                  paddingLeft: 4,
                }}
              >
                {"  "}
                {news.publishedAt
                  .replace("T", " ")
                  .slice(
                    0,
                    news.publishedAt.replace("T", " ").lastIndexOf(":")
                  )}
              </Text>
              <Text
                style={{
                  fontFamily: "Oswald-Light",
                  paddingVertical: 15,
                }}
              >
                {news.description}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "flex-end",
              }}
            >
              <TouchableHighlight
                onPress={() => OpenLink(news.url)}
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
                  Read More
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default NewsTab;
