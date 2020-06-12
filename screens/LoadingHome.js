import React from 'react';
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';

import AdHome from './../screens/AdHome.js';
import Notifications from './../screens/Notifications.js';

const Drawer = createDrawerNavigator();

export default class LoadingHomes extends React.Component
{

  render(){
  console.log('wadd');

  const age=this.props.route.params.age;
  
  console.log(age);
  if(age===1){

  return(
    //kid
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={AdHome} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  )
  }
  else if(age===2){
  return(
    
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={AdHome} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  )
  }
  else if(age===3){
  return(
  
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={AdHome} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  )
  }
  else {
    
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={AdHome} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  )
  }
}
}
