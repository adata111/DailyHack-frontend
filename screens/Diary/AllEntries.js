import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Entry from './Entry';
import moment from "moment";

export default class AllEntries extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      entryArray: [],
      entryText: '',
    }
    this.addEntry=this.addEntry.bind(this);
  }

  addEntry(dt, titl) {
    if (titl) {
      var d = new Date();
      var entries=this.state.entryArray;
      entries.push({
        key: Date.now(),
        date: dt,
        title:titl
      }
      )
      this.setState({entryArray:entries});
    }
  }


  render() {
    console.log("diary render");
    if(this.props.route.params){
      console.log(this.props.route.params);
      var entries=this.state.entryArray;
      console.log(entries);
      var it=entries.filter(i => i.key===this.props.route.params.key);
      console.log(it);
      if(it && it.length){}
      else{
      entries.push({
          key:this.props.route.params.key,
          date:this.props.route.params.date,
          title:this.props.route.params.title});
      console.log(entries);
    this.state.entryArray=entries;
      }
      console.log("entries");
      console.log(entries);
      console.log("entries");
    }

    var entries = this.state.entryArray.map((val) => {
      return <Entry key={val.key} val={val}
          deleteMethod={ (key)=> this.deleteEntry(key) } />
    })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>- YOUR DIARY ENTRIES -</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
      {entries}

      </ScrollView>

      <View style={styles.footer}>
      
      </View>

      <TouchableOpacity 
      style={styles.addButton} 
      onPress={() => this.props.navigation.navigate('NewEntry')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

    </View>
    );
  }

  deleteEntry(key) {
    console.log("del");
    var itt=this.state.entryArray.filter(it => it.key!==key);
    console.log(itt);
    this.setState({ entryArray: itt })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#2BA189',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },

  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },

  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },

  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#2BA189',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },

  addButtonText: {
    color: '#fff',
    fontSize: 24,
  }
});