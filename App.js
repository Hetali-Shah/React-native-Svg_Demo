import Svg, {
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
import {View, StyleSheet, Dimensions} from 'react-native';

// Percentages work in plain react-native but aren't supported in Expo yet, workaround with this or onLayout
const {width, height} = Dimensions.get('window');

export default class SvgExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        line: [10, 20, 30],
      }
    }
  }

  render() {
    const {data} = this.state;
    return (
      <View style={{flexDirection: 'row', paddingTop: 80, borderWidth: 2}}>
        <Svg height={height * 0.5} width={width} viewBox={`20 20 100 100`}>
          <Line
            x1="60"
            y1="0"
            x2="62"
            y2="100"
            stroke="rgb(122,178,233)"
          />
          <Line
            x1="20"
            y1="60"
            x2="100"
            y2="60"
            stroke="rgb(122,178,233)"
          />
          <Line
            x1="30"
            y1="100"
            x2="90"
            y2="25"
            stroke="rgb(122,178,233)"
          />
          <Polygon
            points="40 90,65 60, 30 60"
            fill="red"
          />
          <Polygon
            points="85 30, 60 60, 95 60"
            fill="lime"
          />
        </Svg>
      </View>
    )
  }
}
