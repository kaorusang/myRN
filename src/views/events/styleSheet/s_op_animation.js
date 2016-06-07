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
  bg: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e5efff',
  },
  iconCloseTouchView: {
    position: 'absolute',
    top: 25,
    right: 20,
    width: 20,
    height: 20,
    overflow: 'hidden',
  },
  iconClose: {
    width: 20,
    height: 20,
  },

  //textView
  textView: {
    alignItems: 'center',
  },
  textViewH2:{
    marginTop: 20,
    fontSize: 30,
    color: '#333',
    fontWeight: 'bold',
  },
  textViewH4:{
    fontSize: 15,
    color: '#666',
    fontWeight: 'bold',
    letterSpacing: .5,
  },

  //earth
  earthView: {
    marginTop: 84,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  earth: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  plane: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 300,
    height: 300,
    resizeMode: 'contain',
    //transform: [{rotate:'-180deg'}],
    //transform: [{rotate: this.state.bounceValue}],
  },

  cityView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 300,
    height: 300,
    //backgroundColor: 'rgba(255,0,0,.2)',
  },

  signs:{
    position: 'absolute',
    left: 120,
    top: -44,
    width: 60,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{scale:1.1}],
    overflow: 'hidden',
  },
  signsView:{
    width: 60,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signsHandle: {
    width: 3,
    height: 15,
    backgroundColor: '#fd8713',
  },
  signsCircular: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 33,
    backgroundColor: '#fd8713',
  },
  signsCircularText: {
    fontSize: 15,
    color: '#fff',
  },
  signspoint:{
    position: 'absolute',
    top: 72,
    left: 25,
    width: 9,
    height: 3,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 10,
  },

  signs2:{
    left: 4,
    top: 10,
    transform: [{rotate:'-45deg'},{scale:1}],
  },
  signs2Handle: {
    backgroundColor: '#07be50',
  },
  signs2Circular: {
    backgroundColor: '#07be50',
  },
  signs2CircularText: {
    fontSize: 18,
  },

  signs3:{
    left: 60,
    top: -20,
    transform: [{rotate:'-25deg'},{scale:0.8}],
  },
  signs3Handle: {
    backgroundColor: '#3dca54',
  },
  signs3Circular: {
    backgroundColor: '#3dca54',
  },
  signs3CircularText: {
    fontSize: 16,
  },

  signs4:{
    left: 186,
    top: -20,
    transform: [{rotate:'25deg'},{scale:0.9}],
  },
  signs4Handle: {
    backgroundColor: '#3dca54',
  },
  signs4Circular: {
    backgroundColor: '#3dca54',
  },
  signs4CircularText: {
    fontSize: 18,
  },

  signs5:{
    left: 236,
    top: 25,
    transform: [{rotate:'45deg'},{scale:0.8}],
  },
  signs5Handle: {
    backgroundColor: '#0cba29',
  },
  signs5Circular: {
    backgroundColor: '#0cba29',
  },
  signs5CircularText: {
    fontSize: 18,
  },

  signs6:{
    left: 60,
    top: 80,
    transform: [{scale:0.8}],
  },
  signs6Handle: {
    backgroundColor: '#3dca54',
  },
  signs6Circular: {
    backgroundColor: '#3dca54',
  },
  signs6CircularText: {
    fontSize: 18,
  },

  signs7:{
    left: 96,
    top: 112,
    transform: [{scale:0.65}],
  },
  signs7Handle: {
    backgroundColor: '#22b23a',
  },
  signs7Circular: {
    backgroundColor: '#22b23a',
  },
  signs7CircularText: {
    fontSize: 20,
  },

  signs8:{
    left: 155,
    top: 58,
    transform: [{scale:0.65}],
  },
  signs8Handle: {
    backgroundColor: '#08c152',
  },
  signs8Circular: {
    backgroundColor: '#08c152',
  },
  signs8CircularText: {
    fontSize: 20,
  },

  signs9:{
    left: 203,
    top: 57,
    transform: [{scale:0.65}],
  },
  signs9Handle: {
    backgroundColor: '#3dca54',
  },
  signs9Circular: {
    backgroundColor: '#3dca54',
  },
  signs9CircularText: {
    fontSize: 20,
  },

  signs10:{
    left: 42,
    top: 141,
    transform: [{scale:0.9}],
  },
  signs10Handle: {
    backgroundColor: '#23ca89',
  },
  signs10Circular: {
    backgroundColor: '#23ca89',
  },
  signs10CircularText: {
    fontSize: 18,
  },

  signs11:{
    left: 165,
    top: 148,
    transform: [{scale:0.65}],
  },
  signs11Handle: {
    backgroundColor: '#02c622',
  },
  signs11Circular: {
    backgroundColor: '#02c622',
  },
  signs11CircularText: {
    fontSize: 15,
  },
  
});

module.exports = styles;