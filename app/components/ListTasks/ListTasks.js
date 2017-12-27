/**
 * @Author: GVEDAS
 * @Date:   2017-12-26T17:41:01+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T12:41:11+05:30
 */
import React from 'react';
import { connect } from 'react-redux';
import { fetchAllTasks } from '../../actions/tasks';

class ListTasks extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllTasks());
  }
  render() {
    const { lists } = this.props;
    const listElements = lists.map(ele => (
      <li key={ele.Created_date}>{ele.name}</li>
    ));
    return (
      <div className="col-xs-12">
        <ul>
          {listElements}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tasks }) {
  const { lists } = tasks;
  return {
    lists,
  };
}

export default connect(mapStateToProps)(ListTasks);
