/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:42:32+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-28T09:42:51+05:30
 */
import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import '../../assets/css/style.scss';
import Menubar from '../Menubar';
import AddTask from '../AddTask';
import ListTasks from '../ListTasks';

export default () => (
  <Router>
    <div className="row">
      <Menubar />
      <Route exact path="/" component={ListTasks} />
      <Route exact path="/add-tasks" component={AddTask} />
    </div>
  </Router>
);
