import React from 'react';
import { View,SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    StatusBar,
    Image,
    TouchableWithoutFeedback } from 'react-native';
import {
    Container, Header, Left, Body, Right, Button, Icon, Title
    } from 'native-base'

const Headers=({isdarkmode, theme, setisdarkmode})=>{
    return(
        <View>
            <Header style={{backgroundColor:isdarkmode?theme.darkmode.backgroundColor:theme.darkmode.defaultmode}}>
            <StatusBar backgroundColor={isdarkmode?'black':'gray'}/>
                <Left>
                    <TouchableWithoutFeedback onPress={()=>setisdarkmode(!isdarkmode)}>
                    <Icon name='camera' type='Feather' style={{color:isdarkmode?theme.darkmode.color:theme.darkmode.defaultmode}} />
                    </TouchableWithoutFeedback>
                </Left>
                <Body style={{alignItems:'center'}}>
                    <View style={{width:50}}>
                    <Image
                        style={{width:150, height:45, tintColor:isdarkmode?theme.darkmode.color:theme.darkmode.defaultmode}}
                        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'}}
                    />
                    </View>
                    {/* <Title>Instagram</Title> */}
                </Body>
                <Right>
                
                    <Icon name='paper-plane' style={{color:isdarkmode?theme.darkmode.color:theme.darkmode.defaultmode}} />
                    
                </Right>
                </Header>
        </View>
    )
}

export default Headers