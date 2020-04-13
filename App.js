
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';


const App = () => {
  return (
      <SafeAreaView>
        <Text>Hello Nice</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={() =>console.log("Read button cklicked")}>
         <Text>Read Quran</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  buttonStyle: {
    marginRight:10,
    marginLeft:10,
    marginTop:300,
    paddingTop:7,
    paddingBottom:7,
    paddingRight:21,
    paddingLeft:21,
    borderRadius:30,
    backgroundColor: "gray",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
})
