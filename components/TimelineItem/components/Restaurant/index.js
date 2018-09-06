import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { Icon, Text, Button } from 'react-native-elements';

import Moment from 'moment';

import { lineStyle, dotStyle, itemListStyle, timeBadge } from '../../styles';

export default class Restaurant extends Component {

  render() {

    const {
      startEpoch,
      name,
    } = this.props;

    return(
      <View style={itemListStyle}>
        <View style={lineStyle} />
        <Text style={timeBadge}>
          <View style={dotStyle} />
          <Text>{ Moment(startEpoch).format('HH:mm') }</Text>
        </Text>
        <View style={styles.content}>
          <View style={styles.icon}>
            <Icon name="restaurant" color="gray" size={34} />
          </View>
          <View style={styles.data}>
            <Text h4 style={styles.name}>{ name }</Text>
            <Text style={styles.notReserved}>Not reserved yet.</Text>
          </View>
          <Button title="reserve" buttonStyle={styles.button} />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  content    : {
    display      : 'flex',
    flexDirection: 'row',
    marginTop    : 10,
    marginLeft   : 20
  },
  data       : {
    flex      : 1,
    marginLeft: 10
  },
  icon       : {
    width         : 50,
    height        : 50,
    borderWidth   : 2,
    borderColor   : 'gray',
    borderStyle   : 'solid',
    borderRadius  : 50,
    justifyContent: 'center'
  },
  name       : {
    fontSize: 18
  },
  notReserved: {
    color: 'red'
  },
  button     : {
    backgroundColor: 'blue'
  }
});
