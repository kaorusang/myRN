'use strict';

import {
  Alert,
} from 'react-native';

var fetchData = function (url, params, self) {
 //console.log(url);
 //console.log(params);
 //console.log(self.state.ReturnCount);
 let thisDataList = [];
 const {
      dataList,
      dataSource,
    } = self.state;
 fetch(url, {
 	method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      params
    )
 })
 .then((response) => response.json())
 .then((responseData) => {
    if (responseData && responseData.ResponseStatus &&
      responseData.ResponseStatus.Ack == 'Success' && responseData.EventList) {
      if (responseData.EventList.length > 0) {
        console.log(responseData.EventList);
        thisDataList=thisDataList.concat(responseData.EventList);
        self.setState({
          dataList: thisDataList,
          dataSource: dataSource.cloneWithRows(thisDataList)
        });
      }
    }  else {
      Alert.alert(
        '接口错误',
        null,
        null
      );
    }
  })
}

module.exports = fetchData;