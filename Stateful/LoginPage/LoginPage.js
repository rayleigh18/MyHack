import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import Device from "../../Device";
import {main_logo} from "../../assets/img/index";


export default class LoginPage extends Component{
    state = {
        username : '',
        password : ''
    }
    constructor(){
        super();
        
    }
    handleUsername = (text) =>{
        this.setState({username : text})
    }
    handlePassword = (text) =>{
        this.setState({password : text})
    }
    handleSubmit = () => {
        alert(this.state.username, this.state.password)
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.container_in}>
                    <Text style = {styles.judul}>GO-RS</Text> 
                    <Image source={main_logo} style={styles.mainLogo} />
                    <Text >Username</Text>
                    <TextInput style = {styles.input}
                    value = {this.state.username}
                    onChangeText = {this.handleUsername}/>
                    <Text>Password</Text>
                    <TextInput style = {styles.input}
                                secureTextEntry = {true}
                                onChangeText= {this.handlePassword}
                                value = {this.state.password} />
                    <Text style = {{
                        fontSize : 11,
                        color : '#278ca1',
                        padding : 0,
                        margin : 0,

                    }}>Forgot Password?</Text>
                    <Button title = "Submit"
                            color = "#278CA1"
                            onPress = {this.handleSubmit}/>
                    <Text>First Time? Sign Up</Text>
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#2BA4B9',
        height : Device.Height,
        alignItems : "center",
    },
    container_in : {
        backgroundColor : '#F9F9F9',
        width : 300*Device.Width/360,
        
        
        marginTop : 3*Device.Height/100,
        alignItems: 'center',
        flex : 1,
        // justifyContent : 'center',

    },
    judul : {
        color : '#278CA1',
        fontFamily : "BebasNeue-Regular",
        fontSize : 54,
        marginTop : 44*Device.Height/640,
        marginBottom : 15*Device.Height/100,
    },

    mainLogo : {
        width : 117,
        height : 102,
        marginBottom : 10*Device.Height/100,  
    },
    input : {
        width : 286,
        padding : 1,
        
        marginTop : 5,
        marginBottom : 5,
        borderRadius: 10,
        fontSize : 15,
        marginLeft : 3,

        borderColor : '#2BA4B9',
        borderWidth : 1,
        textAlign : 'center',
    },


})