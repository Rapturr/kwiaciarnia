import React, { useState } from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'
import Banner from "./banner";

export default function Userprofile({navigation, route}) {
    const [userId, setUser] = useState(0);
    const [username , setUsername] = useState('');
    const [info , setInfo] = useState('');

    const login = (num, username, info) => {
        if( num >= 0){
          setUser(num);
          setUsername(username);
          setInfo(info);
        }
    }
    if (userId > 0) {
        return(
            <>
            <Banner />
                <View style={styles.container}>
                    <Text>{username}</Text>
                    <Text>{info}</Text>
                    <Pressable onPress={()=>{login(0,'','')}}>
                        <Text style={styles.przyciskText}>Wyloguj</Text>
                    </Pressable>
                </View>
            </>
        )
    } else {
        return(
            <>
            <Banner />
                <View style={styles.container}>
                    <Pressable onPress={()=>{navigation.navigate("Login",{login:(login)})}}>
                        <Text style={styles.przyciskText}>Zaloguj się</Text>
                    </Pressable>
                </View>
            </>
        ) 
    }
}
