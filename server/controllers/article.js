require('../config/db.config.js');

exports.getAll = (req, res, next) => {
    db.query('SELECT * FROM articles', function(err, rows,) {
        if(err){
            res.status(400).json({sucess: false, err});
        } else {
            res.status(200).json({response: rows, sucess: true});
        }
    });
};

exports.getOne = (req, res, next) => {
    db.query('SELECT * FROM articles WHERE id_article=?', req.params.id, function(err, rows,) {
        if(err){
            res.status(404).json({err, sucess: false});
        } else if(rows[0] === undefined) {
            res.status(404).json({response: 'Content is empty', sucess: false});
        } else {
            res.status(200).json({response: rows, sucess: true});
        }
    });
};

// Pas fini

exports.create = (req, res, next) => {
    // check token
    const images = JSON.parse(req.body.images);
    const image_main = JSON.parse(req.body.image_main)
    const content = [[req.body.title_main],[req.body.resume],[`${req.protocol}://${req.get('host')}/pictures/${image_main.filename}`],[req.body.grade],[req.body.opinion],[req.body.date_creation],[req.body.date_modification]];
    // Le host ci dessous est a changer par la racine du server. A voir avec le .env
    images.forEach(image => content.push(`${req.protocol}://${req.get('host')}/pictures/${image.filename}`));
    console.log(content);
    db.query('INSERT INTO articles (id_article, title_main, resume, name_image_main, grade, opinion, date_creation, date_modification) VALUES (NULL, ?, ?, ?, ?, ?, ?)',content, (error, rows) => {
        if(error){
            res.status(400).json({sucess: false, error});
        } else {
            res.status(200).json({response: rows[0],sucess: true});
        }
    });
};
