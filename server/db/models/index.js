const User = require('./user')
const Form = require('./forms')


Form.belongsToMany(User)

Form.belongsTo(User)

module.exports = {
  User,
  Form

}
