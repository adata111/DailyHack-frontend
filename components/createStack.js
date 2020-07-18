import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import AllEntries from './../screens/Diary/AllEntries.js';
import NewEntry from '../screens/Diary/NewEntry.js';
import AllLists from './../screens/Shopping/AllLists.js';
import AdHome from './../screens/AdHome.js';
import Notifications from './../screens/Notifications.js';
import HelpCenter from './../screens/Help-center.js';
import NewList from './../screens/Shopping/NewList.js';
import StopWatch from './../screens/Sports/StopWatch.js';
import Timer from './../screens/Sports/Timer.js';
import Allfeatures from './../screens/Sports/Allfeatures.js';
import AllListSports from './../screens/Sports/AllListSports.js';
import NewListSports from './../screens/Sports/NewListSports.js';
import Diet from './../screens/Sports/Diet.js';
import Profile from './../screens/Profile.js';
import Manager from './../screens/Expenses/Manager.js';
import Income from './../screens/Expenses/Income.js';
import Expenditure from './../screens/Expenses/Expenditure.js';
import Reports from './../screens/Expenses/Reports.js';
import AllTrans from './../screens/Expenses/AllTrans.js';
import Calculator from './../screens/Expenses/Calculator.js';
import Food from './../screens/Sports/Food.js';
import Water from './../screens/Sports/Water.js';
import Sleep from './../screens/Sports/Sleep.js';
import { MedTab } from'./MedTab.js';
import EventHome from './../screens/Events/eventRecord.js';
import EveReminder from './../screens/Events/eveReminder.js';
import EveNotes from './../screens/Events/eveNotes.js';
import EveSpecial from './../screens/Events/eveSpecial.js';
const AdHomeStk = createStackNavigator();

export function AdHomeStack({navigation}){
	return(
	<AdHomeStk.Navigator>
		<AdHomeStk.Screen name="Home" component={AdHome} options={{
		title: "Home",
			headerShown: true,
			headerLeft: (props)=>(<TouchableOpacity onPress={()=>{navigation.openDrawer()}}><Ionicons 
                name="md-menu" 
                size={25} 
                color="blue" 
                style={{ margin: 7,}} /></TouchableOpacity>)
		}} />
		<AdHomeStk.Screen name="Diary" component={AllEntries} options={{title:"My Diary", headerShown: true}} screenProps={{lockMode: 'locked-closed'}}/>
		<AdHomeStk.Screen name="NewEntry" component={NewEntry} options={{title:"New Entry", headerShown: true}} screenProps={{lockMode: 'locked-closed'}}/>
		<AdHomeStk.Screen name="Shopping" component={AllLists} />
		<AdHomeStk.Screen name="NewList" component={NewList} options={{title: "New List"}} />
		<AdHomeStk.Screen name="NewListSports" component={NewListSports} options={{title: "Make a Workout Schedule"}} />
		<AdHomeStk.Screen name="AllListSports" component={AllListSports} options={{title: "Sports Home"}} />
		<AdHomeStk.Screen name="Sports" component={Allfeatures} options={{title: "Sports Home"}} />
		<AdHomeStk.Screen name="Food" component={Food} options={{title: "My Palate"}} />
		<AdHomeStk.Screen name="Water" component={Water} options={{title: "Keep Yourself Hydrated"}} />
		<AdHomeStk.Screen name="Sleep" component={Sleep} options={{title: "Sleep well"}} />
		<AdHomeStk.Screen name="StopWatch" component={StopWatch} options={{title: "Stop Watch", headerShown: false}} />
		<AdHomeStk.Screen name="Timer" component={Timer} options={{title: "Timer", headerShown: false}} />
		<AdHomeStk.Screen name="Diet" component={Diet} options={{title: "Diet", headerShown: false}} />
		<AdHomeStk.Screen name="Manager" component={Manager} options={{title: "Daily Expenses Manager", headerShown: true,
		headerRight: (props)=> (<TouchableOpacity onPress={() => navigation.navigate('Calculator')}><Image
      source={require('../assets/calculator.png')}

      style={{
        width: 35,
        height: 35,
        right: 20,
      }}
      /></TouchableOpacity>)}} />
		<AdHomeStk.Screen name="Income" component={Income} options={{title: "Income", headerShown: false}} />
		<AdHomeStk.Screen name="Expenditure" component={Expenditure} options={{title: "Expenditure", headerShown: false}} />
		<AdHomeStk.Screen name="Reports" component={Reports} options={{title: "Reports", headerShown: false}} />
		<AdHomeStk.Screen name="AllTrans" component={AllTrans} options={{title: "All Transactions", headerShown: true}} />
		<AdHomeStk.Screen name="Calculator" component={Calculator} options={{title: "Calculator", headerShown: false}} />
		<AdHomeStk.Screen name="Medicine" component={MedTab} options={{title: "Medicine Home Page", headerShown: false}} />
		<AdHomeStk.Screen name="EventHome" component={EventHome} options={{title: "Events", headerShown: true}} />
		<AdHomeStk.Screen name="EveReminder" component={EveReminder} options={{title: "Add a Reminder", headerShown: true}} />
		<AdHomeStk.Screen name="EveNotes" component={EveNotes} options={{title: "Make a Note", headerShown: true}} />
		<AdHomeStk.Screen name="EveSpecial" component={EveSpecial} options={{title: "Special Events", headerShown: true}} />
	</AdHomeStk.Navigator>
	)
}

const NotifStk = createStackNavigator();

export function NotifStack(){
	return(
	<NotifStk.Navigator>
		<NotifStk.Screen name="Notifications" component={Notifications} options={{headerShown: true}} />
	</NotifStk.Navigator>
	)
}

const ProfileStk = createStackNavigator();

export function ProfileStack(){
	return(
	<ProfileStk.Navigator>
		<ProfileStk.Screen name="Profile" component={Profile} options={{headerShown: true}} />
	</ProfileStk.Navigator>
	)
}

const HelpStk = createStackNavigator();

export function HelpStack(){
	return(
	<HelpStk.Navigator>
		<HelpStk.Screen name="Help Center" component={HelpCenter} options={{ title: "Help Centre", headerShown: true }} />
	</HelpStk.Navigator>
	)
}

/*const MedHomeStk = createStackNavigator();

export function MedHomeStack({navigation}){
	return(
	<MedHomeStk.Navigator>
		<MedHomeStk.Screen name="MedHome" component={MedHome} options={{title: "Medicine Home Page", headerShown: true}} />
		<MedHomeStk.Screen name="MedRecord" component={MedRecord} options={{title: "Medicine Reminder", headerShown: true}} />
		<MedHomeStk.Screen name="MeasureRecord" component={MeasureRecord} options={{title: "Measurement Reminder", headerShown: true}} />
		<MedHomeStk.Screen name="DocRecord" component={DocRecord} options={{title: "Doctor Appointments", headerShown: true}} />
	</MedHomeStk.Navigator>
	)
}*/