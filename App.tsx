
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

interface slidesModel {
  key: string,
  title: string,
  textData: string,
  img: { uri: string; }
}

const slides: slidesModel[] = [{
  key: '1', title: 'Welcome to SlidersSampleApp - ONE', textData: 'Welcome to the Slider Show -- First Screen',
  img: { uri: 'https://th.bing.com/th/id/R.efb9015189390e10e99e2d4617e951b5?rik=xpaey3TE%2fyZgVg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2fc%2fd%2f257781.jpg&ehk=6MP4LslHiQqtjHTaElLcVb%2f3p3fHS8o9V7OME5K%2fves%3d&risl=&pid=ImgRaw&r=0' }
},
{
  key: '2', title: 'Welcome to SliderSampleApp - TWO', textData: 'Welcome to the Slider Show -- Second Screen',
  img: { uri: 'https://i.pinimg.com/originals/62/49/ab/6249abfdddac396b69ac31af1df5e5e5.jpg' }
},
{
  key: '3', title: 'Welcome to SliderSampleApp - THREE', textData: 'Welcome to the Slider Show -- Third Screen',
  img: { uri: 'https://th.bing.com/th/id/OIP.DKMHE-BnrKgy7qW1oInIJQHaIw?rs=1&pid=ImgDetMain' }
}];

const SlideShow = () => {

  const getSlide = ({ item }: { item: slidesModel }) => {
    return (
      <View style = {{flex:1, justifyContent: 'center'}} >
        <View style={{ backgroundColor: 'lightblue', padding: 10, justifyContent:'center'}}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: 'black' }}>
            SlideShow
          </Text>
        </View>

        <View style={styles.slide}>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Image source={item.img} style={styles.image} />
          <Text style={styles.text}>
            {item.textData}
          </Text>
        </View>
      </View>
    );
  };

  const onDone = () => {
    Alert.alert('Welcome',
      `Thank you for using SliderSampleApp! 
      Start exploring and Enjoy it!`,
      [{
        text: 'OK',
        onPress: () => console.log('Welcome alert closed')
      }
      ]);
    //
  }

  const renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={onDone}
        style={styles.doneButton}>
        <Text style={styles.doneButtonText}>DONE</Text>
      </TouchableOpacity >
    );
  };

  return (
    <AppIntroSlider data={slides}
      renderItem={getSlide}
      renderDoneButton={renderDoneButton}
      onDone={onDone} />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    padding:20,
    justifyContent: 'center', // align the items vertically
    alignItems: 'center',   // align the items horizontally
    backgroundColor: "#0f1f24",
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 20
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30
  },

  doneButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: 100
  },

  doneButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default SlideShow;
