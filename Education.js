import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';


const TodoApp = ({navigation}) => {
  
  return (
    <ScrollView>
      <View style={styles.container}>
      <ImageBackground
          source={require('./images/rose.jpeg')}
          style={{height: '100%', width: '100%', resizeMode: 'cover',}}
          >
        <Image source={require('./images/edu/edu1.jpg')}
        style={styles.Image}/>

<Image source={require('./images/edu/edu2.jpg')}
        style={styles.Image}/>

<Image source={require('./images/edu/edu3.jpg')}
        style={styles.Image}/>

<Image source={require('./images/edu/edu4.jpg')}
        style={styles.Image}/>

<Image source={require('./images/edu/edu5.jpg')}
        style={styles.Image}/>

<Image source={require('./images/edu/edu6.jpg')}
        style={styles.Image}/>

<Image source={require('./images/edu/edu7.jpg')}
        style={styles.Image}/>  

      </ImageBackground>


         </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    height: 350,
    width: 300,
    marginTop: 20,
    marginLeft: 50,
    borderRadius: 30, 
    borderWidth: 3,
  }
});

export default TodoApp;
