import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import device from "../../device";
import normalize from 'normalize-package-data';

const TextInput = (props) => {
    return(
        <>
        <Text style = {styles.head}>
            {props.textIn}
        </Text>

        <TextInput 
            style = {styles.input}
            onChangeText = {text => props.onChangeText(text)}
            value = {props.value}
        />
        </>
    );
};


const styles = StyleSheet.create({
    head : {
        color : '#000000',
        marginLeft : 15*(device.Width)/360,

        fontFamily: 'Raleway',
        fontStyle : 'normal',
        fontWeight : 'normal',
        fontSize : 20,
        lineHeight : 23,
    },
    input :{
        width : 286,
        height : 42,
        color : '#FFFFFF'
    }
});

export default TextInput;