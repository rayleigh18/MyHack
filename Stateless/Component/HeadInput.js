import React from 'react';
import {Text, View, TextInput } from 'react-native';
import Device from "../../Device"
import '../../index.css';

const HeadInput = (props) =>{
    return(
        <View>
            <Text style = {{
                    
                    height: 20,
                    marginTop : 0,
                    padding : 0,
                    
                    fontFamily: "Raleway",
                    fontStyle : "normal",
                    fontWeight : "normal",
                    fontSize : 23,
                    lineHeight : 23
                }}>
                {props.name}
            </Text>
            <TextInput 
                secureTextEntry={props.secure}
                value = {props.value}
                onChangeText={text => props.onChangeText(text)}
                style={{
                    width : 286,
                    padding : 0,
                    
                    marginTop : 0,
                    marginBottom : 10,
                    borderRadius: 10,
                    fontSize : 15,
                    marginLeft : 3,
                }}
                placeholder = {props.placeholder}
            />
        </View>
    )
}

HeadInput.defaultProps = {
    secure : false
}

export default HeadInput;