import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Animated, Easing, Dimensions} from 'react-native';
import Constants from 'expo-constants';
import Home from './App.js'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const position = new Animated.ValueXY({x: 0, y:-screenHeight/2})

export default function App() {
  let[load, setLoad] = useState(true)

  let[key, setKey] = useState("");
  let [countRed, setCountRed] = useState(0);
  let [countOrange, setCountOrange] = useState(0);
  let [countYellow, setCountYellow] = useState(0);
  let [countLime, setCountLime] = useState(0);
  let [countGreen, setCountGreen] = useState(0);
  let [countCyan, setCountCyan] = useState(0);
  let [countBlue, setCountBlue] = useState(0);
  let [countPurple, setCountPurple] = useState(0);

  let[pad, setPad] = useState(50)

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    top:{
      flexDirection: 'row',
    },
    bottom:{
      flexDirection: 'row',
      alignSelf: 'space-around',
      flexWrap: 'wrap', 
      left: 35
    },
    textRed: {
      backgroundColor: 'red',
      color: 'white',
      paddingVertical: pad,
      paddingHorizontal: countRed,
    },
    textOrange: {
      backgroundColor: 'orange',
      color: 'white',
      paddingVertical: pad,
      paddingHorizontal: countOrange,
    },
    textYellow: {
      backgroundColor: 'yellow',
      color: 'white',
      paddingVertical: pad,
      paddingHorizontal: countYellow,
    },
    textLime: {
      backgroundColor: 'lime',
      color: 'white',
      paddingVertical: pad,
      paddingHorizontal: countLime,
    },
    textGreen: {
      backgroundColor: 'green',
      color: 'white',
      paddingVertical: pad,
      paddingHorizontal: countGreen,
    },
    textCyan: {
      backgroundColor: 'deepskyblue',
      color: 'white',
      paddingVertical: pad,
      paddingHorizontal: countCyan,
    },
    textBlue: {
      backgroundColor: 'darkblue',
      color: 'white',
      paddingVertical: pad,
      paddingHorizontal: countBlue,
    },
    textPurple: {
      backgroundColor: 'purple',
      color: 'white',
      paddingVertical: pad,
      paddingHorizontal: countPurple,
    },
  });

  const pic = require('./background 1.jpg') 

  setTimeout(()=> setLoad(false), 2000)

  if(load){
    return(
      <View style = {{flex:1, justifyContent: 'center', alignItems: 'center',}}>
      <Image source={require('./background 1.jpg')} style = {{position: 'absolute', width: screenWidth, height: screenHeight, bottom: 0}}/>
        <Text style = {{fontSize: 30, fontFamily:'Baskerville'}}>Generating Colors...</Text>
      </View>
    )
  }


  Animated.timing(
    position, {
      toValue: {x:0, y:0},
      easing: Easing.bounce,
      duration: 3000
    }
  ).start()

  if(key == "home"){
    return(<Home/>);
  }
  return (
    <View style={styles.container}>
        <Image source={pic} style = {{position: 'absolute',
        width: screenWidth,
        height: screenHeight,
        bottom: 0}}/>
      <Animated.View style = {{...position.getLayout()}}>
        <View style = {styles.top}>
        <Text style = {styles.textRed}> {} </Text>
        <Text style = {styles.textOrange}> {} </Text>
        <Text style = {styles.textYellow}> {} </Text>
        <Text style = {styles.textLime}> {} </Text>
        <Text style = {styles.textGreen}> {} </Text>
        <Text style = {styles.textCyan}> {} </Text>
        <Text style = {styles.textBlue}> {} </Text>
        <Text style = {styles.textPurple}> {} </Text>
        </View>
      </Animated.View>
      <View style = {styles.bottom}>
        <TouchableOpacity onPress={() => setCountRed(countRed + 1)}>
          <Text style = {{backgroundColor: 'red', color: 'white', fontSize: 25, padding: 10, margin: 5, borderWidth: 5, fontFamily: "Cochin", borderRadius: 20, overflow: 'hidden'}}   >                 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCountOrange(countOrange + 1)}>
          <Text style = {{backgroundColor: 'orange', color: 'white', fontSize: 25, padding: 10, margin: 5, borderWidth: 5, fontFamily: "Cochin", borderRadius: 20, overflow: 'hidden'}}>                 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCountYellow(countYellow + 1)}>
          <Text style = {{backgroundColor: 'yellow', color: 'white', fontSize: 25, padding: 10, margin: 5, borderWidth: 5, fontFamily: "Cochin", borderRadius: 20, overflow: 'hidden'}}>                 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCountLime(countLime + 1)}>
          <Text style = {{backgroundColor: 'lime', color: 'white', fontSize: 25, padding: 10, margin: 5, borderWidth: 5, fontFamily: "Cochin", borderRadius: 20, overflow: 'hidden'}}>                 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCountGreen(countGreen + 1)}>
          <Text style = {{backgroundColor: 'green', color: 'white', fontSize: 25, padding: 10, margin: 5, borderWidth: 5, fontFamily: "Cochin", borderRadius: 20, overflow: 'hidden'}}>                 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCountCyan(countCyan + 1)}>
          <Text style = {{backgroundColor: 'deepskyblue', color: 'white', fontSize: 25, padding: 10, margin: 5, borderWidth: 5, fontFamily: "Cochin", borderRadius: 20, overflow: 'hidden'}}>                 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCountBlue(countBlue + 1)}>
          <Text style = {{backgroundColor: 'darkblue', color: 'white', fontSize: 25, padding: 10, margin: 5, borderWidth: 5, fontFamily: "Cochin", borderRadius: 20, overflow: 'hidden'}}>                 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCountPurple(countPurple + 1)}>
          <Text style = {{backgroundColor: 'purple', color: 'white', fontSize: 25, padding: 10, margin: 5, borderWidth: 5, fontFamily: "Cochin", borderRadius: 20, overflow: 'hidden'}}>                 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {position.setValue({x: 0, y: -screenHeight/2}), setKey("home")}}>
          <Text style = {{fontFamily: "Cochin", fontSize: 20, backgroundColor: 'gray', padding: 5, marginTop: 20}}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPad(pad-2)}>
          <Text style = {{fontFamily: "Cochin", fontSize: 40, backgroundColor: 'gray', paddingHorizontal: 15.5, marginTop: 20, marginLeft: 50, marginRight: 20, borderRadius: 20, overflow: 'hidden'}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPad(pad+2)}>
          <Text style = {{fontFamily: "Cochin", fontSize: 40, backgroundColor: 'gray', paddingHorizontal: 12, marginTop: 20, borderRadius: 20, overflow: 'hidden'}}>+</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );


}


