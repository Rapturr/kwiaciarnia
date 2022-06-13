import { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"
import { TouchableOpacity, Pressable } from "react-native-gesture-handler"
import styles from '../style'

const Przedmiot = ({ item, onToggle, search}) => {
  const clearString = (value) => {
    return value.replace(/\s/g, '').toLowerCase();
  }
  var zm = clearString(item.nazwa)
  var zm2 = clearString(item.tagi)
  var srch = clearString(search)
  if(clearString(zm).indexOf(clearString(srch)) >= 0 
  || clearString(zm2).indexOf(clearString(srch)) >= 0){
    return (
      <View style={styles.column}>
        <TouchableOpacity onPress={ () => onToggle(String(item.image), item.cena, item.nazwa, item.opis, item.id)}>
          <Image style={styles.image} source={{uri: (item.image)}}/>
        </TouchableOpacity>
        <Text style={styles.nazwy}>{item.nazwa}</Text>
      </View>
    )
  }
  else{
    return(
      <View>
      </View>
    )
  }
}

export default Przedmiot
