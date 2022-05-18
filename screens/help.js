import React from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'
import Banner from "./banner";

export default function Help({navigation}) {

    return(
        <>
            <Banner />
            <View style={styles.helpWrap}>

            <View style = {styles.HelpKategorie}>
                <Text style={styles.info}>INFORMACJE:</Text>
            </View>
            <View style={styles.helpContainer}>

                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>Autor:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>Natalia Skrzyniarz</Text>
                </View>

                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}></Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>Poczta Kwiatowa</Text>
                </View>
                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>Adres</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>Aleja Tysiąclecia Państwa Polskiego 7, 25-314 Kielce</Text>
                </View>

                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>Przedmiot:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>Komunikacja człowiek-komputer</Text>
                </View>

                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>Grupa:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>3ID13A</Text>
                </View>
                
            </View>
            <View style = {styles.HelpKategorie}>
                <Text style={styles.info}>Dane Kontatowe:</Text>
            </View>

            <View style={styles.helpContainer}>
                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>NIP:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>8913235769</Text>
                </View>
                
                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>Tel:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>+48 12 345 67 89</Text>
                </View>
                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>Fax:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>+48 12 312 32 34</Text>
                </View>
                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>E-Mail:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>biuro@kwiatowaprzesylka.com</Text>
                </View>
            </View>

            <View style = {styles.HelpKategorie}>
                <Text style={styles.info}>Płatność:</Text>
            </View>

            <View style={styles.helpContainer}>

                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>ING Bank Śląski:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>95 1050 1234 2345 3456 4567 5678</Text>
                </View>
                
            </View>

            </View>
        </>
    ) 
}
