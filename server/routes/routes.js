const express = require('express')
const apiRouter = require('./api')

const multer = require('multer')
const path = require('path')
const fs = require('fs')

const { Imagen } = require('../db')

    const diskstorage = multer.diskStorage({
        destination: path.join(__dirname, '../images'),
        filename: (req,file,cb) => {
            cb(null, Date.now() + file.originalname)
        }
    })

    const fileUpload = multer({
        storage: diskstorage,
    }).single('image')

const router = express.Router()

router.get('/', (req,res) => {
    res.send('welcome to my image api')
})

//router.use('/api/image/post', apiRouter);

router.post('/api/image/post', fileUpload, async (req, res) => {
    console.log(req.file)
    const datos = {};
    datos.url = path.join(__dirname,'../images/' + req.file.filename);
    datos.name = req.file.originalname;

    const data = fs.readFileSync(path.join(__dirname,'../images/' + req.file.filename))

    const imagenNew = await Imagen.create(datos);
    res.json(imagenNew);

})

module.exports = router