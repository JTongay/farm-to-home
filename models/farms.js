module.exports = function(sequelize, DataTypes){
  var Farm = sequelize.define("Event", {
    name: {
      type: DataTypes.STRING,

    }
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
    // items: [
    //   {
    //     name: "milk",
    //     price: 1,
    //     quantity: 100
    //   }
    // ]
  },
  {
    // We're saying that we want our Author to have Posts
    classMethods: {
      associate: function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Farm.belongsTo(models.User, {
          as: "Creator",
          foreignKey: {
            name: "creatorId",
            allowNull: false,
          }
        });
      }
    }
    return Farm;
};
