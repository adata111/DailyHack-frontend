import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Diary from './../screens/Diary.js';
import AllLists from './../screens/Shopping/AllLists.js';
import AdHome from './../screens/AdHome.js';
import Notifications from './../screens/Notifications.js';
import NewList from './../screens/Shopping/NewList.js'

const AdHomeStk = createStackNavigator();

export function AdHomeStack(){
	return(
	<AdHomeStk.Navigator>
		<AdHomeStk.Screen name="Home" component={AdHome} options={{headerShown: false}} />
		<AdHomeStk.Screen name="Diary" component={Diary} />
		<AdHomeStk.Screen name="Shopping" component={AllLists} />
		<AdHomeStk.Screen name="NewList" component={NewList} options={{title: "New List"}} />
	</AdHomeStk.Navigator>
	)
}

const NotifStk = createStackNavigator();

export function NotifStack(){
	return(
	<NotifStk.Navigator>
		<NotifStk.Screen name="Notifications" component={Notifications} options={{headerShown: false}} />
	</NotifStk.Navigator>
	)
}