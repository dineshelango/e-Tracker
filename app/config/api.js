/**
 * @Author: GVEDAS
 * @Date:   2017-12-27T11:51:40+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T12:54:11+05:30
 */
const settings = {
  async: true,
  crossDomain: true,
  url: 'http://172.25.10.159:3000/tasks',
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export default settings;
