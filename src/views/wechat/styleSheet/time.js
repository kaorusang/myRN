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
    "timeText": {
        "paddingHorizontal": 10 / PixelRatio.get(),
        "paddingVertical": 8 / PixelRatio.get(),
        "width": 112 / PixelRatio.get(),
        "height": 34 / PixelRatio.get(),
        "fontSize": 18 / PixelRatio.get(),
        "lineHeight": 18 / PixelRatio.get(),
        "textAlign": "center",
        "textAlignVertical": "center",
        "color": "#fff",
        "backgroundColor": "#c7c6c6",
        "borderRadius": 8 / PixelRatio.get(),
    },
});
