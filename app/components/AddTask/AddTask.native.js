/**
 * @Author: GVEDAS
 * @Date:   2017-12-26T17:41:01+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T16:29:39+05:30
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, Button, TextInput } from 'react-native';
import { addTask } from '../../actions/tasks';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
    };
  }
  render() {
    const { dispatch } = this.props;
    const { taskName } = this.state;
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          value={this.state.taskName}
          placeholder="Enter Task Name!"
          onChangeText={text => this.setState({ taskName: text })}
        />
        <Button
          onPress={() => {
            dispatch(addTask(taskName));
            this.setState({ taskName: '' });
          }}
          title="Add Task"
          color="#841584"
          accessibilityLabel="Add Task"
        />
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(AddTask);
