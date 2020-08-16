import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';

import LandingPage from './Stateless/LandingPage/LandingPage'
import RegisPage from "./Stateless/Regis/RegisPage";
import RekamMedis from "./Stateless/RekamMedis/RekamMedis";
import DataPribadi from "./Stateless/DataPribadi/DataPribadi"
import PendaftaranCheck from "./Stateless/PendaftaranCheck/PendaftaranCheck";
import LoginPage from "./Stateful/LoginPage/LoginPage";
import GetQueuee from "./Stateless/GetQueuee/GetQueuee"
import QueueeCounter from "./Stateless/QueueeSystem/QueueeCounter";

// import GetQueuee from "./Stateless/GetQueuee/GetQueuee"


export default class App extends Component {
  state = {
    isLogIn : false,
  }
  isLogInVar(){
    return(
      <Stack key = "login" >
        <Scene key = "checkDaftar"
        hideNavBar
          component = {PendaftaranCheck}
          title = "Check Register"/>
        <Scene key = "getQueue"
        hideNavBar
          component = {GetQueuee}
          renderTitle = {
            () => renderTitle()
          } />
        <Scene key = "queueCount"
          hideNavBar
          component={QueueeCounter}/>
      </Stack>
    );
  }
  notIsLogInVar(){
    return(
    <Scene key = "login"
    component = {LoginPage}
    title = "Login"/> 
    );
  }
  render(){
    
    return (        
      <Router>
        {/* <View styles = {styles.container}> */}
          <Stack key="root" >
            <Scene key="landing"
              component = {LandingPage}
              title="Landing Page"
              initial />

            <Stack key = "signup" >
              <Scene key = "signup1"
                hideNavBar
                component = {RegisPage}/> 
              <Scene key = "signup2"
                hideNavBar
                component = {DataPribadi}/>
              <Scene key = "signup3"
                  hideNavBar
                component = {RekamMedis}/>  
            </Stack>
            
          {this.state.isLogIn ? this.isLogInVar() : this.notIsLogInVar()}
            
          </Stack>

              
        {/* </View> */}
        
      
      </Router>   
);
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent : 'center',
    alignItems :'center',
    

  },
});
