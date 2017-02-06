import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body-style": {
        "backgroundColor": "#1B5A7A"
    },
    "header": {
        "display": "flex",
        "textAlign": "center"
    },
    "header-style": {
        "color": "#A6ED8E",
        "fontSize": 60
    },
    "input-field": {
        "marginTop": 40,
        "marginBottom": 20
    },
    "input-group": {
        "display": "flex",
        "justifyContent": "center"
    },
    "table": {
        "marginTop": 100
    }
});