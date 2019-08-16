const Sequelize = require('sequelize')
const db = require('../db')

const Form = db.define('form', {
  purchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Form
