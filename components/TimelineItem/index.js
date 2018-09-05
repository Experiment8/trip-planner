import React, { Component, Fragment } from 'react';
import { ListItem } from 'react-native-elements';

import Accommodation from './components/Accommodation';
import Transport from './components/Transport';
import Landmark from './components/Landmark';
import Suggestion from "./components/Suggestion";
import Restaurant from "./components/Restaurant";
import Tour from "./components/Tour";
import Flight from "./components/Flight";

const getElementByType = item => {

  switch(item.category) {

    case 'HOTEL':
      return <Accommodation {...item} />;

    case 'TRANSPORT':
      return <Transport {...item} />;

    case 'LANDMARK':
      return <Landmark {...item} />;

    case 'SUGGESTION':
      return <Suggestion {...item} />;

    case 'RESTAURANT':
      return <Restaurant {...item} />;

    case 'WATERBUS':
      return <Tour {...item} />;

    case 'FLIGHT':
      return <Flight {...item} />;

    default:
      return (<ListItem
        title={item.name}
        subtitle={item.meta}
        icon={null}
      />)

  }

};

export default class TimelineItem extends Component {

  render() {

    const {
      item
    } = this.props;

    return getElementByType(item)
  }
}
