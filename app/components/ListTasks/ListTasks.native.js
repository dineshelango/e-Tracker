/**
 * @Author: GVEDAS
 * @Date:   2017-12-26T17:41:01+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-28T17:58:42+05:30
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';
import styles from '../../native/styles';
import { fetchAllTasks } from '../../actions/tasks';

class ListTasks extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    setTimeout(() => {
      dispatch(fetchAllTasks());
    }, 0);
  }
  render() {
    const { lists } = this.props;
    const listElements = lists.map(ele => (
      <Text style={styles.textMedium} key={ele.Created_date}>{ele.name}</Text>
    ));
    return (
      <View style={styles.container}>
        <ScrollView>
          {listElements}
        </ScrollView>
      </View>
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
