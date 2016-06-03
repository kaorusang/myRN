'use strict';

import {
  Alert,
} from 'react-native';

// fetch
import HomeData from '../models/m_fetch';

// cModel
//import HomeData from './models/m_model'

class controller {

  _addNewEvent() {
    Alert.alert('addNewEvent标题', 'addNewEvent内容', null);
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

  _loadNextpage(url, params, self) {
    let {
      isLoading,
      _StartIndex,
      _totalCount,
    } = self.state;

    //console.log(params)
    //console.log(_StartIndex);

    // debugger;
    if (self.state.isLoading || self.state._StartIndex > self.state._totalCount) {
      return;
    }
    self.setState({
      params: {
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
    });
    //this.setState({params.StartIndex : _StartIndex,}) 一直报错，
    //this.setState({ params: {StartIndex : _StartIndex,} }) 可以，但是别的参数会丢掉, 等于重新给params赋值。

    //console.log(this.state.params.StartIndex)
    HomeData(url, self.state.params, self);
  }

}

module.exports = controller;