import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import { lineStyle, dotStyle, itemListStyle } from '../../styles';

export default class Landmark extends Component {

  render() {

    const {
      start,
      name,
      duration
    } = this.props;

    return(
      <View style={itemListStyle}>
        <View style={lineStyle} />
        <Text style={styles.badge}>
          <View style={dotStyle} />
          <Text>{ start }</Text>
        </Text>
        <View style={styles.content}>
          <View style={styles.icon}>
            <Icon name="home" color="orange" size={34} />
          </View>
          <View style={styles.data}>
            <Text h4 style={styles.name}>{ name }</Text>
            <Text style={styles.checkOut}>Suggested time: { duration }</Text>
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
    fontSize: 24
  },
  badge: {
    display: 'flex',
    color: '#aaa',
    alignItems: 'center'
  },
});
