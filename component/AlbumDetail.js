import React from 'react';
import {Text, View, Image, StyleSheet, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail=(props)=>{

    const {
        title,
        artist, 
        thumbnail_image, 
        image, 
        url
    }=props.album

    return(
        <Card>
            <CardSection>
                <View style={style.thumbnailContainerStyle}> 
                    <Image 
                        source={{uri:thumbnail_image}}
                        style={style.thumbnailStyle}
                    />
                </View>
                <View style={style.headerContentStyle}>
                    <Text style={style.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={style.imagestyle}
                    source={{uri:image}}
                />
            </CardSection>
            <CardSection>
                <Button 
                onPress={()=>Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

const style=StyleSheet.create({
    thumbnailStyle:{
        height:50,
        width:50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imagestyle:{
        height:300,
        flex:1
    }
})

export default AlbumDetail