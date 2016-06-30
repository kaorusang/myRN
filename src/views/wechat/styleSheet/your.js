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
    "you":{
        "flex": 1,
        "flexDirection": "row",
        "position": "relative",
        "marginBottom": 20,
        "paddingRight": 120 / PixelRatio.get(),
    },
    "youPortrait": {
        "width": 80 / PixelRatio.get(),
        "height": 80 / PixelRatio.get(),
        //"tintColor": "pink",
    },
    "youBox": {
        "flex": 1,
        "flexDirection": "column",
        "alignItems": "stretch",
        "paddingLeft": 10 / PixelRatio.get(),
    },
    "youName":{
        "paddingLeft": 20 / PixelRatio.get(),
        "fontSize": 20 / PixelRatio.get(),
        "color": "#747070",
        "marginBottom": 10 / PixelRatio.get(),
    },
    "youBubble": {
        "paddingVertical": 15 / PixelRatio.get(),
        "paddingRight": 20 / PixelRatio.get(),
        "paddingLeft": 40 / PixelRatio.get(),
        "width": width - (80 / PixelRatio.get()) - (120 / PixelRatio.get()) - (20 / PixelRatio.get()),
        "height": 200 / PixelRatio.get(),
        //"tintColor": "pink",
    },
    "youTalk": {
        "fontSize": 28 / PixelRatio.get(),
        "color": "#333",
        "backgroundColor": "#fff",
    },
});
