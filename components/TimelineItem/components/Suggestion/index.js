import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text, Button } from 'react-native-elements';

import Transport from '../Transport';

const getIconName = by => {

  switch(by) {

    case 'BIKE':
      return 'bike';

    case 'WALKING':
      return 'walk';

    case 'TAXI':
      return 'taxi';

    default:
      return by;

  }

};

const getText = ({ startEpoch, endEpoch, by }) => {
  const formattedDuration = (endEpoch - startEpoch) / 1e3 / 60;

  switch(by) {

    case 'BIKE':
      return `A ${formattedDuration}min biking will bring you there.`;

    case 'WALKING':
      return `A ${formattedDuration}min walk will bring you there.`;

    case 'TAXI':
      return `Take a cab, you'll be there in ${formattedDuration}min.`;

    default:
      return `Only ${formattedDuration}min.`;

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
      by,
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
          <Icon name={getIconName(by)} style={styles.icon} size={22} color="#003580" type="material-community" />
          <View style={styles.content}>
            <Text style={styles.label}>
              { getText(this.props) }
            </Text>
            <View style={styles.buttons}>
              <Button onPress={this.acceptSuggestion} title="Let's go" buttonStyle={styles.button} textStyle={styles.buttonText} />
              <Button onPress={onTransportsSelection} title="More options" buttonStyle={styles.button} textStyle={styles.buttonText} />
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
