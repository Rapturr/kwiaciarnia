import React from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './style'
import Banner from "./banner";

//sciezka, cena, nazwa, opis, id

export default function Opis({navigation, route}) {
    const id = route.params.id;
    const nazwa = route.params.nazwa;
    const cena = route.params.cena;
    const sciezka = route.params.sciezka;
    const opis = route.params.opis;

    
    return(
    <>
        <Banner />
        <View style={styles.containerOpis}>
            <Image style={styles.image} source={{uri: (sciezka)}}/>
            <Text style={styles.opisy}>{nazwa}</Text>
            <Text style={styles.opisy}>Cena: {cena} zł</Text>
            <Text style={styles.opisy}>{opis}</Text>
            <TouchableOpacity style={{marginTop:20, justifyContent: 'center',}} onPress={()=>{route.params.onAdd(id,nazwa,cena,sciezka)}}>
                <Text style={styles.przyciskText}>Dodaj do koszyka</Text>
            </TouchableOpacity>
        </View>
    </>
    ) 
}
