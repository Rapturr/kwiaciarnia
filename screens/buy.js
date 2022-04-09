import React from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'
import Banner from "./banner";

export default function Payment({navigation}) {

    return(
        <>
            <Banner />
            <View style={styles.container}>
                <Pressable>
                    <Text>Kupiłeś?</Text>
                </Pressable>
            </View>
        </>
    )
}
