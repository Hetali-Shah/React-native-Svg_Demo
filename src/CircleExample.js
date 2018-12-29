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
  render() {
    return (
      <View style={{flexDirection: 'row', paddingTop: 0, borderWidth: 1}}>
        <Svg height={height * 0.5} width={width} viewBox="20 0 100 100">
            {/*<Text*/}
              {/*fill="#500"*/}
              {/*stroke="purple"*/}
              {/*fontSize="15"*/}
              {/*fontWeight="bold"*/}
              {/*x="26"*/}
              {/*y="29"*/}
              {/*textAnchor="middle"*/}
            {/*>33%</Text>*/}
            <Rect
              x="25"
              y="33"
              width="20"
              height="67"
              fill="rgb(0,0,255)"
              // strokeWidth="4"
              // stroke="rgb(0,0,0)"
            />

            <Rect
              x="50"
              y="64"
              width="20"
              height="36"
              fill="rgb(0,0,255)"
              // strokeWidth="4"
              // stroke="rgb(0,0,0)"
            />
            <Rect
              x="75"
              y="60"
              width="20"
              height="40"
              fill="rgb(0,0,255)"
              // strokeWidth="4"
              // stroke="rgb(0,0,0)"
            />
            <Rect
              x="100"
              y="62"
              width="20"
              height="38"
              fill="rgb(0,0,255)"
              // strokeWidth="4"
              // stroke="rgb(0,0,0)"
            />
          <Polyline
            points="35,50 60,65 85,60 110,85"
            fill="none"
            stroke="red"
            strokeWidth="1"
          />
          </Svg>

      </View>
    );
  }
}