'use strict';

import {
  Alert,
} from 'react-native';

// fetch
// import HomeData from '../models/m_fetch';

// cModel
//import HomeData from './models/m_model'

// fetch
import Models from '../models/m_home_fetch'; //没有使用cModel,使用原来的fetch。原因是打包后设备上运行取不到数据，怀疑cModel有坑
//import Models from '../models/m_home_model';


class controller {

  _addNewEvent() {
    Alert.alert('addNewEvent标题', 'addNewEvent内容', null);
    console.log(1);
  };

  _interestEvent(eventId, pointer) {
    // pointer.setDefaultValue({
    //   abc: 20,
    // })
    Alert.alert('interestEvent', 'interestEvent' + eventId + ':' + pointer.defaultValue.anim, null);
    console.log(pointer.defaultValue.anim);
    // this.stopPropagation();
  };

  _signupEvent(eventId) {
    Alert.alert('signupEvent', 'signupEvent' + eventId, null);
  };

  _replyEvent(eventId) {
    Alert.alert('replyEvent', 'replyEvent' + eventId, null);
  };

  _fetchAnimData(pointer) {
    Models.prototype._fetchAnimData(pointer);
  };

  _reloadEventList(eventDistrictId, pointer) {

    pointer.setState({
      districtId: eventDistrictId,
      model: 'loading',
      dataList: [],
    });

    Models.prototype._eventListData(eventDistrictId, pointer);
  };

  _loadNextPage(eventDistrictId, pointer) {
    pointer.setState({
      districtId: eventDistrictId,
      //model: 'next-loading',
    });
    // debugger;
    if (pointer.state.startIndex > pointer.state.totalCount) {
      return;
    }

    Models.prototype._eventListData(eventDistrictId, pointer);
  }

  

}

module.exports = controller;