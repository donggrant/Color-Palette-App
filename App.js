import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
import Constants from 'expo-constants';
import Classic from './classic.js';
import Warm from "./warm.js"
import Cool from "./cool.js"
import Pic from "./background 1.jpg"

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class APP extends React.Component{

  constructor() {
    super();
    this.state = {key: "", load: true, msg: true};
  }

  componentWillMount(){
    setTimeout(()=> this.setState({load: false}), 2000)
    setTimeout(()=> this.setState({msg: false}), 4000)
  }

  render(){
    if(this.state.load){
      return(
        <View style = {{flex:1, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={Pic} style = {{position: 'absolute', width: screenWidth, height: screenHeight, bottom: 0}}/>
          <Text style = {{fontSize: 30, fontFamily:'Baskerville'}}>Loading...</Text>
        </View>
      )
    }
    if(this.state.msg){
      return(
        <View style = {{flex:1, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={Pic} style = {{position: 'absolute', width: screenWidth, height: screenHeight, bottom: 0}}/>
          <Text style = {{fontSize: 30, fontFamily:'Baskerville'}}>Setting up menu...</Text>
        </View>
      )
    }
    if(this.state.key == "classic"){
      return (<Classic/>);
    } else if (this.state.key == "warm"){
      return (<Warm/>);
    } else if (this.state.key == "cool"){
      return (<Cool/>);
    } else {
      return (
        <View style = {{flex:1, justifyContent: "space-around", alignItems: "center",}}>
          <Image source={Pic} style = {{position: 'absolute', width: screenWidth, height: screenHeight, bottom: 0}}/>

          <Text style = {{fontSize: 50, fontFamily: 'Baskerville', textAlign: 'center', margin: 10, marginBottom: -30, fontStyle: 'italic'}}>
            Welcome to Rainbow Stretcher!
          </Text>

          <Text style = {{fontSize: 25, fontFamily: 'Baskerville', textAlign: 'center', margin: 10, marginBottom: -10}}>
            Which Color Palette Do You Prefer?
          </Text>

          <TouchableOpacity onPress={() => this.setState({key: "classic"})}>
          <Text style = {{backgroundColor: 'black', color: 'white', fontSize: 25, padding: 10, borderWidth: 5, borderColor: 'gray', fontFamily: 'Baskerville', borderRadius: 15, overflow: 'hidden'}}   >Classic Colors</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({key: "warm"})}>
          <Text style = {{backgroundColor: 'red', color: 'white', fontSize: 25, padding: 10, paddingHorizontal: 15, borderWidth: 5, borderColor: 'orange', fontFamily: 'Baskerville', borderRadius: 15, overflow: 'hidden'}}>Warm Colors</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({key: "cool"})}>
          <Text style = {{backgroundColor: 'cornflowerblue', color: 'white', fontSize: 25, padding: 10, paddingHorizontal: 23, borderWidth: 5, borderColor: 'blue', fontFamily: 'Baskerville', borderRadius: 15, overflow: 'hidden'}}>Cool Colors</Text>
          </TouchableOpacity>
        </View>
      );
    } 

  } //end render

}//end APP
 



