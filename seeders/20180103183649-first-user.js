'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'cy6eria',
      password: 'd8578edf8458ce06fbc5bb76a58c5ca4',
      email: 'e.n.gundorov@gmail.com'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
