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
const Your2 = require('./your2');

class listview extends Component {

  render() {

      return (
        <ScrollView style={[less.content ]}>

          <Time />

          <Your />

          <Your2 />

          <Your2 />

        </ScrollView>
      )
  }

}


module.exports = listview;
