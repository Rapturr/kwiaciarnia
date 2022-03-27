import { useState } from 'react';
import Navigation from './navi/naviTab'


export default function App() {
  const [koszyk, setKoszyk] = useState([]);

  const onAdd = () => {
    console.log("OnAdd w app.tsx");
  }

  return (
    <Navigation onAdd={onAdd}/>
  );
}
