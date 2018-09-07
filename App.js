import React, { Component, Fragment } from 'react';

import { StyleSheet, View, ScrollView, Image, FlatList } from 'react-native';
import { Header, Text, ListItem } from 'react-native-elements';

import TimelineItem from './components/TimelineItem';
import { getTimeline, getTransports } from './api';
import { inspireMeTimeline } from './config';

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

    case 'WATERBUS':
      return 'ferry';

    default:
      return 'transport';

  }

};

const flattenItems = items => (
  items.map(item => ({ ...item, ...item.event, key: item.event.id.toString() }))
);

const updateCurrentTransport = (items, transportAbout, updatedItem) => (
  items.map((item) => {
    if (item.id.toString() === transportAbout) {
      return {
        ...updatedItem,
        suggested : false,
        startEpoch: new Date(2018, 0, 1, 12, 0).valueOf(),
        endEpoch  : new Date(2018, 0, 1, 12, updatedItem.timeToSpendInMinutes).valueOf()
      };
    }
    return item;
  })
);

export default class App extends Component {

  state = {
    timeline       : [],
    transports     : [],
    transportsList : false,
    transportAbout : '',
    hasHitInspireMe: false
  };

  constructor(props) {
    super(props);

    this.toggleTransportsList = this.toggleTransportsList.bind(this);
    this.updateTransportsList = this.updateTransportsList.bind(this);
    this.onSuggestionHide     = this.onSuggestionHide.bind(this);
    this.onSuggestionAccept   = this.onSuggestionAccept.bind(this);
    this.toggleInspireMe      = this.toggleInspireMe.bind(this);
  }

  toggleTransportsList(id) {
    this.setState({ transportsList: !this.state.transportsList, transportAbout: id.toString() })
  }

  toggleInspireMe() {
    this.setState({ hasHitInspireMe: !this.state.hasHitInspireMe })
  }

    updateTransportsList(transports) {
    this.setState({ transports })
  }

  onSuggestionAccept(id) {
    this.setState({
      timeline: this.state.timeline.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            suggested: false
          }
        }
        return item;
      })
    })
  }

  onSuggestionHide(id) {
    this.setState({
      timeline: this.state.timeline.filter((item) => (
        item.id !== id
      ))
    })
  }

    componentDidMount() {
    getTimeline()
      .then(timeline => {
        this.setState({ timeline: flattenItems(timeline.timelineItems) })
      });

    getTransports()
      .then(transports => {
        this.setState({ transports: transports.map((item) => ({ ...item, key: item.id.toString() })) })
      });
  }

  render() {

    const {
      timeline,
      transports,
      transportsList,
      transportAbout,
      hasHitInspireMe
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
          { hasHitInspireMe && timeline.length ? <FlatList
            data={timeline}
            renderItem={({item}) => <TimelineItem key={item.id} item={item} onAcceptSuggestion={this.onSuggestionAccept} onSuggestionHide={this.onSuggestionHide} onTransportsSelection={this.toggleTransportsList} onHitInspireMe={this.toggleInspireMe} />}
          />  :
             <FlatList
               data={inspireMeTimeline}
               renderItem={({item}) => <TimelineItem key={item.id} item={item} onAcceptSuggestion={this.onSuggestionAccept} onSuggestionHide={this.onSuggestionHide} onTransportsSelection={this.toggleTransportsList} onHitInspireMe={this.toggleInspireMe} />}
             />
          }
        </ScrollView> :
        <ScrollView>
          <FlatList
            data={transports}
            renderItem={({item}) => <ListItem
              key={item.id}
              title={item.name}
              subtitle={`Takes around ${item.timeToSpendInMinutes}mins`}
              leftIcon={{ name: getIconName(item.category), type: 'material-community' }}
              onPress={() => {
                this.setState({ timeline: updateCurrentTransport(this.state.timeline, transportAbout, item) });
                this.toggleTransportsList(item.id);
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
