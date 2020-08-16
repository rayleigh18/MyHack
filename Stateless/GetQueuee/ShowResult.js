import React, { Component } from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import Device from "../../Device";
// import '../../index.css';
import data from '../../data/json/sample.json'
import HospitalItem from '../Component/HospitalItem';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import './DetailResult'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

  
export default class ShowResult extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.navBar}>
                    <TouchableOpacity>
                        <Icon style={styles.navItem} name="arrow-back" size={20}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                <Text style={styles.descResult}>Based on your input, we recommend you to visit hospitals below</Text>
                    <FlatList
                    data={data.info}
                    renderItem={(hospital) => <HospitalItem hospital={hospital.item}/>}
                    keyExtractor = {(item) => item._id}
                    ItemSeparatorComponent={()=><View style={{height : 0.05*Device.Height, backgroundColor : 'e5e5e5'}}/>}
                    />
                </View>
                
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
        );        
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#f9f9f9',
        marginRight : 14,
        marginLeft : 15,
        marginTop : 10,
    },
    descResult : {
        fontSize : 16,
        fontFamily : 'Raleway-Regular',
        marginBottom : 20,
        marginTop : 20,
        width : 0.7*Device.Width,
        flex :1
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
        flex : 1
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
        fontFamily : 'Raleway-Regular',
        alignItems : 'center',
        width : 0.7*Device.Width,
        height : 44,
    },
})
