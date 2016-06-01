/**
 * 结伴首页
 */
'use strict';

import React, {
  Component,
} from 'react';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  ListView,
  ScrollView,
} from 'react-native';
import {
  Page,
  Model,
} from '@ctrip/moles-cui';

import HomeStyle from './styleSheet/homeStyle';
import HomeData from './models/EventModel';

//import eventModel from './utils/eventModel'

const CommentListView = require('../components/view/listview');


class homeView extends Component {

  constructor(props) {
    super(props);
    this.state = {

      //ReturnCount: 5,
      
      // 数据
      dataList: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),

    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    //this.fetchData();

    var postData = {
      DistrictId: 32,
      DepartureId: "",
      StartDate: "",
      EndDate: "",
      IsOnlyStarted: false,
      AgeRangeList: [],
      EventTagIdList: [],
      Gender: "",
      Keyword: "",
      StartIndex: 0,
      ReturnCount: 5,
      SortType: 2,
      head: {
        cid: "09031081410251560227",
        ctok: "",
        cver: "1.0",
        lang: "01",
        sid: "8888",
        syscode: "09",
        auth: null,
        extension: [{
          name: "protocal",
          value: "http"
        }]
      },
      contentType: "json"
    };

    var url = 'http://m.ctrip.com/restapi/soa2/10307/GetEventList';
    var self = this;
    HomeData(url, postData, self);


  }

  render() {

    

    //console.log(postData);


    const {
      dataList,
      dataSource,
    } = this.state;
        //console.log(dataList);
        //console.log(dataSource);

        let mainList;
        if(dataList&&dataList.length>0){
          mainList = <ListView 
              //onEndReached = {()=>this.loadNextpage()}
              dataSource={dataSource}
              renderRow={this.renderRow.bind(this)}
              style={styles.listContainer}
              initalListSize={4}
              pageSize={1}
              ref='refList'
              renderScrollComponent={props=><ScrollView {...props} />}
            />
        }

        return (
            <Page ref="DetailPage" title='结伴' hasLeftButton={true} hasHome={true} {...this.props}>
                {mainList}
            </Page>
        )
  }

  renderRow(data, section, index) {
     
    if (data && data.EventID) {
      //console.log(styles);
      return (
        <CommentListView propsData={data} css={styles} />
      )
    } else {
      return;
    }
  }



  // fetchData(fromZero) {
  //   const self = this;
  //   const {
  //     dataList,
  //     dataSource,
  //     noDataList,
  //     noDataSource,
  //     DistrictId,
  //     DepartureId,
  //     StartDate,
  //     EndDate,
  //     IsOnlyStarted,
  //     AgeRangeList,
  //     EventTagIdList,
  //     Gender,
  //     Keyword,
  //     StartIndex,
  //     ReturnCount,
  //     SortType
  //   } = this.state;
  //   let thisDataList = !!fromZero?[]:dataList; // 为true的时清空数据重新加载，为false的时加载下一页数据
    // console.log(dataList);
    // fetch('http://m.ctrip.com/restapi/soa2/10307/GetEventList', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     DistrictId: DistrictId,
    //     DepartureId: DepartureId,
    //     StartDate: StartDate,
    //     EndDate: EndDate,
    //     IsOnlyStarted: IsOnlyStarted,
    //     AgeRangeList: AgeRangeList,
    //     EventTagIdList: EventTagIdList,
    //     Gender: Gender,
    //     Keyword: Keyword,
    //     StartIndex: StartIndex,
    //     ReturnCount: ReturnCount,
    //     SortType: SortType,
    //     head: {
    //       cid: "09031081410251560227",
    //       ctok: "",
    //       cver: "1.0",
    //       lang: "01",
    //       sid: "8888",
    //       syscode: "09",
    //       auth: null,
    //       extension: [{
    //         name: "protocal",
    //         value: "http"
    //       }]
    //     },
    //     contentType: "json"
    //   })
    // })
    // .then((response) => response.json())
    // .then((responseData) => {
    //     if (responseData && responseData.ResponseStatus &&
    //       responseData.ResponseStatus.Ack == 'Success' && responseData.EventList) {
    //       if (responseData.EventList.length > 0) {
    //         console.log(responseData.EventList);
    //         thisDataList=thisDataList.concat(responseData.EventList);
    //         self.setState({
    //           dataList: thisDataList,
    //           dataSource: dataSource.cloneWithRows(thisDataList)
    //         });
    //       }
    //     }  else {
    //       // 接口错误
    //       Alert.alert(
    //         '接口错误',
    //         null,
    //         null
    //       );
    //     }
    // })

    // eventModel.GetEventList.param = {
    //   "DistrictId": DistrictId,
    //   "DepartureId": DepartureId,
    //   "StartDate": StartDate,
    //   "EndDate": EndDate,
    //   "IsOnlyStarted": IsOnlyStarted,
    //   "AgeRangeList": AgeRangeList,
    //   "EventTagIdList": EventTagIdList,
    //   "Gender": Gender,
    //   "Keyword": Keyword,
    //   "StartIndex": StartIndex,
    //   "ReturnCount": ReturnCount,
    //   "SortType": SortType,
    //   "head": {
    //     "cid": "09031081410251560227",
    //     "ctok": "",
    //     "cver": "1.0",
    //     "lang": "01",
    //     "sid": "8888",
    //     "syscode": "09",
    //     "auth": null,
    //     "extension": [{
    //       "name": "protocal",
    //       "value": "http"
    //     }]
    //   },
    // }

    // eventModel.GetEventList.execute(function(responseData){
    //   // console.log(JSON.stringify(responseData))
    //   if (responseData && responseData.ResponseStatus &&
    //     responseData.ResponseStatus.Ack == 'Success' && responseData.EventList) {
    //     if (responseData.TotalCount) {
    //       self.setState({
    //         totalCount: responseData.TotalCount,
    //       });
    //       if (responseData.EventList.length > 0) {
    //         thisDataList=thisDataList.concat(responseData.EventList);
    //         self.setState({
    //           dataList: thisDataList,
    //           dataSource: dataSource.cloneWithRows(thisDataList)
    //         });
    //       } else {
    //         //  数据已经取完
    //         Alert.alert(
    //           '数据已经取完',
    //           null,
    //           null
    //         );
    //       }
    //     } else {
    //       // 结果为空
    //       self.fetchRecommendData();
    //     }
    //   } else {
    //     // 接口错误
    //     Alert.alert(
    //       '接口错误',
    //       null,
    //       null
    //     );
    //   }
    // },function(error){
    //     self.setState({
    //       isLoading: false
    //     })
    //     console.error(error);
    // },null,null,null);


  //}
}

const styles = HomeStyle;

module.exports = homeView;