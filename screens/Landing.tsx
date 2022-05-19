import {StyleSheet } from 'react-native'
import {useEffect, useState} from 'react'
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons'; 


const Landing = () => {


    return (
        <View style={styles.container}>
            <AntDesign name="cloud" size={24} color="black" />
            

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,

    }
})


export default Landing