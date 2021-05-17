module.exports = (sequelize, DataTypes) => {
  const Decisions = sequelize.define(
    'Decisions',
    {
      id: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
        validate: {
          isUUID: { args: 4, msg: 'Id not valid, please try again' },
        },
      },

      title: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 500],
            msg: 'Decisions title is required to be at least 3 characters',
          },
        },
      },

      type: {
        type: DataTypes.ENUM('public', 'private'),
        validate: {
          isIn: {
            args: [['public', 'private']],
            msg: 'Decisions must be either public or private',
          },
        },
      },
    },
    {}
  );

  Decisions.associate = (models) => {
    // associations can be defined here
    Decisions.hasMany(models.Options, { foreignKey: 'decisionId' });
  };

  return Decisions;
};
