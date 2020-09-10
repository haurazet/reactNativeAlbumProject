/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './component/Header';
import AlbumList from './component/AlbumList';


const App = () => {
  return (
    
    <View style={{flex:1}}>
      <Header isiheader={'Album'}/>
      <AlbumList/>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
