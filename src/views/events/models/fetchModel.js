'use strict';

import {
  Alert,
} from 'react-native';

var fetchData = function (url, params, self) {
 
  let thisDataList = self.state.dataList;
  let count = self.state.params.StartIndex + self.state.params.ReturnCount ;
 
  const {
    dataList,
    dataSource,
    isLoading,
  } = self.state;

  self.setState({
    isLoading: true,
  });

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
      self.setState({
        isLoading: false,
      });
      if (responseData && responseData.ResponseStatus &&
        responseData.ResponseStatus.Ack == 'Success' && responseData.EventList) {
        if (responseData.TotalCount) {
          self.setState({
            _totalCount: responseData.TotalCount,
          });
          if (responseData.EventList.length > 0) {
            //console.log(responseData.EventList);
            thisDataList=thisDataList.concat(responseData.EventList);
            self.setState({
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
        Alert.alert(
          '接口错误',
          null,
          null
      );
    }
  })
}

module.exports = fetchData;