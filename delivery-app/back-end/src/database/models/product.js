
const SaleProduct = require("./sale-product");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product',
    {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    urlImage: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'products',
    });
    
  return Product;
};
