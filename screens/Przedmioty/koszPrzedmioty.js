import { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"
import { TouchableOpacity, Pressable } from "react-native-gesture-handler"
import styles from '../style'

const KoszPrzedmiot = ({ item, onToggle}) => {
    return (
      <View style={styles.column}>
        <TouchableOpacity>
          <Image style={styles.image} source={{uri: (item.image)}}/>
        </TouchableOpacity>
        <Text>{item.nazwa}</Text>
      </View>
    )
}

export default KoszPrzedmiot