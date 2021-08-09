//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button} from 'react-native';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingScreens from './app/screens/ListingScreens';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';





export default function App() {
  return (

    // <WelcomeScreen />
    //<ViewImageScreen ></ViewImageScreen>
    // <Card title="Red jacket for sale!"
    // subtitle="$100"
    // image={require("./assets/jacket.jpg")} />
    // <ListingDetailsScreen></ListingDetailsScreen>
    //<AccountScreen></AccountScreen>
  
    <SafeAreaView style={styles.container}>

    <ListingScreens></ListingScreens>
    </SafeAreaView>
  );
}








const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#f8f4f4",
    
     
      
     // padding: Platform.OS==='android'?StatusBar.currentHeight : 0
    // padding: Platform.OS==='android'?0:50
    },
  
    
 
});
