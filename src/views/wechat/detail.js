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

// style
import css from './styleSheet/index';

// view
//const Listview = require('./view/listview');

class Detail extends Component {

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
        <Page style={[css.greyBg]} ref="DetailPage" title='上海微信群(99)' hasLeftButton={true} hasHome={false} {...this.props}>
          <View>
            <Text>{this.props.passProps.ide}</Text>
          </View>
        </Page>
      )
  }



}

module.exports = Detail;
