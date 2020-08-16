import React, {Component} from 'react';
import {Text, View, Button, Image,StyleSheet } from 'react-native';
import Device from "../../Device"
// import "../../index.css"
import data from '../../data/json/sample.json'
import HospitalItem from '../Component/HospitalItem';


export default class DetailResult extends Component {
    calc(){
        this.props.callback(this.props.)
    }
    render(){
        let hospital = this.props.hospital;
        return(
            <View style={styles.container}>
                <View style={styles.generalInfo}>
                    <Image source={require('../../data/img/hospital/' + String(hospital.img_src))} style={styles.image} />
                    <View style={styles.descContainer}>
                        <Text style={styles.hospitalName}><b>{hospital.hospital_name}</b></Text>
                        <Text style={styles.poly}>{hospital.poly}</Text>
                        <Text style={styles.capacity}>{hospital.capacity} Bed Available</Text>
                    </View>
                </View>
                <View style={styles.schedule}>
                    <Text stle={styles.scheduleTitle}>Available on</Text>
                    <View>
                        {hospital.schedule.map(r => <Text style={styles.timeAvail}>{r}</Text>)}
                    </View>
                </View>
            </View>
        );        
    }
}

const styles = StyleSheet.create({
    container : {
        padding: 15,
        flexDirection : 'row',
        backgroundColor : '#ffffff'
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
        fontSize : 26,
        fontFamily : 'Raleway-Regular',
        width : 150,
    },
    capacity : {
        marginTop : 10,
        marginBottom : 10,
        fontSize : 16,
        fontFamily : 'Raleway-Regular',
        fontStyle : 'italic',
        width : 150,
    },
    poly : {
        marginBottom : 20,
        marginLeft : 0.02*Device.Width,
        fontSize : 19,
        alignItems : 'center',
        alignContent : 'center',
        fontFamily : 'Raleway-Regular',
        color : '#2BA4B9'
    },

})