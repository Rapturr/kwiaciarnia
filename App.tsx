import React from "react";
import { useState } from 'react';
import Navigation from './navi/naviTab'
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export const urlLink = "https://api.npoint.io/c83bbc159bfb7c052096";

export default function App() {
  const [koszyk, setKoszyk] = useState([]);
  const [empty, setempty] = useState([]);

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
    <Navigation onAdd={onAdd} kosz = {koszyk} removeItem={removeItem} />
  );
}
