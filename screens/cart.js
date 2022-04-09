import React, { useState } from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'
import KoszPrzedmiot from "./Przedmioty/koszPrzedmioty";
import Banner from "./banner";
import { ScrollView } from "react-native-gesture-handler";


export default function ShoppingCart({navigation, route}) {
    return(
        <>
        <Banner />
        <ScrollView style={styles.darkBg}>
        <View style={styles.container}>
            {route.params.kosz.map((item)=>(
                        <KoszPrzedmiot key={item.id}
                        item = {item}/>
            ))}
            <Pressable>
                <Text style={styles.przyciskText}>Kup!</Text>
            </Pressable>
        </View>
        </ScrollView>
        </>
    ) 
}
