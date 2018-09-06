import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text, Button } from 'react-native-elements';

import Moment from 'moment';

import Transport from '../Transport';

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

    case 'CRUISE':
      return 'ship';

    default:
      return 'transport';

  }

};

const getText = ({ startEpoch, endEpoch, category }) => {
  const formattedDuration = Moment.duration(endEpoch - startEpoch).minutes();

  switch(category) {

    case 'UNDERGROUND':
      return `With the Subway it's only ${formattedDuration}min.`;

    case 'TAXI':
      return `Just about ${formattedDuration}min by cab.`;

    case 'WALKING':
      return `Around ${formattedDuration}min walking distance.`;

    case 'BIKE':
      return `Bike there in ${formattedDuration}min.`;

    case 'BUS':
      return `The bus ride takes ${formattedDuration}min.`;

    case 'SHIP':
      return `Navigate there in ${formattedDuration}min.`;

    default:
      return `It's only ${formattedDuration}min`;

  }

};

export default class Suggestion extends Component {

  constructor(props) {
    super(props);

    this.acceptSuggestion = this.acceptSuggestion.bind(this);
    this.hideSuggestion   = this.hideSuggestion.bind(this);
  }

  state = {
    hide      : false,
    accepted  : false
  };

  acceptSuggestion() {
    this.setState({ accepted: true })
  }

  hideSuggestion() {
    this.setState({ hide: true })
  }

  render() {

    const {
      category,
      id,
      onTransportsSelection
    } = this.props;

    const {
      hide,
      accepted
    } = this.state;

    return(
      <Fragment>

        { accepted ? <Transport {...this.props} /> : null }

        { (!hide && !accepted) ? <View style={styles.container}>
          <Icon name={getIconName(category)} style={styles.icon} size={22} color="#003580" type="material-community" />
          <View style={styles.content}>
            <Text style={styles.label}>
              { getText(this.props) }
            </Text>
            <View style={styles.buttons}>
              <Button onPress={this.acceptSuggestion} title="Let's go" buttonStyle={styles.button} textStyle={styles.buttonText} />
              <Button onPress={() => onTransportsSelection(id)} title="More options" buttonStyle={styles.button} textStyle={styles.buttonText} />
            </View>
          </View>
          <Icon onPress={this.hideSuggestion} name="close" style={styles.icon} size={22} color="gray" type="material-community" />
        </View> : null }

      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    display        : 'flex',
    padding        : 10,
    paddingTop     : 15,
    paddingLeft    : 8,
    height         : 80,
    backgroundColor: 'lightblue',
    alignItems     : 'flex-start',
    flexDirection  : 'row'
  },
  icon      : {
    flex: 0
  },
  content   : {
    flex           : 1,
    backgroundColor: 'transparent'
  },
  label     : {
    marginLeft: 10,
    color     : '#003580'
  },
  buttons   : {
    alignItems   : 'flex-start',
    flexDirection: 'row'
  },
  buttonText: {
    color     : '#0077cc',
    fontWeight: 'bold',
    fontSize  : 14
  },
  button    : {
    flex           : 0,
    padding        : 0,
    margin         : 0,
    marginTop      : 15,
    backgroundColor: 'transparent'
  }
});
