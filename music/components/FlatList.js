import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Search from "../components/Search";
import { ScrollView } from "react-native";
import DuuScreen from "../screens/DuuScreen";

const MusicScreen = ({navigation}) => {
  const songs = [
    { id: "1", name: "Be my summer" },
    { id: "2", name: "bi" },
  ];
  const songss = [{ id: "3", name: "Улаанбаатар гунигтай" }];
  return (
    <SafeAreaView>
      <View>
        <Search />
      </View>
      <ScrollView>
        <View style={styles.Tom}>
          <View style={styles.duuchin}>
            <Image
              style={styles.duucinZurag}
              source={require("../assets/Six-1200-200522.png")}
            />
            <Text style={styles.duuchinNer}>290</Text>
          </View>

          <FlatList
            style={styles.Flattlist}
            data={songs}
            renderItem={(element) => (
              <TouchableOpacity onPress={() => navigation.navigate('DuuScreen')}>
                <View style={styles.flatBorder}>
                  <Text> {element.item.id} </Text>
                  <Text style={styles.name} >               {element.item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />

          <View style={styles.duuchinn}>
            <Image
              style={styles.duucinZurag}
              source={require("../assets/Six-1200-200522.png")}
            />
            <Text style={styles.duuchinNer}>290 & 168</Text>
          </View>

          <FlatList
            style={styles.Flattlist}
            data={songss}
            renderItem={(element) => (
              <TouchableOpacity onPress={() => Alert.alert("Ok")}>
                <View style={styles.flatBorder}>
                  <Text> {element.item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <StatusBar style="auto"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  flatBorder: {
    flex: 1,
    backgroundColor: "#F5FFFA",
    padding: 15,
    margin: 1,
    height: 50,
    flexDirection: 'row',
  },
  duuchin: {
    flex: 1,
    width: 374,
    height: 50,
    backgroundColor: "#F5FFFA",
    padding: 6,
    flexDirection: "row",
  },
  duucinZurag: {
    width: 40,
    height: 40,
    marginEnd: 5,
    marginBottom: 3,
  },
  duuchinNer: {
    color: "black",
    fontSize: 15,
    marginLeft: 5,
    marginTop: 14,
  },
  Tom: {
    top: 50,
  },
  
  duuchinn: {
    flex: 1,
    width: 374,
    height: 50,
    backgroundColor: "#F5FFFA",
    padding: 6,
    flexDirection: "row",
    top: 20,
  },
  name: {
    color: 'red',
  }
});
