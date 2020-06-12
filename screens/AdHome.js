import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet,Text, View, Button, Image } from "react-native";
import { Card, CardItem } from 'react-native-elements';
//import AllLists from './Shopping/AllLists.js';
//import newList from './Shopping/newList.js';

export default class AdHome extends React.Component{
  render(){
  return (
    <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
      <Text>adult home screen</Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <Card>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
              }}
              style={{
                width: 150,
                height: 150,
                borderColor: '#000000',
                borderWidth: 5,
                borderRadius: 100,
              }}
            />
          </View>
          <Button title="Diary" onPress={() => this.props.navigation.navigate('Diary')}/>
        </Card>
      
      <Card>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
              }}
              style={{
                width: 150,
                height: 150,
                borderColor: '#000000',
                borderWidth: 5,
                borderRadius: 100,
              }}
            />
          </View>
          <Button title="Shopping List" onPress={() => this.props.navigation.navigate('Shopping')}/>
        </Card>
        </View>

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