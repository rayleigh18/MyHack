import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import LandingPage from './Stateless/LandingPage/LandingPage'
import RegisPage from "./Stateless/Regis/RegisPage";
import RekamMedis from "./Stateless/RekamMedis/RekamMedis";
import DataPribadi from "./Stateless/DataPribadi/DataPribadi"
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
              <Scene key = "signup">
                <Scene key = "signup1"
                  component = {RegisPage}
                  initial/> 
                <Scene key = "signup2"
                  component = {DataPribadi}
                  title = "Sign Up - 2"/>
                <Scene key = "signup3"
                  component = {RekamMedis}/>  
              </Scene>
              
              <Scene key = "login"
                component = {LoginPage}
                title = "Login"/>
              <Scene key = "isLoggedIn" renderBackButton = {() => renderBackButton()}>
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
