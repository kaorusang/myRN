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

import HomeView from './views/my_events/home';
//import HomeView from './views/events/home';
//import DetailView from './views/events/detail';

class myRN extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( <Application routeConfig = {
        {
          '/': HomeView,
          //'/detail/:id': DetailView
        }
      }
      defaultRoute = '/' />
    )
  }


}

AppRegistry.registerComponent('myRN', () => myRN);