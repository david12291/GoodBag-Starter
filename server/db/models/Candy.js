const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name:{
    type:Sequelize.STRING,
    allowNull:false,
    validate:{
      notEmpty: true
    }
    
  },
    description:{
      type: Sequelize.STRING,
      allowNull:false
    },
    quantity:{
      type:Sequelize.INTEGER,
      validate:{
        min:0,
        max:10
      }
    },
    imageUrl:{
      type: Sequelize.STRING,
      defaultValue:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FSNICKERS-Christmas-Slice-Chocolate-1-Pound%2Fdp%2FB0063HMIRW&psig=AOvVaw0LSGXaQfF7pzPNBju6Bmd5&ust=1670784084272000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIC7wPDZ7_sCFQAAAAAdAAAAABAI'
    },
});
