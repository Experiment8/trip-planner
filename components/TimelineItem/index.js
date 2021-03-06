import React, { Component, Fragment } from 'react';
import { ListItem } from 'react-native-elements';

import Accommodation from './components/Accommodation';
import Transport from './components/Transport';
import Landmark from './components/Landmark';
import Suggestion from "./components/Suggestion";
import Restaurant from "./components/Restaurant";
import Tour from "./components/Tour";
import Flight from "./components/Flight";
import Inspire from "./components/Inspire";

const getElementByType = (item, updateTransportsList, onTransportsSelection, onSuggestionHide, onAcceptSuggestion, onHitInspireMe) => {

  if (item.suggested) {
    return (<Suggestion {...item} onAcceptSuggestion={onAcceptSuggestion} onHitInspireMe={onHitInspireMe} onSuggestionHide={onSuggestionHide} updateTransportsList={updateTransportsList} onTransportsSelection={onTransportsSelection} />)
  }

  switch(item.category) {

    case 'HOTEL':
      return <Accommodation {...item} />;

    case 'BUS':
    case 'UNDERGROUND':
    case 'WALKING':
    case 'BIKE':
    case 'TAXI':
    case 'WATERBUS':
      return <Transport {...item} onTransportsSelection={onTransportsSelection} />;

    case 'ATTRACTION':
    case 'LANDMARK':
    case 'EXPERIENCE':
      return <Landmark {...item} />;

    case 'RESTAURANT':
      return <Restaurant {...item} />;

    // case 'WATERBUS':
    //   return <Tour {...item} />;

    case 'FLIGHT':
    case 'AIRPORT':
      return <Flight {...item} />;

    case 'INSPIRE':
      return <Inspire {...item} onHitInspireMe={onHitInspireMe} />;

    default:
      return (<ListItem
        key={item.id}
        title={item.name}
        subtitle={item.meta}
        icon={null}
      />)

  }

};

export default class TimelineItem extends Component {

  render() {

    const {
      item,
      onSuggestionHide,
      onAcceptSuggestion,
      updateTransportsList,
      onTransportsSelection,
      onHitInspireMe
    } = this.props;

    return getElementByType(item, updateTransportsList, onTransportsSelection, onSuggestionHide, onAcceptSuggestion, onHitInspireMe)
  }
}
