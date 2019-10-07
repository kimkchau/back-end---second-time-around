module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      product: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      street: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      appartment: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [30]
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [30]
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [5]
      },
    });
  
    Post.associate = function(models) {
      // We're saying that a Post should belong to an User
      // A Post can't be created without an User due to the foreign key constraint
      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };