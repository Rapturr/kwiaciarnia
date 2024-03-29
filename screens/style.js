import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#333333',
    },
    containerOpis: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
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
    helpWrap: {
      flex: 1,
      backgroundColor: '#333333',
    },
    HelpKategorie: {
      paddingTop:'5%',
      justifyContent: 'center',
      paddingLeft: '5%',
      backgroundColor: '#333333',
    },
    helpContainer: {
      //alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop:10,
      backgroundColor: '#333333',
    },
    helpContainerKat: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      paddingRight: '2%',
      width: '35%',
    },
    helpContainerKat1: {
      flexDirection: 'column',
      width: '65%',
    },
    helpContainerKat2: {
      width: '100%',
      paddingLeft: '20%',
      flexDirection: 'row',
    },
    Kat: {
      marginLeft: 20,
      marginRight: 20,
      color: '#917ab0',
    },
    opisy: {
      marginLeft: 20,
      marginRight: 20,
      color: '#917ab0',
    },
    nazwy: {
      marginLeft: 20,
      marginRight: 20,
      paddingRight:5,
      paddingLeft:5,
      borderRadius:6,
      backgroundColor: 'rgba(40,40,40,250)',
      color: '#917ab0',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    column: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
    },
    image: {
      width: 150,
      height: 150,
      margin: 10,
      marginTop:30,
      resizeMode: 'contain',
    },
    koszimage: {
      width: 100,
      height: 100,
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
      color:'rgba(86,45,128,255)',
      textAlign:'center',
      fontSize:30,
      paddingTop:70,
      fontWeight:'bold',
    },
    przyciskTextKoszyk:{
      marginBottom:20,
      padding: 15,
      backgroundColor: 'rgba(60,70,100,255)',
    },
    info:{
      fontSize:22,
      fontWeight: 'bold',
      color:"rgba(126,85,168,255)",
    },
    infoKat:{
      fontSize:15,
      fontWeight: 'bold',
      color:'#613a70',
    },
    infotext:{
      //marginTop:10,
      fontSize:15,
      color:'#917ab0',
    },
    koszykPrzycisk:{
      marginTop: 40,
      alignContent: 'flex-end',
      alignItems: 'center'
    },
    koszykColumn:{
      flexDirection: 'column',
      alignItems: 'center',
      width: '40%',
    },
    koszykColumn1:{
      marginTop: 20,
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '60%',
    },
    koszykPrzedmioty:{
      //justifyContent: 'center',
      //alignItems: 'flex-start',
      marginBottom:40,
      marginRight:20,
    },
    containerKoszyk: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#333333',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    daneUzytkownika: {
      marginBottom: 30,
      marginLeft: 20,
      fontSize: 17,
      marginRight: 20,
      paddingRight:5,
      paddingLeft:5,
      borderRadius:6,
      backgroundColor: 'rgba(40,40,40,250)',
      color: '#917ab0',
    },
  });

export default styles