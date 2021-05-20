module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      username: {
        type: Sequelize.STRING,
      },

      access_token: {
        type: Sequelize.STRING,
      },

      name: {
        type: Sequelize.STRING,
      },

      password: {
        type: Sequelize.STRING,
      },

      type: {
        type: Sequelize.ENUM('slack', 'regular'),
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('Users'),
};
