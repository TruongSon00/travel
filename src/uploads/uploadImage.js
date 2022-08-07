const multer = require('multer')

// --------- upload ảnh ----------
const uploadImage = (req, res, next, directory, fieldName) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'src/uploads/' + directory)
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.jpg')
        }
    })
    const upload = multer({
        // -------- nếu là image thì mới cho upload file ----------
        storage, fileFilter(req, file, cb) {
            if (file.mimetype.indexOf('image') == -1)
                cb(null, false)
            else
                cb(null, true)
        }
    }).single(fieldName)

    console.log({ storage });

    // ------ xử lý lỗi ------------
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            res.status(400).send({ Message: 'Lỗi upload file', err })
        }
        else
            next()
    })
}

// =========-- upload thumbnail =========
const uploadThumbnail = (req, res, next) => {
    uploadImage(req, res, next, 'thumbnail', 'thumbnail')
}

// =========-- upload avatar =========
const uploadAvatar = (req, res, next) => {
    uploadImage(req, res, next, 'avatar', 'avt')
}
module.exports = {
    uploadAvatar, uploadThumbnail
};





