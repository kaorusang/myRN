'use strict';

import {
  Alert,
} from 'react-native';

var fetchData = function (url, params, self) {
 //console.log(url);
 //console.log(params);
 //console.log(self.state.ReturnCount);
  //let thisDataList = [];
  let thisDataList = self.state.dataList;
  let StartIndex = self.state.postData.StartIndex + self.state.postData.ReturnCount ;
  //console.log(StartIndex)
 
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
            totalCount: responseData.TotalCount,
          });
          if (responseData.EventList.length > 0) {
            console.log(responseData.EventList);
            thisDataList=thisDataList.concat(responseData.EventList);
            self.setState({
              StartIndex: StartIndex,
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