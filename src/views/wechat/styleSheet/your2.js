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
        "paddingLeft": 10 / PixelRatio.get(),
        "width": width - (80 / PixelRatio.get()) - (120 / PixelRatio.get()) - (20 / PixelRatio.get()) - (20 / PixelRatio.get()),
    },
    "youName":{
        "paddingLeft": 20 / PixelRatio.get(),
        "fontSize": 20 / PixelRatio.get(),
        "color": "#747070",
        "marginBottom": 10 / PixelRatio.get(),
    },
    "youBubble": {
        "position": "relative",
        "alignItems":"flex-start",
    },
    "youBubbleView":{
        "marginLeft": 10 / PixelRatio.get(),
        "padding": 20 / PixelRatio.get(),
        "backgroundColor": "#fff",
        "borderRadius": 10 / PixelRatio.get(),
        "borderWidth": 1 / PixelRatio.get(),
        "borderColor": "#c6c6c6",
    },
    "youTalk": {
        "fontSize": 28 / PixelRatio.get(),
        "color": "#333",
        "backgroundColor": "#fff",
    },
    "triangle": {
        "position": "absolute",
        "top": 24 / PixelRatio.get(),
        "left": 0 / PixelRatio.get(),
        "width": 21 / PixelRatio.get(),
        "height": 21 / PixelRatio.get(),
        "backgroundColor": "#c6c6c6",
        "transform": [{ "rotate": "45deg" }],
    },
    "triangle2": {
        "position": "absolute",
        "top": 25 / PixelRatio.get(),
        "left": 2 / PixelRatio.get(),
        "width": 20 / PixelRatio.get(),
        "height": 20 / PixelRatio.get(),
        "backgroundColor": "#fff",
        "transform": [{ "rotate": "45deg" }],
    },
});
