import React from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { Button } from './common/Button';

const AlbumDetail = ({ album }) => {
    const { name, date, thumbnail_image, image, url } = album;
    // const { navigate } = this.props.navigation;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{name}</Text>
                    <Text>{date}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={styles.imageStyle} 
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy
                </Button>
            </CardSection>

        </Card>
    );
};

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
        // marginTop: 10
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius: 33
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 400,
        flex: 1,
        width: null
    }
});

export default AlbumDetail; 

