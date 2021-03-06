import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import Moment from 'moment';

const getTimeEstimate = ({ endEpoch, startEpoch }) => {
  const difference = Moment.duration(endEpoch - startEpoch);

    return difference.humanize(false);
};

import { lineStyle, dotStyle, itemListStyle, timeBadge } from '../../styles';

const getIconName = category => {

    switch(category) {

        case 'ATTRACTION':
            return 'university';

        case 'LANDMARK':
            return 'camera';

        case 'EXPERIENCE':
            return 'paper-plane';

        default:
            return 'university';

    }

};

        export default class Landmark extends Component {

  render() {

    const {
      startEpoch,
      name,
      category
    } = this.props;

    return(
      <View style={itemListStyle}>
        <View style={lineStyle} />
        <View style={timeBadge}>
          <View style={dotStyle} />
          <Text>{ Moment(startEpoch).format('HH:mm') }</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.icon}>
            <Icon name={getIconName(category)} color="orange" type="font-awesome" size={24} />
          </View>
          <View style={styles.data}>
            <Text h4 style={styles.name}>{ name }</Text>
            <Text style={styles.checkOut}>Suggested time: { getTimeEstimate(this.props) }</Text>
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
    marginLeft: 10
  },
  icon: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'orange',
    borderStyle: 'solid',
    borderRadius: 50,
    justifyContent: 'center'
  },
  name: {
    fontSize: 18
  }
});
