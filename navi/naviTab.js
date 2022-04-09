import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Screen1, Screen2, Screen3, Screen4} from './naviStack'
import { View, Image } from 'react-native';
import { OfertyIcon, KoszykIcon, ProfilIcon, InfoIcon } from '../assets/icons';
import styles from '../screens/style';

const Tab = createBottomTabNavigator();


export default function tabNaviHome({onAdd, kosz, addItem, removeItem}) {
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
          tabBarStyle: {
            height: 50,
            paddingHorizontal: 5,
            backgroundColor: 'rgba(34,36,40,1)',
        }
        })}
        >
            <Tab.Screen name = "Oferty" component = {Screen1} initialParams={{onAdd:(onAdd)}} options={{headerShown:false}}/>
            <Tab.Screen name = "Koszyk" component = {Screen2} initialParams={{onAdd:(onAdd), kosz:(kosz)}} options={{headerShown:false}}/>
            <Tab.Screen name = "Profil"  component = {Screen3} initialParams={{onAdd:(onAdd)}} options={{headerShown:false}}/>
            <Tab.Screen name = "Info"  component = {Screen4} initialParams={{onAdd:(onAdd)}} options={{headerShown:false}}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}
//title: <Image style={{ width: 250, height: 50 }} source = {require('../assets/Lemons.png')}/>