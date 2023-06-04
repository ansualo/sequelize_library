'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Loan.belongsTo(models.Member, {
        foreignKey: 'member_id'
      });
      Loan.belongsTo(models.Book, {
        foreignKey: 'book_id'
      });
    }
  }
  Loan.init({
    member_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    dateTaken: DataTypes.DATE,
    dateReturned: DataTypes.DATE,
    deteriorated: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Loan',
  });
  return Loan;
};