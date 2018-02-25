import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {

    constructor(props) {
        super(props);
        this.state = { albums: [] };
    }   

    async componentWillMount(){

        const data = await axios.get('http://almundo-test.herokuapp.com/api/albums');
        this.setState({ albums: data.data.albumsFound });
        console.log(data);
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.name} album={album} />
        );
    }   


    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        ); 
    }

}

export default AlbumList; 
