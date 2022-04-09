import React from "react";
import {ImageBackground, Pressable, Text, View } from 'react-native';
import styles from './style';
import { ZestawIcon, BukietyIcon, FlowerBoxIcon, Obwod } from "../assets/icons";

export default function Home({navigation}) {
    const navi = (zm)=>{
        navigation.push(zm)
    }

    return(
    <>
        <ImageBackground style={styles.banner} source={require("../assets/banner.png")}>
        </ImageBackground>
        <View style={styles.Kategoria}>
            <Pressable onPress={() => { navi("Bukiety"); } }>
                <BukietyIcon style={styles.Kat} />
                <Text style={styles.Kat}>Bukiety</Text>
            </Pressable>
            <Pressable onPress={() => { navi("Flowerbox"); } }>
                <FlowerBoxIcon style={styles.Kat}  />
                <Text style={styles.Kat}>Flowerboxy</Text>
            </Pressable>
            <Pressable onPress={() => { navi("Zestawy"); } }>
                <ZestawIcon style={styles.Kat} />
                <Text style={styles.Kat}>Zestawy</Text>
            </Pressable>
        </View>
    </>
    )
}
