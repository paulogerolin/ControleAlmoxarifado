const multer = require('multer');
const { extname, resolve } = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, resolve(__dirname, '..', 'uploads', 'NFs' ))
         },
        filename: (req, file, callback) => {
            callback(null, `nf_${req.body.nfe}_${req.body.anoNfe}_${req.body.addCnpj}${extname(file.originalname)}`)
         }
    })
}