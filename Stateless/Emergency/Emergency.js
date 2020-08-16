import React, { useState } from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Picker} from 'react-native';
import Device from "../../Device";
// import '../../index.css';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

var loc = 'Somewhere'
const Emergency = () =>{
    const [selectedValue, setSelectedValue] = useState("ambulance");
return(
    <View style = {styles.container}>
        <View style={styles.navBar}>
            <TouchableOpacity>
                <Icon style={styles.navItem} name="arrow-back" size={20}/>
            </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <Text style={styles.descService}>You are around {loc} area</Text>
            <Text style={styles.descService}>Which service will you need?</Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 30, width: 150, marginTop : 50, marginBottom : 30 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Ambulance" value="ambulance" />
                <Picker.Item label="FirstAid" value="first-aid" />
                <Picker.Item label="Doctor" value="doctor" />
                <Picker.Item label="Midwife" value="midwife" />
            </Picker>
            <TouchableOpacity>
                <Icon name="error" size={0.6*Device.Width} color={"#EF2B2B"} style={styles.emergencyIcon}/>
            </TouchableOpacity>
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
    descService : {
        marginTop : 20,
        fontSize : 17,
        fontFamily : 'Raleway',
        width : 0.6*Device.Width,
        alignContent : "center",
        alignItems : "center",
        textAlign : "center"
    },
    tabBarContainer : {
        flex : 1,
        justifyContent : 'flex-end',
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
    emergencyIcon : {
        alignItems : 'center',
    },
})


export default Emergency;
