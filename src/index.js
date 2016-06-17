/**
 * 入口文件
 */


import React, {
  Component
} from 'react';
import {
  AppRegistry,
} from 'react-native';
import {
  Application
} from '@ctrip/moles-cui';

import FlexBox from './views/flexbox/home';
//import DetailView from './views/events/detail';

class myRN extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( <Application routeConfig = {
              {
                '/': FlexBox,
              }
            }
            defaultRoute = '/' />
           )
  }


}

AppRegistry.registerComponent('myRN', () => myRN);
