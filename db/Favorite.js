const orm = require('./conn.js')
const Sequelize = require('sequelize')


const Favorite = orm.define('favorite', {
    rank: Sequelize.INTEGER
})

module.exports = Favorite