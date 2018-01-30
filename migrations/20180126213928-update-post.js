'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Posts', 'intro', Sequelize.TEXT),
      queryInterface.changeColumn('Posts', 'post', Sequelize.TEXT)
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Posts', 'intro', Sequelize.STRING),
      queryInterface.changeColumn('Posts', 'post', Sequelize.STRING)
    ]);
  }
};
