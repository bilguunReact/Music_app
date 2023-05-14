import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Onboarding from "react-native-onboarding-swiper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const carouselItems = [
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          height: 150,
          padding: 40,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  const onSnapToItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#D3D3D3", paddingTop: 20 }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 35,
          }}
        >
          <Carousel
            layout={"tinder"}
            ref={carouselRef}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItem}
            onSnapToItem={onSnapToItem}
          />
        </View>
        <View style={styles.mesic}>
          <TouchableOpacity style={styles.useg}>
            <View style={styles.helber}>
              <MaterialCommunityIcons
                style={styles.icoon}
                name="crown-outline"
                size={22}
                color="#B22222"
                borderRadius={2}
              />
              <Text style={styles.txt}>Топ 100</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.useg}>
            <View style={styles.helber}>
              <MaterialCommunityIcons
                style={styles.icooon}
                name="newspaper-variant-outline"
                size={22}
                color="#FFD700"
              />
              <Text style={styles.txt}>Мэдээ</Text>
            </View>
          </TouchableOpacity>
        </View>


        <Text style={styles.uilchilgee}>Үйлчилгээнүүд</Text>
        <View style={styles.dood}>
          
          <TouchableOpacity style={styles.hogjim}>
            <View style={styles.daavka}>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/logo.png")}
              />
              <Text style={styles.ug}>Хөгжмийн Академи</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hogjim}>
            <View style={styles.daavka}>
            <Image
                style={styles.tinyLogo}
                source={require("../assets/logo.png")}
              />
              <Text style={styles.ug}>Хөгжмийн Дэлгүүр</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.dood}>
          {/* <Text style={styles.uilchilgee}>Үйлчилгээнүүд</Text> */}
          <TouchableOpacity>
            <View style={styles.daavka}>
            <Image
                style={styles.tinyZurag}
                source={require("../assets/p0bbrns9.jpg")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.daavka}>
            <Image
                style={styles.tinyZurag}
                source={require("../assets/p0bbrns9.jpg")}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.dood}>
          {/* <Text style={styles.uilchilgee}>Үйлчилгээнүүд</Text> */}
          <TouchableOpacity>
            <View style={styles.daavka}>
            <Image
                style={styles.tinyZurag}
                source={require("../assets/p0bbrns9.jpg")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.daavka}>
            <Image
                style={styles.tinyZurag}
                source={require("../assets/p0bbrns9.jpg")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
  },
  useg: {
    backgroundColor: "#fff",
    marginTop: 100,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 20,
    width: 150,
    height: 150,
    marginHorizontal: 10,
    flexWrap: "wrap",
    flex: 1,
  },
  mesic: {
    flexDirection: "row",
    marginHorizontal: 17,
  },
  helber: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 13,
    lineHeight: 40,
  },
  icooon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "yellow",
    textAlign: "center",
    marginHorizontal: 60,
    // backgroundColor: 'black',
  },
  icoon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#F08080",
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 60,
    borderColor: "black",
    borderWidth: 1,
  },
  dood: {
    flexDirection: "row",
    marginHorizontal: 17,
    marginBottom: 10,
  },
  hogjim: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 20,
    width: 150,
    height: 150,
    marginHorizontal: 10,
    flexWrap: "wrap",
    
  },
  daavka: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  uilchilgee: {
    margin: 20,
  },
  ug: {
    marginHorizontal: 40,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 30,
    margin: 5,
  },
  tinyZurag: {
    backgroundColor: "#fff",
    marginTop: 50,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 20,
    width: 150,
    height: 150,
    marginHorizontal: 10,
    flexWrap: "wrap",
  },
  uilchilgee: {
    marginBottom: 10,
    marginTop: 20,
    margin: 25,
  }
});

export default HomeScreen;
