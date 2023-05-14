import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
      
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 70,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  const onSnapToItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 35}}>
        <Carousel
          layout={'tinder'}
          ref={carouselRef}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={onSnapToItem}
        />
      </View>
      
      <ScrollView style={styles.deeed}>
        <View style={styles.ded}>
      <Onboarding style={styles.modal}
        pages={[
          {
            image: <Image style={styles.zurag1} source={require('../assets/grand-piano.png')} />,
            title: 'Onboarding 1',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
          
            image: <Image style={styles.zurag1} source={require('../assets/p0bbrns9.jpg')} />,
            title: 'Onboarding 2',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            image: <Image style={styles.zurag1} source={require('../assets/Six-1200-200522.png')} />,
            title: 'Onboarding 3',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
/>
</View>
      <View style={styles.mesic}>
      <View style={styles.useg}>
        <View style={styles.helber}>
      <MaterialCommunityIcons style={styles.icoon} name='crown-outline' size={22} color='#B22222' borderRadius={2}/>
        <Text style={styles.txt}>Топ 100</Text>
        </View>
        </View>
        <View style={styles.useg}>
        <View style={styles.helber}>
        <MaterialCommunityIcons style={styles.icooon} name='newspaper-variant-outline' size={22} color='#FFD700'/>
        <Text style={styles.txt}>Мэдээ</Text>
        </View>
        </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
   },
  useg: {
    backgroundColor: '#fff',
    marginTop: 200,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    width: 150,
    height: 150,
    marginHorizontal: 10,
    flexWrap: 'wrap',
  },
  mesic: {
    flexDirection: 'row',
    marginHorizontal: 17,
  },
  helber: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  txt: {
    fontSize: 13,
    lineHeight: 40,
  },
  icooon:{
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'yellow',
    textAlign: 'center',
    marginHorizontal: 60,
    // backgroundColor: 'black',
  }, 
  icoon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#F08080',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 60,
    borderColor: 'black',
    borderWidth: 1,
  }, 
  ded: {
    backgroundColor: 'blue',
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zurag1: {
    width: 200,
    height: 200,
  },
  modal: {
    backgroundColor: 'blue',
  }
});
