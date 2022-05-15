import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home"
import ShoppingCart from '../screens/cart';
import Podsumowanie from '../screens/podsumowanie';
import Login from '../screens/login';
import Payment from '../screens/buy';
import Userprofile from '../screens/userprofile';
import Help from '../screens/help';
import Bukiety from '../screens/bukiety';
import Flowerbox from '../screens/fboxy';
import Zestawy from '../screens/zestawy';
import Opis from '../screens/opis';
import Register from '../screens/register';


const Stack = createStackNavigator();

function Screen1({route}) {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Bukiety" initialParams={{onAdd:(route.params.onAdd)}} component={Bukiety} options={{headerShown:false}}/>
            <Stack.Screen name="Flowerbox" initialParams={{onAdd:(route.params.onAdd)}} component={Flowerbox} options={{headerShown:false}}/>
            <Stack.Screen name="Zestawy" initialParams={{onAdd:(route.params.onAdd)}} component={Zestawy} options={{headerShown:false}}/>
            <Stack.Screen name="Opis" initialParams={{onAdd:(route.params.onAdd)}} component={Opis} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export{Screen1}

function Screen2({route}) {
    return(
        <Stack.Navigator>
            <Stack.Screen name="ShoppingCart" initialParams={{onAdd:(route.params.onAdd), kosz:(route.params.kosz)}} component={ShoppingCart} options={{headerShown:false}}/>
            <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}}/>
            <Stack.Screen name="Podsumowanie" component={Podsumowanie} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export{Screen2}

function Screen3() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="UserProfile" component={Userprofile} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export{Screen3}

function Screen4() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Help" component={Help} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export{Screen4}