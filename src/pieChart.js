import React, { Component } from 'react';
import Svg, {Path, G} from 'react-native-svg';
import * as shape from 'd3-shape';
const d3 = {shape};
import {
  Animated,
  StyleSheet,
  View,
  Easing
} from 'react-native';

const demoData = [
  {
    number: 12,
    color: '#E2515A'
  },
  {
    number: 5,
    color: '#F38E8D'
  },
  {
    number: 35,
    color: '#FFDDA0'
  },
  {
    number: 1,
    color: '#99CDA5'
  },
  {
    number: 2,
    color: '#6FBC7D'
  }

];
type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      animValue: new Animated.Value(0.1),
      pieMultiplier: 0.1
    };

    this.arcGenerator = d3.shape.arc()
      .outerRadius(100)
      .padAngle(0)
      .innerRadius(0);

    this.components = [];
  }

  componentDidMount(){
    this.state.animValue.addListener((event) => {
      demoData.map( (item, index) =>{
        this.components[index].setNativeProps({d: this.createPieArc(index, event.value)})
      })
    });

    Animated.timing(
      this.state.animValue,
      {
        toValue: 2,
        duration: 2000,
        easing: Easing.inOut(Easing.quad)// Make it take a while
      }
    ).start();
  }

  componentDidUpdate(){}

  createPieArc = (index, multiplier) => {

    let endAngle = multiplier*Math.PI;

    const arcs = d3.shape.pie()
      .value((item)=>item.number)
      .startAngle(0)
      .endAngle(endAngle)
      (demoData);

    let arcData = arcs[index];

    return this.arcGenerator(arcData);
  };

  render() {
    return (
      <View style={styles.container}>
        <Svg
          width={200}
          style={styles.pieSVG}
          height={200}
          viewBox={`-100 -100 200 200`}
        >
          <G>
            {
              demoData.map( (item, index) =>{
                return (
                  <Path
                    d={this.createPieArc(index, 0.1)}
                    fill={item.color}
                    ref={(ref)=>this.components[index] = ref}
                    key={'pie_shape_' + index}
                  />
                )
              })
            }
          </G>
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pieSVG: {
    // shadowColor: "rgba(59, 74, 116, 0.35)",
    // shadowOffset: {
    //   width: 0,
    //   height: 32
    // },
    // elevation: 12,
    shadowRadius: 12.5,
    shadowOpacity: 1,
  },
});
