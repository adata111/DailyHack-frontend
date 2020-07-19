import  React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryZoomContainer } from 'victory-native';

export default class Reports extends React.Component {
  constructor(props){
    super(props);
    this.state={
      monthlyTrans:[],
    }
    this.generateGraph = this.generateGraph.bind(this);
  }
  componentDidMount(){
    
    this.setState({
      monthlyTrans:this.props.route.params.monthlyTrans,
    });
  }
months = ["Jan", "Feb", "Mar", "Apr", 
  "May", "Jun", "Jul", "Aug", "Sep", "Oct", 
  "Nov", "Dec"];

  generateGraph(){
    var allYears = this.state.monthlyTrans.map((i) => {
      var year = i._id.month.split("-")[1];
      return(year?year:null)});
    //allYears = ["2020","2020"];
    var years = [...new Set(allYears)];
    years.sort(function(a, b){return (b-a)});
    console.log(years);
    console.log("hin");
    console.log(allYears);
    var graphs = years.map((year) =>{
      var graphData = this.months.map( (m, ind) =>{
        var ex=this.state.monthlyTrans.filter(i => 
            (i._id.month.split("-")[1]===(year) && parseInt(i._id.month.split("-")[0])===(ind+1) && i._id.type==="expenses")
          )[0];
        console.log(ex);
        return({
          x:m, 
          y:(ex?ex.amt:0)
        
        })
      });
        console.log(graphData);
        
      return(
        <VictoryChart
        domainPadding={5}
          theme={VictoryTheme.material}  
          padding={50} 
          containerComponent={
            <VictoryZoomContainer />
          }
        >
        <VictoryLabel text={year} x={200} y={20} textAnchor="middle" />

          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            data={graphData}
            /*animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}*/
            labels={({ datum }) => datum.y}
            labelComponent={<VictoryLabel />}
          />
        </VictoryChart>

        )
    })
    return graphs;
    
  }

  render() {
    console.log(this.props.route.params.monthlyTrans);
    
    return (
      <View style={styles.container}>
      <Text>Expenditure Reports</Text>
      {this.generateGraph()}
     
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
      padding: 8,
      backgroundColor: 'rgba(202, 240, 248, 0.3)',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });