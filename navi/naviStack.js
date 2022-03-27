import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home"
import ShoppingCart from '../screens/cart';
import Login from '../screens/login';
import Payment from '../screens/buy';
import Userprofile from '../screens/userprofile';
import Help from '../screens/help';
import Bukiety from '../screens/bukiety';
import Flowerbox from '../screens/fboxy';
import Zestawy from '../screens/zestawy';
import Opis from '../screens/opis';


const Stack = createStackNavigator();

function Screen1({onAdd}) {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" onAdd={onAdd} component={Home}/>
            <Stack.Screen name="Bukiety" onAdd={onAdd} component={Bukiety}/>
            <Stack.Screen name="Flowerbox" onAdd={onAdd} component={Flowerbox}/>
            <Stack.Screen name="Zestawy" onAdd={onAdd} component={Zestawy}/>
            <Stack.Screen name="Opis" onAdd={onAdd} component={Opis}/>
        </Stack.Navigator>
    )
}
export{Screen1}

function Screen2({onAdd}) {
    return(
        <Stack.Navigator>
            <Stack.Screen name="ShoppingCart" onAdd={onAdd} component={ShoppingCart}/>
            <Stack.Screen name="Payment" onAdd={onAdd} component={Payment}/>
        </Stack.Navigator>
    )
}
export{Screen2}

function Screen3() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="UserProfile" component={Userprofile}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}
export{Screen3}

function Screen4() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Help" component={Help}/>
        </Stack.Navigator>
    )
}
export{Screen4}