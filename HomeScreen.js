import React from "react";
import { StyleSheet, View, StatusBar, Image, Text, TouchableOpacity, ImageBackground} from "react-native";
import { Button } from "react-native-elements";




const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <ImageBackground
          source={require('./images/rose.jpeg')}
          style={{height: '100%', width: '100%'}}
          >
            
            <Text style={{color:'darkblue', marginTop: 150, marginLeft: 100, fontSize: 50, fontFamily: 'times new roman', fontStyle:'italic', fontWeight:'bold'}}>QUOTE </Text>
            <Text style={styles.subtle}>"Sentence of Encouragement"</Text>
           
            <View style= {styles.btn}>
              <TouchableOpacity onPress={() => navigation.navigate('Content')}>
             <Text style={styles.txt}>Dive in</Text> 
            </TouchableOpacity>
            </View>
          
            
          </ImageBackground>
          </View>
    );
}

const styles =StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
txt: {
  fontSize: 30,
  color: 'darkblue',
  textAlign: 'center',
  padding: -20,
  backgroundColor: 'deeppink',
  borderWidth: 1,
  borderRadius: 15,
  marginLeft: 100,

},
btn: {
  marginTop: 100,
  marginLeft: 30,
  height: 50,
  width: 240,
},
subtle: {
  fontSize: 30,
  marginTop: 150,
  color: 'maroon',
  fontWeight: 'bold',
  textAlign: 'center',
  fontFamily: 'times new roman'
},
  
  
})
export default HomeScreen;