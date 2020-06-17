import 'react-native-gesture-handler';
import React, {useState} from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  Keyboard, 
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  ActivityIndicator } from 'react-native';
  import Constants from 'expo-constants';
  import moment from "moment";

export default class NewEntry extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isDatePickerVisible: false,
      key:0,
      date: "",
      title: ""
    };
    this.hideDatePicker = this.hideDatePicker.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.save = this.save.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  hideDatePicker(){
    this.setState({ isDatePickerVisible: false});
  };

  handleConfirm(date) {
    this.hideDatePicker();
    this.setState({ date:moment(date).format('Do MMMM YYYY')});
  };

  handleTitleChange(e){
    console.log(e.nativeEvent.text);
    this.setState({ title: e.nativeEvent.text});
  }

  save(){
    console.log(this.props.route);
    console.log(this.state.title);
    this.props.navigation.navigate('Diary',{key: Date.now(), date:this.state.date,title:this.state.title});
  }

  render(){
    
  
  return (
    <ImageBackground
        source={require('../../assets/diaryBackground.png')  
          //uri:
          //'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                
        }
        //style={{ width: 200, height: 200, marginTop: 20 }}
        style={styles.back}
        >
        <View style={styles.container}>

        <Text style={styles.title}>Daily Diary</Text>

        <TouchableOpacity onPress={() => this.setState({ isDatePickerVisible: true})}>
        <TextInput style={styles.textinput} placeholder="Today's Date" 
        placeholderTextColor="rgba(5,4,4,0.6)"
        underlineColorAndroid={'transparent'} 
        editable={false}
        value={this.state.date}
        onTouchStart={() => this.setState({ isDatePickerVisible: true})}
        />
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={this.state.isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={() => this.setState({ isDatePickerVisible: false})}
        />
        <TextInput style={styles.textinput} placeholder="Title" 
        placeholderTextColor="rgba(5,4,4,0.6)"
        underlineColorAndroid={'transparent'} 
        onChange = {this.handleTitleChange}
        />
        <TextInput style={styles.textinputDiary} placeholder="Share your thoughts" 
        placeholderTextColor="rgba(5,4,4,0.6)" multiline={true}
        underlineColorAndroid={'transparent'} />
        <TouchableOpacity style={styles.button} onPress={this.save}>
          <Text style={styles.btntext}>Save</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>

  );
}
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.4)',
      justifyContent: 'center',
      paddingLeft: 60,
      paddingRight: 60,
    },
    title: {
      color: '#2BA189',
      fontWeight: 'bold',
      fontSize: 30,
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: 'black',
      borderBottomWidth: 1,

    },

    textinput: {
      color: 'black',
      alignSelf: 'stretch',
      height: 40,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft:10,
      marginBottom: 20,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      textAlignVertical: "top",
      backgroundColor: 'rgba(255,255,255,0.6)',
    },
    textinputDiary: {
      color: 'black',
      backgroundColor: 'rgba(255,255,255,0.6)',
      alignSelf: 'stretch',
      height: 300,
      marginBottom: 30,
      borderColor: 'black',
      borderWidth: 1,
    
      borderRadius: 5,
      textAlignVertical: "top",
      padding: 10,
    },
    back: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#2BA189',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
    }
  });