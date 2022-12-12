/* eslint-disable max-len */
const Sequelize = require('sequelize');

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      goods: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      fair: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    }, {
      sequelize,
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: false, // deletedAt
    });
  }

  static associate(db) {
    db.Product.belongsTo(db.Device, { foreignKey: { name: 'deviceId', as: 'Device' } });
  }
};