/**
 * 结伴首页
 */

import React, {
  Component,
} from 'react';
import {
  Animated,
  Easing,
} from 'react-native';
import {
  Page,
  Model,
  Loading,
} from '@ctrip/moles-cui';

// fetch
import Models from './models/m_op_animation_fetch';

// cModel
//import OpAnimationData from './models/m_model';

// controller
import OpAnimationController from './controller/c_op_animation';

// animation
import Anims from './animation/animation';

// OpAnimationView
const OpAnimationView = require('./view/v_op_animation');

class OpAnimation extends Component {

  constructor(props) {
    super(props);

    this.state = {

      // 全局变量

      // 动画
      anim: [0,1,2,3,4,5,6,7,8,9,10,11,12].map(() => new Animated.Value(0)),
      // 数据
      dataList: [],

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
    } else if(model == "showAnim") {
      return (
        <Page ref="DetailPage" title='结伴' hasLeftButton={true} hasHome={true} {...this.props}>
          <OpAnimationView pointer={this} />
        </Page>
      )
    } else {
      return (null)
    }
  }

}


module.exports = OpAnimation;