import React, { Component } from 'react';
import {
Text, View, ScrollView
} from 'react-native'
import Axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    state = { 
        albums:[]
     }

    async componentDidMount(){
        try{
            const {data}=await Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            this.setState({albums:data})
        } catch(error){
            console.log(error)
        }
    }

    renderAlbums=()=>{
        return this.state.albums.map(album=><AlbumDetail key={album.title} album={album}/>)
    }

    render() { 
        return ( 
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
         );
    }
}
 
export default AlbumList;