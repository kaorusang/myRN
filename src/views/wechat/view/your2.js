'use strict';

import React, {
  Component
} from 'react';
import {
  Text,
  View,
  Image,
  PixelRatio,
} from 'react-native';

// style
//import less from '../../../../build/less/less';
import css from '../styleSheet/your2';


class yours extends Component {

  render() {

      return (

        <View style={[css.you]}>
          <Image
            style={[css.youPortrait]}
            source={require('../img/80.png')}
          />
          <View style={[css.youBox]} >
            <Text style={[css.youName]} >原来是你们这帮家伙</Text>
            <View style={[css.youBubble]}>
              <View style={[css.youBubbleView]}>
                <Text style={[css.youTalk]}>一群嗜血的蚂蚁被腐肉所吸引，我面无表情看孤独的风景，失去你爱开始分明。</Text>
              </View>
              <View style={[css.triangle]}></View>
              <View style={[css.triangle2]}></View>
            </View>
          </View>
        </View>

      )
  }

}


module.exports = yours;
