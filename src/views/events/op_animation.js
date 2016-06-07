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

      fadeAnim: new Animated.Value(0),
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

    //console.log(this.state.fadeAnim);
    Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 1},           // Configuration
     ).start();
  }

  render() {
    let data = this.state.params;
    return (
      <Page ref="DetailPage" title='结伴' hasLeftButton={true} hasHome={true} {...this.props}>
        <OpAnimationView propsData={data} controller={cont} css={styles} animation={this.state.fadeAnim} />
      </Page>
    )
  }


}

const cont = OpAnimationController;
const styles = OpAnimationStyle;
const animationStyles = StyleSheet.create({
  plane: {
    
    //opacity:this.state.fadeAnim
  },
})

module.exports = OpAnimation;