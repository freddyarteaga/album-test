import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Albums from './src/Screens/albums';
import Info from './src/Screens/info';
import Login from './src/Screens/Login';
import Concerts from './src/Screens/Concerts';

class App extends React.Component {
    render() {
         return (
        <AppNavigator />
    );
    }
   
}

const AppNavigator = StackNavigator({
    Home: { screen: Login },
    Albums: { screen: Albums },
    Info: { screen: Info },
    Concerts: { screen: Concerts }
});


AppRegistry.registerComponent('Album', () => App); 
