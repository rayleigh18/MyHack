import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import device from "../../device"

const RegisPage = () =>(
    <View style = {styles.container}>
        <Text style = {styles.judul}>
            Registration
        </Text>    
    </View>
    
)

const styles = StyleSheet.create({
    judul : {
        color : '#278CA1',
        fontSize : 46,
        marginLeft : 15*(device.Width)/360,
    },
    container : {
        backgroundColor : '#f9f9f9',
    }
})



export default RegisPage;