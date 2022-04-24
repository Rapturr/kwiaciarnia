import { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"
import { TouchableOpacity, Pressable } from "react-native-gesture-handler"
import styles from '../style'

const KoszPrzedmiot = ({ item, dodajcene}) => {
    
    return (
      <>
      <View style ={styles.containerKoszyk}>
        <View style = {styles.koszykColumn}>
          <Image style={styles.koszimage} source={{uri: (item.image)}}/>
        </View>
        <View style = {styles.koszykColumn1}>
          <Text style={styles.infotext}>{item.nazwa}</Text>
          <Text style={styles.infotext}>Cena: {item.cena} zł</Text>
        </View>
      </View>
      </>
    )
}

export default KoszPrzedmiot