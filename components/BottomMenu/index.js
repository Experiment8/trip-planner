import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements'

export default class BottomMenu extends Component {

  render() {

    return(
      <View style={styles.buttonGroup}>
        <Button icon={{ name: 'map', color: 'gray' }} textStyle={styles.buttontext} buttonStyle={styles.button} title="Inspire me" />
        <Button icon={{ name: 'sign-direction', color: 'gray', type: 'material-community' }} textStyle={styles.buttontext} buttonStyle={styles.button} title="Inspire me" />
        <Button icon={{ name: 'account', color: 'gray', type: 'material-community' }} textStyle={styles.buttontext} buttonStyle={styles.button} title="Inspire me" />
        <Button icon={{ name: 'dots-horizontal', color: 'gray', type: 'material-community' }} textStyle={styles.buttontext} buttonStyle={styles.button} title="Inspire me" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom  : 0,
    left    : 0,
    right   : 0,
    height  : 70,
    backgroundColor: 'white'
  },
  buttonText: {
    color: 'gray'
  },
  button: {
    flex: 0,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderWidth: 0
  }
});
