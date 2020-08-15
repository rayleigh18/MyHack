import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';

import LandingPage from './Stateless/LandingPage/LandingPage'
import RegisPage from "./Stateless/Regis/RegisPage";
import RekamMedis from "./Stateless/RekamMedis/RekamMedis";
import DataPribadi from "./Stateless/DataPribadi/DataPribadi"
import PendaftaranCheck from "./Stateless/PendaftaranCheck/PendaftaranCheck";
import LoginPage from "./Stateful/LoginPage/LoginPage";
import GetQueuee from "./Stateless/GetQueuee/GetQueuee"

// import GetQueuee from "./Stateless/GetQueuee/GetQueuee"


export default function App() {
  return (

        
        <Router>
          {/* <View styles = {styles.container}> */}
            <Stack key="root" hideNavBar>
              <Scene key="landing"
                component = {LandingPage}
                title="Landing Page"
                initial />
              <Stack key = "signup" >
                <Scene key = "signup1"
                  hideNavBar={true}
                  component = {RegisPage}/> 
                <Scene key = "signup2"
                  component = {DataPribadi}/>
                <Scene key = "signup3"
                  component = {RekamMedis}/>  
              </Stack>
              
              <Scene key = "login"
                component = {LoginPage}
                title = "Login"/>

              <Scene key = "isLoggedIn" renderBackButton = {() => renderBackButton()}>
                <Scene key = "checkDaftar"
                  component = {PendaftaranCheck}
                  title = "Check Register"
                  initial/>
                <Scene key = "getQueue"
                  component = {GetQueuee}
                  renderTitle = {
                    () => renderTitle()
                  } />
              </Scene>
              
            </Stack>

                
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
