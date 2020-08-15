import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

// import LandingPage from './Stateless/LandingPage/LandingPage'
import RegisPage from "./Stateless/Regis/RegisPage";
import PendaftaranCheck from "./Stateless/PendaftaranCheck/PendaftaranCheck";
import LoginPage from "./Stateful/LoginPage/LoginPage";
// import GetQueuee from "./Stateless/GetQueuee/GetQueuee"


export default function App() {
  return (
    <View style = {styles.container}>
      <ScrollView>
        
  <Router>
        <Scene key="root">

          {/* <Scene key="landing"
            component = {LandingPage}
            title="Landing Page"
            initial /> */}
          
        </Scene>
        
      </Router>    
      </ScrollView>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',

  },
});
