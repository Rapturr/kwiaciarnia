import React from "react";
import {ImageBackground,TouchableOpacity, Pressable, Text, View, Image, ScrollView } from 'react-native';
import styles from './style'
import { ZestawIcon, BukietyIcon, FlowerBoxIconHl, Obwod } from "../assets/icons";
import {FBLista } from "./Przedmioty/bukietyLista";
import Przedmiot from "./Przedmioty/przedmiot";
import Banner from "./banner";
import { Searchbar } from 'react-native-paper';

export default function Flowerbox({navigation, route}) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const clearString = (value) => {
        return value.replace(/\s/g, '').toLowerCase();
      }
      const checkData = (value) => {
        return clearString(value.name).indexOf(clearString(searchQuery)) >= 0
      }
      const getData = () => {
    
      return [...new Set(list.searchQuery(checkData))];
    }

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
                <FlowerBoxIconHl />
                <Text style={styles.Kat}>Flowerboxy</Text>
            </Pressable>
            <Pressable onPress={() => { navi("Zestawy"); } }>
                <ZestawIcon style={styles.zestawIconStyle} />
                <Text style={styles.Kat}>Zestawy</Text>
            </Pressable>
        </View>
        <ScrollView style={styles.darkBg}>
            <Searchbar style={styles.wyszukiwanie}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}/>
            <View style={styles.container}>
                <View style={styles.row}>
                    {FBLista.map((item)=>(
                        <Przedmiot key={item.id}
                        item = {item}
                        onToggle={onToggle}
                        search = {searchQuery}/>
                    ))}
                </View>
            </View>
        </ScrollView></>
    ) 
}
