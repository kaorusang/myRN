'use strict';

import {
  Alert,
} from 'react-native';
import {
  Model,
} from '@ctrip/moles-cui';

class eventModel {

  _fetchAnimData(pointer){

    let myModel = {
      GetEventList: Model.createModel({
        url: 'http://m.ctrip.com/restapi/soa2/10307/GetGuessYouLikeDistrict?_fxpcqlniredt=09031118210273857681',
        method: 'POST',
        param: {
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
        },
      })
    }

    myModel.GetEventList.execute(function(responseData){
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

  _eventListData(districtId, pointer){

    let thisDataList = pointer.state.dataList,
        dataSource   = pointer.state.dataSource,
        startIndex   = pointer.state.startIndex,
        count        = 5;

    //console.log(pointer.state.model, pointer.state.districtId, startIndex);
    //console.log(thisDataList)


    let myModel = {
      GetEventList: Model.createModel({
        url: 'http://m.ctrip.com/restapi/soa2/10307/GetEventList',
        method: 'POST',
        param: {
          DistrictId: districtId,
          DepartureId: "",
          StartDate: "",
          EndDate: "",
          IsOnlyStarted: false,
          AgeRangeList: [],
          EventTagIdList: [],
          Gender: "",
          Keyword: "",
          StartIndex: startIndex,
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
        },
      })
    }

    myModel.GetEventList.execute(function(responseData){
      if (responseData && responseData.ResponseStatus &&
        responseData.ResponseStatus.Ack == 'Success' && responseData.EventList) {
        if (responseData.TotalCount) {
          //console.log(responseData.TotalCount);
          if (responseData.EventList.length > 0) {
            //console.log(responseData.EventList);
            thisDataList=thisDataList.concat(responseData.EventList);
            pointer.setState({
              model: 'eventList',
              totalCount: responseData.TotalCount,
              startIndex: count,
              dataList: thisDataList,
              dataSource: dataSource.cloneWithRows(thisDataList)
            });

            //console.log(pointer.state.model, pointer.state.districtId, startIndex);

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

}


module.exports = eventModel;