const orm = require('./conn.js')
const Sequelize = require('sequelize')

const User = orm.define('user', {
    name: Sequelize.STRING
})

module.exports = User