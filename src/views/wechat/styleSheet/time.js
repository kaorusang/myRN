import {
  PixelRatio,
  Dimensions,
  StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
    "timeContent": {
        "flex": 1,
        "flexDirection": "row",
        "justifyContent": "center",
        "marginTop": 30 / PixelRatio.get(),
        "marginBottom": 36 / PixelRatio.get(),
        "height": 34 / PixelRatio.get(),
    },
    "timeView":{
        "paddingHorizontal": 10 / PixelRatio.get(),
        "paddingVertical": 8 / PixelRatio.get(),
        "backgroundColor": "#c7c6c6",
        "borderRadius": 8 / PixelRatio.get(),
    },
    "timeText": {
        "fontSize": 18 / PixelRatio.get(),
        "lineHeight": 18 / PixelRatio.get(),
        "textAlign": "center",
        "textAlignVertical": "center",
        "color": "#fff",
    },
});
