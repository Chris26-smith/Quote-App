import React from "react";
import { StyleSheet, View, StatusBar, Image, Text, TouchableOpacity, ImageBackground, ScrollView} from "react-native";
import { Button } from "react-native-elements";




const HomeScreen = ({ navigation }) => {
    return (
      <ScrollView>
        <View style={styles.container}>
      
      <TouchableOpacity onPress={() => navigation.navigate('Word')}>
      <Image
        source={require('./images/content/qu.jpg')}
        style={styles.image}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Education')}>
      <Image
        source={require('./images/content/educ.jpg')}
        style={styles.image}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Books')}>
      <Image
        source={require('./images/content/books.jpg')}
        style={styles.image}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
      <Image
        source={require('./images/content/frien.jpg')}
        style={styles.image}
      />
      </TouchableOpacity>
       
    </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow',
  },
  image: {
    width: 350, 
    height: 250, 
    margin: 20,
    borderRadius: 30, 
  },
  
});

export default HomeScreen;