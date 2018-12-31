import Svg,{
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

/* Use this if you are using Expo
import { Svg } from 'expo';
const { Circle, Rect } = Svg;
*/

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

// Percentages work in plain react-native but aren't supported in Expo yet, workaround with this or onLayout
const { width, height } = Dimensions.get('window');

export default class SvgExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : {
        bar: [33,36,40,38],
        line: [20,25,19,35],
        label: ['CW 12', 'CW 13', 'CW 14', 'CURRENT']
      }
    }
  }
  render() {
    const { data } = this.state;
    return (
      <View style={{flexDirection: 'row', paddingTop: 0, borderWidth: 1}}>
        <Svg height={height * 0.5} width={width} viewBox="20 0 100 100">
          <View>
            <Text y="65" x="31" fill="rgb(255,36,124)" fontSize={4}>
              55%
            </Text>
            <Text y="62" x="56" fill="rgb(255,36,124)" fontSize={5}>
              55%
            </Text>
          </View>
          <Rect
            x="25"
            y="67"
            width="20"
            height="33"
            fill="rgb(188,221,223)"
            // strokeWidth="4"
            // stroke="rgb(0,0,0)"
          />
          <Rect
            x="50"
            y="64"
            width="20"
            height="36"
            fill="rgb(188,221,223)"
          />
          <Rect
            x="75"
            y="60"
            width="20"
            height="40"
            fill="rgb(188,221,223)"
          />
          <Rect
            x="100"
            y="62"
            width="20"
            height="38"
            fill="rgb(188,221,223)"
          />
          <Polyline
            points="35,85,60 75,85 84,110 70"
            fill="none"
            stroke="rgb(122,178,233)"
            strokeWidth="1"
          />
          <View>
            <Text y="92" x="32" fill="rgb(255,36,124)" fontSize={5}>
              55%
            </Text>
            <Text y="62" x="56" fill="rgb(255,36,124)" fontSize={5}>
              55%
            </Text>
          </View>
          <Circle
            cx="36"
            cy="85"
            r="1"
            stroke="rgb(122,178,233)"
            strokeWidth="1"
            fill="white"
          />
          <Circle
            cx="60"
            cy="75"
            r="1"
            stroke="rgb(122,178,233)"
            strokeWidth="1"
            fill="white"
          />
          <Circle
            cx="85"
            cy="84"
            r="1"
            stroke="rgb(122,178,233)"
            strokeWidth="1"
            fill="white"
          />
          <Circle
            cx="110"
            cy="70"
            r="1"
            stroke="rgb(122,178,233)"
            strokeWidth="1"
            fill="white"
          />
        </Svg>

      </View>
    );
  }
}