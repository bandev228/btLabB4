import React from 'react';
import {View,Text} from 'react-native';
import {Navigationcontainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from './Contacts';
import Profile from './Profile';
import User from '.User';
import colors from '../utility/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Favorites from './Favorites';

const getDrawerItemIcon = icon => ({ tintColor }) => (
    <MaterialIcons name={icon} size={22} style={{color: tintColor}}/>
);
const getTabBarIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={26} style={{color: tintColor}}/>
);

const Stack = createNativeStackNavigator();
const ContactsScreens =()=>
{
    return(
        <Stack.Navigator
        initialRouteName="Contacts"
        screenOptions={
            {
                headerShown:false
            }
        }
        ></Stack.Navigator>
    );
}
const StackNavigator = ()=>
{
    return (
            <Stack.Navigator
            initialRouteName="Contacts"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {backgroundColor: 'tomato'},
                headerTitleAlign: 'center',
            }}
            >
                <Stack.Screen name ='Contacts' component={Contact} options={{title:"Contacts"}}/>
                <Stack.Screen name ='Profile' component={Profile} options={({route})=>
                {
                    const {contact} = route.params;
                    const {name} = contact;
                    return {
                        title: name.split(' ')[0],
                            headerTintColor: 'white',
                            headerStyle: {
                                backgroundColor: colors.blue,
                            }
                    };
                }
            }
            />
            </Stack.Navigator>
    );
}

const FavoriesScreens = () =>
{
    return (
        <Stack.Navigator
        initialRouteName="Favorites"
        screenOptions={
            {headerShown:false}
        }
        >
            <Stack.Screen name='Favorites' component={Favorites} options={{title:"Favorites"}}/>
            <Stack.Screen name='Profile' component={Profile} options={{title:"Profile"}}/>
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator= ()=>
{
    return (
        <Navigationcontainer>
            <Drawer.Navigator
            initialRouteName='ContactsScreens'
            >
                <Drawer.Screen name="ContactsScreens" component={ContactsScreens}
                options={{
                    drawerIcon: getDrawerItemIcon('list'),
                }}
                />
                <Drawer.Screen name="FavoritesScreens" component={FavoriesScreens}
                options={{
                    drawerIcon: getDrawerItemIcon('start'),
                }}
                />
                <Drawer.Screen name="UserScreens" component={UserScreens}
                options={{
                    drawerIcon: getDrawerItemIcon('person'),
                }}
                />
            </Drawer.Navigator>
        </Navigationcontainer>
    );
}

const UserScreens = ({navigation}) =>
{
    return (
        <Stack.Navigator
        initialRouteName="User"
        >
            <Stack.Screen name ='User' component={User}
            options={{
                headerTitle:"Me",
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: colors.blue,
                },
                headerRight: ()=>(
                    <MaterialIcons
                    name="Setting"
                    size={24}
                    style={{color: 'white', marginRight: 10}}
                    onPress={() => navigation.navigate('Options')}
                    />
                ),
            }}/>
            <Stack.Screen name='Options' component={Option} options={{title:"Option"}}/>
        </Stack.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator= ()=>
{
    return (
        <Navigationcontainer>
            <Tab.Navigator
            initialRouteName='ContactsScreens'

            barStyle= {{backgroundColor: colors.blue}}
            labeled={false}
            activeTintColor={colors.greyLight}
            inactiveColor={colors.greyDark}
            >
                <Tab.Screen name="ContactsScreens" component={ContactScreens}
                options={{
                    tabBarIcon: getTabBarIcon('list'),
                }}
                />
                <Tab.Screen name="FavoritesScreens" component={FavoriesScreens}
                options={{
                    tabBarIcon: getTabBarIcon('star'),
                }}
                />
                <Tab.Screen name="UserScreens" component={UserScreens}
                options={{
                    tabBarIcon: getTabBarIcon('person'),
                }}
                />
            </Tab.Navigator>
        </Navigationcontainer>
    )
}
export default DrawerNavigator;