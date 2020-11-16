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
    const image = JSON.parse(req.body.image)
    const content = [[req.body.title_project],[req.body.picture_project],[req.body.resume_project]]
    db.query('INSERT INTO articles (id_article, title_main, resume, grade, opinion, date_creation, date_modification) VALUES (NULL, ?, ?, ?, ?, ?, ?)',content, (error, rows) => {
        if(error){
            res.status(400).json({sucess: false, error});
        } else {
            res.status(200).json({response: rows[0],sucess: true});
        }
    });
};
