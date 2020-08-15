import React, { Component } from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import Device from "../../Device";
import '../../index.css';
import data from '../../data/json/sample.json'
import HospitalItem from '../Component/HospitalItem';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
  
const QueueeCounter = () =>{

return(
    <View style = {styles.container}>
        <View style={styles.navBar}>
            <TouchableOpacity>
                <Icon style={styles.navItem} name="arrow-back" size={20}/>
            </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <Text style={styles.queueeNum}><b>16</b></Text>
            <Text style={styles.queueDesc}>Current Queuee Number</Text>
            <Text style={styles.queueeNum}><b>28</b></Text>
            <Text style={styles.queueDesc}>Your Queuee Number</Text>
            <Text style={styles.timeEst}>You turn will begin about 26 minutes later</Text>
            <Text style={styles.additionalText}>While waiting your turn, You can read or health articles <a style={{color : '#278CA1'}}>here</a></Text>
        </View>
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
    container : {
        backgroundColor : '#f9f9f9',
        marginRight : 14,
        marginLeft : 15,
        marginTop : 10,
    },
    navBar : {
        height : 0.05*Device.Height,
        backgroundColor : '#000000',
        elevation : 3,
        paddingHorizontal : 15,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    navItem : {
        color : '#2BA4B9'
    },
    body :{
        flex : 1,
        alignItems : "center",
        alignContent : 'center'
    },
    queueeNum : {
        marginTop : 0.1*Device.Height,
        fontSize : 71,
        fontFamily : 'Raleway',
        color : '#278CA1'
    },
    queueDesc : {
        fontSize : 24,
        fontFamily : 'Raleway',
    },
    timeEst : {
        marginBottom : 0.1*Device.Height,
        fontSize : 15,
        fontFamily : 'Raleway',
        color : '#2BA4B9'
    },
    additionalText : {
        fontSize : 17,
        fontFamily : 'Raleway',
        width : 0.5*Device.Width,
        textAlign : 'center',
        marginBottom : 20,
        marginTop : 50
    },
    tabBarContainer : {
        flex : 1,
        justifyContent : 'flex-end',
    },
    tabBar : {
        bottom : 0,
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


export default QueueeCounter;
