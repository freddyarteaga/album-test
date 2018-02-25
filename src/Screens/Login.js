import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Spinner, CardSection, Card, Button } from '../components/common';
import LoginForm from '../components/LoginForm';
// import Albums from './albums';

class Login extends Component {


  static navigationOptions = {
    title: 'Metallica Home',
    headerStyle: { backgroundColor: '#D3D3D3' },
    headerTitleStyle: { marginLeft: 140 },
    
};

state = { loggedIn: null };
  

   componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyDlbWzUytQhsGrp4ePWI-R_TIvSzVYuflg',
        authDomain: 'authentication-cf358.firebaseapp.com',
        databaseURL: 'https://authentication-cf358.firebaseio.com',
        projectId: 'authentication-cf358',
        storageBucket: 'authentication-cf358.appspot.com',
        messagingSenderId: '141667449551'
      });
    

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {

    const { navigate } = this.props.navigation;
    switch (this.state.loggedIn) {
      case true:
        return (  
          <Card style={{ height: 900 }}>
                 
              <CardSection>
                <View onPress={() => navigate('Albums')}>
                <Image
                  style={styles.imageStyle} 
                  source={{ uri: 'https://i1.wp.com/www.metalinjection.net/wp-content/uploads/2014/12/Metallica-disography.jpg?fit=700%2C700' }}
                />
                </View>  
              </CardSection>
              <CardSection>
                <Button onPress={() => navigate('Albums')}>        
                   ALBUMS
                </Button>
              </CardSection>
              <CardSection>
                <Button onPress={() => navigate('Concerts')}>        
                   CONCERT LIST
                </Button>
              </CardSection>           
              <View style={{ marginTop: 100 }}>
              <CardSection >
                <Button onPress={() => firebase.auth().signOut()} >        
                   <Text>Log Out</Text>
                </Button>
              </CardSection>
              </View>
          </Card>

        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>        
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
      height: 400,
      flex: 1,
      width: null
  }
});


export default Login;
