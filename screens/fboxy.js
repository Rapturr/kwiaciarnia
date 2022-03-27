import React from "react";
import {ImageBackground,TouchableOpacity, Pressable, Text, View, Image, ScrollView } from 'react-native';
import styles from './style'
import { ZestawIcon, BukietyIcon, FlowerBoxIcon, Obwod } from "../assets/icons";

export default function Flowerbox({navigation}) {
    const navi = (zm)=>{
        navigation.push(zm)
    }
    
    const image = "../assets/icon.png";

    return(
        <><View style={styles.Kategoria}>
            <Pressable onPress={() => { navi("Bukiety"); } }>
                <BukietyIcon />
                <Text style={styles.Kat}>Bukiety</Text>
            </Pressable>
            <Pressable onPress={() => { navi("Flowerbox"); } }>
                <FlowerBoxIcon />
                <Text style={styles.Kat}>Flowerboxy</Text>
            </Pressable>
            <Pressable onPress={() => { navi("Zestawy"); } }>
                <ZestawIcon style={styles.zestawIconStyle} />
                <Text style={styles.Kat}>Zestawy</Text>
            </Pressable>
        </View>
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.row}>
                    <View style={styles.column}>
                        <TouchableOpacity>
                            <Image style={styles.image} source={require(image)}/>
                        </TouchableOpacity>
                        <Pressable>
                            <Text>Flower box 1</Text>
                        </Pressable>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity>
                            <Image style={styles.image} source={require(image)}/>
                        </TouchableOpacity>
                        <Pressable>
                            <Text>Flower box 2</Text>
                        </Pressable>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity>
                            <Image style={styles.image} source={require(image)}/>
                        </TouchableOpacity>
                        <Pressable>
                            <Text>Flower box 3</Text>
                        </Pressable>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity>
                            <Image style={styles.image} source={require(image)}/>
                        </TouchableOpacity>
                        <Pressable>
                            <Text>Flower box 4</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView></>
    ) 
}
