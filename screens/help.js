import React from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'

export default function Help({navigation}) {

    return(
        <View style={styles.container}>
            <Text>Aplikacja Kwiaciarnia</Text>
            <Text>Autor: Natalia Skrzyniarz</Text>
            <Text>Politechnika Świetokrzyska 1ID13A</Text>
            <Text>Przedmiot: Komunikacja Człowiek-Komputer</Text>
        </View>
    ) 
}
