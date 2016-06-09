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

  _eventListData(districtId, pointer){

    let thisDataList = pointer.state.dataList,
        dataSource   = pointer.state.dataSource,
        count        = 5;

    console.log(thisDataList)

    fetch('http://m.ctrip.com/restapi/soa2/10307/GetEventList', {
      method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          DistrictId: districtId,
          DepartureId: "",
          StartDate: "",
          EndDate: "",
          IsOnlyStarted: false,
          AgeRangeList: [],
          EventTagIdList: [],
          Gender: "",
          Keyword: "",
          StartIndex: 0,
          ReturnCount: count,
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
        })
     })
    .then((response) => response.json())
    .then((responseData) => {
        
        if (responseData && responseData.ResponseStatus &&
          responseData.ResponseStatus.Ack == 'Success' && responseData.EventList) {
          if (responseData.TotalCount) {
            //console.log(responseData.TotalCount);
            if (responseData.EventList.length > 0) {
              console.log(responseData.EventList);
              thisDataList=thisDataList.concat(responseData.EventList);
              pointer.setState({
                model: 'eventList',
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
          Alert.alert(
            '接口错误',
            null,
            null
        );
      }
    })
  }

  _loadNextData(pointer){

    fetch('http://m.ctrip.com/restapi/soa2/10307/GetEventList', {
      method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
        })
     })
    .then((response) => response.json())
    .then((responseData) => {
        
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
          Alert.alert(
            '接口错误',
            null,
            null
        );
      }
    })

  }

}

module.exports = Model;