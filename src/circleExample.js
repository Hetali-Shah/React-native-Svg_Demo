import Svg,{
  Circle,
  Text,
  Line,
  Rect,
} from 'react-native-svg';
import React from 'react';
import { View, Dimensions } from 'react-native';

// Percentages work in plain react-native but aren't supported in Expo yet, workaround with this or onLayout
const { width, height } = Dimensions.get('window');

export default class SvgExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : {
        bar: [33, 36, 40, 38],
        line: [20, 25, 19, 35],
        label: ['CW 12', 'CW 13', 'CW 14', 'CURRENT']
      },
      dataOne: [
        {
          from: 2018-10-29,
          to: 2018-11-4,
          participation_ratio: 33,
          happiness_score: 20
        },
        {
          from: 2018-11-5,
          to: 2018-11-11,
          participation_ratio: 36,
          happiness_score: 25
        },
        {
          from: 2018-11-12,
          to: 2018-11-18,
          participation_ratio: 40,
          happiness_score: 19
        },
        {
          from: 2018-11-19,
          to: 2018-11-25,
          participation_ratio: 38,
          happiness_score: 35
        }
      ]
    }
  }


  render() {
    const { data, dataOne } = this.state;

    return (
      <View style={{flexDirection: 'row'}}>
        <Svg height={height * 0.5} width={width} viewBox="20 20 100 100">
          {
            dataOne.map((barVal, index) => {
              return (
                <View key={index}>
                  <Rect
                    x={(index + 1) * 25}
                    y={100 - barVal.participation_ratio}
                    width="15"
                    height={barVal.participation_ratio}
                    fill="rgb(188,221,223)"
                  />
                  <Text
                    x={((index + 1) * 25) + 4}
                    y={(100 - barVal.participation_ratio) - 2}
                    fontSize={4}
                    fill="rgb(255,36,124)"
                  >
                    {barVal.participation_ratio}%
                  </Text>
                </View>

              )
            })
          }
          {
            dataOne.map((lineValue, index) => {
              if (index > 0) {
                return <Line
                  key={index}
                  x1={(25 * index) + 7.5}
                  y1={100 - dataOne[index - 1].happiness_score}
                  x2={(25 * (index + 1)) + 7.5}
                  y2={100 - lineValue.happiness_score}
                  stroke="rgb(122,178,233)"
                />
              }
            })
          }
          {
            dataOne.map((circleValue, index) => {
              return <Circle
                key={index}
                cx={((index + 1) * 25) + 8}
                cy={(100 - circleValue.happiness_score)}
                r="1.5"
                stroke="rgb(122,178,233)"
                strokeWidth="1"
                fill="white"
              />
            })
          }
          {
            dataOne.map((textVal, index) => {
                return <Text
                  key={index}
                  x={((index + 1) * 25) + 1}
                  y={(100 - textVal.happiness_score)}
                  fontSize={4}
                  fill="black"
                >
                  {textVal.happiness_score}
                </Text>
            })
          }
          { // Text On Bottom Of BarChart
            data.label.map((textVal, index) => {
              return <Text
                x={((index + 1) * 25) + 1}
                y={105}
                fontSize={4}
                fill="rgb(144,154,171)"
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