'use strict';

import {
  Alert,
} from 'react-native';

var fetchData = (url, params, self) => {

  let thisDataList = self.state.dataList;
 
  const {
    dataList,
    dataSource,
    isLoading,
  } = self.state;

  // self.setState({
  //   isLoading: true,
  // });

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
        responseData.ResponseStatus.Ack == 'Success' && responseData.DistrictInfoList) {
        
          if (responseData.DistrictInfoList.length > 0) {
            //console.log(responseData.DistrictInfoList);
            //thisDataList=thisDataList.concat(responseData.DistrictInfoList);
            thisDataList=responseData;
            self.setState({
              dataList: thisDataList,
              isLoading: false,
              // dataSource: dataSource.cloneWithRows(thisDataList)
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
        Alert.alert(
          '接口错误',
          null,
          null
      );
    }
  })
}

module.exports = fetchData;