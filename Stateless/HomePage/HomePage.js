import React, { Component } from 'react'
import {TouchableOpacity, StyleSheet, Text, View, CheckBox, Button, Image } from 'react-native';
import Device from "../../Device";
// import '../../index.css';
import Icon from 'react-native-vector-icons/MaterialIcons'

var landingImage = require ('../../data/img/landing.jpg');
const HomePage = () =>{

return(
    <View style = {styles.container}>
        <Text style = {styles.appName}>
            GO-RS
        </Text>
        <Image source={landingImage} style={styles.image} />
        <Text style={styles.openingText}>Health is really important for human. Always keep our healthy with <a style={{color : "#278CA1"}}>GO-RS</a> </Text>
        <Text style={styles.commandText}>Click One of Our Menu to Use Our Facility</Text>
        <View style={styles.tabBarContainer}>
            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name="add-circle-outline" size={30}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name="error" size={30}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name="home" size={30}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name="event-available" size={30}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name="person" size={30}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
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
    commandText : {
        fontSize : 17,
        fontFamily : 'Sansation',
        width : 0.7*Device.Width,
        position : 'relative',
        alignContent:'center',
        alignItems : 'center',
        textAlign : 'center',
        marginBottom : 0.1 * Device.Height
    },
    tabBarContainer : {
        flex : 1,
        top : 0.9*Device.Height
    },
    tabBar : {
        backgroundColor : "#c4c4c4",
        height : 0.07*Device.Height,
        borderTopWidth : 0.5,
        borderColor : '#e5e5e5',
        flexDirection : 'row',
        justifyContent : "space-around",
    },
    tabItem : {
        alignItems : 'center',
        justifyContent : 'center',
    },

    buttons : {
        marginTop : 15,
        fontFamily : 'Raleway',
        alignItems : 'center',
        width : 0.7*Device.Width,
        height : 44,
    },
})


export default HomePage;
