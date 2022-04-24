import { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"
import { TouchableOpacity, Pressable } from "react-native-gesture-handler"
import styles from '../style'

const Przedmiot = ({ item, onToggle, search}) => {
    return (
      <View style={styles.column}>
        <TouchableOpacity onPress={ () => onToggle(String(item.image), item.cena, item.nazwa, item.opis, item.id)}>
          <Image style={styles.image} source={{uri: (item.image)}}/>
        </TouchableOpacity>
        <Text style={styles.nazwy}>{item.nazwa}</Text>
      </View>
    )
}

export default Przedmiot
