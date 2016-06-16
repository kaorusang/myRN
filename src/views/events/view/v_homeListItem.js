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
} from 'react-native';

// style
import OpAnimationStyle from '../styleSheet/s_home';

// controller
import Controller from '../controller/c_home';

import Moment from 'moment';

Moment.locale('zh-cn');

class HomeListItem extends Component {

  render() {
    //console.log(this.props.propsData);
    let _data  = this.props.propsData,
        _cont = Controller,
        _css = OpAnimationStyle,
        _pointer = this.props.pointer;

    if (_data && _data.EventID) {

      let IconGender =
        <Image resizeMode='contain' style={[_css.iconGender,_css.iconMale]} source={require('../img/ico_male.png')} />;
      let IconLike =
        <Image resizeMode='contain' style={_css.iconLike} source={require('../img/ico_like.png')} />;
      let IconApply =
        <Image resizeMode='contain' style={_css.iconApply} source={require('../img/ico_apply.png')} />;
      let IconReply =
        <Image resizeMode='contain' style={_css.iconReply} source={require('../img/ico_reply.png')} />;

      if (_data.EventUser && _data.EventUser.Gender && _data.EventUser.Gender == 'F') {
        IconGender =
          <Image resizeMode='contain' style={[_css.iconGender,_css.iconFemale]} source={require('../img/ico_female.png')} />
      }
      if (!!_data.IsInterested) {
        IconLike =
          <Image resizeMode='contain' style={_css.iconLike} source={require('../img/ico_like_active.png')} />
      }
      if (!!_data.IsSignup) {
        IconApply =
          <Image resizeMode='contain' style={_css.iconApply} source={require('../img/ico_apply_active.png')} />
      }

      let flag;
      if(Moment(_data.StartDate).isBefore(Moment())){
        flag =
        <View style={_css.flag}>
          <View>
            <Image source={require('../img/events_flag_green.png')} style={_css.flagBg} />
          </View>
          <View style={_css.flagTextView}>
            <Text style={_css.flagText}>我已经</Text><Text style={_css.flagText}>出发啦</Text>
          </View>
        </View>
      }else{
        flag =
        <View style={_css.flag}>
          <View>
            <Image source={require('../img/events_flag_green.png')} style={_css.flagBg} />
          </View>
          <View style={_css.flagTextView}>
            <Text style={_css.flagText}>{Moment(_data.StartDate).fromNow(true)}</Text>
            <Text style={[_css.flagText,_css.flagTextAfter]}>后出发</Text>
          </View>
        </View>
      }

      var distrctNames='';
      for(var i=0;_data.DistrictList.length>i;i++){
        if(distrctNames){
          distrctNames+=',';
        }
        distrctNames+=_data.DistrictList[i].DistrictName;
      }

      let eventPics;

      return (
        <TouchableHighlight style={_css.eventCard} activeOpacity={0.5} underlayColor={'#f8f8f8'} onPress={_cont.prototype._addNewEvent.bind(this)} >
          <View>
            {flag}
            <View style={_css.user}>
              <Image style={_css.userHead} source={{uri:_data.EventUser.UserImgUrl}} />
              <View>
                <View style={_css.userTitle}>
                  <Text style={_css.userName}>{_data.EventUser.UserName}</Text>
                  {IconGender}
                </View>
                <Text style={_css.userAgeFrom}>{_data.EventUser.AgeRange} 来自{_data.EventUser.DistrictName}</Text>
              </View>
            </View>

            <View style={_css.route}>
              <Text style={_css.routeSub}>路线：</Text>
              <Text style={_css.routeDest}>{_data.Departure.DistrictName||'太空游游Ctrip星球'}</Text>
              <Image style={_css.iconGoto} source={require('../img/ico_goto.png')}/>
              <Text style={_css.routeDest}>{distrctNames||'太空游游Ctrip星球'}</Text>
            </View>

            <Text style={_css.time}>
              <Text style={_css.routeSub}>时间：</Text>
              {Moment(_data.StartDate).format('YYYY-MM-DD')}出发 （共 <Text tagname='b' style={_css.totalDate}>{Moment(_data.EndDate).from(Moment(_data.StartDate),true)}</Text>）
            </Text>
            <View style={_css.desc}>
              <Text style={_css.descText} numberOfLines={3} >{_data.Description}</Text>
            </View>
            {eventPics}
            <View style={_css.cardButtons}>
              <TouchableOpacity onPress={_cont.prototype._interestEvent.bind(this,_data.EventID, _pointer)} style={_css.cardButton}>
                {IconLike}
                <Text style={_css.cardCount}>{_data.InterestedCount}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={_cont.prototype._signupEvent.bind(this,_data.EventID)} style={[_css.cardButton,_css.cardCenterButton]}>
                {IconApply}
                <Text style={_css.cardCount}>{_data.SignupCount}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={_cont.prototype._replyEvent.bind(this,_data.EventID)} style={_css.cardButton}>
                {IconReply}
                <Text style={_css.cardCount}>{_data.ReplyCount}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableHighlight>
      )
    } else {
      return;
    }
  }

}


module.exports = HomeListItem;
