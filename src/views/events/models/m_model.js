'use strict';

import {
  Alert,
} from 'react-native';
import {
  Model,
} from '@ctrip/moles-cui';

var eventModel = (url, params, self, StartIndex) => {

  let thisDataList = self.state.dataList;
  let count = StartIndex + self.state.params.ReturnCount;

  const {
    dataList,
    dataSource,
    isLoading,
  } = self.state;

  self.setState({
    isLoading: true,
  });

  var myModel = {
    GetEventList: Model.createModel({
      url: url,
      method: 'POST',
      param: params,
    })
  }

  myModel.GetEventList.execute(function(responseData){
    self.setState({
      isLoading: false,
    });
    if (responseData && responseData.ResponseStatus &&
      responseData.ResponseStatus.Ack == 'Success' && responseData.EventList) {
      if (responseData.TotalCount) {
        //console.log(responseData.TotalCount);
        if (responseData.EventList.length > 0) {
          //console.log(responseData.EventList);
          thisDataList=thisDataList.concat(responseData.EventList);
          self.setState({
            _totalCount: responseData.TotalCount,
            _StartIndex: count,
            dataList: thisDataList,
            dataSource: dataSource.cloneWithRows(thisDataList)
          });
        } else {
          //  数据已经取完
          Alert.alert(
            '数据已经取完',
            null,
            null
          );
        }
      } else {
        // 结果为空
        //self.fetchRecommendData();
      }
    } else {
      // 接口错误
      Alert.alert(
        '接口错误',
        null,
        null
      );
    }
  },function(error){
      self.setState({
        isLoading: false
      })
      console.error(error);
  },null,null,null);

}



module.exports = eventModel;