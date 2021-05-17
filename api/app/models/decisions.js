module.exports = (sequelize, DataTypes) => {
  const Decisions = sequelize.define(
    'Decisions',
    {
      id: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      title: DataTypes.STRING,
      type: DataTypes.ENUM('public', 'private'),
    },
    {}
  );

  Decisions.associate = (models) => {
    // associations can be defined here
    Decisions.hasMany(models.Options, { foreignKey: 'decisionId' });
  };

  return Decisions;
};
