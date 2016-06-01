/**
 * 结伴首页
 */

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Alert,
  TouchableOpacity,
  ListView,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Page,
  CropImage,
  Loading,
  // cModel,
} from '@ctrip/moles-cui';
import Moment from 'moment';

// import commonUtil from '../utils/commonUtil'
// import eventsUtil from './utils/eventsUtil'

Moment.locale('zh-cn');
const {
  width,
  height
} = Dimensions.get('window');

class homeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 接口参数
      DistrictId: 0,
      districtName:'全部目的地',
      DepartureId: "",
      StartDate: "",
      EndDate: "",
      IsOnlyStarted: false,
      AgeRangeList: [],
      EventTagIdList: [],
      Gender: "",
      Keyword: "",
      StartIndex: 0,
      ReturnCount: 1,
      SortType: 1,
      StartIndex: 0,

      // 数据
      dataList: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      // 没有数据的推荐
      noDataList: [],
      noDataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),

      // 页面控制
      isLoading: false,
      isSearching: false,
      totalCount: 0,
      isFocusing: false,
      isFiltering: false,
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {
      dataList,
      dataSource,
      noDataList,
      noDataSource,

      SortType,
      DistrictId,
      districtName,

      isFocusing,
      isFiltering,
      isLoading,
    } = this.state;

    if(isLoading && dataList.length<1){
    console.log('[2]:'+dataList.length)
      return (
        <Page ref="HomePage" title='结伴' hasLeftButton={true} {...this.props}>
          <Loading visible={true} />
        </Page>
        )
    }else{
      let cancelButton;
      let maskCover;
      if (isFocusing) {
        console.log('isFocusing')
        cancelButton =
          <Text 
        style={styles.searchCancel} 
        suppressHighlighting={false} 
        onPress={() => this.refs['searchInput'].blur()} >
          取消
        </Text>
        maskCover=<TouchableWithoutFeedback onPress={() => this.refs['searchInput'].blur()}><View style={styles.maskCoverV}><Text style={styles.maskCover}></Text></View></TouchableWithoutFeedback>
      }

      let filterOptions;
      if (isFiltering) {
        console.log('isFiltering')
        filterOptions =
          <View style={styles.filterOptionsSort}>
            <Text style={styles.filterOptionSort} 
            suppressHighlighting={false} 
            onPress={this.filterSortType.bind(this,0)} >
            热门结伴
            </Text>
            <Text style={styles.filterOptionSort}
            suppressHighlighting={false}
            onPress={this.filterSortType.bind(this,1)} >
            最新发表
            </Text> 
            <Text style={styles.filterOptionSort}
            suppressHighlighting={false}
            onPress={this.filterSortType.bind(this,2)} >
            最近出发
            </Text>
          </View>
        maskCover=<TouchableWithoutFeedback onPress={() => this.setState({isFiltering:false})}><View style={[styles.maskCoverV,styles.maskFilterCoverV]}><Text style={[styles.maskCover,styles.maskFilterCover]}></Text></View></TouchableWithoutFeedback>
      }

      let mainList;
      if(dataList&&dataList.length>0){
        mainList=
          <ListView
            onEndReached = {()=>this.loadNextpage()}
            // onEndReachedThreshold={5}
            dataSource={dataSource}
            renderRow={this.renderRow.bind(this)}
            style={styles.listContainer}
            ref='refList'
            renderScrollComponent={props=><ScrollView {...props} />}
          />
      }else{
        mainList=
          <View style={styles.eventError}>
            <View style={styles.eventErrorContent}>
              <Image source={require('./img/topic_img.png')} style={styles.iconSad}/>
              <View style={styles.eventErrorInfo}>
                <Text style={styles.eventErrorInfoText1}>非常抱歉，</Text>
                <Text style={styles.eventErrorInfoText2}>没有找到匹配的结伴</Text>
              </View>
            </View>
            <Text style={styles.eventErrorCreate}>
              你可以
              <Text style={styles.eventErrorCreateClick} onPress={this.addNewEvent.bind(this)} suppressHighlighting={false}>发布一条结伴</Text>
              招募伙伴
            </Text>
          </View>
          {noDataList&&noDataList.length>0&&
            <View style={styles.recommand}>
              <Text style={styles.recommandText}>你可能会对以下结伴感兴趣</Text>
              <ListView
                pageSize={3}
                dataSource={noDataSource}
                renderRow={this.renderRow.bind(this)}
                // style={styles.listContainer}
                ref={'refListRe'}
                renderScrollComponent={props=><ScrollView {...props} />}
              />
            </View>
          }
      }

      return (
        <Page ref="HomePage" title='结伴' hasLeftButton={true} {...this.props}
        rightButtons={[<Text style={styles.headerRight} onPress={this.toMyEvents.bind(this)}>我的结伴</Text>]}>
          <View>
            <View style={styles.searchArea}>
              <TextInput
                ref='searchInput'
                style={[styles.searchInput, !isFocusing && styles.centerText]}
                onFocus={() => this.setState({isFocusing:true})}
                onBlur={() => this.setState({isFocusing:false})}
                onSubmitEditing={(event) =>
                  // alert(event.nativeEvent.text)}
                this.searchKeyword(event.nativeEvent.text)}
                placeholder='搜索你感兴趣的结伴内容'
                placeholderTextColor='#664'
                selectTextOnFocus={true}
                clearButtonMode={'while-editing'}
              /> 
              {cancelButton}
            </View>
            <View style={styles.filterTabs}>
              <TouchableWithoutFeedback onPress={this.getDest.bind(this)}>
                <View style={styles.filterTab}>
                  <Text style={styles.tabText}>{districtName||'全部目的地'}</Text>
                  <CropImage
                    source={require('../components/img/un_sort_arrow.png')}
                    crop={{left:0,top:0,width:11, height: 11}}
                    width={11}
                    height={220}
                  />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={()=>this.setState({isFiltering:!isFiltering})}>
                <View style={styles.filterTab}>
                  <Text style={styles.tabText}>{SortType==1?'最新发表':(SortType==2?'最近出发':'热门结伴')}</Text>
                  <CropImage
                    source={require('../components/img/un_sort_arrow.png')}
                    crop={{left:0,top:60,width:11, height: 11}}
                    width={11}
                    height={220}
                  />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={this.getParams.bind(this)}>
                <View style={styles.filterTab}>
                  <Text style={styles.tabText}>筛选</Text>
                  <CropImage
                    source={require('../components/img/un_sort_arrow.png')}
                    crop={{left:0,top:0,width:11, height: 11}}
                    width={11}
                    height={220}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            {mainList}
          </View>
          <TouchableOpacity style={styles.stikyBottom} onPress={this.addNewEvent.bind(this)}>
            <Image style={styles.iconSpeaker} source={require('./img/ico_new.png')}/>
            <Text style={styles.stikyBottomText}>我要发结伴</Text>
          </TouchableOpacity>
            {maskCover}
            {filterOptions}
        </Page>
      )
    }
  }

  renderRow(data, section, index) {
      // console.log(Moment.locale(),null,null)

    if (data && data.EventID) {

      // let totalDate = eventsUtil.getLastingDay(commonUtil.getDate(data.StartDate), commonUtil.getDate(data.EndDate));

      let IconGender =
        <Image resizeMode='contain' style={[styles.iconGender,styles.iconMale]} source={require('./img/ico_male.png')} />;
      let IconLike =
        <Image resizeMode='contain' style={[styles.cardIcon,styles.iconLike]} source={require('./img/ico_like.png')} />;
      let IconApply =
        <Image resizeMode='contain' style={[styles.cardIcon,styles.iconApply]} source={require('./img/ico_apply.png')} />;
      let IconReply =
        <Image resizeMode='contain' style={[styles.cardIcon,styles.iconReply]} source={require('./img/ico_reply.png')} />;

      if (data.EventUser && data.EventUser.Gender && data.EventUser.Gender == 'F') {
        IconGender =
          <Image resizeMode='contain' style={[styles.iconGender,styles.iconFemale]} source={require('./img/ico_female.png')} />
      }
      if (!!data.IsInterested) {
        IconLike =
          <Image resizeMode='contain' style={[styles.cardIcon,styles.iconLike]} source={require('./img/ico_like_active.png')} />
      }
      if (!!data.IsSignup) {
        IconApply =
          <Image resizeMode='contain' style={[styles.cardIcon,styles.iconApply]} source={require('./img/ico_apply_active.png')} />
      }

      let flag;
      if(Moment(data.StartDate).isBefore(Moment())){
        flag=
        <View style={styles.flag}>
          
            <Image source={require('./img/events_flag_yellow.png')} style={styles.flagBg} />
          
          <View style={styles.flagTextView}>
            <Text style={styles.flagText}>我已经</Text><Text style={styles.flagText}>出发啦</Text>
          </View>
        </View>
      }else{
        flag=
        <View style={styles.flag}>
          <View>
            <Image source={require('./img/events_flag_green.png')} style={styles.flagBg} />
          </View>
          <View style={styles.flagTextView}>
            <Text style={styles.flagText}>{Moment(data.StartDate).fromNow(true)}</Text>
            <Text style={[styles.flagText,styles.flagTextAfter]}>后出发</Text>
          </View>
        </View>
      }

      var distrctNames='';
      for(var i=0;data.DistrictList.length>i;i++){
        if(distrctNames){
          distrctNames+=',';
        }
        distrctNames+=data.DistrictList[i].DistrictName;
      }

      let eventPics;


      return (
        <TouchableOpacity key={index} onPress={this.toDetail.bind(this,data.EventID)} style={styles.eventCard}>
          {flag}
          <View style={styles.user}>
            <Image style={styles.userHead} source={{uri:data.EventUser.UserImgUrl}} />
            <View>
              <View style={styles.userTitle}>
                <Text style={styles.userName}>{data.EventUser.UserName}</Text>
                {IconGender}
              </View>
              <Text style={styles.userAgeFrom}>{data.EventUser.AgeRange} 来自{data.EventUser.DistrictName}</Text>
            </View>
          </View>
          
          <View style={styles.route}>
            <Text style={styles.routeSub}>路线：</Text>
            <Text style={styles.routeDest}>{data.Departure.DistrictName||'太空游游Ctrip星球'}</Text>
            <Image style={styles.iconGoto} source={require('./img/ico_goto.png')}/>
            <Text style={styles.routeDest}>{distrctNames||'太空游游Ctrip星球'}</Text>
          </View>

          <Text style={styles.time}>
            <Text style={styles.routeSub}>时间：</Text>
            {Moment(data.StartDate).format('YYYY-MM-DD')}出发 （共 <Text tagname='b' style={styles.totalDate}>{Moment(data.EndDate).from(Moment(data.StartDate),true)}</Text>）</Text>
          <Text style={styles.desc} numberOfLines={3}>{data.Description}</Text>
          {eventPics}
          <View style={styles.cardButtons}>
            <TouchableOpacity onPress={this.interestEvent.bind(this,data.EventID)} style={styles.cardButton}>
              {IconLike}
              <Text style={styles.cardCount}>{data.InterestedCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.signupEvent.bind(this,data.EventID)} style={[styles.cardButton,styles.cardCenterButton]}>
              {IconApply}
              <Text style={styles.cardCount}>{data.SignupCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.replyEvent.bind(this,data.EventID)} style={styles.cardButton}>
              {IconReply}
              <Text style={styles.cardCount}>{data.ReplyCount}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )
    } else {
      return;
    }
  }


  fetchData(fromZero) {
    const self = this;
    const {
      dataList,
      dataSource,
      noDataList,
      noDataSource,
      DistrictId,
      DepartureId,
      StartDate,
      EndDate,
      IsOnlyStarted,
      AgeRangeList,
      EventTagIdList,
      Gender,
      Keyword,
      StartIndex,
      ReturnCount,
      SortType
    } = this.state;
    let thisDataList = !!fromZero?[]:dataList;
    self.setState({
      isLoading: true
    });
    console.log('[1]:'+dataList.length)
    // let getEventModel= cModel.createModel({
    //   url:"http://m.ctrip.com/restapi/soa2/10307/GetEventList",
    //   param:JSON.stringify({
    //       "DistrictId": DistrictId,
    //       "DepartureId": DepartureId,
    //       "StartDate": StartDate,
    //       "EndDate": EndDate,
    //       "IsOnlyStarted": IsOnlyStarted,
    //       "AgeRangeList": AgeRangeList,
    //       "EventTagIdList": EventTagIdList,
    //       "Gender": Gender,
    //       "Keyword": Keyword,
    //       "StartIndex": StartIndex,
    //       "ReturnCount": ReturnCount,
    //       "SortType": SortType,
    //     }),
    //   timeout:10000
    // });

    // getEventModel.execute(function(){
    //   Alert.alert('Success',null,null)
    // },function(){
    //   Alert.alert('fail',null,null)
    // },null,null,null);

    // debugger;
    fetch('http://m.ctrip.com/restapi/soa2/10307/GetEventList', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "DistrictId": DistrictId,
          "DepartureId": DepartureId,
          "StartDate": StartDate,
          "EndDate": EndDate,
          "IsOnlyStarted": IsOnlyStarted,
          "AgeRangeList": AgeRangeList,
          "EventTagIdList": EventTagIdList,
          "Gender": Gender,
          "Keyword": Keyword,
          "StartIndex": StartIndex,
          "ReturnCount": ReturnCount,
          "SortType": SortType,
          "head": {
            "cid": "09031081410251560227",
            "ctok": "",
            "cver": "1.0",
            "lang": "01",
            "sid": "8888",
            "syscode": "09",
            "auth": null,
            "extension": [{
              "name": "protocal",
              "value": "http"
            }]
          },
          "contentType": "json"
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(JSON.stringify(responseData))

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
              // const eventList = responseData.EventList;
              // for (let i = 0; i < eventList.length; i++) {
              //   thisDataList.push(eventList[i]);
              // }
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
            Alert.alert(
              '结果为空',
              null,
              null
            );
            self.setState({
              dataList: thisDataList,
              dataSource: dataSource.cloneWithRows(thisDataList)
            });
          }
        } else {
          // 接口错误
          Alert.alert(
            '接口错误',
            null,
            null
          );
        }
      })
      .catch((error) => {
        self.setState({
          isLoading: false
        })
        console.error(error);
      });
  }

  loadNextpage() {
    let {
      StartIndex,
      ReturnCount,
      totalCount,
      isLoading
    } = this.state;
    // debugger;
    if (isLoading || StartIndex > totalCount) {
      return;
    }
    this.setState({
      StartIndex: StartIndex + ReturnCount
    });
    this.fetchData();
  }

  toBack() {
    Alert.alert('toBack', 'toBack', null);
  }
  toMyEvents(){
    Alert.alert('toMyEvents', 'toMyEvents', null);
  }
  addNewEvent() {
    Alert.alert('addNewEvent', 'addNewEvent', null);
  }
  interestEvent(eventId) {
    Alert.alert('interestEvent', 'interestEvent' + eventId, null);
    // this.stopPropagation();
  }
  signupEvent(eventId) {
    Alert.alert('signupEvent', 'signupEvent' + eventId, null);
  }
  replyEvent(eventId) {
    Alert.alert('replyEvent', 'replyEvent' + eventId, null);
  }
  toDetail(eventId) {
    // Alert.alert('detail', eventId + '', null);
    this.props.navigator.push({
      pathname: '/detail/:id',
      passProps: {
        id: eventId
      }
    });
  }
  getDest(){
    Alert.alert('getDest', 'getDest' , null);
  }
  getParams(){
    Alert.alert('getParams', 'getParams' , null);
  }
  filterSortType(type) {
    this.setState({
      isFiltering: false,
      SortType: type,
      StartIndex: 0,
      totalCount: 0,
      dataList:[],
    });
// debugger;
    console.log('[3]:'+this.state.dataList.length)
    this.fetchData(true);
    this.refs['refList']&&this.refs['refList'].scrollTo({
      y: 0,
      animated: true
    });
  }
  searchKeyword(key){
    console.log(this)
    Alert.alert('searchKeyword'+key,key,null);
    this.setState({
      Keyword:key,
      isSearching: false,
      StartIndex: 0,
      totalCount: 0,
      isFocusing:false,
      dataList:[],
    });
    this.fetchData(true);
    this.refs['refList']&&this.refs['refList'].scrollTo({
      y: 0,
      animated: true
    });
    // this.refs['searchInput']&&this.refs['searchInput'].blur();
  }
}

const styles = StyleSheet.create({
  // fullScreen: {
  //   width: width,
  //   height: height,
  // },
  // container: {},
  // visible: {
  //   opacity: 0,
  // },
  maskCoverV: {
    position: 'absolute',
    top:44,
  },
  maskCover:{
    width:width,
    height:height-44,
    backgroundColor:'#000',
    opacity:0.7,
    position:'absolute',
  },
  maskFilterCoverV: {
    top:88,
  },
  maskFilterCover:{
    height:height-88,
  },
  headerRight:{
    color:'white',
    marginRight:10,
    fontSize:13
  },
  listContainer: {
    width: width,
    height: height-132-50,
    backgroundColor: 'rgb(245, 245, 245)',
  },
  searchArea: {
    height: 44,
    backgroundColor: '#DFEAF1',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 32,
    borderRadius: 4,
    backgroundColor: 'white',
    margin: 6,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 32,
    fontSize: 13,
    paddingLeft: 5,
    paddingRight: 5,
  },
  centerText: {
    textAlign: 'center',
  },
  searchCancel: {
    color: '#099fde',
    paddingRight: 12,
  },
  filterTabs: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#c8c8c8',
    backgroundColor: '#F2F2F2',
  },
  filterTab: {
    flex: 1,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterTabWrap: {
    flex: 1,
  },
  tabText: {
    fontSize: 13,
    color: '#333',
    marginRight: 3,
  },
  filterOptionsSort: {
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    position:'absolute',
    top:88
  },
  filterOptionSort: {
    flex:1,
    textAlign:'center',
    fontSize:14,
    height:37,
    width:width,
    lineHeight:25,
    backgroundColor:'#f5f5f5',
    borderWidth:0,
    borderColor:'#c8c8c8',
    borderBottomWidth:1,
  },
  eventCard: {
    position: 'relative',
    backgroundColor: 'white',
    margin: 5,
    borderWidth: 1,
    borderColor: '#c8c8c8',
  },
  user: {
    flexDirection: 'row',
    padding: 10,
    width:width,
  },
  userHead: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  userTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 21,
    alignItems: 'center',
  },
  userName: {
    fontSize: 14,
    color: '#444',
    marginRight: 4
  },
  iconGender: {
    height: 13,
  },
  iconFemale: {
    width: 8.66,
  },
  iconMale: {
    width: 12.41,
  },
  userAgeFrom: {
    color: '#999',
    fontSize: 12,
    lineHeight: 18,
  },
  flag:{
    // flexDirection:'column',
    //alignSelf:'flex-end',
    position:'absolute',
    top:17,
    right:-4,
  },
  flagBg:{
    width:54,
    height:33,
    resizeMode:'contain',
  },
  flagTextView: {
    position:'absolute',
    top:3,
    right:2,
  },
  flagText:{
    // flex:1,
    position: 'relative',
    fontWeight:'bold',
    color:'#fff',
    fontSize:11,
    // marginRight:-15,
    right:8,
    textAlign: 'right',
    backgroundColor:'rgba(0,0,0,0)',
  },
  flagTextAfter:{
    color:'#dceecc',
    fontSize:10,
    fontWeight:'normal',
    marginTop:0,
  },
  // flagTextAlready:{
  //   marginTop:0,
  // },
  route: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 21,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  routeSub: {
    color: '#8c8c8c',
    fontSize: 14,
    // lineHeight:1.5,
  },
  routeDest: {
    color: '#444',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconGoto: {
    width: 19,
    height: 4.5,
    marginLeft: 2,
    marginRight: 2,
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
  totalDate: {
    color: '#ffb34e',
  },
  desc: {
    lineHeight: 21,
    marginTop: 8,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c8c8c8',
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardCenterButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c8c8c8',
  },
  cardIcon: {
    height: 18,
  },
  iconLike: {
    width: 20.39,
  },
  iconApply: {
    width: 18.5,
  },
  iconReply: {
    width: 19.58,
  },
  cardCount: {
    marginLeft: 4,
    color: '#666',
    fontWeight: 'bold',
    fontSize: 14,
    // lineHeight: 1.5,
  },
  eventError:{
    height:172,
    paddingTop:40,
    paddingLeft:20,
  },
  eventErrorContent:{
    flexDirection:'row',
    alignItems:'center',
  },
  iconSad:{
    height:47,
    width:47,
  },
  eventErrorInfo:{
    flexDirection:'column',
    marginLeft:13,
  },
  eventErrorInfoText1:{
    fontSize:14,
    color:'#333',
    lineHeight:21,
  },
  eventErrorInfoText2:{
    fontSize:12,
    color:'#666',
    lineHeight:18,
  },
  eventErrorCreate:{
    fontWeight:'bold',
    color:'#333',
    fontSize:14,
    marginTop:20,
  },
  eventErrorCreateClick:{
    color:'#099fde',
  },
  recommand:{
    backgroundColor:'#efefef',
  },
  recommandText:{
    color:'#666',
    fontWeight:'bold',
    marginTop:15,
    marginBottom:15,
    marginLeft:10,
    lineHeight:47,
  },
  stikyBottom: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 49,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderColor: '#c8c8c8',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconSpeaker: {
    height: 15,
    width: 23,
    marginRight: 6,
    marginTop: 17,
  },
  stikyBottomText: {
    color: '#099fde',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 30,
  },

});

module.exports = homeView;