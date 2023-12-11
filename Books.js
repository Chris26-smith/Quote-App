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
          source={require('./images/content/blue.jpg')}
          style={styles.img}
          >
        <View>
        <Image source={require('./images/books/book1.jpg')}
        style={styles.Image}/>

<Image source={require('./images/books/book2.jpg')}
        style={styles.Image}/>

<Image source={require('./images/books/book3.jpg')}
        style={styles.Image}/>

<Image source={require('./images/books/book4.jpg')}
        style={styles.Image}/>

<Image source={require('./images/books/book5.jpg')}
        style={styles.Image}/>

<Image source={require('./images/books/book6.jpg')}
        style={styles.Image}/>

<Image source={require('./images/books/book7.jpg')}
        style={styles.Image}/>
        </View>  

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
    height: 300,
    width: 300,
    marginTop: 20,
    marginLeft: 50,
    borderRadius: 30, 
    borderWidth: 3,
    resizeMode: 'contain'
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

export default TodoApp;
