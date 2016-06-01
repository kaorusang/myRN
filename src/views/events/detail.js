/**
 * 结伴首页
 */

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  // Image,
  // Alert,
  // TouchableOpacity,
  // ListView,
  // ScrollView,
  // TextInput,
  // TouchableWithoutFeedback,
} from 'react-native';

import {
  Page,
  // HeaderView,
  // CropImage
} from '@ctrip/moles-cui';

import commonUtil from '../utils/commonUtil'
import eventsUtil from './utils/eventsUtil'

const {
  width,
  height
} = Dimensions.get('window');

class detailView extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
        console.log('render detail')
        var passProps = this.props.passProps;
        var detailId = passProps && (<Text style={{color:'red'}}>id: {passProps.id}</Text>);
        return (
            <Page ref="DetailPage" title='结伴详情' hasLeftButton={true} hasHome={true} {...this.props}>
                <Text onPress={()=>{
                    this.props.navigator.pop()
                }}>Detail Page {detailId}</Text>
            </Page>
        )
  }


}

const styles = StyleSheet.create({
  fullScreen: {
    width: width,
    height: height,
  },
  container: {},

});

module.exports = detailView;