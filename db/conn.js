const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node_mvc', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
