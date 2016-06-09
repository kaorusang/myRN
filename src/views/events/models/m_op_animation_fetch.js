'use strict';

import {
  Alert,
} from 'react-native';

class Model {

  _fetchAnimData(pointer){

    fetch('http://m.ctrip.com/restapi/soa2/10307/GetGuessYouLikeDistrict?_fxpcqlniredt=09031118210273857681', {
   	  method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          DistrictId: "",
          contentType: "json",
          head: {
            cid: "09031118210273857681",
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
        })
     })
    .then((response) => response.json())
    .then((responseData) => {
        if (responseData && responseData.ResponseStatus &&
          responseData.ResponseStatus.Ack == 'Success' && responseData.DistrictInfoList) {
          
            if (responseData.DistrictInfoList.length > 0) {
              pointer.setState({
                dataList: responseData,
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