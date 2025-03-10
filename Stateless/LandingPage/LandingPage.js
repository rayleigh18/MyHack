import React, { Component } from 'react'
import { StyleSheet, Text, View, CheckBox, Button, Image } from 'react-native';
import Device from "../../Device";
import {Actions} from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';
// import '../../index.css';

var landingImage = require ('../../data/img/landing.jpg');
const LandingPage = () =>{
return(
    <View style = {styles.container}>
    <ScrollView>
    <Text style = {styles.appName}>
            GO-RS
        </Text>
        <Image source={landingImage} style={styles.image} />
        <Text style={styles.openingText}>Health is really important for human. Always keep our healthy with GO-RS </Text>
        <View style = {styles.buttons}>
            <Button title = "Register Now!"
                color = "#278CA1"
                onPress = {() => Actions.signup()}
            />
            {/* diteken ke register  */}
        </View>
        <Text style={styles.loginText}>Already have an Account?</Text>
        <Text style = {styles.loginText} 
        onPress = {() => Actions.login()}> Login</Text>
    </ScrollView>
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        justifyContent : 'center',
        alignItems :'center',
      },
    appName : {
        color : '#278CA1',
        fontFamily : 'BebasNeue',
        fontSize : 86,

        marginBottom : 0.06*Device.Height,
        marginLeft : 0.05*Device.Width,
    },
    image : {
        height : 0.3*Device.Height,
        width : 0.7*Device.Width,
        marginBottom : 20,
        alignItems : "center",
        alignContent : 'center'
    },
    openingText : {
        fontSize : 14,
        width : 0.7*Device.Width,
        fontFamily : 'Sansation',
        alignContent:'center',
        alignItems : 'center',
        textAlign : 'center',
        marginBottom : 0.1*Device.Height,
    },
    loginText : {
        fontSize : 11,
        fontFamily : 'Sansation',
        width : 0.7*Device.Width,
        position : 'relative',
        alignContent:'center',
        alignItems : 'center',
        textAlign : 'center',
        color : '#278CA1',
    },
    buttons : {
        marginTop : 15,
        fontFamily : 'Raleway',
        alignItems : 'center',
        width : 0.7*Device.Width,
        height : 44,
    },
})


export default LandingPage;
