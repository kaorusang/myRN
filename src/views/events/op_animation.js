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

// style
import OpAnimationStyle from './styleSheet/s_op_animation';

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

// css
const styles = OpAnimationStyle;



class OpAnimation extends Component {

  

  constructor(props) {
    super(props);

    this.state = {

      // 动画
      anim: [0,1,2,3,4,5,6,7,8,9,10,11,12].map(() => new Animated.Value(0)),

      // 数据
      dataList: [],

      // 数据请求
      params: {
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

      url : 'http://m.ctrip.com/restapi/soa2/10307/GetGuessYouLikeDistrict?_fxpcqlniredt=09031118210273857681',

      // 页面控制
      model: "loading",
 
      
    }

  }

  componentWillMount() {
    
  }

  componentDidMount() {

    let {
      url,
      params,
      isLoading,
      dataList,
      model,
    } = this.state;
    let self = this;

    let timing = Animated.timing,
        time   = 100;

    if (model == 'loading'){
      Models.prototype._fetchAnimData(url, params, self);
      Anims.prototype._earchAnim(this);
    }
  }

  // 不懂
  componetDidUpdate() {

    console.log('reload');

  }

  render() {
    let data   = this.state.params,
    animations = this.state.anim;

    const {
      dataList,
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
          <OpAnimationView propsData={this.state.dataList} controller={OpAnimationController} css={styles} animations={animations} />
        </Page>
      )
    } else {
      return (null)
    }
  }

}


module.exports = OpAnimation;