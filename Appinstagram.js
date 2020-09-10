/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
// import Header from './component/Header';
import AlbumList from './component/AlbumList';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title
} from 'native-base'

import Headers from './instagramcomponent/Header'
import Atas from './instagramcomponent/Atas'
import Feed from './instagramcomponent/Feed';
import Footer from './instagramcomponent/Footer';

const App = () => {
  const [isdarkmode, setisdarkmode]=useState(false)
  const theme={
    darkmode:{
      color:'white',
      backgroundColor:'#1b1b2f',
    },
    defaultmode:{
      color:'black',
      backgroundColor:'white'
    }
  }
  return (
    <View style={{flex:1}}>
      <Headers isdarkmode={isdarkmode} theme={theme} setisdarkmode={setisdarkmode}/>
      <ScrollView>
      <View style={{height:94}}>
        <Atas isdarkmode={isdarkmode} theme={theme}/>
      </View>
      <View>
        <Feed isdarkmode={isdarkmode} theme={theme}/>
        <Feed isdarkmode={isdarkmode} theme={theme}/>
      </View>
      </ScrollView>
      <Footer isdarkmode={isdarkmode} theme={theme}/>
    </View>
    
  );
};

const styles = StyleSheet.create({
 
});

export default App;
