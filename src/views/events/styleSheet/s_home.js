'use strict';

import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Dimensions,
  PixelRatio,
} from 'react-native';

const {
  width,
  height
} = Dimensions.get('window');

const styles = StyleSheet.create({
  fullScreen: {
    width: width,
    height: height,
  },
  container: {},
  listContainer: {
    width: width,
    backgroundColor: 'rgb(245, 245, 245)',
  },
  eventCard:{
    position: 'relative',
    backgroundColor: 'white',
    margin: 5,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#c8c8c8',
  },

  user: {
    flexDirection: 'row',
    padding: 10,
    width:width,
  },
  userHead: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  userTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 21,
    alignItems: 'center',
  },
  userName: {
    fontSize: 14,
    color: '#444',
    marginRight: 4
  },
  iconGender: {
    height: 13,
  },
  iconFemale: {
    width: 8.66,
  },
  iconMale: {
    width: 12.41,
  },
  userAgeFrom: {
    color: '#999',
    fontSize: 12,
    lineHeight: 18,
  },

  //flag
  flag:{
    position:'absolute',
    top:17,
    right:-4,
  },
  flagBg:{
    width:54,
    height:33,
    resizeMode:'contain',
  },
  flagTextView: {
    position:'absolute',
    top:3,
    right:2,
  },
  flagText:{
    position: 'relative',
    fontWeight:'bold',
    color:'#fff',
    fontSize:11,
    right:8,
    textAlign: 'right',
    backgroundColor:'rgba(0,0,0,0)',
  },
  flagTextAfter:{
    color:'#dceecc',
    fontSize:10,
    fontWeight:'normal',
    marginTop:0,
  },


  route: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 21,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  routeSub: {
    color: '#8c8c8c',
    fontSize: 14,
    // lineHeight:1.5,
  },
  routeDest: {
    color: '#444',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconGoto: {
    width: 19,
    height: 4.5,
    marginLeft: 2,
    marginRight: 2,
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
  totalDate: {
    color: '#ffb34e',
  },
  desc: {
    marginTop: 8,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  descText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#444444',
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1 / PixelRatio.get(),
    borderStyle: 'solid',
    borderColor: '#c8c8c8',
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardCenterButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0,
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
    borderStyle: 'solid',
    borderColor: '#c8c8c8',
  },
  iconLike: {
    width: 17,
    height: 15,
  },
  iconApply: {
    width: 18.5,
    height: 18,
  },
  iconReply: {
    width: 18.5,
    height: 17,
  },
  cardCount: {
    marginLeft: 4,
    color: '#666',
    fontWeight: 'bold',
    fontSize: 14,
    // lineHeight: 1.5,
  },


});

module.exports = styles;
