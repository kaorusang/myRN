/**
 * 结伴首页
 */

import React, {
  Component,
} from 'react';
import {
  Text,
  View,
  ListView,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import {
  Page,
  Model,
  Loading,
} from '@ctrip/moles-cui';

// style
import HomeStyle from './styleSheet/s_home';

// fetch
import Models from './models/m_op_animation_fetch';

// controller
import OpAnimationController from './controller/c_op_animation';

// animation
import Anims from './animation/animation';

// View
const OpAnimationView = require('./view/v_op_animation');
const HomeListItem = require('./view/v_homeListItem');

const styles = HomeStyle;

class OpAnimation extends Component {

  constructor(props) {
    super(props);

    this.state = {

      // 全局变量

      // 动画
      anim: [0,1,2,3,4,5,6,7,8,9,10,11,12].map(() => new Animated.Value(0)),
      // 数据
      dataList: [],
      districtId:'',
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      _StartIndex: 0,
      _totalCount: 0,

      // 页面控制
      model: "loading",
 
    }

  }

  componentWillMount() {
    
  }

  componentDidMount() {

    let {
      model,
    } = this.state;

    if (model == 'loading'){
      Models.prototype._fetchAnimData(this);
      Anims.prototype._earchAnim(this);
    }
  }

  // 不懂
  componetDidUpdate() {

    console.log('reload');

  }

  render() {

    const {
      model,
    } = this.state;

    if(model == "loading"){
      return (
        <Page ref="DetailPage" title='结伴' hasLeftButton={true} hasHome={true} {...this.props}>
          <Loading visible={true} />
        </Page>
      )
    } else if (model == "showAnim") {
      return (
        <Page ref="DetailPage" title='结伴' hasLeftButton={true} hasHome={true} {...this.props}>
          <OpAnimationView pointer={this} />
        </Page>
      )
    } else if (model == "eventList"){

      let mainList;

      mainList = <ListView 
          //onEndReached = {()=>Models.prototype._loadNextpage(url, params, self)}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          style={styles.listContainer}
          initalListSize={2}
          pageSize={1}
          ref='refList'
          renderScrollComponent={props=><ScrollView {...props} />}
        />

      console.log(this.state.model, this.state.districtId)

      return (
        <Page ref="DetailPage" title='结伴' hasLeftButton={true} hasHome={true} {...this.props}>
          {mainList}
        </Page>
      )

    } else {
      return;
    }
  }

  renderRow(data, section, index) {
     
    if (data && data.EventID) {
      return (
        <HomeListItem propsData={data} controller={OpAnimationController} css={styles} />
      )
    } else {
      return;
    }
  }

}

//class cont extends HomeController{} //也可以写成这样



module.exports = OpAnimation;