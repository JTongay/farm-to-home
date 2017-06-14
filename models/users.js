var Sequelize = require('sequelize');

module.exports = {
  var User = sequelize.define("User", {
   oauthId: {
     type: DataTypes.STRING,
    // allowNull: true
   },
   firstName: {
     type: DataTypes.STRING,
     allowNull: false
   },
   lastName: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
     type: DataTypes.STRING,
     allowNull: false
   },
   profileImage: {
     type: DataTypes.STRING,
     allowNull: true
   },
   address: {
     type: DataTypes.String,
     allowNull: true
   },
   dateAdded: {
     type: DataTypes.DATE,
     allowNull: false,
     defaultValue: Sequelize.NOW
   },
  //  credType: {
  //    type: DataTypes.STRING,
  //    allowNull: false
  //  },
   password: {
     type: DataTypes.STRING,
     allowNull: true
   },
   classMethods: {
     associate: function(models) {
       // Associating Author with Posts
       // When an Author is deleted, also delete any associated Posts
       User.hasMany(models.Event,
         {
          foreignKey: {
           name: "creatorId",
           allowNull: false,
         }
       });
    }
    return User;
}


module.exports = User;
