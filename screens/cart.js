import React, { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import {Pressable, Text, View } from 'react-native';
import styles from './style'
import KoszPrzedmiot from "./Przedmioty/koszPrzedmioty";
import Banner from "./banner";
import { ScrollView } from "react-native-gesture-handler";

var suma;

export default function ShoppingCart({navigation, route}) {
    const [kosz, setKosz] = useState([]);
    const [sum, setsum] = useState(suma);
    const [check, setcheck] = useState(global.variable);
    
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
        setcheck(global.variable)
        setKosz(route.params.kosz);
        fun();
        setsum(suma);
    });

    if(global.variable<0){
        return(
            <>
        <Banner />
        <ScrollView style={styles.darkBg}>
        
        <View>
            {kosz.map((item)=>(
                <KoszPrzedmiot key={Math.floor(Math.random()*10000)}
                item = {item}/>
                ))}
            <Text style={{color: '#917ab0', fontSize:20, marginTop: 30, marginLeft: 30}}>Suma: {sum}</Text>
        </View>

        <View style={styles.koszykPrzycisk}>
            <Pressable>
                <Text style={styles.przyciskText}>Musisz być zalogowany/a</Text>
            </Pressable>
            
            <Pressable onPress={()=>{clear(), navigation.navigate('ShoppingCart')}}>
                <Text style={styles.przyciskText}>Wyczyść koszyk</Text>
            </Pressable>
        </View>
        </ScrollView>
        </>
    )
    }
    else{

        return(
            <>
        <Banner />
        <ScrollView style={styles.darkBg}>
        <View>
            {kosz.map((item)=>(
                <KoszPrzedmiot key={Math.floor(Math.random()*10000)}
                item = {item}/>
                ))}
            <Text style={{color: '#917ab0', fontSize:20, marginTop: 30, marginLeft: 30}}>Suma: {sum}</Text>
        </View>

        <View style={styles.koszykPrzycisk}>
            <Pressable onPress={()=>{fun(), navigation.navigate('Podsumowanie', {suma:suma, clear:clear})}}>
                <Text style={styles.przyciskText}>Podsumowanie</Text>
            </Pressable>
            
            <Pressable onPress={()=>{clear(), navigation.navigate('ShoppingCart')}}>
                <Text style={styles.przyciskText}>Wyczyść koszyk</Text>
            </Pressable>
        </View>
        </ScrollView>
        </>
        ) 
    }
}
