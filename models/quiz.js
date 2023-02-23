'use strict'

const Quiz = sequelize.define('Quiz', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.ENUM,
    values: [ 'easy', 'medium', 'hard' ],
    defaultValue: 'easy',
  },
  questions: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
}
});

module.exports = Quiz;

