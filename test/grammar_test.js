var tape = require('tape');

var instructions = require('../index.js');
var languages = require('../languages.js');

const grammarTests = {
    'fr': [
        ['Marseille', 'arrival', 'à Marseille'],
        ['Marseille', 'preposition', 'de Marseille'],
        ['Épinal', 'arrival', 'à Épinal'],
        ['Épinal', 'preposition', 'd’Épinal'],
        ['Le Havre', 'arrival', 'au Havre'],
        ['Le Havre', 'preposition', 'du Havre'],
        ['Les Marches', 'arrival', 'aux Marches'],
        ['Les Marches', 'preposition', 'des Marches'],
        ['Les Ulis', 'arrival', 'aux Ulis'],
        ['Les Ulis', 'preposition', 'des Ulis'],
        ['La Rochelle', 'arrival', 'à La Rochelle'],
        ['La Rochelle', 'preposition', 'de La Rochelle'],
        ['Accès Plateforme Logistique', 'article', 'l’accès Plateforme Logistique'],
        ['Accès Plateforme Logistique', 'preposition', 'de l’accès Plateforme Logistique'],
        ['Aire Livraison Nord', 'article', 'l’aire Livraison Nord'],
        ['Aire Livraison Nord', 'preposition', 'de l’aire Livraison Nord'],
        ['Aire Livraison Nord', 'rotary', 'le rond-point de l’aire Livraison Nord'],
        ['Allée René Jeannel', 'article', 'l’allée René Jeannel'],
        ['Allée René Jeannel', 'preposition', 'de l’allée René Jeannel'],
        ['Anse du Pharo', 'article', 'l’anse du Pharo'],
        ['Anse du Pharo', 'preposition', 'de l’anse du Pharo'],
        ['Autoroute de Normandie', 'article', 'l’autoroute de Normandie'],
        ['Autoroute de Normandie', 'preposition', 'de l’autoroute de Normandie'],
        ['L\'Autoroute du Nord', 'article', 'l’autoroute du Nord'],
        ['L\'Autoroute du Nord', 'preposition', 'de l’autoroute du Nord'],
        ['Avenue des Champs-Élysées', 'article', 'l’avenue des Champs-Élysées'],
        ['Avenue des Champs-Élysées', 'preposition', 'de l’avenue des Champs-Élysées'],
        ['Barreau de Liaison', 'article', 'le barreau de Liaison'],
        ['Barreau de Liaison', 'preposition', 'du barreau de Liaison'],
        ['Boulevard Saint-Germain', 'article', 'le boulevard Saint-Germain'],
        ['Boulevard Saint-Germain', 'preposition', 'du boulevard Saint-Germain'],
        ['Chemin de Halage', 'article', 'le chemin de Halage'],
        ['Chemin de Halage', 'preposition', 'du chemin de Halage'],
        ['Petit Chemin de Carpentras', 'article', 'le petit chemin de Carpentras'],
        ['Petit Chemin de Carpentras', 'preposition', 'du petit chemin de Carpentras'],
        ['Cité Falguière', 'article', 'la cité Falguière'],
        ['Cité Falguière', 'preposition', 'de la cité Falguière'],
        ['Chaussée Jules César', 'article', 'la chaussée Jules César'],
        ['Chaussée Jules César', 'preposition', 'de la chaussée Jules César'],
        ['Clos de Baumillons', 'article', 'le clos de Baumillons'],
        ['Clos de Baumillons', 'preposition', 'du clos de Baumillons'],
        ['Corniche du Président John Fitzgerald Kennedy', 'article', 'la corniche du Président John Fitzgerald Kennedy'],
        ['Corniche du Président John Fitzgerald Kennedy', 'preposition', 'de la corniche du Président John Fitzgerald Kennedy'],
        ['Cour d\'Honneur', 'article', 'la cour d’Honneur'],
        ['Cour d\'Honneur', 'preposition', 'de la cour d’Honneur'],
        ['Cour d\'Honneur', 'rotary', 'le rond-point de la cour d’Honneur'],
        ['Cours la Reine', 'article', 'le cours la Reine'],
        ['Cours la Reine', 'preposition', 'du cours la Reine'],
        ['Cours la Reine', 'rotary', 'le rond-point du cours la Reine'],
        ['Déviation de Compans', 'article', 'la déviation de Compans'],
        ['Déviation de Compans', 'preposition', 'de la déviation de Compans'],
        ['Entrée Rue des Halles (Voie A2)', 'article', 'l’entrée Rue des Halles (Voie A2)'],
        ['Entrée Rue des Halles (Voie A2)', 'preposition', 'de l’entrée Rue des Halles (Voie A2)'],
        ['Esplanade du Pharo', 'article', 'l’esplanade du Pharo'],
        ['Esplanade du Pharo', 'preposition', 'de l’esplanade du Pharo'],
        ['Galerie Vivienne', 'article', 'la galerie Vivienne'],
        ['Galerie Vivienne', 'preposition', 'de la galerie Vivienne'],
        ['Impasse Boutron', 'article', 'l’impasse Boutron'],
        ['Impasse Boutron', 'preposition', 'de l’impasse Boutron'],
        ['Lotissement Les Bastides du Soleil', 'article', 'le lotissement Les Bastides du Soleil'],
        ['Lotissement Les Bastides du Soleil', 'preposition', 'du lotissement Les Bastides du Soleil'],
        ['Montée de l\'Oratoire', 'article', 'la montée de l’Oratoire'],
        ['Montée de l\'Oratoire', 'preposition', 'de la montée de l’Oratoire'],
        ['Parc Rives de Seine - Georges Pompidou', 'article', 'le parc Rives de Seine - Georges Pompidou'],
        ['Parc Rives de Seine - Georges Pompidou', 'preposition', 'du parc Rives de Seine - Georges Pompidou'],
        ['Passage A/2', 'article', 'le passage A/2'],
        ['Passage A/2', 'preposition', 'du passage A/2'],
        ['Place Charles de Gaulle', 'article', 'la place Charles de Gaulle'],
        ['Place Charles de Gaulle', 'preposition', 'de la place Charles de Gaulle'],
        ['Place Charles de Gaulle', 'rotary', 'le rond-point de la place Charles de Gaulle'],
        ['Pont Neuf', 'article', 'le pont Neuf'],
        ['Pont Neuf', 'preposition', 'du pont Neuf'],
        ['Petit-Pont - Cardinal Lustiger', 'article', 'le petit-pont - Cardinal Lustiger'],
        ['Petit-Pont - Cardinal Lustiger', 'preposition', 'du petit-pont - Cardinal Lustiger'],
        ['Promenade des Berges de la Seine — André Gorz', 'article', 'la promenade des Berges de la Seine — André Gorz'],
        ['Promenade des Berges de la Seine — André Gorz', 'preposition', 'de la promenade des Berges de la Seine — André Gorz'],
        ['Quai de Jemmapes', 'article', 'le quai de Jemmapes'],
        ['Quai de Jemmapes', 'preposition', 'du quai de Jemmapes'],
        ['Rocade Charles de Gaulle', 'article', 'la rocade Charles de Gaulle'],
        ['Rocade Charles de Gaulle', 'preposition', 'de la rocade Charles de Gaulle'],
        ['Rond-Point', 'article', 'le rond-point'],
        ['Rond-Point', 'preposition', 'du rond-point'],
        ['Rond-Point', 'rotary', 'le rond-point'],
        ['Rondpoint', 'article', 'le rond-point'],
        ['Rondpoint', 'preposition', 'du rond-point'],
        ['Rondpoint', 'rotary', 'le rond-point'],
        ['Route Principale du Port', 'article', 'la route Principale du Port'],
        ['Route Principale du Port', 'preposition', 'de la route Principale du Port'],
        ['Ancienne Route de Rouen', 'article', 'la ancienne route de Rouen'],
        ['Ancienne Route de Rouen', 'preposition', 'de la ancienne route de Rouen'],
        ['Rue de Jarménil', 'article', 'la rue de Jarménil'],
        ['Rue de Jarménil', 'preposition', 'de la rue de Jarménil'],
        ['Grande Rue de Saint-Rambert', 'article', 'la grande rue de Saint-Rambert'],
        ['Grande Rue de Saint-Rambert', 'preposition', 'de la grande rue de Saint-Rambert'],
        ['Sente de l\'Esseau', 'article', 'la sente de l’Esseau'],
        ['Sente de l\'Esseau', 'preposition', 'de la sente de l’Esseau'],
        ['Grande Sente des Noyers', 'article', 'la grande sente des Noyers'],
        ['Grande Sente des Noyers', 'preposition', 'de la grande sente des Noyers'],
        ['Sentier de l\'Échelle', 'article', 'le sentier de l’Échelle'],
        ['Sentier de l\'Échelle', 'preposition', 'du sentier de l’Échelle'],
        ['Souterrain Sortie Pont Neuf', 'article', 'le souterrain Sortie Pont Neuf'],
        ['Souterrain Sortie Pont Neuf', 'preposition', 'du souterrain Sortie Pont Neuf'],
        ['Square Pierre-Gilles de Gennes', 'article', 'le square Pierre-Gilles de Gennes'],
        ['Square Pierre-Gilles de Gennes', 'preposition', 'du square Pierre-Gilles de Gennes'],
        ['Square Pierre-Gilles de Gennes', 'rotary', 'le rond-point du square Pierre-Gilles de Gennes'],
        ['Terrasse Modigliani', 'article', 'la terrasse Modigliani'],
        ['Terrasse Modigliani', 'preposition', 'de la terrasse Modigliani'],
        ['Traverse Nicolas', 'article', 'la traverse Nicolas'],
        ['Traverse Nicolas', 'preposition', 'de la traverse Nicolas'],
        ['Tunnel des Tuileries', 'article', 'le tunnel des Tuileries'],
        ['Tunnel des Tuileries', 'preposition', 'du tunnel des Tuileries'],
        ['Viaduc de la Marne', 'article', 'le viaduc de la Marne'],
        ['Viaduc de la Marne', 'preposition', 'du viaduc de la Marne'],
        ['Villa Blanchard', 'article', 'la villa Blanchard'],
        ['Villa Blanchard', 'preposition', 'de la villa Blanchard'],
        ['Village Ruisseau Mirabeau', 'article', 'le village Ruisseau Mirabeau'],
        ['Village Ruisseau Mirabeau', 'preposition', 'du village Ruisseau Mirabeau'],
        ['Voie Georges Pompidou', 'article', 'la voie Georges Pompidou'],
        ['Voie Georges Pompidou', 'preposition', 'de la voie Georges Pompidou']
    ],
    'hu': [
        ['1.', 'article', 'az 1.'],
        ['2.', 'article', 'a 2.'],
        ['3.', 'article', 'a 3.'],
        ['4.', 'article', 'a 4.'],
        ['5.', 'article', 'az 5.'],
        ['6.', 'article', 'a 6.'],
        ['7.', 'article', 'a 7.'],
        ['8.', 'article', 'a 8.'],
        ['9.', 'article', 'a 9.'],
        ['10.', 'article', 'a 10.'],
        ['11.', 'article', 'a 11.'],
        ['12.', 'article', 'a 12.'],
        ['M1', 'article', 'az M1'],
        ['Budavári alagút', 'article', 'a Budavári alagút'],
        ['árok', 'article', 'az árok'],
        ['Csepeli átjáró', 'article', 'a Csepeli átjáró'],
        ['Hosszúvölgy dűlő', 'article', 'a Hosszúvölgy dűlő'],
        ['Nagy László dűlőút', 'article', 'a Nagy László dűlőút'],
        ['Szentgyörgyi erdősor', 'article', 'a Szentgyörgyi erdősor'],
        ['Ady Endre fasor', 'article', 'az Ady Endre fasor'],
        ['Tatár forduló', 'article', 'a Tatár forduló'],
        ['gát', 'article', 'a gát'],
        ['Horogszegi határsor', 'article', 'a Horogszegi határsor'],
        ['Rákospalotai határút', 'article', 'a Rákospalotai határút'],
        ['Erzsébet híd', 'article', 'az Erzsébet híd'],
        ['kapu', 'article', 'a kapu'],
        ['Gregersen Gulbrand körönd', 'article', 'a Gregersen Gulbrand körönd'],
        ['Móricz Zsigmond körtér', 'article', 'a Móricz Zsigmond körtér'],
        ['Alkotmány körút', 'article', 'az Alkotmány körút'],
        ['Rákóczi köz', 'article', 'a Rákóczi köz'],
        ['Beszterce lakótelep', 'article', 'a Beszterce lakótelep'],
        ['Északi lejáró', 'article', 'az Északi lejáró'],
        ['Jablonka lejtő', 'article', 'a Jablonka lejtő'],
        ['Sion lépcső', 'article', 'a Sion lépcső'],
        ['Széchenyi Lánchíd', 'article', 'a Széchenyi Lánchíd'],
        ['liget', 'article', 'a liget'],
        ['Tündérlaki mélyút', 'article', 'a Tündérlaki mélyút'],
        ['orom', 'article', 'az orom'],
        ['Pillangó ösvény', 'article', 'a Pillangó ösvény'],
        ['park', 'article', 'a park'],
        ['part', 'article', 'a part'],
        ['Ághegyi pincesor', 'article', 'az Ághegyi pincesor'],
        ['Bem rakpart', 'article', 'a Bem rakpart'],
        ['József Attila sétány', 'article', 'a József Attila sétány'],
        ['Kemál Atatürk sétaút', 'article', 'a Kemál Atatürk sétaút'],
        ['Kereki sikátor', 'article', 'a Kereki sikátor'],
        ['sor', 'article', 'a sor'],
        ['Petőfi Sándor sugárút', 'article', 'a Petőfi Sándor sugárút'],
        ['Döbrentei tér', 'article', 'a Döbrentei tér'],
        ['Gozsdu udvar', 'article', 'a Gozsdu udvar'],
        ['Hegyalja út', 'article', 'a Hegyalja út'],
        ['Hadnagy utca', 'article', 'a Hadnagy utca'],
        ['Kossuth Lajos üdülőpart', 'article', 'a Kossuth Lajos üdülőpart'],
        ['Budavári alagút', 'sublative_to', 'a Budavári alagútra'],
        ['árok', 'sublative_to', 'az árokra'],
        ['Csepeli átjáró', 'sublative_to', 'a Csepeli átjáróra'],
        ['Hosszúvölgy dűlő', 'sublative_to', 'a Hosszúvölgy dűlőre'],
        ['Nagy László dűlőút', 'sublative_to', 'a Nagy László dűlőútra'],
        ['Szentgyörgyi erdősor', 'sublative_to', 'a Szentgyörgyi erdősorra'],
        ['Ady Endre fasor', 'sublative_to', 'az Ady Endre fasorra'],
        ['Tatár forduló', 'sublative_to', 'a Tatár fordulóra'],
        ['gát', 'sublative_to', 'a gátra'],
        ['Horogszegi határsor', 'sublative_to', 'a Horogszegi határsorra'],
        ['Rákospalotai határút', 'sublative_to', 'a Rákospalotai határútra'],
        ['Erzsébet híd', 'sublative_to', 'az Erzsébet hídra'],
        ['kapu', 'sublative_to', 'a kapura'],
        ['Gregersen Gulbrand körönd', 'sublative_to', 'a Gregersen Gulbrand köröndre'],
        ['Móricz Zsigmond körtér', 'sublative_to', 'a Móricz Zsigmond körtérre'],
        ['Alkotmány körút', 'sublative_to', 'az Alkotmány körútra'],
        ['Rákóczi köz', 'sublative_to', 'a Rákóczi közre'],
        ['Beszterce lakótelep', 'sublative_to', 'a Beszterce lakótelepre'],
        ['Északi lejáró', 'sublative_to', 'az Északi lejáróra'],
        ['Jablonka lejtő', 'sublative_to', 'a Jablonka lejtőre'],
        ['Sion lépcső', 'sublative_to', 'a Sion lépcsőre'],
        ['Széchenyi Lánchíd', 'sublative_to', 'a Széchenyi lánchídra'],
        ['liget', 'sublative_to', 'a ligetre'],
        ['Tündérlaki mélyút', 'sublative_to', 'a Tündérlaki mélyútra'],
        ['orom', 'sublative_to', 'az oromra'],
        ['Pillangó ösvény', 'sublative_to', 'a Pillangó ösvényre'],
        ['park', 'sublative_to', 'a parkra'],
        ['part', 'sublative_to', 'a partra'],
        ['Ághegyi pincesor', 'sublative_to', 'az Ághegyi pincesorra'],
        ['Bem rakpart', 'sublative_to', 'a Bem rakpartra'],
        ['József Attila sétány', 'sublative_to', 'a József Attila sétányra'],
        ['Kemál Atatürk sétaút', 'sublative_to', 'a Kemál Atatürk sétaútra'],
        ['Kereki sikátor', 'sublative_to', 'a Kereki sikátorra'],
        ['sor', 'sublative_to', 'a sorra'],
        ['Petőfi Sándor sugárút', 'sublative_to', 'a Petőfi Sándor sugárútra'],
        ['Döbrentei tér', 'sublative_to', 'a Döbrentei térre'],
        ['Gozsdu udvar', 'sublative_to', 'a Gozsdu udvarra'],
        ['Hegyalja út', 'sublative_to', 'a Hegyalja útra'],
        ['Hadnagy utca', 'sublative_to', 'a Hadnagy utcára'],
        ['Kossuth Lajos üdülőpart', 'sublative_to', 'a Kossuth Lajos üdülőpartra'],
        ['Rue de Rivoli', 'sublative_to', 'a Rue de Rivoli felé'],
        ['Rue de Rivoli', 'sublative_toward', 'a Rue de Rivoli irányába'],
        ['Budavári alagút', 'superessive', 'a Budavári alagúton'],
        ['árok', 'superessive', 'az árkon'],
        ['Csepeli átjáró', 'superessive', 'a Csepeli átjárón'],
        ['Hosszúvölgy dűlő', 'superessive', 'a Hosszúvölgy dűlőn'],
        ['Nagy László dűlőút', 'superessive', 'a Nagy László dűlőúton'],
        ['Szentgyörgyi erdősor', 'superessive', 'a Szentgyörgyi erdősoron'],
        ['Ady Endre fasor', 'superessive', 'az Ady Endre fasoron'],
        ['Tatár forduló', 'superessive', 'a Tatár fordulón'],
        ['gát', 'superessive', 'a gáton'],
        ['Horogszegi határsor', 'superessive', 'a Horogszegi határsoron'],
        ['Rákospalotai határút', 'superessive', 'a Rákospalotai határúton'],
        ['Erzsébet híd', 'superessive', 'az Erzsébet hídon'],
        ['kapu', 'superessive', 'a kapun'],
        ['Gregersen Gulbrand körönd', 'superessive', 'a Gregersen Gulbrand köröndön'],
        ['Móricz Zsigmond körtér', 'superessive', 'a Móricz Zsigmond körtéren'],
        ['Alkotmány körút', 'superessive', 'az Alkotmány körúton'],
        ['Rákóczi köz', 'superessive', 'a Rákóczi közön'],
        ['Beszterce lakótelep', 'superessive', 'a Beszterce lakótelepen'],
        ['Északi lejáró', 'superessive', 'az Északi lejárón'],
        ['Jablonka lejtő', 'superessive', 'a Jablonka lejtőn'],
        ['Sion lépcső', 'superessive', 'a Sion lépcsőn'],
        ['Széchenyi Lánchíd', 'superessive', 'a Széchenyi lánchídon'],
        ['liget', 'superessive', 'a ligeten'],
        ['Tündérlaki mélyút', 'superessive', 'a Tündérlaki mélyúton'],
        ['orom', 'superessive', 'az ormon'],
        ['Pillangó ösvény', 'superessive', 'a Pillangó ösvényen'],
        ['park', 'superessive', 'a parkon'],
        ['part', 'superessive', 'a parton'],
        ['Ághegyi pincesor', 'superessive', 'az Ághegyi pincesoron'],
        ['Bem rakpart', 'superessive', 'a Bem rakparton'],
        ['József Attila sétány', 'superessive', 'a József Attila sétányon'],
        ['Kemál Atatürk sétaút', 'superessive', 'a Kemál Atatürk sétaúton'],
        ['Kereki sikátor', 'superessive', 'a Kereki sikátoron'],
        ['sor', 'superessive', 'a soron'],
        ['Petőfi Sándor sugárút', 'superessive', 'a Petőfi Sándor sugárúton'],
        ['Döbrentei tér', 'superessive', 'a Döbrentei téren'],
        ['Gozsdu udvar', 'superessive', 'a Gozsdu udvaron'],
        ['Hegyalja út', 'superessive', 'a Hegyalja úton'],
        ['Hadnagy utca', 'superessive', 'a Hadnagy utcán'],
        ['Kossuth Lajos üdülőpart', 'superessive', 'a Kossuth Lajos üdülőparton'],
        ['Rue de Rivoli', 'superessive', 'a Rue de Rivoli szakaszon']
    ],
    'ru': [
        ['Бармалеева улица', 'accusative', 'Бармалееву улицу'],
        ['Бармалеева улица', 'dative', 'Бармалеевой улице'],
        ['Бармалеева улица', 'genitive', 'Бармалеевой улицы'],
        ['Бармалеева улица', 'prepositional', 'Бармалеевой улице'],
        ['Большая Монетная улица', 'accusative', 'Большую Монетную улицу'],
        ['Большая Монетная улица', 'dative', 'Большой Монетной улице'],
        ['Большая Монетная улица', 'genitive', 'Большой Монетной улицы'],
        ['Большая Монетная улица', 'prepositional', 'Большой Монетной улице'],
        ['Малая Зеленина улица', 'accusative', 'Малую Зеленину улицу'],
        ['Малая Зеленина улица', 'dative', 'Малой Зелениной улице'],
        ['Малая Зеленина улица', 'genitive', 'Малой Зелениной улицы'],
        ['Малая Зеленина улица', 'prepositional', 'Малой Зелениной улице'],
        ['2-я улица Труда', 'accusative', '2-ю улицу Труда'],
        ['2-я улица Труда', 'dative', '2-й улице Труда'],
        ['2-я улица Труда', 'genitive', '2-й улицы Труда'],
        ['2-я улица Труда', 'prepositional', '2-й улице Труда'],
        ['главная аллея «Годы войны»', 'accusative', 'главную аллею «Годы войны»'],
        ['главная аллея «Годы войны»', 'dative', 'главной аллее «Годы войны»'],
        ['главная аллея «Годы войны»', 'genitive', 'главной аллеи «Годы войны»'],
        ['главная аллея «Годы войны»', 'prepositional', 'главной аллее «Годы войны»'],
        ['1-я линия В.О.', 'accusative', '1-ю линию В.О.'],
        ['1-я линия В.О.', 'dative', '1-й линии В.О.'],
        ['1-я линия В.О.', 'genitive', '1-й линии В.О.'],
        ['1-я линия В.О.', 'prepositional', '1-й линии В.О.'],
        ['22-23-я линии В.О.', 'accusative', '22-23-ю линии В.О.'],
        ['22-23-я линии В.О.', 'dative', '22-23-й линиям В.О.'],
        ['22-23-я линии В.О.', 'genitive', '22-23-й линий В.О.'],
        ['22-23-я линии В.О.', 'prepositional', '22-23-й линиях В.О.'],
        ['Кушелевская дорога', 'accusative', 'Кушелевскую дорогу'],
        ['Кушелевская дорога', 'dative', 'Кушелевской дороге'],
        ['Кушелевская дорога', 'genitive', 'Кушелевской дороги'],
        ['Кушелевская дорога', 'prepositional', 'Кушелевской дороге'],
        ['Юго-западная окружная дорога', 'accusative', 'Юго-западную окружную дорогу'],
        ['Юго-западная окружная дорога', 'dative', 'Юго-западной окружной дороге'],
        ['Юго-западная окружная дорога', 'genitive', 'Юго-западной окружной дороги'],
        ['Юго-западная окружная дорога', 'prepositional', 'Юго-западной окружной дороге'],
        ['Петровская коса', 'accusative', 'Петровскую косу'],
        ['Петровская коса', 'dative', 'Петровской косе'],
        ['Петровская коса', 'genitive', 'Петровской косы'],
        ['Петровская коса', 'prepositional', 'Петровской косе'],
        ['Лыбедская магистраль', 'accusative', 'Лыбедскую магистраль'],
        ['Лыбедская магистраль', 'dative', 'Лыбедской магистрали'],
        ['Лыбедская магистраль', 'genitive', 'Лыбедской магистрали'],
        ['Лыбедская магистраль', 'prepositional', 'Лыбедской магистрали'],
        ['Гайчанская лесовозная магистраль', 'accusative', 'Гайчанскую лесовозную магистраль'],
        ['Гайчанская лесовозная магистраль', 'dative', 'Гайчанской лесовозной магистрали'],
        ['Гайчанская лесовозная магистраль', 'genitive', 'Гайчанской лесовозной магистрали'],
        ['Гайчанская лесовозная магистраль', 'prepositional', 'Гайчанской лесовозной магистрали'],
        ['Австрийская площадь', 'accusative', 'Австрийскую площадь'],
        ['Австрийская площадь', 'dative', 'Австрийской площади'],
        ['Австрийская площадь', 'genitive', 'Австрийской площади'],
        ['Австрийская площадь', 'prepositional', 'Австрийской площади'],
        ['Лялина площадь', 'accusative', 'Лялину площадь'],
        ['Лялина площадь', 'dative', 'Лялиной площади'],
        ['Лялина площадь', 'genitive', 'Лялиной площади'],
        ['Лялина площадь', 'prepositional', 'Лялиной площади'],
        ['1-я просека', 'accusative', '1-ю просеку'],
        ['1-я просека', 'dative', '1-й просеке'],
        ['1-я просека', 'genitive', '1-й просеки'],
        ['1-я просека', 'prepositional', '1-й просеке'],
        ['Каштакская развязка', 'accusative', 'Каштакскую развязку'],
        ['Каштакская развязка', 'dative', 'Каштакской развязке'],
        ['Каштакская развязка', 'genitive', 'Каштакской развязки'],
        ['Каштакская развязка', 'prepositional', 'Каштакской развязке'],
        ['Шаморовская трасса', 'accusative', 'Шаморовскую трассу'],
        ['Шаморовская трасса', 'dative', 'Шаморовской трассе'],
        ['Шаморовская трасса', 'genitive', 'Шаморовской трассы'],
        ['Шаморовская трасса', 'prepositional', 'Шаморовской трассе'],
        ['Северо-восточная хорда', 'accusative', 'Северо-восточную хорду'],
        ['Северо-восточная хорда', 'dative', 'Северо-восточной хорде'],
        ['Северо-восточная хорда', 'genitive', 'Северо-восточной хорды'],
        ['Северо-восточная хорда', 'prepositional', 'Северо-восточной хорде'],
        ['Самотёчная эстакада', 'accusative', 'Самотёчную эстакаду'],
        ['Самотёчная эстакада', 'dative', 'Самотёчной эстакаде'],
        ['Самотёчная эстакада', 'genitive', 'Самотёчной эстакады'],
        ['Самотёчная эстакада', 'prepositional', 'Самотёчной эстакаде'],
        ['Бескудниковский бульвар', 'accusative', 'Бескудниковский бульвар'],
        ['Бескудниковский бульвар', 'dative', 'Бескудниковскому бульвару'],
        ['Бескудниковский бульвар', 'genitive', 'Бескудниковского бульвара'],
        ['Бескудниковский бульвар', 'prepositional', 'Бескудниковском бульваре'],
        ['Дублер улицы Энгельса', 'accusative', 'дублёр улицы Энгельса'],
        ['Дублер улицы Энгельса', 'dative', 'дублёру улицы Энгельса'],
        ['Дублер улицы Энгельса', 'genitive', 'дублёра улицы Энгельса'],
        ['Дублер улицы Энгельса', 'prepositional', 'дублёре улицы Энгельса'],
        ['Карталинский заезд', 'accusative', 'Карталинский заезд'],
        ['Карталинский заезд', 'dative', 'Карталинскому заезду'],
        ['Карталинский заезд', 'genitive', 'Карталинского заезда'],
        ['Карталинский заезд', 'prepositional', 'Карталинском заезде'],
        ['1-й Инженерный мост', 'accusative', '1-й Инженерный мост'],
        ['1-й Инженерный мост', 'dative', '1-му Инженерному мосту'],
        ['1-й Инженерный мост', 'genitive', '1-го Инженерного моста'],
        ['1-й Инженерный мост', 'prepositional', '1-м Инженерном мосту'],
        ['2-й мост Круштейна', 'accusative', '2-й мост Круштейна'],
        ['2-й мост Круштейна', 'dative', '2-му мосту Круштейна'],
        ['2-й мост Круштейна', 'genitive', '2-го моста Круштейна'],
        ['2-й мост Круштейна', 'prepositional', '2-м мосту Круштейна'],
        ['Нижний Лебяжий мост', 'accusative', 'Нижний Лебяжий мост'],
        ['Нижний Лебяжий мост', 'dative', 'Нижнему Лебяжьему мосту'],
        ['Нижний Лебяжий мост', 'genitive', 'Нижнего Лебяжьего моста'],
        ['Нижний Лебяжий мост', 'prepositional', 'Нижнем Лебяжьем мосту'],
        ['Старо-Калинкин мост', 'accusative', 'Старо-Калинкин мост'],
        ['Старо-Калинкин мост', 'dative', 'Старо-Калинкину мосту'],
        ['Старо-Калинкин мост', 'genitive', 'Старо-Калинкина моста'],
        ['Старо-Калинкин мост', 'prepositional', 'Старо-Калинкином мосту'],
        ['Тучков мост', 'accusative', 'Тучков мост'],
        ['Тучков мост', 'dative', 'Тучкову мосту'],
        ['Тучков мост', 'genitive', 'Тучкова моста'],
        ['Тучков мост', 'prepositional', 'Тучковом мосту'],
        ['Южный обход', 'accusative', 'Южный обход'],
        ['Южный обход', 'dative', 'Южному обходу'],
        ['Южный обход', 'genitive', 'Южного обхода'],
        ['Южный обход', 'prepositional', 'Южном обходе'],
        ['Александровский парк', 'accusative', 'Александровский парк'],
        ['Александровский парк', 'dative', 'Александровскому парку'],
        ['Александровский парк', 'genitive', 'Александровского парка'],
        ['Александровский парк', 'prepositional', 'Александровском парке'],
        ['1-й Тверской-Ямской переулок', 'accusative', '1-й Тверской-Ямской переулок'],
        ['1-й Тверской-Ямской переулок', 'dative', '1-му Тверскому-Ямскому переулку'],
        ['1-й Тверской-Ямской переулок', 'genitive', '1-го Тверского-Ямского переулка'],
        ['1-й Тверской-Ямской переулок', 'prepositional', '1-м Тверском-Ямском переулке'],
        ['3-й переулок', 'accusative', '3-й переулок'],
        ['3-й переулок', 'dative', '3-му переулку'],
        ['3-й переулок', 'genitive', '3-го переулка'],
        ['3-й переулок', 'prepositional', '3-м переулке'],
        ['Пыхов-Церковный проезд', 'accusative', 'Пыхов-Церковный проезд'],
        ['Пыхов-Церковный проезд', 'dative', 'Пыхову-Церковному проезду'],
        ['Пыхов-Церковный проезд', 'genitive', 'Пыхова-Церковного проезда'],
        ['Пыхов-Церковный проезд', 'prepositional', 'Пыховом-Церковном проезде'],
        ['2-й Поперечный проезд', 'accusative', '2-й Поперечный проезд'],
        ['2-й Поперечный проезд', 'dative', '2-му Поперечному проезду'],
        ['2-й Поперечный проезд', 'genitive', '2-го Поперечного проезда'],
        ['2-й Поперечный проезд', 'prepositional', '2-м Поперечном проезде'],
        ['10-й Нижний Просветительский проезд', 'accusative', '10-й Нижний Просветительский проезд'],
        ['10-й Нижний Просветительский проезд', 'dative', '10-му Нижнему Просветительскому проезду'],
        ['10-й Нижний Просветительский проезд', 'genitive', '10-го Нижнего Просветительского проезда'],
        ['10-й Нижний Просветительский проезд', 'prepositional', '10-м Нижнем Просветительском проезде'],
        ['2-й Малый Приморский проезд', 'accusative', '2-й Малый Приморский проезд'],
        ['2-й Малый Приморский проезд', 'dative', '2-му Малому Приморскому проезду'],
        ['2-й Малый Приморский проезд', 'genitive', '2-го Малого Приморского проезда'],
        ['2-й Малый Приморский проезд', 'prepositional', '2-м Малом Приморском проезде'],
        ['4-й проезд', 'accusative', '4-й проезд'],
        ['4-й проезд', 'dative', '4-му проезду'],
        ['4-й проезд', 'genitive', '4-го проезда'],
        ['4-й проезд', 'prepositional', '4-м проезде'],
        ['Большой Сампсониевский проспект', 'accusative', 'Большой Сампсониевский проспект'],
        ['Большой Сампсониевский проспект', 'dative', 'Большому Сампсониевскому проспекту'],
        ['Большой Сампсониевский проспект', 'genitive', 'Большого Сампсониевского проспекта'],
        ['Большой Сампсониевский проспект', 'prepositional', 'Большом Сампсониевском проспекте'],
        ['проспект Испытателей', 'accusative', 'проспект Испытателей'],
        ['проспект Испытателей', 'dative', 'проспекту Испытателей'],
        ['проспект Испытателей', 'genitive', 'проспекта Испытателей'],
        ['проспект Испытателей', 'prepositional', 'проспекте Испытателей'],
        ['Шкиперский проток', 'accusative', 'Шкиперский проток'],
        ['Шкиперский проток', 'dative', 'Шкиперскому протоку'],
        ['Шкиперский проток', 'genitive', 'Шкиперского протока'],
        ['Шкиперский проток', 'prepositional', 'Шкиперском протоке'],
        ['Коломяжский путепровод', 'accusative', 'Коломяжский путепровод'],
        ['Коломяжский путепровод', 'dative', 'Коломяжскому путепроводу'],
        ['Коломяжский путепровод', 'genitive', 'Коломяжского путепровода'],
        ['Коломяжский путепровод', 'prepositional', 'Коломяжском путепроводе'],
        ['Соборный спуск', 'accusative', 'Соборный спуск'],
        ['Соборный спуск', 'dative', 'Соборному спуску'],
        ['Соборный спуск', 'genitive', 'Соборного спуска'],
        ['Соборный спуск', 'prepositional', 'Соборном спуске'],
        ['Печёрский съезд', 'accusative', 'Печёрский съезд'],
        ['Печёрский съезд', 'dative', 'Печёрскому съезду'],
        ['Печёрский съезд', 'genitive', 'Печёрского съезда'],
        ['Печёрский съезд', 'prepositional', 'Печёрском съезде'],
        ['Муринский тоннель', 'accusative', 'Муринский тоннель'],
        ['Муринский тоннель', 'dative', 'Муринскому тоннелю'],
        ['Муринский тоннель', 'genitive', 'Муринского тоннеля'],
        ['Муринский тоннель', 'prepositional', 'Муринском тоннеле'],
        ['Русско-Полянский тракт', 'accusative', 'Русско-Полянский тракт'],
        ['Русско-Полянский тракт', 'dative', 'Русско-Полянскому тракту'],
        ['Русско-Полянский тракт', 'genitive', 'Русско-Полянского тракта'],
        ['Русско-Полянский тракт', 'prepositional', 'Русско-Полянском тракте'],
        ['1-й тупик Кангас', 'accusative', '1-й тупик Кангас'],
        ['1-й тупик Кангас', 'dative', '1-му тупику Кангас'],
        ['1-й тупик Кангас', 'genitive', '1-го тупика Кангас'],
        ['1-й тупик Кангас', 'prepositional', '1-м тупике Кангас'],
        ['Басманный тупик', 'accusative', 'Басманный тупик'],
        ['Басманный тупик', 'dative', 'Басманному тупику'],
        ['Басманный тупик', 'genitive', 'Басманного тупика'],
        ['Басманный тупик', 'prepositional', 'Басманном тупике'],
        ['Третье Транспортное кольцо', 'accusative', 'Третье Транспортное кольцо'],
        ['Третье Транспортное кольцо', 'dative', 'Третьему Транспортному кольцу'],
        ['Третье Транспортное кольцо', 'genitive', 'Третьего Транспортного кольца'],
        ['Третье Транспортное кольцо', 'prepositional', 'Третьем Транспортном кольце'],
        ['«Приморское полукольцо»', 'accusative', 'трассу «Приморское полукольцо»'],
        ['«Приморское полукольцо»', 'dative', 'трассе «Приморское полукольцо»'],
        ['«Приморское полукольцо»', 'genitive', 'трассы «Приморское полукольцо»'],
        ['«Приморское полукольцо»', 'prepositional', 'трассе «Приморское полукольцо»'],
        ['Приморское полукольцо', 'accusative', 'Приморское полукольцо'],
        ['Приморское полукольцо', 'dative', 'Приморскому полукольцу'],
        ['Приморское полукольцо', 'genitive', 'Приморского полукольца'],
        ['Приморское полукольцо', 'prepositional', 'Приморском полукольце'],
        ['Марсово поле', 'accusative', 'Марсово поле'],
        ['Марсово поле', 'dative', 'Марсову полю'],
        ['Марсово поле', 'genitive', 'Марсова поля'],
        ['Марсово поле', 'prepositional', 'Марсовом поле'],
        ['1-е Успенское шоссе', 'accusative', '1-е Успенское шоссе'],
        ['1-е Успенское шоссе', 'dative', '1-му Успенскому шоссе'],
        ['1-е Успенское шоссе', 'genitive', '1-го Успенского шоссе'],
        ['1-е Успенское шоссе', 'prepositional', '1-м Успенском шоссе'],
        ['Приморское шоссе', 'accusative', 'Приморское шоссе'],
        ['Приморское шоссе', 'dative', 'Приморскому шоссе'],
        ['Приморское шоссе', 'genitive', 'Приморского шоссе'],
        ['Приморское шоссе', 'prepositional', 'Приморском шоссе']
    ]
    // TODO add your language grammar tests to call grammarize() and check result
};

tape.test('verify grammar files structure', function(assert) {
    // check that grammar files have proper structure as:
    // {
    // "v5": {
    //         "grammar name": [
    //             ["regular expression", "replace string"],
    //             ...
    //     }
    // }

    Object.keys(languages.grammars).forEach((l) => {
        var grammar = languages.grammars[l];

        assert.ok(grammar.v5, l + ' grammar has v5 version');

        Object.keys(grammar.v5).forEach((g) => {
            // check each grammar case
            var r = grammar.v5[g];
            assert.ok(Array.isArray(r), l + ' grammar has rules array for ' + g);

            var i = 0;
            r.forEach((e) => {
                i++; // eslint-disable-line no-plusplus
                assert.doesNotThrow(() => {
                    var b = Array.isArray(e) && e.length === 2;
                    if (b) {
                        // all regular expressions from grammar should not match empty string
                        r = new RegExp(e[0], grammar.meta.regExpFlags);
                        b = ''.replace(r, e[1]) === '';
                    }

                    return b;
                }, true, l + ' grammar has correct rule #' + i + ' for ' + g);
            });
        });
    });

    assert.end();
});

tape.test('check grammar test data with grammarize()', function(assert) {
    // check that grammar works properly with test data

    Object.keys(grammarTests).forEach((l) => {
        var v5Instructions = instructions('v5');

        grammarTests[l].forEach((t) => {
            assert.equal(v5Instructions.grammarize(l, t[0], t[1]), t[2],
                l + ' grammar passed for "' + t[2] + '" in ' + t[1]);
        });
    });

    assert.end();
});
