/**
 * @Author: GVEDAS
 * @Date:   2017-12-27T17:01:56+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-28T10:28:45+05:30
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import config from '../../config';

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

class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const menuClass = this.state.open ? 'open' : '';
    return (
      <div className="navbar">
        <div className="navbar__title col-md-4">
          {config.title}
          <button
            className={`navbar__icon btn hidden-lg ${menuClass}`}
            onClick={() => {
              this.setState({ open: !this.state.open });
            }}
          >
            <span>s</span>
          </button>
        </div>
        <ul className={`navbar__menus col-md-6 ${menuClass}`}>
          <ListItem name="View All Tasks" to="/" />
          <ListItem name="Add Task" to="/add-tasks" />
        </ul>
      </div>
    );
  }
}
export default withRouter(connect()(Menubar));
