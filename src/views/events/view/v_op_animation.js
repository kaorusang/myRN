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

    const _p   = this.props,
          _a   = this.props.animations;
    let _data  = _p.propsData,
        _cont  = _p.controller,
        _css   = _p.css;

      return (
        <View style={_css.bg}>
          
          <View style={_css.textView}>
            <Text style={_css.textViewH4}>大家正在结伴去这些地方</Text>
            <Text style={_css.textViewH2}>  你想去哪儿？</Text>
            <View style={_css.earthView}>
              <Animated.Image style={[_css.plane, {
                transform: [{
                  rotate: _a[0].interpolate({
                    inputRange: [0,1],
                    outputRange: ['180deg','0deg']
                  })
                  
                }],
                opacity: _a[0],
              }]} source={require('../img/img_plane.png')} />
              <Image style={_css.earth} resizeMode='contain' source={require('../img/img_earth.png')} />

              <View style={_css.cityView}>

                <TouchableHighlight style={_css.signs} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, {opacity: _a[1]}]}>
                      <Text style={_css.signsCircularText}>丽江</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signsHandle, {opacity: _a[3]}]}></Animated.View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs2]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, _css.signs2Circular, {opacity: _a[2]}]}>
                      <Text style={[_css.signsCircularText, _css.signs2CircularText]}>厦门</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signsHandle, _css.signs2Handle, {opacity: _a[3]}]}></Animated.View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs3]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, _css.signs3Circular, {opacity: _a[3]}]}>
                      <Text style={[_css.signsCircularText, _css.signs3CircularText]}>青岛</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signsHandle, _css.signs3Handle, {opacity: _a[4]}]}></Animated.View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs4]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, _css.signs4Circular, {opacity: _a[4]}]}>
                      <Text style={[_css.signsCircularText, _css.signs4CircularText]}>北京</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signsHandle, _css.signs4Handle, {opacity: _a[5]}]}></Animated.View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs5]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, _css.signs5Circular, {opacity: _a[5]}]}>
                      <Text style={[_css.signsCircularText, _css.signs5CircularText]}>上海</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signsHandle, _css.signs5Handle, {opacity: _a[6]}]}></Animated.View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs6]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, _css.signs6Circular, {opacity: _a[6]}]}>
                      <Text style={[_css.signsCircularText, _css.signs6CircularText]}>青海湖</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signspoint, {opacity: _a[6]}]}></Animated.View>
                    <Animated.View style={[_css.signsHandle, _css.signs6Handle, {opacity: _a[7]}]}></Animated.View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs7]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, _css.signs7Circular, {opacity: _a[7]}]}>
                      <Text style={[_css.signsCircularText, _css.signs7CircularText]}>拉萨</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signspoint, {opacity: _a[7]}]}></Animated.View>
                    <Animated.View style={[_css.signsHandle, _css.signs7Handle, {opacity: _a[8]}]}></Animated.View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs8]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, _css.signs8Circular, {opacity: _a[8]}]}>
                      <Text style={[_css.signsCircularText, _css.signs8CircularText]}>西藏</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signspoint, {opacity: _a[8]}]}></Animated.View>
                    <Animated.View style={[_css.signsHandle, _css.signs8Handle, {opacity: _a[9]}]}></Animated.View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs9]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, _css.signs9Circular, {opacity: _a[9]}]}>
                      <Text style={[_css.signsCircularText, _css.signs9CircularText]}>曼谷</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signspoint, {opacity: _a[9]}]}></Animated.View>
                    <Animated.View style={[_css.signsHandle, _css.signs9Handle, {opacity: _a[10]}]}></Animated.View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs10]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, _css.signs10Circular, {opacity: _a[10]}]}>
                      <Text style={[_css.signsCircularText, _css.signs10CircularText]}>首尔</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signspoint, {opacity: _a[10]}]}></Animated.View>
                    <Animated.View style={[_css.signsHandle, _css.signs10Handle, {opacity: _a[11]}]}></Animated.View>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={[_css.signs, _css.signs11]} activeOpacity={0.5} underlayColor={'rgba(0,0,0,0)'} onPress={_cont.prototype._addNewEvent.bind(this)} >
                  <View style={_css.signsView} >
                    <Animated.View style={[_css.signsCircular, _css.signs11Circular, {opacity: _a[11]}]}>
                      <Text style={[_css.signsCircularText, _css.signs11CircularText]}>···</Text>
                    </Animated.View>
                    <Animated.View style={[_css.signspoint, {opacity: _a[11]}]}></Animated.View>
                    <Animated.View style={[_css.signsHandle, _css.signs11Handle, {opacity: _a[12]}]}></Animated.View>
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