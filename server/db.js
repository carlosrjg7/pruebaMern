const Sequelize = require('sequelize')

const ImageModel = require('./models/Imagen')

const sequelize = new Sequelize('test','root','root', {
    host: 'db',
    //host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
     console.log('Connection has been established successfully.');
  })
  .catch(err => {
    if (err) throw err;
  });

const Imagen = ImageModel(sequelize, Sequelize)

sequelize.sync({ force: false})
.then(() =>{
    console.log('tablas sincronizadas')
})
.catch(err => {
    console.log(err)
})

module.exports = {
    Imagen
}