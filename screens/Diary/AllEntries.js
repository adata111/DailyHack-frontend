import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet,Text, View, Button } from "react-native";

export default class AllEntries extends React.Component{
  render(){
  return (
    <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
      <Text>Diary</Text>
      <Button title="Add Entry" onPress={() => this.props.navigation.navigate('NewEntry')}/>
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