import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Screen1, Screen2, Screen3, Screen4} from './naviStack'
import { View, Image } from 'react-native';
import { OfertyIcon, KoszykIcon, ProfilIcon, InfoIcon } from '../assets/icons';

const Tab = createBottomTabNavigator();


export default function tabNaviHome({onAdd}) {
    return(
        <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Oferty') {
              return <View>
              <OfertyIcon />
            </View>
            } else if (route.name === 'Koszyk') {
              return <View>
                <KoszykIcon />
              </View>
            }else if (route.name === 'Profil') {
              return <View>
                <ProfilIcon />
              </View>
            }
            else if (route.name === 'Info') {
              return <View>
                <InfoIcon />
              </View>
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name = "Oferty" component = {Screen1} options={{headerShown:false, onAdd:onAdd}}/>
            <Tab.Screen name = "Koszyk" onAdd={onAdd} component = {Screen2} options={{headerShown:false}}/>
            <Tab.Screen name = "Profil"  component = {Screen3} options={{headerShown:false}}/>
            <Tab.Screen name = "Info"  component = {Screen4} options={{headerShown:false}}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}
//title: <Image style={{ width: 250, height: 50 }} source = {require('../assets/Lemons.png')}/>