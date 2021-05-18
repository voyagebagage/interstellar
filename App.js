import { StatusBar } from "expo-status-bar";
import React from "react";
//>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<\\
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
//>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<\\
import Constants from "expo-constants";
console.log(Constants.statusBarHeight);
//>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<\\
console.log(Platform.OS);

import colors from "./assets/colors";
const { grey, greyName, black, lightBlack } = colors;

export default function App() {
  return (
    <>
      <SafeAreaView>
        <StatusBar style="dark" backgroundColor="pink" />
        <ScrollView style={{ backgroundColor: "aqua" }}>
          <View style={[styles.container]}>
            <View
              style={[styles.bgGrey]}
              marginTop={
                Platform.OS === "android" ? Constants.statusBarHeight : 0
              }
            >
              <Image
                style={{
                  height: 50,
                  width: 70,
                  justifyContent: "center",
                }}
                resizeMode="contain"
                source={{
                  uri: "https://ia.media-imdb.com/images/M/MV5BOTc2MzQ4MjAwM15BMl5BcG5nXkFtZTgwMzY2MzQ2OTE@._V1_.png",
                }}
              />
            </View>
            <View style={[styles.bgLightBlack, styles.flex3]} />
            {/* <View style={[styles.bgBlack]}></View> */}
            <View style={[styles.bgLightBlack, styles.flex4]} />

            {/* <View
              style={{ height: 50, width: 70, backgroundColor: "red" }}
            ></View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    // heightDi"r00%"ection: "column",
    flex: 3,
  },
  flex4: {
    flex: 4,
    padding: 5,
  },
  height: {
    height: 200,
  },
  bgGrey: {
    backgroundColor: grey,
  },
  bgGreyName: {
    backgroundColor: greyName,
  },
  bgBlack: {
    backgroundColor: black,
  },
  bgLightBlack: {
    backgroundColor: lightBlack,
  },
});
