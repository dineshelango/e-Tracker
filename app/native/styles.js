/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:39:17+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T17:28:24+05:30
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    padding: 10,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textMedium: {
    fontSize: 16,
    textAlign: 'left',
    color: '#FFFFFF',
    fontWeight: 'normal',
    marginBottom: 8,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#80CBC4',
    width: 100,
    padding: 10,
    margin: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default styles;
