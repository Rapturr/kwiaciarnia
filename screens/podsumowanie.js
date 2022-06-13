import React from "react";
import {Pressable, Text, View, Linking} from 'react-native';
import styles from './style'
import Banner from "./banner";
import { ScrollView } from "react-native-gesture-handler";



export default function Podsumowanie({navigation, route}) {
    const suma = route.params.suma;
    const payment = ()=>{
        Linking.openURL("https://storage.googleapis.com/kckbaza/success.html");
        navigation.navigate('ShoppingCart')
        route.params.clear()
    }
    if(global.variable <0){
        return(
            <View style={styles.koszykPrzycisk}>
                {navigation.navigate("ShoppingCart")}
            </View>
        ) 
    }
    else{

        return(
            <>
        <Banner />
        <ScrollView style={styles.darkBg}>

        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
            <Text style = {{color: '#917ab0', fontSize:20, marginTop: 50, marginLeft:'40%',}}>Suma: {suma}</Text>
        </View>

        <View style={styles.koszykPrzycisk}>
            <Pressable onPress={()=>{payment()}}>
                <Text style={styles.przyciskText}>Zapłać!</Text>
            </Pressable>
        </View>
        
        </ScrollView>
        </>
    ) 
    }
}
//navigation.navigate('ShoppingCart'), 