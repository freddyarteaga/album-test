import React from 'react';
import { Text, View } from 'react-native';
import {  Card } from './Card';

const ConcertItem = (props) => {
  return (
      <Card>
          <View style={{flexDirection: 'row', height: 80}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text>{props.mes}</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>{props.dia}</Text>
                  <Text>{props.anho}</Text>
              </View>
              <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>{props.ciudad}, {props.pais}</Text>
                  <Text>{props.lugar}</Text>
              </View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <View>
                      <Text style={{ color: 'red' }}>Sold Out</Text>
                  </View>
              </View>
          </View>
      </Card>
  );
}

export default ConcertItem;

