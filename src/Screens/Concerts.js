//Import a library to help create a component
import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
// import Header from '../components/header';
// import AlbumList from '../components/AlbumList';
import ConcertItem from '../components/common/ConcertItem';

class Concerts extends Component {
    static navigationOptions = {
        title: 'Concerts',
        headerStyle: { backgroundColor: '#D3D3D3' }
    };

    constructor(props) {
        super(props);
        this.state = {
            concerts: [
                {
                    id: 'asd',
                    fecha: {
                        dia: 26,
                        mes: 'MAR',
                        anho: 2016
                    },
                    locacion: {
                        ciudad: 'Cali',
                        pais: 'Colombia',
                        lugar: 'Pascual Gurrero'
                    }
                },
                {
                    id: 'afd',
                    fecha: {
                        dia: 15,
                        mes: 'ABR',
                        anho: 2016
                    },
                    locacion: {
                        ciudad: 'Miami',
                        pais: 'USA',
                        lugar: 'Levise Sjy'
                    }
                },
                {
                    id: 'aad',
                    fecha: {
                        dia: 10,
                        mes: 'JUN',
                        anho: 2016
                    },
                    locacion: {
                        ciudad: 'San Jose',
                        pais: 'USA',
                        lugar: 'Arera du moiw'
                    }
                },
                {
                    id: 'asy',
                    fecha: {
                        dia: 15,
                        mes: 'JUN',
                        anho: 2016
                    },
                    locacion: {
                        ciudad: 'Manteca',
                        pais: 'USA',
                        lugar: 'Gwlien Stadium'
                    }
                },
                {
                    id: 'axd',
                    fecha: {
                        dia: 22,
                        mes: 'JUN',
                        anho: 2016
                    },
                    locacion: {
                        ciudad: 'Bogota',
                        pais: 'Colombia',
                        lugar: 'Arera du moiw'
                    }
                },
                {
                    id: 'osy',
                    fecha: {
                        dia: 24,
                        mes: 'JUN',
                        anho: 2016
                    },
                    locacion: {
                        ciudad: 'Medellin',
                        pais: 'Colombia',
                        lugar: 'Gwlien Stadium'
                    }
                },
                {
                    id: 'yyy',
                    fecha: {
                        dia: 26,
                        mes: 'DEC',
                        anho: 2016
                    },
                    locacion: {
                        ciudad: 'Cali',
                        pais: 'Colombia',
                        lugar: 'Pascual Gurrero'
                    }
                },
                {
                    id: 'xxx',
                    fecha: {
                        dia: 15,
                        mes: 'DEC',
                        anho: 2016
                    },
                    locacion: {
                        ciudad: 'Miami',
                        pais: 'USA',
                        lugar: 'Levise Sjy'
                    }
                },
            ]
        };
    }

    render() {
        return (
            <FlatList
                data={this.state.concerts}
                renderItem={({ item }) => (
                    <ConcertItem 
                        dia={item.fecha.dia}
                        mes={item.fecha.mes}
                        anho={item.fecha.anho}
                        ciudad={item.locacion.ciudad}
                        pais={item.locacion.pais}
                        lugar={item.locacion.lugar}
                    />
                )}
                keyExtractor={item => item.id}
            />
        );
    }
    
}

export default Concerts; 
