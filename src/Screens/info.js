//Import a library to help create a component
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Header from '../components/header';
// import AlbumList from '../components/AlbumList';

class Info extends Component {

    static navigationOptions = {
        title: 'History'
    };

    render() {
        return (
            <ScrollView>
            <View>
                <Text style={styles.containerStyle}>
                Metallica, one of the biggest selling acts 
                in American history, were born 
                on October 28, 1981 when drummer
                 Lars Ulrich and guitar player/singer J
                ames Hetfield got together via 
                Ulrich’s LA Recycler newspaper 
                ad. Soon, the two had recruited 
                Hetfield’s fr
                iend and housemate Ron McGovney 
                to play bass, Dave Mustaine to 
                play lead guitar, and taken the name Metallica after a sugge
                stion from Bay Area metal scene 
                friend Ron Quintana. Their ascent
                 was to be relatively quick, driven by sheer work-rate, effort and 
                a rare musical chemistry. After 
                hitting the opener’s circuit in
                 LA (where they supported the likes of Saxon) they recorded their first 
                ever demo No Life ‘Til Leather.
                 The tape-trading circuit went
                  crazy for it, and after repeatedly 
                  well-received shows in the Bay Area,
                 Metallica found themselves relocating
                  there after convincing bassist Cliff 
                  Burton to leave his band Trauma and replace McGovney.
                  </Text>
                  <Text style={styles.containerStyle}>
                  East Coast metal merchant Jon Zazula pitched the band on 
                  an album deal with his indie label Megaforce Records and 
                  1983 found them traveling to New York in a stolen U-Haul
                   to record their first album. Shortly after arriving in 
                   New York in April 1983, Mustaine was replaced by Exodus 
                   shredder Kirk Hammett and the boys hit the studio for
                    the first time. The resulting debut album, Kill ‘Em All
                     exploded onto the scene later that year brandishing
                      punk-encrusted, crunchy metal riffery, the likes of
                       “The Four Horsemen,” “Whiplash” and “Seek and Destroy” 
                       that were hailed as instant classics. The stellar reception 
                       in the metal community allowed them to quickly make their
                        second album Ride The Lightning with producer Flemming 
                        Rassmussen in Copenhagen at Sweet Silence Studios during 
                        the summer of 1984. With their writing chemistry maturing 
                        at an alarming rate of knots, classic compositions such as 
                        “For Whom The Bell Tolls” and “Fade To Black” sat proudly 
                        with the aggression of “Fight Fire With Fire” and “Creeping 
                        Death.” Q Prime Management and Elektra Records both moved quickly
                         to take the band on by the Fall of ’84, and with the road getting
                          busier and more international, the bands’ stature rapidly grew.
                  </Text>
            </View>
            </ScrollView>
    );
    }
    
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0,
        padding: 10,
        color: '#000',
        backgroundColor: 'white'
    }
});


export default Info; 
