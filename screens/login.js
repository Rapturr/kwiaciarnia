import React from "react";
import { useState } from "react";
import {ImageBackground, TextInput, Pressable, ScrollView, Text, View, Image } from 'react-native';
import styles from './style'


export const profile = "";

export default function Login({navigation}) {
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = () => {
    
        setName('')
        setIngredients('')
        setDescription('')
      }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput placeholder='Login'
                onChangeText={(text)=>{setName(text)}} 
                style ={{borderWidth:2,
                borderColor: '#AAAAAA',
                marginTop:100,
                marginBottom:20,
                width:280,
                padding: 15,
                backgroundColor: 'rgba(1,1,1,0.8)',
                color: 'white',}}multiline = {true}
                numberOfLines={1}
                maxLength={50}
                />

                <TextInput placeholder='Haslo'
                onChangeText={(text)=>{setIngredients(text)}} 
                style ={{borderWidth:2,
                borderColor: '#AAAAAA',
                marginBottom:20,
                width:280,
                padding: 15,
                backgroundColor: 'rgba(1,1,1,0.8)',
                color: 'white',}}multiline = {true}
                numberOfLines={1}
                maxLength={50}/>

                <Pressable style={styles.przycisk} onPress={()=>onSubmit()}>
                    <Text style={styles.przyciskText}>Zaloguj!</Text>
                </Pressable>
            </View>
        </ScrollView>
      )
}
