import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'


// Screen
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen'
import StackScreen from './screens/StackScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const HomeStackNavigator = createNativeStackNavigator();

function MySctack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName='HomeSreen'>
            <HomeStackNavigator.Screen
                name='HomeScreen'
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name='Stack'
                component={StackScreen}
            />

        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='home'
            ScreenOptions={{
                tabBarActiveTintColor: 'purple'
            }}
        >
            <Tab.Screen 
            name='home'
                component={MySctack}
                options={{
                    tabBarlabel: 'home',
                    tabBarbadge: 3,
                    headerShown: false
                }} />
            <Tab.Screen
                name='Settings'
                component={SettingScreen}
                options={{
                    tabBarlabel: 'Settings',
                    tabBarbadge: 3,
                    headerShown: false
                }} />

        </Tab.Navigator>
    )
}
export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}