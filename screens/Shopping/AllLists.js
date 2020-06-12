import 'react-native-gesture-handler';
import React from "react";
import { Button, StyleSheet,Text, View } from "react-native";

export default class AllLists extends React.Component{
  render(){
  return (
    <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
       <Button title="+ New List" onPress={() => this.props.navigation.navigate('NewList')}/>
      <Text>All list Screen</Text>
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
