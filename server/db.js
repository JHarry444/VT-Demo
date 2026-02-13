const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

class Trainer extends Model { }
Trainer.init({
  name: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.STRING, allowNull: false  },
  specialism: { type: DataTypes.STRING, allowNull: false }
}, { sequelize, modelName: 'trainer' });

sequelize.sync();


module.exports = {
  Trainer
}