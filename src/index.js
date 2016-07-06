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

import Wechat from './views/wechat/index';
import DetailView from './views/wechat/detail';

class myRN extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( <Application routeConfig = {
              {
                '/': Wechat,
                '/detail/:id': DetailView
              }
            }
            defaultRoute = '/' />
           )
  }


}

AppRegistry.registerComponent('myRN', () => myRN);
