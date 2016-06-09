'use strict';

import {
  Alert,
} from 'react-native';

// fetch
// import HomeData from '../models/m_fetch';

// cModel
//import HomeData from './models/m_model'

// fetch
import Models from '../models/m_op_animation_fetch';


class controller {

  _addNewEvent() {
    Alert.alert('addNewEvent标题', 'addNewEvent内容', null);
    console.log(1);
  }

  _interestEvent(eventId) {
    Alert.alert('interestEvent', 'interestEvent' + eventId, null);
    // this.stopPropagation();
  }

  _signupEvent(eventId) {
    Alert.alert('signupEvent', 'signupEvent' + eventId, null);
  }

  _replyEvent(eventId) {
    Alert.alert('replyEvent', 'replyEvent' + eventId, null);
  }

  // _reloadEvent(eventDistrictId){
    
  //   console.log(999)
  // }

  _reloadEventList(eventDistrictId, pointer){

    pointer.setState({
      districtId: eventDistrictId,
      model: 'loading',
      dataList: [],
    });

    Models.prototype._eventListData(eventDistrictId, pointer);
  }

  _loadNextpage(url, params, pointer) {
    let {
      isLoading,
      _StartIndex,
      _totalCount,
    } = self.state;
    
    let _params = {
      DistrictId: 0,
      DepartureId: "",
      StartDate: "",
      EndDate: "",
      IsOnlyStarted: false,
      AgeRangeList: [],
      EventTagIdList: [],
      Gender: "",
      Keyword: "",
      StartIndex: _StartIndex,
      ReturnCount: 5,
      SortType: 1,
      head: {
        cid: "09031081410251560227",
        ctok: "",
        cver: "1.0",
        lang: "01",
        sid: "8888",
        syscode: "09",
        auth: null,
        extension: {
          name: "protocal",
          value: "http"
        }
      }
    }

    // console.log(params)
    // console.log(_StartIndex);

    // debugger;
    if (pointer.state.isLoading || pointer.state._StartIndex > pointer.state._totalCount) {
      return;
    }
    
    HomeData(url, _params, pointer, _params.StartIndex);
  }

}

module.exports = controller;