/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import { name as appName } from './app.json';
import awsConfig from './src/aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsConfig);
AppRegistry.registerComponent(appName, () => App);
