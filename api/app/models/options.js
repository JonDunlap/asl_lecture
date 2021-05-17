module.exports = (sequelize, DataTypes) => {
  const Options = sequelize.define(
    'Options',
    {
      id: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      value: DataTypes.STRING,
    },
    {}
  );

  Options.associate = (models) => {
    // define association here
    Options.belongsTo(models.Decisions, { foreignKey: 'decisionId' });
  };

  return Options;
};
