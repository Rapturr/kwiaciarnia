import React, { useEffect, useState } from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'
import Banner from "./banner";
import { ScrollView } from "react-native-gesture-handler";


var suma;
export default function Podsumowanie({navigation, route}) {
    const suma = route.params.suma;
    return(
        <>
        <Banner />
        <ScrollView style={styles.darkBg}>

        <View>
            <Text style = {{color: 'rgba(130,200,150,255)', fontSize:20, marginTop: 50, marginLeft: 10}}>Suma: {suma}</Text>
        </View>

        <View style={styles.koszykPrzycisk}>
            <Pressable onPress={()=>{navigation.navigate('ShoppingCart'), route.params.clear()}}>
                <Text style={styles.przyciskTextKoszyk}>Kup!</Text>
            </Pressable>
        </View>
        
        </ScrollView>
        </>
    ) 
}
//navigation.navigate('ShoppingCart'), 