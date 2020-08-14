import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import device from "../../device";
import TextInput from "../TextInput/TextInput";

const RegisPage = () =>{
    const [user, onChangeUser] = React.useState(0);
    return(
        <View style = {styles.container}>
            <Text style = {styles.judul}>
                Registration
            </Text>
            <TextInput textIn = "Ayam" value = user onChangeText= onChangeUser />


        </View>
    );
}

const styles = StyleSheet.create({
    judul : {
        color : '#2BA4B9',
        fontFamily : 'Bebas Neue',
        fontStyle : 'normal',
        fontSize : 36,
        lineHeight:43,
        marginLeft : 15*(device.Width)/360,
        marginTop : 21*(device.Height)/640,
        height : 46*(device.Height)/640,
    },
    container : {
        backgroundColor : '#f9f9f9',
    }
})



export default RegisPage;