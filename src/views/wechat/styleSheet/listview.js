import {
  PixelRatio,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {
  width,
  height
} = Dimensions.get('window');

module.exports = StyleSheet.create({
    "content": {
        "paddingVertical": 0 / PixelRatio.get(),
        "paddingHorizontal": 10 / PixelRatio.get(),
        "backgroundColor": "#ebebeb",
    },
});
