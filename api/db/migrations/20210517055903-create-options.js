module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      value: {
        type: Sequelize.STRING,
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

  down: async (queryInterface) => queryInterface.dropTable('Options'),
};
