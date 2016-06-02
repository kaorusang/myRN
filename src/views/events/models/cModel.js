import {
  Alert,
} from 'react-native';
import {
  Model,
} from '@ctrip/moles-cui';

var eventModel = function (url, params, self) {
  let thisDataList = [];
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
        self.setState({
          totalCount: responseData.TotalCount,
        });
        if (responseData.EventList.length > 0) {
          thisDataList=thisDataList.concat(responseData.EventList);
          self.setState({
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
        self.fetchRecommendData();
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