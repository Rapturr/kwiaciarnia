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
                    <Text style={styles.infotext}>Jakub Pawlik</Text>
                </View>

                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}></Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>Kwiaciarnia</Text>
                </View>
                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>Adres</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>Ul. IX Wieków Kielc</Text>
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
                    <Text style={styles.infotext}>3ID14A</Text>
                </View>
                
            </View>
            <View style = {styles.HelpKategorie}>
                <Text style={styles.info}>Dane Kontatowe:</Text>
            </View>

            <View style={styles.helpContainer}>
            
                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>Tel:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>+48 12 121 12 12</Text>
                </View>
                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>Fax:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>+48 12 121 12 23</Text>
                </View>
                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>E-Mail:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>pawlikkuba@onmail.com</Text>
                </View>
            </View>

            <View style = {styles.HelpKategorie}>
                <Text style={styles.info}>Płatność:</Text>
            </View>

            <View style={styles.helpContainer}>

                <View style={styles.helpContainerKat}>
                    <Text style={styles.infoKat}>Bank:</Text>
                </View>
                <View style={styles.helpContainerKat1}>
                    <Text style={styles.infotext}>12 1212 1212 1212 1212 1212 1212</Text>
                </View>
                
            </View>

            </View>
        </>
    ) 
}
