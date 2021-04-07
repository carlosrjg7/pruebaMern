const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
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

/*
    router.get('/', async (req,res) => {
        const imagenes = await Imagen.findAll();
        res.json(imagenes);
    })

    router.get('/api/image', (req,res) => {
        res.send('ruta para listar')
    })

    router.put('/api/image/:imagenId', async (req,res) => {
        await Imagen.update(req.body, {
           where: { id: req.params.imagenId }  
        });
        res.json({ success: 'se ha modificado'})
    })

    router.delete('/api/image/:imagenId', async (req,res) => {
        await Imagen.destroy({
            where: { id: req.params.imagenId }
        });
        res.json({ success: 'se ha eliminado la pelicula'})
    })
*/
    router.post('/api/image/post', fileUpload, async (req, res) => {
        console.log(req.file)
        const datos = {};
        datos.url = path.join(__dirname,'../images/' + req.file.filename);
        datos.name = req.file.originalname;

        const data = fs.readFileSync(path.join(__dirname,'../images/' + req.file.filename))

        const imagenNew = await Imagen.create(datos);
        res.json(imagenNew);

    })

module.exports = router;