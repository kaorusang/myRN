'use strict';

import {
  Animated,
  Easing,
} from 'react-native';

class Animation {

	_earthAnim(pointer){

		let timing = Animated.timing,
        time   = 100;

        Animated.sequence([

	        timing(pointer.defaultValue.anim[0], {
	          toValue: 1,
	          duration: 1000,
	          easing: Easing.linear,
	        }),

	        Animated.parallel([
	          timing(pointer.defaultValue.anim[1], {
	            toValue: 1,
	            duration: time,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[2], {
	            toValue: 1,
	            duration: time,
	            delay: time * 2,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[3], {
	            toValue: 1,
	            duration: time,
	            delay: time * 3,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[4], {
	            toValue: 1,
	            duration: time,
	            delay: time * 4,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[5], {
	            toValue: 1,
	            duration: time,
	            delay: time * 5,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[6], {
	            toValue: 1,
	            duration: time,
	            delay: time * 6,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[7], {
	            toValue: 1,
	            duration: time,
	            delay: time * 7,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[8], {
	            toValue: 1,
	            duration: time,
	            delay: time * 8,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[9], {
	            toValue: 1,
	            duration: time,
	            delay: time * 9,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[10], {
	            toValue: 1,
	            duration: time,
	            delay: time * 10,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[11], {
	            toValue: 1,
	            duration: time,
	            delay: time * 11,
	            easing: Easing.linear,
	          }),
	          timing(pointer.defaultValue.anim[12], {
	            toValue: 1,
	            duration: time,
	            delay: time * 12,
	            easing: Easing.linear,
	          }),
	        ]),
	    ]).start();

	}

}

module.exports = Animation;