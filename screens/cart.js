import React, { useState } from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'


export default function ShoppingCart({navigation, onAdd}) {

    return(
        <View style={styles.container}>
            <Pressable onPress={()=>{onAdd}}>
                <Text style={styles.przyciskText}>Kup!</Text>
            </Pressable>
        </View>
    ) 
}
