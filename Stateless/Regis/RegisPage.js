import React from 'react';
import { StyleSheet, Text, View, CheckBox, Button } from 'react-native';
import Device from "../../Device"
import HeadInput from "../Component/HeadInput"
import CardView from 'react-native-cardview'
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const RegisPage = () =>{
    const [user, onChangeUser] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [nohp, onChangeNohp] = React.useState("");
    const [pass, onChangePass] = React.useState("");
    const [konf, onChangeKonf] = React.useState("");
    const [check , onChangeCheck] = React.useState(false);
return(
    
    <View style = {styles.container}>
    <ScrollView>
    <Text style = {styles.judul}>
            Registration
        </Text>
        <HeadInput name = "Username" 
                    value = {user} 
                    onChangeText = {onChangeUser}
                    placeholder = "Username"/>
        <HeadInput name = "Email" 
                    value = {email} 
                    onChangeText = {onChangeEmail}
                    placeholder = "Username"/>
        <HeadInput name = "Phone Number" 
                    value = {nohp} 
                    onChangeText = {onChangeNohp}
                    placeholder = "Number"/>
        <HeadInput name = "Password" 
                    value = {pass} 
                    onChangeText = {onChangePass}
                    secure = {true}
                    placeholder = "Pass"/>
        <HeadInput name = "Password Confirmation" 
                    value = {konf} 
                    secure = {true}
                    onChangeText = {onChangeKonf}
                    placeholder = "Confirmation"/>


        <View style = {styles. agree}>
            <CheckBox style = {styles.checkBox} value={check} onValueChange={onChangeCheck}/>
            <Text style = {{
                padding : 0,
                marginTop : 5,
            }}>I have read license and agreement GO-RS </Text>
        </View>
        <View style = {styles.buttons}>
            <Button title = "NEXT"
                color = "#278CA1"
                onPress = {() =>{
                    Actions.signup2();
                }}
            />
        </View>  
    </ScrollView>
             
        
    </View>
    
);
}

const styles = StyleSheet.create({
    judul : {
        color : '#278CA1',
        fontFamily : "BebasNeue-Regular",
        fontSize : 46,
        marginBottom : 20,
    },
    container : {
        backgroundColor : '#f9f9f9',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 10,

    },
    checkBox :{
        padding : 0,
    },
    agree : {
        flex : 1,
        flexDirection : "row",
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


export default RegisPage;
