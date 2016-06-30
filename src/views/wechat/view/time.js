'use strict';

import React, {
  Component
} from 'react';
import {
  Text,
  View,
} from 'react-native';

// style
//import less from '../../../../build/less/less';
import css from '../styleSheet/time';

class time extends Component {

  render() {

      return (
        <View style={[css.timeContent]}>
          <Text style={[css.timeText]}>上午12:11</Text>
        </View>
      )
  }

}


module.exports = time;
