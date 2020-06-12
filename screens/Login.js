import 'react-native-gesture-handler';
import * as React from "react";
import { StyleSheet,Text, View, TouchableOpacity, Picker, TextInput } from "react-native";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import{ Button } from 'react-native-elements';
import AdHome from './AdHome.js';
import Notifications from './Notifications.js';
import {DrawerMenu} from './../components/drawer.js'
import LoadingHomes from './LoadingHome.js'

const Drawer = createDrawerNavigator();

function create(){
  return(
    <View>
    <Text>hekko</Text>
    </View>
  )
}  

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      pass: "",
      age: 0
    };
    this.displayHome = this.displayHome.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.storeInAsync = this.storeInAsync.bind(this);
  }

  displayHome(e){
    <DrawerMenu />
    if(this.state.age===1){
      //display kid home
    }
    else if(this.state.age===2){
      //display teen home
    }
    else if(this.state.age===3){
      
      this.props.navigation.navigate('Home');
    }
    else if(this.state.age===4){
      //display elderly home
    }
    else{
      //alert select age
    }
    //e.preventDefault();
  }

  storeInAsync = async() =>{
    await AsyncStorage.setItem('auth_data', JSON.stringify({
      age: this.state.age
    }));
  }
  handleLogin(){
    //send data to backend
    //recieve login confirmation and age from backend
    
    //if login successful
    this.state.age=3;
    this.storeInAsync();
    this.props.navigation.reset({
      routes: [{ name: 'loading',params: {age: this.state.age}}]
      
    });
  //  this.props.navigation.navigate('loading', {age: this.state.age});
  }

  render(){
  return (
    <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Username"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChange = {(enteredName) => this.setState({ name: enteredName})}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="black"
          autoCapitalize="none"
          secureTextEntry={true}
          onChange = {(enteredPass) => this.setState({ pass: enteredPass})}
        />
       <TouchableOpacity
        style={ styles.button }>
      <Button title="Login" onPress={this.handleLogin}/>
      </TouchableOpacity>
       <TouchableOpacity
        style={ styles.button }>
      <Button title="Sign Up" onPress={() => this.props.navigation.navigate('signup')}/>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    paddingVertical: 10,
    margin: 5,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  input: {
    margin: 15,
    height: 40,
    width: 50,
    paddingHorizontal: 15,
    borderColor: "black",
    borderWidth: 1
  },
});