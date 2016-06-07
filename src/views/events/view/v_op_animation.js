'use strict';

import React, {
  Component
} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Image,
  Animated,
} from 'react-native';

import Moment from 'moment';

Moment.locale('zh-cn');

class OpAnimation extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    //console.log(this.props.propsData);
    let _data  = this.props.propsData,
        _cont = this.props.controller,
        _css = this.props.css,
        _a  = this.props.animations[0],
        _a2 = this.props.animations[1];

        console.log(_a);
        console.log(_a2)

      return (
        <View style={_css.bg}>
          
          <View style={_css.textView}>
            <Text style={_css.textViewH4}>大家正在结伴去这些地方</Text>
            <Text style={_css.textViewH2}>  你想去哪儿？</Text>
            <View style={_css.earthView}>
              <Animated.Image style={[_css.plane, {
                transform: [{
                  rotate: _a.interpolate({
                    inputRange: [0,1],
                    outputRange: ['180deg','0deg']
                  })
                  
                }],
                opacity: _a,
              }]} source={require('../img/img_plane.png')} />
              <Image style={_css.earth} resizeMode='contain' source={require('../img/img_earth.png')} />

              <View style={_css.cityView}>

                <TouchableHighlight style={_css.signs} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <Animated.View style={[_css.signsView, {opacity: _a2}]} >
                    <View style={_css.signsCircular}>
                      <Text style={_css.signsCircularText}>丽江</Text>
                    </View>
                    <View style={[_css.signsHandle, _css.signs2Handle]}></View>
                  </Animated.View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs2]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <View style={[_css.signsCircular, _css.signs2Circular]}>
                      <Text style={[_css.signsCircularText, _css.signs2CircularText]}>厦门</Text>
                    </View>
                    <View style={[_css.signsHandle, _css.signs2Handle]}></View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs3]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <View style={[_css.signsCircular, _css.signs3Circular]}>
                      <Text style={[_css.signsCircularText, _css.signs3CircularText]}>青岛</Text>
                    </View>
                    <View style={[_css.signsHandle, _css.signs3Handle]}></View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs4]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <View style={[_css.signsCircular, _css.signs4Circular]}>
                      <Text style={[_css.signsCircularText, _css.signs4CircularText]}>北京</Text>
                    </View>
                    <View style={[_css.signsHandle, _css.signs4Handle]}></View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs5]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <View style={[_css.signsCircular, _css.signs5Circular]}>
                      <Text style={[_css.signsCircularText, _css.signs5CircularText]}>上海</Text>
                    </View>
                    <View style={[_css.signsHandle, _css.signs5Handle]}></View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs6]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <View style={[_css.signsCircular, _css.signs6Circular]}>
                      <Text style={[_css.signsCircularText, _css.signs6CircularText]}>青海湖</Text>
                    </View>
                    <View style={_css.signspoint}></View>
                    <View style={[_css.signsHandle, _css.signs6Handle]}></View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs7]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <View style={[_css.signsCircular, _css.signs7Circular]}>
                      <Text style={[_css.signsCircularText, _css.signs7CircularText]}>拉萨</Text>
                    </View>
                    <View style={_css.signspoint}></View>
                    <View style={[_css.signsHandle, _css.signs7Handle]}></View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs8]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <View style={[_css.signsCircular, _css.signs8Circular]}>
                      <Text style={[_css.signsCircularText, _css.signs8CircularText]}>西藏</Text>
                    </View>
                    <View style={_css.signspoint}></View>
                    <View style={[_css.signsHandle, _css.signs8Handle]}></View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs9]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <View style={[_css.signsCircular, _css.signs9Circular]}>
                      <Text style={[_css.signsCircularText, _css.signs9CircularText]}>曼谷</Text>
                    </View>
                    <View style={_css.signspoint}></View>
                    <View style={[_css.signsHandle, _css.signs9Handle]}></View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs10]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <View style={[_css.signsCircular, _css.signs10Circular]}>
                      <Text style={[_css.signsCircularText, _css.signs10CircularText]}>首尔</Text>
                    </View>
                    <View style={_css.signspoint}></View>
                    <View style={[_css.signsHandle, _css.signs10Handle]}></View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs11]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <View style={[_css.signsCircular, _css.signs11Circular]}>
                      <Text style={[_css.signsCircularText, _css.signs11CircularText]}>···</Text>
                    </View>
                    <View style={_css.signspoint}></View>
                    <View style={[_css.signsHandle, _css.signs11Handle]}></View>
                  </View>
                </TouchableHighlight>

              </View>
            </View>
          </View>
          <View>

          </View>
          <TouchableHighlight style={_css.iconCloseTouchView} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
            <View>
              <Image style={_css.iconClose} resizeMode='contain' source={require('../img/ico_close.png')} />
            </View>
          </TouchableHighlight>
        </View>
      )
  }

}


module.exports = OpAnimation;