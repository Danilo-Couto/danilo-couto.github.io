'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      userId: DataTypes.NUMBER,
      sellerId: DataTypes.NUMBER,
      totalPrice: DataTypes.NUMBER,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'sales',
    }
  );
 
  return Sale;
};
