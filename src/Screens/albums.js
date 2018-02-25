import React, { Component } from 'react';
import { View, Button } from 'react-native';
// import Header from '../components/header';
import AlbumList from '../components/AlbumList';

class Albums extends Component {

    
        static navigationOptions = {
            title: 'Metallica Albums',
            headerStyle: { backgroundColor: '#D3D3D3' },
            headerTitleStyle: { marginLeft: 45 },
        };
   

    render() { 
        const { navigate } = this.props.navigation;
        return (

            
            <View style={{ flex: 1, backgroundColor: '#000' }}>
                {/* <Header /> */}
                <AlbumList />
                <Button title="history" onPress={() => navigate('Info')} />

                
            </View>
        );
      }
   
}

export default Albums;  

