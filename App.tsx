import React from "react";
import { useState } from 'react';
import Navigation from './navi/naviTab'
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export const urlLink = "https://api.npoint.io/c83bbc159bfb7c052096";

global.variable = -1;
//const [userLog, setUserLog] = useState(-1);

export function userlogfun({num}){
  //setUserLog(num);
  console.log("dddd")
}
export function getuserlogfun(){
  //var zm = userLog;
  //return zm;
  console.log("dddd")
}

export default function App() {
  const [koszyk, setKoszyk] = useState([]);
  //const [userLog, setUserLog] = useState(-1);

  const onAdd = (zid,name, price, url) => {
    const item = 
      {
        id: zid,
        nazwa: name,
        cena: price,
        image: url,
      }
    ;
    koszyk.push(item);
  }
  
  const removeItem = () => {
    console.log("Removed");
  }


  return (
    <Navigation onAdd={onAdd} kosz = {koszyk} />
  );
}
