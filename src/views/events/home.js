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
  Loading,
} from '@ctrip/moles-cui';

// 分离的style
import HomeStyle from './styleSheet/homeStyle';

// 分离的fetch
import HomeData from './models/fetchModel';

// 分离的cModel
//import HomeData from './models/cModel'

// 分离公共View
const CommentListView = require('../components/view/listview');


class homeView extends Component {

  constructor(props) {
    super(props);
    this.state = {

      StartIndex: 0,
      //ReturnCount: 1,
      
      // 数据
      dataList: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),

      // 页面控制
      isLoading: false,
      totalCount: 0,

      //数据请求
      postData: {
        DistrictId: 0,
        DepartureId: "",
        StartDate: "",
        EndDate: "",
        IsOnlyStarted: false,
        AgeRangeList: [],
        EventTagIdList: [],
        Gender: "",
        Keyword: "",
        StartIndex: 0,
        ReturnCount: 3,
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
      
      url : 'http://m.ctrip.com/restapi/soa2/10307/GetEventList',

    }
  }

  componentWillMount() {

  }

  componentDidMount() {

    // var postData = {
    //   DistrictId: 32,
    //   DepartureId: "",
    //   StartDate: "",
    //   EndDate: "",
    //   IsOnlyStarted: false,
    //   AgeRangeList: [],
    //   EventTagIdList: [],
    //   Gender: "",
    //   Keyword: "",
    //   StartIndex: 0,
    //   ReturnCount: 5,
    //   SortType: 2,
    //   head: {
    //     cid: "09031081410251560227",
    //     ctok: "",
    //     cver: "1.0",
    //     lang: "01",
    //     sid: "8888",
    //     syscode: "09",
    //     auth: null,
    //     extension: [{
    //       name: "protocal",
    //       value: "http"
    //     }]
    //   },
    //   contentType: "json"
    // };
    // var url = 'http://m.ctrip.com/restapi/soa2/10307/GetEventList';

    // var self = this;
    // var url = this.state.url;
    // var postData = this.state.postData;
    let {
      url,
      postData,
    } = this.state;
    let self = this;
    console.log(postData)
    HomeData(url, postData, self);

  }

  render() {
    const {
      dataList,
      dataSource,
      isLoading,
    } = this.state;

    //console.log(isLoading);

    if(isLoading && dataList.length<1){
      return (
        <Page ref="HomePage" title='结伴' hasLeftButton={true} {...this.props}>
          <Loading visible={true} />
        </Page>
      )
    }

    let mainList;

    if(dataList&&dataList.length>0){
      mainList = <ListView 
          onEndReached = {()=>this.loadNextpage()}
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
      return (
        <CommentListView propsData={data} css={styles} />
      )
    } else {
      return;
    }
  }

  loadNextpage() {
    let {
      StartIndex,
      ReturnCount,
      totalCount,
      isLoading,
      url,
      postData,
    } = this.state;
    //let _StartIndex = this.state.postData.StartIndex;

    let self = this;
    console.log(StartIndex);
    // debugger;
    if (isLoading || StartIndex > totalCount) {
      return;
    }
    this.setState({
      postData: {
        DistrictId: 0,
        DepartureId: "",
        StartDate: "",
        EndDate: "",
        IsOnlyStarted: false,
        AgeRangeList: [],
        EventTagIdList: [],
        Gender: "",
        Keyword: "",
        StartIndex: StartIndex,
        ReturnCount: 2,
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
      }
    });

    
    
    console.log(this.state.postData.StartIndex)
    HomeData(url, this.state.postData, self);
  }

}

const styles = HomeStyle;

module.exports = homeView;