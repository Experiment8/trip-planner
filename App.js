import React, { Component, Fragment } from 'react';

import { StyleSheet, View, ScrollView, Image, FlatList } from 'react-native';
import { Header, Text, ListItem } from 'react-native-elements';

import Moment from 'moment';

import TimelineItem from './components/TimelineItem';
import { getTimeline, getTransports } from './api';

const getIconName = by => {

  switch(by) {

    case 'UNDERGROUND':
      return 'subway';

    case 'TAXI':
      return 'taxi';

    case 'WALKING':
      return 'walk';

    case 'BIKE':
      return 'bike';

    default:
      return 'transport';

  }

};

const flattenItems = items => (
  items.map(item => ({ ...item, ...item.event, key: item.event.id.toString() }))
);

const updateCurrentTransport = (transportAbout, items, updatedItem) => (
  items.map((item) => {
    if (item.id.toString() === transportAbout) return updatedItem;
    return item;
  })
);

export default class App extends Component {

  state = {
    timeline      : [],
    transports    : [],
    transportsList: false,
    transportAbout: ''
  };

  constructor(props) {
    super(props);

    this.toggleTransportsList = this.toggleTransportsList.bind(this);
    this.updateTransportsList = this.updateTransportsList.bind(this);
  }

  toggleTransportsList(id) {
    this.setState({ transportsList: !this.state.transportsList, transportAbout: id.toString() })
  }

  updateTransportsList(transports) {
    this.setState({ transports })
  }

  componentDidMount() {
    getTimeline()
      .then(timeline => {
        this.setState({ timeline: flattenItems(timeline.timelineItems) })
      });

    getTransports()
      .then(transports => {
        this.setState({ transports })
      });
  }

  render() {

    const {
      timeline,
      transports,
      transportsList,
      transportAbout
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

        { !transportsList ? <ScrollView>
          { timeline.length ? <FlatList
            data={timeline}
            renderItem={({item}) => <TimelineItem key={item.id} item={item} onTransportsSelection={this.toggleTransportsList} />}
          />  : null }
        </ScrollView> :
        <ScrollView>
          <FlatList
            data={transports}
            renderItem={({item}) => <ListItem
              key={item.id}
              title={item.name}
              subtitle={`Takes around ${Moment.duration(item.endEpoch - item.startEpoch).minutes()}mins`}
              leftIcon={{ name: getIconName(item.by), type: 'material-community' }}
              onPress={() => {
                this.setState({ timeline: updateCurrentTransport(this.state.timeline, transportAbout, item) });
                this.toggleTransportsList();
              }} />}
          />
        </ScrollView> }

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
