const Sequelize = require('sequelize')
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/acme_favorites_spa'
const orm = new Sequelize(DATABASE_URL, {logging: false})

module.exports = orm
