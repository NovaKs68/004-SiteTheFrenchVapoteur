use thefrenchvapoteur;

----------------------Table users_roles----------------------

INSERT INTO `users_roles` (`id_role`, `name_role`, `permission`) VALUES
(1, 'user', 1),
(2, 'administrator', 2);

----------------------Table users----------------------

INSERT INTO `users` (`id_user`, `pseudo`, `mail`, `password`, `date_creation`, `id_role`) VALUES
(1, 'Robin', 'robin@robin.com', 'robin', DATE(NOW()), 2),
(2, 'user', 'user@user.com', 'user', DATE(NOW()), 1);

----------------------Table articles----------------------

INSERT INTO `articles` (`id_article`, `title_main`, `resume`, `grade`, `opinion`, `date_creation`, `date_modification`) VALUES
(1, 'L’arrêt de Juul en France ?', 'Effectivement la Start-Up Juul (Californienne) a déclarée leurs motivations à arrêter la commercialisations de leurs produits au sein de l’Europe,', NULL, NULL, DATE(NOW()), NULL),
(2, 'Aspire – Nautilus 2S', 'Dans la famille Nautilus je demande le 2S, La marque Aspire a revu son Nautilus pour une utilisation plus simple.', 8, 'Dans l’ensemble, c’est un Nautilus comme les autres. Un très bon tirage serré qui délivre de très bonne saveur. Ce qui me ferais vous le conseiller est vraiment son nouveau système de remplissage qui facilite la vie. Hormis ça, pas de réelles avancées. La vap indirect de qualité qu’on connait des Nautilus, et des résistances de qualitée. Les saveurs sont les et les fuites inexistantes.', DATE('2020-02-01'), DATE('2020-03-25')),
(3, 'Geek Vape – Aegis Solo 100W', 'Voilà la petite soeur de l’Aegis Legend ! Dite aussi indestructible … Nous allons voir ça.', 10, 'Geek vape sait encore une fois séduire avec cette petite bombe ! Petite et pratique elle pourra vous suivre dans votre vie de tous les jours sans avoir peur de la faire tomber ou la mouiller ! Plutôt un bon point si vous chercher une box pour vos allday. Effectivement cette box me suit tous les jours avec mon petit Siren V2 mtl, malgré l’autonomie de la batterie qui ne me satisfait pas totalement sa robustesse me séduit, je suis quelqu’un qui ne fait pas forcément toujours attention à ses affaires… je peux donc avoir l’esprit tranquille avec l’Aegis Solo 100W.', DATE('2020-02-25'), NULL),
(4, 'OFRF – Gear RTA', 'The French Vapoteur a testé le Gear RTA, un atomiseur reconstructible de chez OFRF. Une marque inconnu au bataillons, mais', 7, 'Cela fait deux mois que je le teste… Que dire… Peut importe le liquide que j’utilise, il est embellie, c’est un exhausteur de saveur ! Que ce soit du gourmand, du fruité ou des liquides mentholés ils ressortent tous mieux que comme je les connaissais. Si vous rechercher un atomiseur saveur, vous trouverez votre bonheur avec le Gear.', DATE('2019-12-12'), NULL);

----------------------Table tags----------------------

INSERT INTO `tags` (`id_tag`, `title`, `color`) VALUES
(1, 'New', '#E42E2E'),
(2, 'Actualité', '#11BF14'),
(3, 'Box électronique', '#8B3DB2'),
(4, 'Clearomiseur', '#C14B9D'),
(5, 'Clearomiseur reconstruptible', '#4BB3C1'),
(6, 'Gourmands', '#FCA100'),
(7, 'Fruité', '#BB2222'),
(8, 'Pod', '#3DCF7F');

----------------------Table articles_tags----------------------

INSERT INTO `articles_tags` (`id_tag`, `id_article`) VALUES
(1, 1),
(2, 1),
(2, 2),
(4, 2),
(2, 3),
(3, 3),
(2, 4),
(5, 4);

