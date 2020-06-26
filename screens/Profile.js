import  React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Constants from 'expo-constants';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible:false,
    }
    this.removeFromAsync = this.removeFromAsync.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  openModal = () =>{
    this.setState({
      isModalVisible:true
    })
  }

  toggleModal = () =>{
    this.setState({
      isModalVisible:!this.state.isModalVisible
    })
  }

  closeModal = () =>{
    this.setState({
      isModalVisible:false
    })
  }

  removeFromAsync = async() =>{
    await AsyncStorage.clear();
  }

  handleSignout(){
    if(Platform.OS === 'ios' || Platform.OS === 'android'){
      this.removeFromAsync();
      this.props.navigation.reset({
        routes: [{ name: 'Login'}]      
      });
    }
    else{
      localStorage.clear();
      this.props.navigation.reset();
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={{marginTop:50}}>

      <Modal animationIn="slideInUp" animationOut="slideOutDown" onBackdropPress={()=>this.closeModal()} onSwipeComplete={()=>this.closeModal()} swipeDirection="right" isVisible={this.state.isModalVisible} style={{backgroundColor:'white',maxHeight:200, top: 250,}}>
      <View style={{ flex: 1,justifyContent:'flex-start', top: 50,}}>
      <Text style={{textAlign:'center', justifyContent: 'center', fontSize: 20,}}>Are You Sure?</Text>
      </View>
      <View style={{ flex: 1,justifyContent:'center',position:'absolute',bottom:0}}>
      <View style={{flexDirection:'row',}}>
      
      <TouchableOpacity style={{backgroundColor:'rgb(29, 53, 87)',width:'50%', borderColor: 'white', borderWidth: 1,}} onPress={()=>this.closeModal()}>
      <Text style={{color:'white',textAlign:'center',padding:10}}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'rgb(29, 53, 87)',width:'50%', borderColor: 'white', borderWidth: 1,}}
        onPress={this.handleSignout}
      >
      <Text style={{color:'white',textAlign:'center',padding:10}}>Sign Out</Text>
      </TouchableOpacity>
      </View>
      </View>
      </Modal>
      </View>
      <View style={styles.footer}>
      <TouchableOpacity style={styles.navButton} onPress={()=>this.openModal()}><Text style={styles.navButtonTextSpecial}>Sign Out</Text></TouchableOpacity>
      </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 30,
    backgroundColor: 'white',
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {

    borderColor: 'black',
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  navButton: {
    margin: 10,
    marginTop: 20,
    backgroundColor: 'rgb(29, 53, 87)', 
    padding: 10,
    borderRadius: 5,
    width: 350,
    alignItems: 'center',
  },

  navButtonTextSpecial: {
    fontSize: 18,

    color: 'white',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'center',

  },
});