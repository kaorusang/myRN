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

import OpAnimatiom from './views/events/op_animation';
import HomeView from './views/events/home';
//import DetailView from './views/events/detail';

class myRN extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( <Application routeConfig = {
              {
                '/': OpAnimatiom,
                // '/': HomeView,
                //'/detail/:id': DetailView
              }
            }
            defaultRoute = '/' />
           )
  }


}

AppRegistry.registerComponent('myRN', () => myRN);