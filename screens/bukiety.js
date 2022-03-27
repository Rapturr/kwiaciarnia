import React, { useState } from "react";
import {ImageBackground, Svg, Pressable, Text, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { ZestawIcon, BukietyIcon, FlowerBoxIcon, Obwod } from "../assets/icons";
import styles from './style'
import { B1, B2, B3, B4, BLista } from "./Przedmioty/bukietyLista";
import Przedmiot from "./Przedmioty/przedmiot";


export default function Bukiety({navigation, onAdd}) {
    const [items, SetItems] = useState([]);

    const navi = (zm)=>{
        navigation.push(zm)
    }
    const onToggle = (sciezka, cena, nazwa, opis, id) =>{
        onAdd
        navigation.push("Opis",{sciezka:sciezka, cena:cena, nazwa:nazwa, opis:opis, id:id})
    }

    return(
        <><View style={styles.Kategoria}>
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
        <ScrollView>
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