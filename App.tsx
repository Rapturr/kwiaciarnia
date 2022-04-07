import { useState } from 'react';
import Navigation from './navi/naviTab'
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


export default function App() {
  const [koszyk, setKoszyk] = useState([]);

  const onAdd = () => {
    console.log("OnAdd w app.tsx");
  }

  return (
    <Navigation onAdd={onAdd}/>
  );
}
