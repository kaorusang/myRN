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

//import HomeData from './models/fetchModel';
import HomeData from './models/cModel'

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
    const {
      dataList,
      dataSource,
    } = this.state;

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
      return (
        <CommentListView propsData={data} css={styles} />
      )
    } else {
      return;
    }
  }

}

const styles = HomeStyle;

module.exports = homeView;