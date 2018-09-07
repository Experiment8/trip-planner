import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import Moment from 'moment';

import { lineStyle } from "../../styles";

const getIconName = category => {

  switch(category) {

    case 'UNDERGROUND':
      return 'subway';

    case 'TAXI':
      return 'taxi';

    case 'WALKING':
      return 'walk';

    case 'BIKE':
      return 'bike';

    case 'BUS':
      return 'bus';

    case 'WATERBUS':
      return 'ferry';

    default:
      return 'transport';

  }

};

const getTransportText = ({ category, startEpoch, endEpoch }) => {
  const formattedDuration = Moment.duration(endEpoch - startEpoch).minutes();

  switch(category) {

    case 'UNDERGROUND':
      return `With the Underground it's only ${formattedDuration} minutes.`;

    case 'TAXI':
      return `Just about ${formattedDuration} minutes by cab.`;

    case 'WALKING':
      return `Around ${formattedDuration} minutes walking distance.`;

    case 'BIKE':
      return `Bike there in ${formattedDuration} minutes.`;

    case 'BUS':
      return `The bus ride takes ${formattedDuration} minutes.`;

    case 'WATERBUS':
      return `Take the river bus for ${formattedDuration} minutes.`;

    default:
      return `It's only ${formattedDuration} minutes.`;

  }

};

export default class Transport extends Component {

  render() {

    const {
      category
    } = this.props;

    return (
      <View style={styles.listItem}>
        <View style={lineStyle} />
        <View style={styles.content}>
          <Icon name={getIconName(category)} size={24} color="#003580" type="material-community" />
          <Text style={styles.text}>{ getTransportText(this.props) }</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    position         : 'relative',
    padding          : 10,
    paddingRight     : 10,
    paddingLeft      : 10,
    margin           : 0,
    height           : 45,
    borderBottomWidth: 1,
    borderStyle      : 'solid',
    borderColor      : '#ddd'
  },
  content : {
    display      : 'flex',
    marginLeft   : 30,
    flexDirection: 'row',
    alignItems   : 'center'
  },
  text    : {
    color     : '#003580',
    marginLeft: 5
  }
});
