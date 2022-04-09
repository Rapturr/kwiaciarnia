import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#333333',
    },
    darkBg: {
      backgroundColor: '#333333',
    },
    Kategoria: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingTop:10,
      backgroundColor: '#333333',
    },
    Kat: {
      marginLeft: 20,
      marginRight: 20,
      color: 'white',
    },
    input: {
      borderWidth:2,
      borderColor: '#AAAAAA',
      marginBottom:20,
      width:280,
      padding: 15,
      backgroundColor: 'rgba(1,1,1,0.8)',
      color: 'white',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    column: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
      // borderWidth: 1,
      // borderColor: 'blue',
    },
    image: {
      width: 150,
      height: 150,
      margin: 5,
      resizeMode: 'contain',
    },
    Text: {
      textAlign: 'center',
    },
    zestawIconStyle:{
      width: 140,
      height: 140,
    },
    przyciskText:{
      marginBottom:20,
      padding: 15,
      backgroundColor: 'rgba(60,70,100,255)',
    },
    banner:{
      width:'100%',
      height:180,
    },
    bannerText:{
      color:'rgba(86, 45, 128,255)',
      textAlign:'center',
      fontSize:30,
      paddingTop:70,
      fontWeight:'bold',
    },
  });

export default styles