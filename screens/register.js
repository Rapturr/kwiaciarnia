import React from "react";
import {useState, useEffect} from 'react';
import {ImageBackground, TextInput, Pressable, ScrollView, Text, View, Image } from 'react-native';
import styles from './style'
import Banner from "./banner";
import {urlLink} from '../App'

export default function Register({ navigation, route, newData}){
    const [serverdata, setdata] = useState([])
    const [login, setUsername] = useState('')
    const [haslo, setPassword] = useState('')
    const [info, setEmail] = useState('')

    useEffect(() => {
        const getData = async ()=>{
          const dataFromServer = await fetchData()
        }
      getData()
      
    }, [])
    
      const fetchData = async() =>{
        const res = await fetch(urlLink+'',{headers: {
          'Content-type': 'application/json',
          'mode': 'cors',
          'Access-Control-Allow-Origin': '*',
          }})
        const data = await res.json()
        setdata(data);
        
        return data
      }

    const onSubmit = () => {
        //setId(0)
        var id;
        var exist = false;
        serverdata.map((user)=>{
            if(user.login == login){
                exist = true;
            }
            id = user.id;
        })
        if(login != "" && haslo != "")
        if(!exist){
            id+=1;
            //console.log("Nowe Konto ID: "+id+" haslo:"+haslo+" info:"+info+"")
            addAccount({id,login,haslo,info})
        }
        setUsername('')
        setPassword('')
        setEmail('')
        navigation.pop();
      }
    
    const addAccount = async (data) => {
      //console.log(data)

      var resStr;
      var newid;
      resStr = "[";
      serverdata.map((zm) =>{
        resStr += "{\"id\":";
        resStr += zm.id;
        resStr += ",\"login\":\"";
        resStr += zm.login;
        resStr += "\",\"haslo\":\"";
        resStr += zm.haslo;
        resStr += "\",\"info\":\"";
        resStr += zm.info;
        resStr += "\"},";
        newid = zm.id;
      })
      newid+=1;
      //console.log("NEW ID".newid);
      data.id = newid;
      
      resStr+=JSON.stringify(data);
      resStr+="]";
      //console.log(resStr);
      
      const res = await fetch(urlLink+'',{
          method: 'post',
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            },
          body:resStr,
          //body:JSON.stringify(data),
        })
    }

    return(
        <>
        <Banner />
        <ScrollView  style={styles.darkBg}>
            <View style={styles.container}>
              <Text></Text>
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

                <TextInput placeholder='email'
                onChangeText={(text)=>{setEmail(text)}} 
                style ={{borderWidth:2,
                    borderColor: '#AAAAAA',
                    marginBottom:20,
                    width:280,
                    padding: 15,
                    backgroundColor: 'rgba(1,1,1,0.8)',
                    color: 'white',}}multiline = {false}
                    numberOfLines={1}
                    maxLength={50}/>
                
                <TextInput placeholder='haslo'
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
                    <Text style={styles.przyciskText}>Zatwierdź!</Text>
                </Pressable>
            </View>
        </ScrollView>
        </>
    )
}