require('../config/db.config.js');

exports.getAll = (req, res, next) => {
    db.query('SELECT * FROM articles', function(err, rows,) {
        if(err){
            res.status(400).json({sucess: false, err});
        } else {
            res.status(200).json({response: rows, sucess: true});
            //console.log(rows);
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
    const article = JSON.parse(req.body.article);
    const imageMain = `${req.protocol}://${req.get('host')}/pictures/${req.files[0].filename}`;
    let images = [];
    for (let i = 1; i < req.files.length; i++) {
        const newRow = [null, `${req.protocol}://${req.get('host')}/pictures/${req.files[i].filename}`];
        images.push(newRow);
    }

    // Le host ci dessous est a changer par la racine du server. A voir avec le .env
    db.query("INSERT INTO articles (id_article, title_main, resume, grade, opinion, date_creation, date_modification, name_image_main) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?);",
        [article.article.titleMain, article.article.resume, article.article.grade, article.article.opinion, article.article.dateCreation, article.article.dateModification, imageMain], (err, rows) => {
            if (err) {
                res.status(400).json({sucess: false, err});
            } else {
                db.query("SELECT id_article FROM articles WHERE title_main=?;", [article.article.titleMain], function (err, rows,) {
                    if (err) {
                        res.status(400).json({sucess: false, err});
                    } else {
                        const idArticle = JSON.parse(JSON.stringify(rows[0])).id_article;
                        images.forEach(image => {
                            image.splice(1, 0, idArticle);
                            image.push('blabal'); // TODO: Remplacer par la description dans l'avenir
                        });
                        db.query("INSERT INTO articles_images (id_image, id_article, name, description) VALUES ?;", [images], (err, rows) => {
                            if (err) {
                                res.status(400).json({sucess: false, err});
                            } else {
                                res.status(200).json({response: rows, sucess: true});
                            }
                        });
                    }
                });
            }
        });
}
