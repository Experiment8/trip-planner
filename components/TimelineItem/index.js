import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';

import Accommodation from './components/Accommodation';
import Transport from './components/Transport';
import Landmark from './components/Landmark';

const getElementByType = item => {

  switch(item.type) {

    case 'accommodation':
      return <Accommodation {...item} />;

    case 'transport':
      return <Transport {...item} />;

    case 'landmark':
      return <Landmark {...item} />;

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
