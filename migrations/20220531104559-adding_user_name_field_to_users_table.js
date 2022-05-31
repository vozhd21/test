'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'users',
        'userName',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'userName');
  }
};
