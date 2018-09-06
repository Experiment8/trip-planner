import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { Icon, Text, Button } from 'react-native-elements';

import Moment from 'moment';

import { lineStyle, dotStyle, itemListStyle, timeBadge } from '../../styles';

export default class Restaurant extends Component {

  constructor(props) {
    super(props);

    this.reserveTable = this.reserveTable.bind(this);
  }

  state = {
    reserving : false,
    reserved  : false
  };

  reserveTable() {
    this.setState({ reserving: true });

    setTimeout(() => {
      this.setState({ reserved: true, reserving: false })
    }, 2000)
  }

  render() {

    const {
      startEpoch,
      name,
    } = this.props;

    const {
      reserved,
      reserving
    } = this.state;

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
            { !reserved ?
              <Text style={styles.notReserved}>Not reserved yet.</Text>
              :
              <Text style={styles.reserved}>Table reserved at { Moment(startEpoch).format('HH:mm') }!</Text>
            }
          </View>
          { !reserved ?
            <Button
              title={ reserving ? 'Reserving...' : 'Reserve' }
              loading={reserving}
              disabled={reserving}
              buttonStyle={styles.button}
              onPress={this.reserveTable}
            />
            : null }
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
    color: '#ff0202'
  },
  reserved: {
    color: '#0ab21b'
  },
  button     : {
    backgroundColor: '#003580'
  }
});
