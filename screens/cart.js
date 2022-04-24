import React, { useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'
import KoszPrzedmiot from "./Przedmioty/koszPrzedmioty";
import Banner from "./banner";
import { ScrollView } from "react-native-gesture-handler";

var suma;

export default function ShoppingCart({navigation, route}) {
    const [kosz, setKosz] = useState([]);
    const [sum, setsum] = useState(suma);
    
    const fun=()=>{
        //console.log(route.params.kosz);
        suma = 0;
        {kosz.map((item)=>{
            suma += item.cena;
        })}
    }
    const clear=()=>{
        while(kosz.length>0){
            kosz.pop();
        }
    }

    useFocusEffect(() => {
        setKosz(route.params.kosz);
        fun();
        setsum(suma);
    });
    
    return(
        <>
        <Banner />
        <ScrollView style={styles.darkBg}>
        
        <View>
            {kosz.map((item)=>(
                <KoszPrzedmiot key={Math.floor(Math.random()*10000)}
                item = {item}/>
            ))}
            <Text>Suma: {sum}</Text>
        </View>

        <View style={styles.koszykPrzycisk}>
            <Pressable onPress={()=>{fun(), navigation.navigate('Podsumowanie', {suma:suma, clear:clear})}}>
                <Text style={styles.przyciskTextKoszyk}>Podsumowanie!</Text>
            </Pressable>
        </View>
        </ScrollView>
        </>
    ) 
}
