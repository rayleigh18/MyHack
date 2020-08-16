import React from 'react';
import { StyleSheet, Text, View, CheckBox, Button } from 'react-native';
import Device from "../../Device"
import HeadInput from "../Component/HeadInput"
import CardView from 'react-native-cardview'
import { Actions } from 'react-native-router-flux';

const RekamMedis = () =>{
    const [weight, onChangeweight] = React.useState("");
    const [height, onChangeheight] = React.useState("");
    const [bloodType, onChangeBloodtype] = React.useState("");
    const [disease, onChangedisease] = React.useState("");
    const [allergy, onChangeallergy] = React.useState("");
return(
    
    <View style = {styles.container}>
        <Text style = {styles.judul}>
            REKAM MEDIS
        </Text>
        <HeadInput name = "Weight" 
                    value = {weight} 
                    onChangeText = {onChangeweight}
                    placeholder = "in Kg"/>
        <HeadInput name = "Height" 
                    value = {height} 
                    onChangeText = {onChangeheight}
                    placeholder = "on cm"/>
        <HeadInput name = "Blood Type" 
                    value = {bloodType} 
                    onChangeText = {onChangeBloodtype}
                    placeholder = "Type"/>
        <HeadInput name = "Disease History" 
                    value = {disease} 
                    onChangeText = {onChangedisease}
                    placeholder = "History"/>
        <HeadInput name = "Allergy" 
                    value = {allergy} 
                    onChangeText = {onChangeallergy}
                    placeholder = "Allergy"/>

        <View style = {styles.buttons}>
            <Button title = "NEXT"
                color = "#278CA1"
                onPress = {()  =>{
                    Actions.login();
                }}
            />
        </View>
        
        
    </View>
    
);
}

const styles = StyleSheet.create({
    judul : {
        color : '#278CA1',
        fontSize : 46,
        fontFamily : "BebasNeue-Regular",
        marginBottom : 20,
    },
    container : {
        backgroundColor : '#f9f9f9',
        marginRight : 14,
        marginLeft : 15,
        marginTop : 10,
    },
    buttons : {
        position : "relative",
        marginTop : 15,
        marginLeft : 43.89*Device.Width/100,
        width : 45*Device.Width/100,
        height : 44,        
        // marginRight : 13,
    },  

})


export default RekamMedis;
