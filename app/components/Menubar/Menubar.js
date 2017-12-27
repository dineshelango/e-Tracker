/**
 * @Author: GVEDAS
 * @Date:   2017-12-27T17:01:56+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T17:19:33+05:30
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const ListItem = ({ name, to }) => (
  <li className="navbar__menus__item">
    <NavLink
      exact
      to={to}
      activeClassName="active"
      isActive={(match, location) => to === location.pathname}
    >{name}
    </NavLink>
  </li>
);

const MenuBar = () => (
  <div className="navbar">
    <ul className="navbar__menus">
      <ListItem name="View All Tasks" to="/" />
      <ListItem name="Add Task" to="/add-tasks" />
    </ul>
  </div>
);
export default withRouter(connect()(MenuBar));
