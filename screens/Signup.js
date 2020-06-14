import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet,Text, View, TouchableOpacity, Picker } from "react-native";

export default class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      pass: "",
      age: "",
    };
    this.displayHome = this.displayHome.bind(this);
  }

  displayHome(e){
    if(this.state.age==="kids"){
      //display kid home
    }
    else if(this.state.age==="teens"){
      //display teen home
    }
    else if(this.state.age==="adults"){
      
      this.props.navigation.navigate('adhome');
    }
    else if(this.state.age==="elderly"){
      //display elderly home
    }
    else{
      //alert select age
    }
    //e.preventDefault();
  }

  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up!</Text>
      <Text style={styles.text}>First Name</Text>
        <TextInput style={styles.input} //placeholder="First Name" 
        placeholderTextColor='black'
        underlineColorAndroid={'transparent'} />
        <Text style={styles.text}>Last Name</Text>
        <TextInput style={styles.input} //placeholder="Last Name" 
        placeholderTextColor='black'
        underlineColorAndroid={'transparent'} />
        <Text style={styles.text}>Username</Text>
        <TextInput style={styles.input} //placeholder="Username" 
        placeholderTextColor='black'
        underlineColorAndroid={'transparent'} />
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input} //placeholder="Username" 
        placeholderTextColor='black'
        underlineColorAndroid={'transparent'} />
        <Text style={styles.text}>Email-id</Text>
        <TextInput style={styles.input} //placeholder="Username" 
        placeholderTextColor='black'
        underlineColorAndroid={'transparent'} />
        <Picker mode='dropdown' 
        style={styles.picker} 
        selectedValue={this.state.age}
        onValueChange={(itemValue, itemIndex) => this.setState({ age: itemValue })}>
        <Picker.Item label="Select your age group..." value=""/>
        <Picker.Item label="Kids" value="kids" />
        <Picker.Item label="Teens" value="teens" />
        <Picker.Item label="Adults" value="adults" />
        <Picker.Item label="Elderly" value="elderly" />
        </Picker>
        
        <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
        </View>
      );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});