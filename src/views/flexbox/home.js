'use strict';

import React, {
  Component,
} from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import {
  Page,
} from '@ctrip/moles-cui';

// view
const FlexBox = require('./view/flexbox');

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {

      return (
        <Page ref="DetailPage" title='flex-box' hasLeftButton={false} hasHome={false} {...this.props}>
          <FlexBox />
        </Page>
      )
  }

}

module.exports = Home;
