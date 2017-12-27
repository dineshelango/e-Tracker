/**
 * @Author: GVEDAS
 * @Date:   2017-12-27T17:01:56+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T17:44:53+05:30
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { withRouter, Link } from 'react-router-native';
import styles from '../../native/styles';

const MenuBar = ({ location }) => (
  <View style={styles.nav}>
    <Link
      style={styles.navItem}
      to="/"
      underlayerColor="#f0f4f7"
    >
      <Text style={{ color: location.pathname === '/' ? '#FFF' : '#000' }}>Task Lists</Text>
    </Link>
    <Link
      style={styles.navItem}
      to="/add-tasks"
      underlayerColor="#f0f4f7"
    >
      <Text style={{ color: location.pathname === '/add-tasks' ? '#FFF' : '#000' }}>Add Task</Text>
    </Link>
  </View>
);
export default withRouter(connect()(MenuBar));
