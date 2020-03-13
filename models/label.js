'use strict';
module.exports = (sequelize, DataTypes) => {
  class Label extends sequelize.Sequelize.Model{}
  Label.init({
    name: {
      type:DataTypes.STRING
    },
    color: {
      type:DataTypes.STRING
    },
    TodoId: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize
  });
  Label.associate = function(models) {
    // associations can be defined here
    Label.belongsTo(models.Todo,{foreignKey:'TodoId'})
  };
  return Label;
};