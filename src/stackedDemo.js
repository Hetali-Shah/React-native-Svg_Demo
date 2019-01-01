import Svg,{
  Circle,
  Text,
  Line,
  G,
  Rect,
} from 'react-native-svg';

/* Use this if you are using Expo
import { Svg } from 'expo';
const { Circle, Rect } = Svg;
*/

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

// Percentages work in plain react-native but aren't supported in Expo yet, workaround with this or onLayout
const { width, height } = Dimensions.get('window');

const colors = {
  sad: 'rgba(226,81,90)',
  unhappy: 'rgba(243,142,141)',
  ok: 'rgba(255,221,160)',
  satisfied: 'rgba(153,205,165)',
  happy: 'rgba(111,188,125)',
};

export default class SvgExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataOne: [
        {
          tagName: "TaskArea / Activity",
          sad: 5,
          unhappy: 5,
          ok: 5,
          satisfied: 5,
          happy: 5
        },
        {
          tagName: "Arbeitszeitbelastung",
          sad: 10,
          unhappy: 42,
          ok: 7,
          satisfied: 8,
          happy: 8
        },
        {
          tagName: "WorkingEquipment",
          sad: 10,
          unhappy: 20,
          ok: 13,
          satisfied: 2,
          happy: 45
        },
        {
          tagName: "Health",
          sad: 25,
          unhappy: 22,
          ok: 13,
          satisfied: 2,
          happy: 20
        },
        {
          tagName: "ProfessionalTraining",
          sad: 10,
          unhappy: 10,
          ok: 6,
          satisfied: 2,
          happy: 43
        }
      ]
    }
  }

  render() {
    const { dataOne } = this.state
    const tagName = 'TaskArea / Activity , Arbeitszeitbelastung, WorkingEquipment,Health, ProfessionalTraining';
    const names = tagName.split(',');
    console.log("names========>", names)
    names.map((value) => {
      console.log("value ---> length" , value.length)
    })
    return (
      <View style={{flexDirection: 'row', paddingTop: 0, borderWidth: 1}}>
        <Svg height={height * 0.5} width={width} viewBox="25 0 100 100">
          {
            dataOne.map((tagValue, index) => {
              const {tagName, ...rest} = tagValue;
              let sumOfValue = 0;
              return (
                <View key={index}>
                  {
                    Object.keys({...rest}).map((key, keyIndex) => {
                      sumOfValue += tagValue[key];
                      return <Rect
                        key={keyIndex}
                        x={(index + 1) * 22}
                        y={100 - sumOfValue}
                        width="10"
                        height={tagValue[key]}
                        fill={colors[key]}
                      />
                    })
                  }
                  <Text
                    x={(index + 1) * 22}
                    y={(100 - sumOfValue) - 3}
                    fontSize={4}
                    fill="rgb(255,36,124)"
                    style={{backgroundColor:'yellow'}}
                    // strokeWidth="4"
                    // stroke="rgb(0,0,0)"
                  >
                    {sumOfValue}%
                  </Text>
                  {/*<Rect*/}
                  {/*x={((index + 1) * 22) + 10}*/}
                  {/*y={100 - sumOfValue}*/}
                  {/*width="5"*/}
                  {/*height={sumOfValue}*/}
                  {/*fill="rgb(39,60,90)"*/}
                  {/*/>*/}
                  <G
                    rotation="90"
                    origin="100, 10"
                    x={((index + 1) * 22) + 5}
                    y={100}

                  >
                    {/*<Text*/}
                    {/*x={68}*/}
                    {/*y={103}*/}
                    {/*fontSize={4}*/}
                    {/*textAnchor="middle"*/}
                    {/*fill="rgb(255,36,124)"*/}
                    {/*strokeWidth="4"*/}
                    {/*stroke="rgb(39,60,90)"*/}
                    {/*>*/}
                    {/*{tagName}*/}
                    {/*</Text>*/}
                    {/*<Text*/}
                    {/*x={68}*/}
                    {/*y={103}*/}
                    {/*fontSize={4}*/}
                    {/*textAnchor="middle"*/}
                    {/*fill="rgb(255,36,124)"*/}
                    {/*fill-rule="nonzero"*/}
                    {/*//strokeWidth="4"*/}
                    {/*//stroke="rgb(39,60,90)"*/}
                    {/*>*/}
                    {/*{tagName}*/}
                    {/*</Text>*/}
                  </G>
                </View>

              )
            })
          }
          {
            names.map((tagNames, index) => {
              return (
                <View>
                  <Rect
                    x={((index + 1) * 22) + 10}
                    y={100 - (tagNames.length * 2)}
                    width="5"
                    height={tagNames.length + 30}
                    fill="rgb(39,60,90)"
                  />
                  <G
                    rotation="90"
                    origin="100, 10"
                    x={10}
                    y={140}

                  >
                    <Text
                      x={((index + 1) * 31) + 10}
                      y={87}
                      fontSize={4}
                      textAnchor="middle"
                      fill="rgb(255,36,124)"
                      fill-rule="nonzero"
                      //strokeWidth="4"
                      //stroke="rgb(39,60,90)"
                    >
                      tagNames
                    </Text>
                  </G>
                </View>
              )
            })
          }
          {/*<Rect*/}
          {/*x={32}*/}
          {/*y={63}*/}
          {/*width="5"*/}
          {/*height={37}*/}
          {/*fill="rgb(39,60,90)"*/}
          {/*/>*/}
          <G
            rotation="90"
            origin="100, 10"
            x={10}
            y={140}

          >
            <Text
              x={31}
              y={87}
              fontSize={4}
              textAnchor="middle"
              fill="rgb(255,36,124)"
              fill-rule="nonzero"
              //strokeWidth="4"
              //stroke="rgb(39,60,90)"
            >
              TaskArea / Activity
            </Text>
          </G>
        </Svg>

      </View>
    );
  }
}