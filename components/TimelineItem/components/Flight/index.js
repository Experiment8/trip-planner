import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import Moment from 'moment';

import { lineStyle, dotStyle, itemListStyle, timeBadge } from '../../styles';

export default class Landmark extends Component {

  render() {

    const {

      startEpoch,
      endEpoch,

      from,
      to,

      checkInEpoch,
      gate

    } = this.props;

    return(
      <View style={itemListStyle}>
        <View style={lineStyle} />
        <Text style={timeBadge}>
          <View style={dotStyle} />
          <Text>{ Moment(startEpoch).format('HH:mm') } to { Moment(endEpoch).format('HH:mm') }</Text>
        </Text>
        <View style={styles.content}>
          <View style={styles.icon}>
            <Icon name="airplane-takeoff" type="material-community" color="#003580" size={34} />
          </View>
          <View style={styles.data}>
            <Text h4 style={styles.name}>{ from } to { to }</Text>
            <Text>Check-in: { Moment(checkInEpoch).format('HH:mm') } - Gate { gate }</Text>
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  content: {
    display      : 'flex',
    flexDirection: 'row',
    marginTop    : 10,
    marginLeft   : 20
  },
  data   : {
    marginLeft: 10
  },
  icon   : {
    width         : 50,
    height        : 50,
    borderWidth   : 2,
    borderColor   : '#003580',
    borderStyle   : 'solid',
    borderRadius  : 50,
    justifyContent: 'center'
  },
  name   : {
    fontSize: 18
  }
});
