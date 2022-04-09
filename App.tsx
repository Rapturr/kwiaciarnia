import React from "react";
import { useState } from 'react';
import Navigation from './navi/naviTab'
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


export default function App() {
  const [koszyk, setKoszyk] = useState([]);

  /*const onAdd = () => {
    console.log("OnAdd w app.tsx");
  }*/
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
  const addItem = () => {
    console.log("add");
  }
  const removeItem = () => {
    console.log("Removed");
  }

  return (
    <Navigation onAdd={onAdd} kosz = {koszyk} addItem={addItem} removeItem={removeItem}/>
  );
}
