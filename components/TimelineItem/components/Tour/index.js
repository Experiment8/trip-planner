import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import Moment from 'moment';

import { lineStyle, dotStyle, itemListStyle, timeBadge } from '../../styles';

const getTimeEstimate = ({ endEpoch, startEpoch }) => {
  const difference = Moment.duration(endEpoch - startEpoch);

  return `${difference.hours()}h`;
};

export default class Tour extends Component {

  render() {

    const {
      name,
      startEpoch
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
            <Icon name="directions-boat" color="green" size={34} />
          </View>
          <View style={styles.data}>
            <Text h4 style={styles.name}>{ name }</Text>
            <Text>Suggested time: { getTimeEstimate(this.props) }.</Text>
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20
  },
  data: {
    flex: 1,
    marginLeft: 10
  },
  icon: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'green',
    borderStyle: 'solid',
    borderRadius: 50,
    justifyContent: 'center'
  },
  name: {
    fontSize: 18
  },
  button: {
    backgroundColor: '#0077cc'
  }
});
