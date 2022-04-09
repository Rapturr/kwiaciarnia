import React from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'
import Banner from "./banner";

export default function Userprofile({navigation}) {

    return(
        <>
        <Banner />
            <View style={styles.container}>
                <Pressable onPress={()=>{navigation.push("Login")}}>
                    <Text style={styles.przyciskText}>Zaloguj się</Text>
                </Pressable>
            </View>
        </>
    ) 
}
