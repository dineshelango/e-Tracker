/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:33:04+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-28T17:43:15+05:30
 */
import React from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import config from '../../config';
import styles from '../../native/styles';
import Menubar from '../Menubar';
import AddTask from '../AddTask';
import ListTasks from '../ListTasks';

export default () => (
  <NativeRouter>
    <View style={styles.container}>
      <Text style={styles.title}>{config.title}</Text>
      <Menubar />
      <Route exact path="/" component={ListTasks} />
      <Route exact path="/add-tasks" component={AddTask} />
    </View>
  </NativeRouter>
);
