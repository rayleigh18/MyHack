import React, {Component} from 'react';
import {Text, View, Button, Image,StyleSheet } from 'react-native';
import Device from "../../Device"
import "../../index.css"

export default class HospitalItem extends Component {
    render() {
        let hospital = this.props.hospital;
        return(
            <View style={styles.container}>
                <Image source={require('../../data/img/hospital/' + String(hospital.img_src))} style={styles.image} />
                <View style={styles.descContainer}>
                    <Text style={styles.hospitalName}><b>{hospital.hospital_name}</b></Text>
                    <Text style={styles.capacity}>{hospital.capacity} Bed Available</Text>
                    <Text>. . .</Text>
                </View>
                <View style={styles.detailInfo}>
                    <Text style={styles.poly}>{hospital.poly}</Text>
                    <Button title = "See"
                        color = "#278CA1"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        padding: 15,
        flexDirection : 'row'
    },
    descContainer : {
        paddingHorizontal: 0.02*Device.Width,
        flex : 1,
        marginLeft: 10
    },
    image : {
        marginTop : 5,
        marginLeft : 10,
        height : 0.1*Device.Height,
        width : 0.1*Device.Height,
        borderRadius : 100
    },
    hospitalName : {
        fontSize : 17,
        fontFamily : 'Raleway',
        width : 150,
    },
    capacity : {
        marginTop : 10,
        marginBottom : 10,
        fontSize : 10,
        fontFamily : 'Raleway',
        width : 150,
    },
    detailInfo : {
        paddingHorizontal : 0.2*Device.Width,
        flex : 1
    },
    poly : {
        marginBottom : 20,
        marginLeft : 0.02*Device.Width,
        fontSize : 10,
        alignItems : 'center',
        alignContent : 'center',
        fontFamily : 'Raleway',
        color : '#2BA4B9'
    },
    button : {
        marginTop : 15,
        fontFamily : 'Raleway',
        alignItems : 'center',
        alignContent : "center",
        height : 26,
    }

})