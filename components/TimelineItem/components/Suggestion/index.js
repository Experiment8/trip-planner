import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text, Button } from 'react-native-elements';

export default class Suggestion extends Component {

  render() {

    const {
      duration
    } = this.props;

    return(
      <View style={styles.container}>
        <Icon name="walk" style={styles.icon} size={22} color="blue" type="material-community" />
        <View style={styles.content}>
          <Text style={styles.label}>A { duration } walk will bring you there.</Text>
          <View style={styles.buttons}>
            <Button onPress={() => ({})} title="Let's go" buttonStyle={styles.button} textStyle={styles.buttonText} />
            <Button onPress={() => ({})} title="More options" buttonStyle={styles.button} textStyle={styles.buttonText} />
          </View>
        </View>
        <Icon name="close" style={styles.icon} size={22} color="gray" type="material-community" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    paddingTop: 15,
    paddingLeft: 8,
    height: 80,
    backgroundColor: 'lightblue',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  icon: {
    flex: 0
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  label : {
    marginLeft: 10,
    color: 'blue'
  },
  buttons: {
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  buttonText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14
  },
  button: {
    flex: 0,
    padding: 0,
    margin: 0,
    marginTop: 15,
    backgroundColor: 'transparent'
  }
});
