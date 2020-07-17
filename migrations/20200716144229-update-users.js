module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'city',
        {
          type: Sequelize.STRING,
        },
      ),
      queryInterface.addColumn(
        'users',
        'country',
        {
          type: Sequelize.STRING,
        },
      ),
      queryInterface.addColumn(
        'users',
        'currency',
        {
          type: Sequelize.STRING,
        },
      ),
      queryInterface.addColumn(
        'trips',
        'destinationCity',
        {
          type: Sequelize.STRING,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('users', 'city'),
      queryInterface.removeColumn('users', 'country'),
      queryInterface.removeColumn('users', 'currency'),
      queryInterface.removeColumn('trips', 'destinationCity'),
    ]);
  },
};