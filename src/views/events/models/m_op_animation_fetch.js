'use strict';

import {
  Alert,
} from 'react-native';

class Model {

  _fetchAnimData(url, params, self){

    let thisDataList = self.state.dataList;
   
    const {
      dataList,
      dataSource,
      isLoading,
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
          responseData.ResponseStatus.Ack == 'Success' && responseData.DistrictInfoList) {
          
            if (responseData.DistrictInfoList.length > 0) {
              thisDataList=responseData;
              self.setState({
                dataList: thisDataList,
                //isLoading: false,
                model: 'showAnim'
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

  _asd(){

  }

}

module.exports = Model;