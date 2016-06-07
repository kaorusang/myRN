/**
 * 结伴首页
 */

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

import {
  Page,
} from '@ctrip/moles-cui';

// style
import OpAnimationStyle from './styleSheet/s_op_animation';

// fetch
import Data from './models/m_fetch';

// cModel
//import Data from './models/m_model';

// controller
import OpAnimationController from './controller/c_op_animation';

// OpAnimationView
const OpAnimationView = require('./view/v_op_animation');

class OpAnimation extends Component {

  constructor(props) {
    super(props);

    this.state = {

      anim: [0,1,2,3,4,5,6,7,8,9,10,11,12].map(() => new Animated.Value(0)),

      //数据请求
      params: {
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
        ReturnCount: 5,
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
 
      
    }

  }

  componentWillMount() {

  }

  componentDidMount() {

    let timing = Animated.timing,
        time   = 100;

    Animated.sequence([

      timing(this.state.anim[0], {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
      }),

      Animated.parallel([
        timing(this.state.anim[1], {
          toValue: 1,
          duration: time,
          easing: Easing.linear,
        }),
        timing(this.state.anim[2], {
          toValue: 1,
          duration: time,
          delay: time * 2,
          easing: Easing.linear,
        }),
        timing(this.state.anim[3], {
          toValue: 1,
          duration: time,
          delay: time * 3,
          easing: Easing.linear,
        }),
        timing(this.state.anim[4], {
          toValue: 1,
          duration: time,
          delay: time * 4,
          easing: Easing.linear,
        }),
        timing(this.state.anim[5], {
          toValue: 1,
          duration: time,
          delay: time * 5,
          easing: Easing.linear,
        }),
        timing(this.state.anim[6], {
          toValue: 1,
          duration: time,
          delay: time * 6,
          easing: Easing.linear,
        }),
        timing(this.state.anim[7], {
          toValue: 1,
          duration: time,
          delay: time * 7,
          easing: Easing.linear,
        }),
        timing(this.state.anim[8], {
          toValue: 1,
          duration: time,
          delay: time * 8,
          easing: Easing.linear,
        }),
        timing(this.state.anim[9], {
          toValue: 1,
          duration: time,
          delay: time * 9,
          easing: Easing.linear,
        }),
        timing(this.state.anim[10], {
          toValue: 1,
          duration: time,
          delay: time * 10,
          easing: Easing.linear,
        }),
        timing(this.state.anim[11], {
          toValue: 1,
          duration: time,
          delay: time * 11,
          easing: Easing.linear,
        }),
        timing(this.state.anim[12], {
          toValue: 1,
          duration: time,
          delay: time * 12,
          easing: Easing.linear,
        }),
      ]),



    ]).start();

  }

  render() {
    let data   = this.state.params,
    animations = this.state.anim;

    return (
      <Page ref="DetailPage" title='结伴' hasLeftButton={true} hasHome={true} {...this.props}>
        <OpAnimationView propsData={data} controller={cont} css={styles} animations={animations} />
      </Page>
    )
  }


}

//let aa = new OpAnimation();


const cont = OpAnimationController;
const styles = OpAnimationStyle;


module.exports = OpAnimation;