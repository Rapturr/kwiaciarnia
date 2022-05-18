import React, { useState } from "react";
import {ImageBackground, Svg, Pressable, Text, View, Image, ScrollView } from 'react-native';
import styles from './style'

export default function Banner() {
    return(
        <>
            <ImageBackground style={styles.banner} source={require("../assets/banner.png")}>
                <Text style={styles.bannerText}>Poczta Kwiatowa</Text>
            </ImageBackground>
        </>
    ) 
}

/*
return(
        <ImageBackground style={styles.banner} source={require("../assets/banner.png")}>
            <Text style={styles.bannerText}>Poczta Kwiatowa</Text>
        </ImageBackground>
    )

    <View style={styles.banner_underside}><Text>.</Text></View>
        
*/