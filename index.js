/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import pieChart from './src/pieChart';
import CircleExample from './src/circleExample';
import StackedBarChart from './src/stackedBarChart';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StackedBarChart);
