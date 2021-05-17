module.exports = (sequelize, DataTypes) => {
  const Options = sequelize.define(
    'Options',
    {
      id: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
        validate: {
          isUUID: {
            args: 4,
            msg: 'Id not valid, please go back and try again.',
          },
        },
      },

      value: {
        type: DataTypes.STRING,
        validate: {
          len: { args: [3, 500], msg: 'Option value is required' },
        },
      },
    },
    {}
  );

  Options.associate = (models) => {
    // define association here
    Options.belongsTo(models.Decisions, { foreignKey: 'decisionId' });
  };

  return Options;
};
