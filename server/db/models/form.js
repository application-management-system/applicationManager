const Sequelize = require('sequelize')
const db = require('../db')

const Form = db.define('form', {
text: {
    type: Sequelize.TEXT
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})

module.exports = Form
