import React, { Component } from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import Device from "../../Device";
// import '../../index.css';
import data from '../../data/json/sample.json'
import HospitalItem from '../Component/HospitalItem';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
  
const GetQueuee = () =>{

return(
    <View style = {styles.container}>
        <View style={styles.navBar}>
            <TouchableOpacity>
                <Icon style={styles.navItem} name="arrow-back" size={20}/>
            </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <Text style={styles.successMessage}>Your Order Has Been Processed!</Text>
            <Icon name="done-all" size={100} color={"#278CA1"} style={styles.doneIcon}/>
            <Text style={styles.reservationMessage}>Please visit <a style={{color : '#278CA1'}}>PHC Hospital Surabaya</a> on <a style={{color : '#278CA1'}}>Saturday, 22th August 2020</a> before <a style={{color : '#278CA1'}}>12.00</a></Text>
            <Text style={styles.queueDesc}>Your Queuee Number Is</Text>
            <Text style={styles.queueeNum}><b>14</b></Text>
        </View>
        <View style={styles.buttonPlace}>
            <Button title = "Back to Homepage"
                    color = "#278CA1"
            />
            <Button title = "Cancel Order"
                color = "#278CA1"
            />
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
        marginTop : 5,
        fontSize : 71,
        fontFamily : 'Raleway',
        color : '#278CA1'
    },
    queueDesc : {
        fontSize : 20,
        fontFamily : 'Raleway',
    },
    successMessage : {
        marginBottom : 20,
        fontSize : 29,
        fontFamily : 'Raleway',
        width : 0.5*Device.Width,
        textAlign : 'center',
        marginTop : 30
    },
    reservationMessage : {
        fontSize : 22,
        fontFamily : 'Raleway',
        width : 0.5*Device.Width,
        textAlign : 'center',
        marginBottom : 20,
        marginTop : 10
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
    buttonPlace : {
        paddingHorizontal : 0.3*Device.Width,
        flex : 1,
        justifyContent : "space-around",
    },

    buttons : {
        paddingTop : 10,
        fontFamily : 'Raleway',
        alignItems : 'center',
    },
})


export default GetQueuee;
