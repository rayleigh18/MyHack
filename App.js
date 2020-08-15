import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import LandingPage from './Stateless/LandingPage/LandingPage'
import RegisPage from "./Stateless/Regis/RegisPage";
import PendaftaranCheck from "./Stateless/PendaftaranCheck/PendaftaranCheck";
import LoginPage from "./Stateful/LoginPage/LoginPage";
// import GetQueuee from "./Stateless/GetQueuee/GetQueuee"


export default function App() {
  return (

        
        <Router>
          {/* <View styles = {styles.container}> */}
            <Scene key="root">
              <Scene key="landing"
                component = {LandingPage}
                title="Landing Page"
                initial />

              <Scene key = "signup"
                component = {RegisPage}
                title = "Sign Up"/>
              <Scene key = "login"
                component = {LoginPage}
                title = "Login"/>
              <Scene key = "isLoggedIn">
                <Scene key = "checkDaftar"
                  component = {PendaftaranCheck}
                  title = "Check Register"
                  initial/>
                <Scene key = "login"
                  component = {LoginPage}
                  title = "Login"/>
              </Scene>
              
            </Scene>

                
          {/* </View> */}
          
        
        </Router>    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent : 'center',
    alignItems :'center',
    

  },
});
