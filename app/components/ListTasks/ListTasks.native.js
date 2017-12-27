/**
 * @Author: GVEDAS
 * @Date:   2017-12-26T17:41:01+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T15:34:31+05:30
 */
import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import styles from '../../native/styles';
import { fetchAllTasks } from '../../actions/tasks';

class ListTasks extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllTasks());
  }
  render() {
    const { lists } = this.props;
    const listElements = lists.map(ele => (
      <Text style={styles.textMedium} key={ele.Created_date}>{ele.name}</Text>
    ));
    return (
      <ScrollView style={styles.container}>
        {listElements}
      </ScrollView>
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
