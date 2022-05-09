"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const react_native_1 = require("react-native");
const { width: screenWidth } = react_native_1.Dimensions.get("screen");
exports.styles = react_native_1.StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 2,
    left: (screenWidth - 64) / 2,
    bottom: 0,
    width: screenWidth,
    justifyContent: "flex-end",
  },
});
