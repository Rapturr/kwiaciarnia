import React from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'

export default function Payment({navigation}) {

    return(
    <View style={styles.container}>
        <Pressable>
            <Text>Kupiłeś?</Text>
        </Pressable>
    </View>
    ) 
}
