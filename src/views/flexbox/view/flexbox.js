'use strict';

import React, {
  Component
} from 'react';
import {
  Text,
  View,
  ScrollView,
  Alert,
} from 'react-native';

// style
import less from '../../../../build/less/less';

class flexBox extends Component {

  render() {

      return (
        <ScrollView style={[less.flexDirection, less.content ]}>

          <View style={[less.flexDirection, less.flex1, less.justifyContent, less.alignItems, less.flexWrap, less.box]}>

              <View style={[less.Bg1]}>
                <Text style={[less.text]}>1</Text>
              </View>

              <View style={[less.alignSelf, less.Bg2]}>
                <Text style={[less.text]}>2</Text>
              </View>

              <View style={[less.Bg3]}>
                <Text style={[less.text]}>3</Text>
              </View>

              <View style={[less.Bg4]}>
                <Text style={[less.text]}>4</Text>
              </View>

              <View style={[less.Bg5]}>
                <Text style={[less.text]}>5</Text>
              </View>

              <View style={[less.Bg6]}>
                <Text style={[less.text]}>6</Text>
              </View>

              <View style={[less.Bg7]}>
                <Text style={[less.text]}>7</Text>
              </View>

          </View>

        </ScrollView>
      )
  }

}


module.exports = flexBox;
