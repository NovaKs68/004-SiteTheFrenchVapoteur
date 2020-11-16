
Pour récupérer tous les articles avec leurs tags correspondants :

SELECT articles.*,
    GROUP_CONCAT(tags.title) as tags,
    GROUP_CONCAT(tags.id_tag) as id_tag
FROM articles 
JOIN articles_tags 
    ON articles.id_article = articles_tags.id_article 
JOIN tags
    ON tags.id_tag = articles_tags.id_tag
GROUP BY articles.id_article;
