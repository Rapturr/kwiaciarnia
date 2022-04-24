import React, { useState } from "react";
import {ImageBackground, Svg, Pressable, Text, View, Image, ScrollView } from 'react-native';
import { ZestawIcon, BukietyIconHl, FlowerBoxIcon, Obwod } from "../assets/icons";
import styles from './style'
import {BLista } from "./Przedmioty/bukietyLista";
import Przedmiot from "./Przedmioty/przedmiot";
import Banner from "./banner";


export default function Bukiety({navigation, route}) {
    const [items, SetItems] = useState([]);

    const navi = (zm)=>{
        navigation.push(zm)
    }
    const onToggle = (sciezka, cena, nazwa, opis, id) =>{
        navigation.push("Opis",{sciezka:sciezka, cena:cena, nazwa:nazwa, opis:opis, id:id, onAdd:(route.params.onAdd)})
    }

    return(
        <>
        <Banner />
        <View style={styles.Kategoria}>
            <Pressable onPress={() => { navi("Bukiety"); } }>
                <BukietyIconHl />
                <Text style={styles.Kat}>Bukiety</Text>
            </Pressable>
            <Pressable onPress={() => { navi("Flowerbox"); } }>
                <FlowerBoxIcon />
                <Text style={styles.Kat}>Flowerboxy</Text>
            </Pressable>
            <Pressable onPress={() => { navi("Zestawy"); } }>
                <ZestawIcon style={styles.zestawIconStyle} />
                <Text style={styles.Kat}>Zestawy</Text>
            </Pressable>
        </View>
        <ScrollView style={styles.darkBg}>
            <View style={styles.container}>
                <View style={styles.row}>
                    {BLista.map((item)=>(
                        <Przedmiot key={item.id}
                        item = {item}
                        onToggle={onToggle}/>
                    ))}
                </View>
            </View>
        </ScrollView></>
    ) 
}