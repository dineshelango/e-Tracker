/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:41:25+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T16:59:32+05:30
 */
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import AppView from './AppView';

export default () => (
  <Provider store={store}>
    <AppView />
  </Provider>
);
