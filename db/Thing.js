const orm = require('./conn.js')
const Sequelize = require('sequelize')

const Thing = orm.define('thing', {
    name: Sequelize.STRING
})

module.exports = Thing