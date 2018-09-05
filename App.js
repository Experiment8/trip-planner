import React, { Component, Fragment } from 'react';

import { StyleSheet, View, ScrollView, Image, FlatList } from 'react-native';
import { Header, Text } from 'react-native-elements';

import TimelineItem from './components/TimelineItem';
import { timeline1 } from './config';
import BottomMenu from "./components/BottomMenu";

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {

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
            source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=12&size=600x300' }}
            style={{ width: 600, height: 300, resizeMode: Image.resizeMode.contain }}
          />
        </View>
        <ScrollView>
          <FlatList
            data={timeline1}
            renderItem={({item}) => <TimelineItem item={item} />}
          />
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
    height: 300
  },
  spacer: {
    height: 100
  }
});
