'use strict';

import React, {
  Component
} from 'react';
import {
  Text,
  View,
  ScrollView,
  Alert,
  Image,
  PixelRatio,
} from 'react-native';

// style
//import less from '../../../../build/less/less';
import less from '../styleSheet/listview';

// view
const Time = require('./time');
const Your = require('./your');

class listview extends Component {

  render() {

      return (
        <ScrollView style={[less.content ]}>

          <Time />

          <Your />

        </ScrollView>
      )
  }

}


module.exports = listview;
