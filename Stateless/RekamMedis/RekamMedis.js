import React from 'react';
import { StyleSheet, Text, View, CheckBox, Button } from 'react-native';
import Device from "../../Device"
import HeadInput from "../Component/HeadInput"
import CardView from 'react-native-cardview'

const DataPribadi = () =>{
    const [name, onChangeName] = React.useState("");
    const [birth, onChangeBirth] = React.useState("");
    const [id, onChangeId] = React.useState("");
    const [address, onChangeAddress] = React.useState("");
    const [work, onChangeWork] = React.useState("");
return(
    
    <View style = {styles.container}>
        <Text style = {styles.judul}>
            REKAM MEDIS
        </Text>
        <HeadInput name = "Weight" 
                    value = {name} 
                    onChangeText = {onChangeName}
                    placeholder = "in Kg"/>
        <HeadInput name = "Height" 
                    value = {birth} 
                    onChangeText = {onChangeBirth}
                    placeholder = "on cm"/>
        <HeadInput name = "Blood Type" 
                    value = {id} 
                    onChangeText = {onChangeId}
                    placeholder = "Type"/>
        <HeadInput name = "Disease History" 
                    value = {address} 
                    onChangeText = {onChangeAddress}
                    secure = {true}
                    placeholder = "History"/>
        <HeadInput name = "Allergy" 
                    value = {work} 
                    secure = {true}
                    onChangeText = {onChangeWork}
                    placeholder = "Allergy"/>

        <View style = {styles.buttons}>
            <Button title = "NEXT"
                color = "#278CA1"
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


export default DataPribadi;
