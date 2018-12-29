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
        bar: [33, 36, 40, 38],
        line: [20,30,19,5],
        label: ['CW 12', 'CW 13', 'CW 14', 'CURRENT']
      }
    }
  }

  render() {
    const { data } = this.state;

    return (
      <View style={{flexDirection: 'row', paddingTop: 0, borderWidth: 1}}>
        <Svg height={height * 0.5} width={width} viewBox="20 20 100 100">
          {
            data.bar.map((barVal, index) => {
              return <Rect
                key={index}
                x={(index + 1) * 25}
                y={100 - barVal}
                width="15"
                height={barVal}
                fill="rgb(188,221,223)"
                // strokeWidth="4"
                // stroke="rgb(0,0,0)"
              />
            })
          }
          { // Text On Top Of BarChart
            data.bar.map((textVal, index) => {
              return <Text
                key={index}
                x={((index + 1) * 25) + 4}
                y={(100 - textVal) - 2}
                fontSize={4}
                fill="rgb(255,36,124)"
                // strokeWidth="4"
                // stroke="rgb(0,0,0)"
              >
                {textVal}%
              </Text>
            })
          }
          {/*{*/}
          {/*data.line.map((lineValue, index) => {*/}
          {/*return <Polyline*/}
          {/*points="33,85,58 75,83 84,110 70"*/}
          {/*fill="none"*/}
          {/*stroke="rgb(122,178,233)"*/}
          {/*strokeWidth="1"*/}
          {/*/>*/}
          {/*})*/}
          {/*}*/}
          {/*<Line*/}
          {/*x1={(25 * 1) + 7.5}*/}
          {/*y1={100 - 20}*/}
          {/*x2={(25 * 2) + 7.5}*/}
          {/*y2={100 - 25}*/}
          {/*stroke="rgb(122,178,233)"*/}
          {/*/>*/}
          {/*<Line*/}
          {/*x1={(25 * 2) + 7.5}*/}
          {/*y1={100 - 25}*/}
          {/*x2={(25 * 3) + 7.5}*/}
          {/*y2={100 - 19}*/}
          {/*stroke="rgb(122,178,233)"*/}
          {/*/>*/}
          {/*<Line*/}
          {/*x1={(25 * 3) + 7.5}*/}
          {/*y1={100 - 19}*/}
          {/*x2={(25 * 4) + 7.5}*/}
          {/*y2={100 - 35}*/}
          {/*stroke="rgb(122,178,233)"*/}
          {/*/>*/}
          {
            data.line.map((lineValue, index) => {
              if (index > 0) {
                return <Line
                  key={index}
                  x1={(25 * index) + 7.5}
                  y1={100 - data.line[index - 1]}
                  x2={(25 * (index + 1)) + 7.5}
                  y2={100 - lineValue}
                  stroke="rgb(122,178,233)"
                />
              }
            })
          }
          {
            data.line.map((circleValue, index) => {
              return <Circle
                key={index}
                cx={((index + 1) * 25) + 8}
                cy={(100 - circleValue)}
                r="1.5"
                stroke="rgb(122,178,233)"
                strokeWidth="1"
                fill="white"
              />
            })
          }
          {
            data.line.map((textVal, index) => {
              if(textVal >= 10) {
                return <Text
                  key={index}
                  x={((index + 1) * 25) + 5}
                  y={(100 - textVal) - 4}
                  fontSize={4}
                  fill="black"
                  // strokeWidth="4"
                  // stroke="rgb(0,0,0)"
                >
                  {textVal}
                </Text>
              } else if (textVal <= 10){
                return <Text
                  key={index}
                  x={((index + 1) * 25) + 6}
                  y={(100 - textVal) + 4}
                  fontSize={4}
                  fill="black"
                  // strokeWidth="4"
                  // stroke="rgb(0,0,0)"
                >
                  {textVal}
                </Text>
              }

            })
          }

          { // Text On Bottom Of BarChart
            data.label.map((textVal, index) => {
              return <Text
                key={index}
                x={((index + 1) * 25) + 1}
                y={105}
                fontSize={4}
                fill="rgb(144,154,171)"
                // strokeWidth="4"
                // stroke="rgb(0,0,0)"
              >
                {textVal}
              </Text>
            })
          }
        </Svg>

      </View>
    );
  }
}