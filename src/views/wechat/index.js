'use strict';

import React, {
  Component,
} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Page,
} from '@ctrip/moles-cui';

// style
import css from './styleSheet/index';

// view
const Listview = require('./view/listview');

class Index extends Component {

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
          <Listview />
          <TouchableOpacity onPress={this.toDetail.bind(this,'123hah')}>
            <View >
              <Text>asd</Text>
            </View>
          </TouchableOpacity>
          </View>

        </Page>
      )
  }

  toDetail(eventId) {
    // Alert.alert('detail', eventId + '', null);
    this.props.navigator.push({
      pathname: '/detail/:id',
      passProps: {
        ide: eventId
      }
    });
  }

}

module.exports = Index;
