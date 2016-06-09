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

// 引用原则是调用啥引用啥
// 频道下不复用的 view 的 style, animation, models, controller 除非 componentDidMount() 时要调用，必须在这里引之外，其它都在使用的字模块内调用
// component组件的 view 由于style, animation, models, controller 都是 props传递的，所以view上不用引这些。
// 从引的方式中可以判断 view 是否为重复使用的子组件。

// style
import HomeStyle from './styleSheet/s_home';

// models
import Models from './models/m_home_fetch'; //没有使用cModel,使用原来的fetch。原因是打包后设备上运行取不到数据，怀疑cModel有坑
//import Models from './models/m_home_model';

// controller
import Controller from './controller/c_home';

// animation
import Anims from './animation/animation';

// view
const OpAnimationView = require('./view/v_op_animation');
const HomeListItem = require('./view/v_homeListItem');

const styles = HomeStyle;

class OpAnimation extends Component {

  constructor(props) {
    super(props);

    this.state = {

      // 感觉state就是全局变量, 定义了初始值。用setState方法修改初始值后，重新调用render()。
      // RN会监听state的值有没有变化，有变化刷新视图。

      // 动画，这个地方还需要改，感觉Value(0)是个常量，并没用到setState，由于要传值到拆分的view和animation，作为全局变量临时放这。
      anim: [0,1,2,3,4,5,6,7,8,9,10,11,12].map(() => new Animated.Value(0)),  // web 下 .Value() 找不到一直报错，怀疑RN的坑

      // 数据
      dataList: [],
      districtId:'',
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      startIndex: 0,
      totalCount: 0,

      // 页面控制
      model: "loading",
 
    }

  }

  componentWillMount() {
    
  }

  componentDidMount() {

    if (this.state.model == 'loading'){
      Controller.prototype._fetchAnimData(this);
      Anims.prototype._earchAnim(this);
    }

  }

  // 不懂
  componetDidUpdate() {

    console.log('reload');

  }

  render() {

    if(this.state.model == "loading"){
      return (
        <Page ref="DetailPage" title='结伴' hasLeftButton={true} hasHome={true} {...this.props}>
          <Loading visible={true} />
        </Page>
      )
    } else if (this.state.model == "showAnim") {
      return (
        <Page ref="DetailPage" title='结伴' hasLeftButton={true} hasHome={true} {...this.props}>
          <OpAnimationView pointer={this} />
        </Page>
      )
    } else if (this.state.model == "eventList"){

      let mainList;

      mainList = <ListView 
          onEndReached = {()=>Controller.prototype._loadNextPage(this.state.districtId, this)}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          style={styles.listContainer}
          initalListSize={2}
          pageSize={1}
          ref='refList'
          renderScrollComponent={props=><ScrollView {...props} />}
        />

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
    //console.log(data)
    if (data && data.EventID) {
      return (
        <HomeListItem propsData={data} pointer={this}/>
      )
    } else {
      return;
    }
  }

}



module.exports = OpAnimation;