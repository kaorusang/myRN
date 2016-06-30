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
import css from '../styleSheet/your';


class your extends Component {

  render() {

      return (

        <View style={[css.you]}>
          <Image
            style={[css.youPortrait]}
            source={require('../img/80.png')}
          />
          <View style={[css.youBox]} >
            <Text style={[css.youName]} >原来是你们这帮家伙</Text>
            <Image
              style={[css.youBubble]}
              source={require('../img/youBubble.png')}
              blurRadius={0}
              resizeMode={Image.resizeMode.stretch}
              capInsets={{left: 13 , right: 10 , bottom: 10 , top: 26}}
            >
              <Text style={[css.youTalk]}>一群嗜血的蚂蚁被腐肉所吸引，我面无表情看孤独的风景，失去你爱开始分明。</Text>
            </Image>
          </View>
        </View>

      )
  }

}


module.exports = your;
