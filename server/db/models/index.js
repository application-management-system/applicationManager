const User = require('./user')
const Form = require('./form')


Form.belongsToMany(User)

Form.belongsTo(User)

module.exports = {
  User,
  Form

}
