//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StatusBar, BackHandler } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import HomeStyle from "./css/HomeStyle";
import Tab from "./components/Tabs";
import NewsTab from "./components/NewsTab";
import Symptoms from "./components/Symptoms";
import axios from "axios";
import Preventions from "./components/Preventions";

// create a component
const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [article, setArticle] = useState(null);
  const [statewiseData, setStatewiseData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [districtName, setDistrictName] = useState([]);
  const [districtValue, setDistrictValue] = useState([]);

  useEffect(() => {
    async function LoadFont() {
      await Font.loadAsync({
        "Oswald-Bold": require("./assets/fonts/Oswald-Bold.ttf"),
        "Oswald-Regular": require("./assets/fonts/Oswald-Regular.ttf"),
        "Oswald-Light": require("./assets/fonts/Oswald-Light.ttf"),
        "Oswald-ExtraLight": require("./assets/fonts/Oswald-ExtraLight.ttf"),
        "Oswald-SemiBold": require("./assets/fonts/Oswald-SemiBold.ttf"),
      });
      const [{ data }, response, statedata] = await Promise.all([
        axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&q=Covid&q=corona&apiKey=219a7dfcedc24ceeab3173b55050eaf7"
        ),
        axios.get("https://api.covid19india.org/data.json"),
        axios.get("https://api.covid19india.org/state_district_wise.json"),
      ]);
      setArticle(data.articles);
      setStatewiseData(response.data.statewise);
      setCountryData(
        response.data.cases_time_series[
          response.data.cases_time_series.length - 1
        ]
      );
      setDistrictName(Object.keys(statedata.data.Karnataka.districtData));
      setDistrictValue(Object.values(statedata.data.Karnataka.districtData));
      setFontLoaded(true);
    }
    LoadFont();
  }, []);

  return !fontLoaded || article == null ? (
    <AppLoading />
  ) : (
    <ScrollView style={HomeStyle.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={HomeStyle.DescHead}>
        <Text style={[HomeStyle.headDesc, { color: "#fff" }]}>
          Stay Home, Stay Safe.
        </Text>
        <Text
          style={[
            HomeStyle.headDesc,
            {
              color: "#F87180",
              fontSize: 35,
              paddingVertical: 10,
            },
          ]}
        >
          Your Safety is our{" "}
          <Text
            style={{
              backgroundColor: "#F87180",
              color: "#272638",
              fontSize: 31,
              margin: 5,
              marginHorizontal: 10,
              marginLeft: 15,
              paddingHorizontal: 2,
            }}
          >
            #1 Priority
          </Text>
        </Text>
        <Text style={{ ...HomeStyle.headDesc, color: "#F87180", fontSize: 20 }}>
          Learn All about the{" "}
          <Text style={{ fontWeight: "bold" }}>#CoronaVirusOutbreak.</Text>
        </Text>
      </View>
      <View style={HomeStyle.section}>
        <Text style={HomeStyle.sectionHead}>Total Cases</Text>
        <Tab
          Statedata={statewiseData}
          CountryData={countryData}
          districtName={districtName}
          districtValue={districtValue}
        />
      </View>

      <View style={[HomeStyle.section, { backgroundColor: "black" }]}>
        <Text style={HomeStyle.sectionHead}>Recent News</Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontFamily: "Oswald-Light",
            paddingTop: 10,
            paddingLeft: 10,
          }}
        >
          Get latest updates about the pandemic.
        </Text>
        <NewsTab articles={article} height={350} />
      </View>

      <View style={[HomeStyle.section, { backgroundColor: "#000" }]}>
        <Text style={HomeStyle.sectionHead}>Common Symptoms</Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontFamily: "Oswald-Light",
            paddingTop: 10,
            paddingLeft: 10,
          }}
        >
          COVID-19 affects different people in different ways.Most infected
          people will develop mild to moderate symptoms.
        </Text>
        <Symptoms height={350} />
      </View>

      <View style={[HomeStyle.section, { backgroundColor: "#000" }]}>
        <Text style={HomeStyle.sectionHead}>Prevention Methods</Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontFamily: "Oswald-Light",
            paddingTop: 10,
            paddingLeft: 10,
          }}
        >
          Protect yourself and others around you by knowing the facts and tking
          appropriate precautions.
        </Text>
        <Preventions />
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default App;
