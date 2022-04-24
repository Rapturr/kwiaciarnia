import React from "react";
import { useState } from "react";
import {ImageBackground, TextInput, Pressable, ScrollView, Text, View, Image } from 'react-native';
import styles from './style'
import Banner from "./banner";
import { Users } from "./uzytkownicy";

export const profile = "";

export default function Login({navigation, route}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        //setId(0)
        var id = 0;
        var info = '';
        Users.map((user)=>{
            if(user.login == username && user.haslo == password){
                id = user.id
                info = user.info;
            }
        })
        route.params.login(id, username, info);
        setUsername('')
        setPassword('')
        navigation.pop();
      }

    return (
        <>
        <Banner />
        <ScrollView  style={styles.darkBg}>
            <View style={styles.container}>
                <TextInput placeholder='Login'
                onChangeText={(text)=>{setUsername(text)}} 
                style ={{borderWidth:2,
                borderColor: '#AAAAAA',
                marginTop:100,
                marginBottom:20,
                width:280,
                padding: 15,
                backgroundColor: 'rgba(1,1,1,0.8)',
                color: 'white',}}multiline = {false}
                numberOfLines={1}
                maxLength={50}
                />

                <TextInput placeholder='Haslo'
                onChangeText={(text)=>{setPassword(text)}} 
                style ={{borderWidth:2,
                    borderColor: '#AAAAAA',
                    marginBottom:20,
                    width:280,
                    padding: 15,
                    backgroundColor: 'rgba(1,1,1,0.8)',
                    color: 'white',}}multiline = {false}
                    numberOfLines={1}
                    maxLength={50}/>

                <Pressable style={styles.przycisk} onPress={()=>onSubmit()}>
                    <Text style={styles.przyciskText}>Zaloguj!</Text>
                </Pressable>
            </View>
        </ScrollView>
        </>
      )
}
