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
    let article = req.body.article;
    let files = [];
    req.body.files.forEach((element) => {
        files.push(`${req.protocol}://${req.get('host')}/pictures/${element.name}`);
    });
    // Le host ci dessous est a changer par la racine du server. A voir avec le .env

    db.query('INSERT INTO articles (id_article, title_main, resume, name_image_main, grade, opinion, date_creation, date_modification) VALUES (NULL, ?, ?, ?, ?, ?, ?)',article, (error, rows) => {
        if(error){
            res.status(400).json({sucess: false, error});
        } else {
            res.status(200).json({response: rows[0],sucess: true});
        }
    });
};
