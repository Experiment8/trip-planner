import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import { lineStyle } from "../../styles";

const getIconName = by => {

  switch(by) {

    case 'subway':
      return 'subway';

    default:
      return 'transport';

  }

};

const getTransportText = ({ by, duration }) => {

  switch(by) {

    case 'subway':
      return `Take the Subway, it's only ${ duration }.`;

    default:
      return 'transport';

  }

};

export default class Transport extends Component {

  render() {

    const {
      by
    } = this.props;

    return (
      <View style={styles.listItem}>
        <View style={lineStyle} />
        <View style={styles.content}>
          <Icon name={getIconName(by)} size={20} color="blue" />
          <Text style={styles.text}>{ getTransportText(this.props) }</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    position: 'relative',
    padding : 10,
    paddingRight: 10,
    paddingLeft: 10,
    margin  : 0,
    height  : 40,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ddd'
  },
  content: {
    display: 'flex',
    marginLeft: 35,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: 'blue',
    marginLeft: 5
  }
});
