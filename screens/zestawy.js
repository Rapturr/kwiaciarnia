import React from "react";
import {ImageBackground,TouchableOpacity, Pressable, Text, View, Image, ScrollView } from 'react-native';
import styles from './style'
import { ZestawIcon, BukietyIcon, FlowerBoxIcon, Obwod } from "../assets/icons";
import {ZLista } from "./Przedmioty/bukietyLista";
import Przedmiot from "./Przedmioty/przedmiot";
import Banner from "./banner";

export default function Zestawy({navigation, route}) {
    const navi = (zm)=>{
        navigation.push(zm)
    }

    const onToggle = (sciezka, cena, nazwa, opis, id) =>{
        navigation.push("Opis",{sciezka:sciezka, cena:cena, nazwa:nazwa, opis:opis, id:id, onAdd:(route.params.onAdd)})
    }

    const image = "../assets/icon.png";

    return(
        <>
        <Banner />
        <View style={styles.Kategoria}>
            <Pressable onPress={() => { navi("Bukiety"); } }>
                <BukietyIcon />
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
                    {ZLista.map((item)=>(
                        <Przedmiot key={item.id}
                        item = {item}
                        onToggle={onToggle}/>
                    ))}
                </View>
            </View>
        </ScrollView></>
    ) 
}
