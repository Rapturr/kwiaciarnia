import React from "react";
import {Pressable, Text, View } from 'react-native';
import styles from './style'
import Banner from "./banner";
import { ScrollView } from "react-native-gesture-handler";


export default function Podsumowanie({navigation, route}) {
    const suma = route.params.suma;
    return(
        <>
        <Banner />
        <ScrollView style={styles.darkBg}>

        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
            <Text style = {{color: '#917ab0', fontSize:20, marginTop: 50, marginLeft:'40%',}}>Suma: {suma}</Text>
        </View>

        <View style={styles.koszykPrzycisk}>
            <Pressable onPress={()=>{navigation.navigate('ShoppingCart'), route.params.clear()}}>
                <Text style={styles.przyciskTextKoszyk}>Zapłać!</Text>
            </Pressable>
        </View>
        
        </ScrollView>
        </>
    ) 
}
//navigation.navigate('ShoppingCart'), 