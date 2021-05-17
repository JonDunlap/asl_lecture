module.exports = (sequelize, DataTypes) => {
  const Decisions = sequelize.define(
    'Decisions',
    {
      title: DataTypes.STRING,
      type: DataTypes.ENUM('public', 'private'),
    },
    {}
  );

  return Decisions;
};
