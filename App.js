import React, { Component, Fragment } from 'react';

import { StyleSheet, View, ScrollView, Image, FlatList } from 'react-native';
import { Header, Text } from 'react-native-elements';

import TimelineItem from './components/TimelineItem';
import { getTimeline } from './api';

export default class App extends Component {

  state = {
    timeline: []
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    getTimeline()
      .then(timeline => {
        this.setState({ timeline })
      })
  }

  render() {

    const {
      timeline
    } = this.state;

    return (
      <Fragment>
        <View>
          <Header
            style={styles.header}
            centerComponent={<Text h3 style={styles.headerText}>Inspire me</Text>}
            rightComponent={<Text h3 style={styles.headerText}>Share</Text>}
          />
        </View>
        <View style={styles.map}>
          <Image
            source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=12&size=600x150' }}
            style={{ width: 600, height: 150, resizeMode: Image.resizeMode.contain }}
          />
        </View>
        <ScrollView>
          { timeline.length ? <FlatList
            data={timeline}
            renderItem={({item}) => <TimelineItem item={item} />}
          />  : null }
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'baseline'
  },
  headerText: {
    fontSize  : 20,
    color     : '#fff',
    paddingTop: 10
  },
  map: {
    height: 150
  },
  spacer: {
    height: 100
  }
});
