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
          style={{height: '100%', width: '100%'}}
          >
        <Text style= {styles.txt} >A man is not entirely the master of his own destiny. A man is also the child of circumstances, of difficulties, of struggle. Problems gradually sculpt him like a lathe sculpts a piece of metal. <Text style = {styles.name}>~Fidel Castro (My Life, A Spoken Autobiography)</Text></Text>

        <Text style= {styles.txt} >A man is not entirely the master of his own destiny. A man is also the child of circumstances, of difficulties, of struggle. Problems gradually sculpt him like a lathe sculpts a piece of metal. <Text style = {styles.name}>~Fidel Castro (My Life, A Spoken Autobiography)</Text></Text>

        <Text style= {styles.txt} >A man is not entirely the master of his own destiny. A man is also the child of circumstances, of difficulties, of struggle. Problems gradually sculpt him like a lathe sculpts a piece of metal. <Text style = {styles.name}>~Fidel Castro (My Life, A Spoken Autobiography)</Text></Text>

        <Text style= {styles.txt} >A man is not entirely the master of his own destiny. A man is also the child of circumstances, of difficulties, of struggle. Problems gradually sculpt him like a lathe sculpts a piece of metal.</Text>

       
          </ImageBackground>


         </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 15,
    fontFamily: 'times new roman',
    padding: 30,
    borderRadius: 20,
    borderWidth: 2,
    width: 350,
    marginLeft: 20,
    marginTop: 20,
    color: 'black',
  },
});

export default TodoApp;
