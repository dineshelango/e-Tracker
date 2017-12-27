/**
 * @Author: GVEDAS
 * @Date:   2017-12-26T17:41:01+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T12:14:57+05:30
 */
import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/tasks';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
    }
  }
  render() {
    const { dispatch } = this.props;
    const { taskName } = this.state;
    return (
      <div className="col-xs-12">
        <input
          ref={((c) => { this.input = c; })}
          type="text"
          value={taskName}
          placeholder="enter task name"
          size="30"
          onChange={() => {
            this.setState({ taskName: this.input.value });
          }}
        />
        <button
          onClick={() => {
            dispatch(addTask(taskName));
            this.setState({ taskName: '' });
          }}
        >
          Add Task
        </button>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(AddTask);
