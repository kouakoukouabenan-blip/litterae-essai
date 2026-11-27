// Résumé de texte argumentatif : leçons, quiz, textes.
// Brouillon sur le site d'essai : le contenu passera par le serveur (clé d'accès) avant le vrai site.
// Source : le livre de l'auteur, « Secret Français Terminale » (partie Résumé de texte, questions, production écrite).
import type { BlocLecon, QuestionQuiz } from "./types";
import type { TexteEtudie } from "./cc-types";

export type BlocRS = BlocLecon | { texte: TexteEtudie } | { plie: { titre: string; liste: string[] } };
export interface LeconRS { id: string; titre: string; duree: string; blocs: BlocRS[] }

/ Texte de Francis Bebey, fil rouge des leçons. */
export const BEBEY: TexteEtudie = {
  id: "bebey-tradition-orale",
  titre: "Tradition orale et écriture",
  auteur: "Francis Bebey",
  source: "Avant-propos de la revue *Recherche, Pédagogie et Culture*, n° 29-30, mai-août 1977 (extrait)",
  prose: true,
  genre: "Argumentation",
  consigne: "Résumez ce texte de 610 mots au quart de son volume. Une marge de plus ou moins 10 % est tolérée. Indiquez le nombre de mots à la fin de votre résumé.",
  note: "(1) Archimède : célèbre géomètre et physicien de l'Antiquité (287-212 av. J.-C.). (2) Einstein : mathématicien et physicien, prix Nobel en 1921.",
  texte: [
    "Tous les peuples de la terre ont une tradition orale. Celle-ci est plus ou moins vivante selon le degré d'empiètement de l'écrit sur elle. Mais en tout état de cause, elle reste l'un des éléments de base de l'organisation socioculturelle première des diverses communautés humaines.",
    "Aujourd'hui encore, même dans les civilisations les plus rompues à l'écriture, tout ce que dit ou chante l'homme n'a pas encore été répertorié, transcrit ou écrit. Souvent, c'est cette tradition orale, que d'aucuns appellent populaire non sans une pointe de mépris, qui maintient avec force le caractère de diversité et de spécificité des peuples au sein d'un contexte de nationalité dont le réalisme n'est pas toujours incontestable.",
    "En préservant et perpétuant ainsi les différences entre communautés ou groupes ethniques, la tradition orale contribue à agrémenter la vie des hommes, de laquelle elle bannit la monotonie. Elle oppose à la civilisation uniforme ou homogène des nations la force réfractaire du milieu ethnique, de la croyance de petits groupes à des valeurs non codifiées par l'écrit, de l'enracinement enfin. Force perpétuellement en mouvement, force dynamique donc, grâce à laquelle le breton, le provençal, le bambara ou le lingala restent des réalités vivantes, la tradition orale peut s'avérer être, également, dans certains cas, une source de discorde profonde entre les citoyens d'un même pays. Ce danger menace bien des pays en Afrique, mais aussi en Europe où pourtant la notion de tribu a presque complètement disparu depuis longtemps. Mais, malgré cela, l'expérience et l'histoire prouvent que la tradition orale n'est pas un frein à l'éclosion et au développement d'une société, d'une culture, d'une civilisation.",
    "Elle fut pendant très longtemps à la base de la civilisation de l'Égypte antique, civilisation avancée s'il en fut, qui n'eut pas besoin de coloniser pour conquérir des cœurs, des esprits, des hommes. La première feuille de papyrus utilisée comme support de l'écrit suscita, semble-t-il, la colère du pharaon qui vit là, du premier coup, la fin de l'ère de la mémoire de l'homme, ce dernier devant désormais se référer constamment à l'écrit, témoin de ce que lui-même aurait oublié. Certes, l'écrit représente le « progrès » par rapport à l'oralité.",
    "Il est douteux que l'algèbre, la géométrie, la trigonométrie, Archimède (1) ou Einstein (2) eussent existé si la mathématique n'avait pu bénéficier de l'exactitude tranquille et sûre de cette mémoire infaillible qu'est une simple feuille de papier sur laquelle on écrit les termes d'une formule, d'un théorème ou d'un principe, ou bien encore la démarche de la réflexion en vue de la résolution d'une équation. Cette réflexion, de plus en plus intense à mesure que le sens des lois fondamentales de la nature se découvre, et que la théorie de la relativité du temps vient constamment bousculer ou pourfendre d'autres idées établies depuis des générations. C'est dire combien l'écrit nous rapproche de la grande conclusion, objet de recherches sans fin depuis que l'homme vit sur terre : la vraie connaissance, dont les coordonnées restent non définies jusqu'à présent.",
    "Mais l'écrit n'existerait pas si l'homme n'avait exprimé, oralement d'abord, ce qu'il ressentait. Car l'écrit n'est autre chose que la photographie du verbe, du mot, de la parole, tout cela agencé pour construire la pensée. Si l'homme était né muet, si en d'autres termes, l'oralité n'avait pas été la première puissance expressive des êtres humains, y aurait-il jamais eu d'écriture ?"
  ].join("\n\n")
};

const BOUDHIBA = "Le choc des sociétés riches et des sociétés pauvres n'est plus ici un scandale théorique découlant d'une analyse académique. Il est une réalité quotidienne. Le moindre petit objet que possède le touriste représente une fortune ou un rêve pour beaucoup de ceux qui sont appelés à le servir ou à le côtoyer : qu'il s'agisse d'un ballon de plage ou d'un drap de bain, d'un bâton de rouge à lèvres ou d'une paire de lunettes. Il y a, à bien réfléchir, quelque chose de diabolique dans cette tentation permanente et dans cette invite à goûter aux charmes indiscrets, mais encore interdits, de la société de consommation. (M. Bouhdiba, professeur à l'université de Tunis, 112 mots)";

const ELLA = "Comme pour étouffer le débat sur les violences engendrées par le rôle croissant de l'argent dans les sociétés africaines, les anthropologues d'occasion reprennent le vieux catalogue des « obstacles culturels au développement » : si les producteurs de cacao, de café, d'arachide, de coton ou de bananes sont si pauvres, c'est parce qu'ils s'obstinent à s'accrocher à leurs croyances ancestrales [...]. Plus vulgairement, certains reprennent la théorie des climats pour expliquer le « retard » ou l'« impuissance » de l'Afrique. D'autres [...] s'en prennent jusqu'au lit des pauvres, jugé trop fécond : la femme et la famille deviennent les cibles des politiques de population. (Jean-Marc Ela, *Le Monde diplomatique*, octobre 1998)";

const DE_CLOSETS = "Dans la classe actuelle, des enfants très doués côtoient des condisciples à l'esprit moins vif. Entre les uns et les autres, les professeurs essaient de progresser à une vitesse moyenne. L'élève intelligent s'ennuie car le rythme de progression est très lent pour lui, l'élève moins doué s'épuise à toujours vouloir comprendre ce qui a été dit précédemment et qu'il n'a pas assimilé. Avec l'ordinateur, les violons ne vont jamais plus vite que le danseur. (François de Closets, *En danger de progrès*)";

export const LECONS_RS: LeconRS[] = [
  {
    id: "definition", titre: "Le résumé de texte, c'est quoi ?", duree: "8 min", blocs: [
      { p: "Le résumé de texte s'appelle aussi la contraction de texte. En Côte d'Ivoire, on dit surtout « résumé » ; dans d'autres pays, on dit plutôt « contraction ». C'est le même exercice. Dans ces leçons, tu trouveras les deux mots." },

      { h: "Le principe, tout simplement" },
      { p: "Résumer un texte, c'est le réduire en gardant ses idées essentielles. Rien de plus. Tu prends un texte long, tu enlèves tout ce qui n'est pas indispensable, et il reste un texte court qui dit la même chose." },
      { p: "Pense à quelqu'un qui revient d'une longue réunion de famille. On lui demande : « Alors, qu'est-ce qui s'est dit ? » Il ne va pas répéter pendant deux heures chaque phrase de chaque oncle. Il va dire : « On a décidé de réparer la maison du village. Chacun donnera quelque chose à la fin du mois. Mais le vieux pense qu'il faut d'abord régler l'histoire du terrain. » En trois phrases, il a gardé l'essentiel, dans l'ordre où les choses ont été dites, et sans donner son avis. C'est exactement ce qu'on te demande avec un texte." },

      { h: "Ce que l'on te donne au bac" },
      { p: "Tu reçois un texte argumentatif, c'est-à-dire un texte où un auteur défend une idée : sur l'école, la culture, le progrès, l'Afrique, la démocratie, le sport… Il fait en général entre 500 et 900 mots. Sur ce texte, on te pose trois exercices :" },
      { def: [
        ["Les questions", "Deux ou trois questions pour vérifier que tu as compris le texte : expliquer un mot, une expression, une phrase, ou dire la thèse de l'auteur."],
        ["Le résumé", "Réduire le texte au quart de sa longueur, en gardant ses idées essentielles."],
        ["La production écrite", "On l'appelle aussi l'essai ou la discussion. Tu donnes ton propre point de vue sur une idée du texte, avec tes arguments et tes exemples."]
      ] },
      { p: "Ces trois exercices forment un seul sujet, et ils s'aident entre eux. Pour répondre aux questions, il faut comprendre le texte. Pour le résumer, il faut l'avoir encore mieux compris. Et pour discuter une idée de l'auteur, il faut savoir exactement ce qu'il a dit. Tout commence donc par la même chose : comprendre le texte. C'est pour cela que la leçon suivante y est entièrement consacrée." },

      { h: "Un exemple très court" },
      { p: "Voici un petit paragraphe de 112 mots :" },
      { sujet: BOUDHIBA },
      { p: "Et voici ce qu'il devient une fois résumé, en 30 mots :" },
      { modele: "L'opposition entre pays riches et pays pauvres est bien réelle. Tout ce que possède le touriste fait entrevoir à l'autochtone les plaisirs inaccessibles de la société de consommation." },
      { p: "Qu'est-ce qui a disparu ? Le ballon de plage, le drap de bain, le rouge à lèvres et les lunettes. Ce ne sont que des exemples de « ce que possède le touriste » : on peut les enlever sans rien perdre de l'idée. Qu'est-ce qui est resté ? Les deux idées de l'auteur, dans le même ordre : le choc entre riches et pauvres est une réalité ; les objets du touriste font rêver ceux qui le servent. Et remarque que le résumé ne recopie pas le texte : il dit la même chose avec d'autres mots." },
      { astuce: "Un bon résumé, c'est le même texte vu de plus loin. On voit encore toutes les grandes idées et le chemin qui les relie, mais plus les détails." },

      { h: "Ce qu'on attend de toi" },
      { p: "On te demande de réduire le texte au quart. Le sujet te donne toujours le nombre de mots du texte. Pour un texte de 600 mots, ton résumé fera donc environ 150 mots, avec une marge de 10 % en plus ou en moins. Tu écris le nombre de mots de ton résumé à la fin." },
      { p: "On te demande aussi d'être fidèle. Tu ne donnes pas ton avis, tu n'ajoutes rien, tu ne changes pas l'ordre des idées. Tu es comme un traducteur : tu rends la pensée de l'auteur, même si tu n'es pas d'accord avec elle. Ton avis, tu le garderas pour la production écrite." },
      { p: "C'est un exercice qui sert bien après le bac. Le jour où tu devras écrire un rapport, un compte rendu de réunion ou un procès-verbal, tu feras la même chose : dire en peu de mots ce que d'autres ont dit, sans le déformer." }
    ]
  },
  {
    id: "comprendre", titre: "Comprendre le texte", duree: "15 min", blocs: [
      { p: "Dans les autres méthodes, on se contente souvent de lire le texte. Ici, la lecture seule ne suffit pas. Avant même de lire, on observe ce qui entoure le texte. Puis on lit deux fois, et chaque lecture a un rôle précis. Voici les étapes, dans l'ordre :" },
      { etapes: [
        ["Le paratexte", "Avant de lire, on regarde le titre, l'auteur, la source et la date, et on fait des suppositions sur le texte."],
        ["La lecture passive", "On lit une première fois pour connaître le thème."],
        ["La lecture active", "On relit pour trouver le thème exact, la thèse, la visée argumentative, la situation d'énonciation et la structure logique."]
      ] },

      { h: "1. Le paratexte : deviner avant de lire" },
      { p: "Le paratexte, ce sont toutes les informations qui sont autour du texte : son titre, le nom de l'auteur, la source (le livre, le journal ou la revue d'où il est tiré) et la date de parution. Beaucoup d'élèves passent dessus sans les regarder. C'est une erreur, car ces quelques lignes te disent souvent déjà de quoi parle le texte et dans quel esprit il est écrit." },
      { p: "Pour chaque élément, pose-toi une question simple :" },
      { def: [
        ["Le titre", "De quoi va parler le texte ? Le titre annonce-t-il une opposition, une question, une prise de position ?"],
        ["L'auteur", "Qui est-il ? Un écrivain, un journaliste, un médecin, un homme politique ? D'où vient-il ? Ce qu'il est explique souvent ce qu'il va défendre."],
        ["La source", "D'où vient le texte ? Un journal d'actualité, une revue spécialisée, un essai ? On n'écrit pas de la même façon pour tous les lecteurs."],
        ["La date", "Que se passait-il à cette époque ? Un texte de 1960 sur l'Afrique et un texte de 2010 sur l'Afrique ne parlent pas du même monde."]
      ] },
      { p: "Avec ces réponses, tu fais des suppositions sur le sens du texte : « Ce texte va sans doute parler de…, et l'auteur va probablement défendre… ». Ce ne sont que des hypothèses. La lecture les confirmera ou les corrigera. Mais tu n'entres plus dans le texte les mains vides : tu sais déjà ce que tu cherches." },
      { p: "Prenons le texte qui nous servira d'exemple dans toutes les leçons. Avant de le lire, regarde seulement son paratexte :" },
      { def: [
        ["Titre", "« Tradition orale et écriture »"],
        ["Auteur", "Francis Bebey, écrivain et musicien camerounais"],
        ["Source", "Avant-propos de la revue *Recherche, Pédagogie et Culture*"],
        ["Date", "1977"]
      ] },
      { p: "Que peut-on en tirer ? Le titre met face à face deux façons de transmettre le savoir : la parole et l'écrit. Le texte va donc sans doute les comparer. L'auteur est un artiste africain, venu d'une culture où la parole compte énormément : on peut supposer qu'il va défendre la tradition orale. La revue parle de pédagogie et de culture : le texte s'adresse à des gens qui s'intéressent à l'éducation, et il traite la question sérieusement. Enfin, 1977, c'est l'époque où les jeunes pays africains cherchent à revaloriser leurs cultures après la colonisation. Notre hypothèse : l'auteur va montrer que la tradition orale a autant de valeur que l'écriture. Gardons-la en tête, et lisons." },

      { h: "2. La lecture passive : trouver le thème" },
      { p: "La première lecture se fait d'un seul trait, sans crayon, sans rien souligner. Tu ne cherches pas à tout comprendre. Cette lecture ne sert qu'à une chose : savoir de quoi parle le texte. Si à la fin tu peux dire « ce texte parle de la tradition orale et de l'écriture », la lecture passive a fait son travail." },
      { p: "Lis maintenant le texte de Francis Bebey de cette façon." },
      { texte: BEBEY },
      { p: "Après cette lecture, tu sais que le texte parle de la tradition orale, de l'écriture, et de leur rôle dans le progrès des sociétés. Notre hypothèse semble se confirmer : l'auteur défend la tradition orale. Mais il reconnaît aussi des qualités à l'écrit. Il faudra regarder de plus près." },

      { h: "3. La lecture active : cinq choses à trouver" },
      { p: "Tu relis maintenant le texte crayon en main. Tu soulignes les mots qui reviennent, tu entoures les mots de liaison (mais, certes, car, donc…), tu notes dans la marge ce que tu comprends. Cette lecture active doit te permettre de trouver cinq éléments. Pour chacun, il existe une petite phrase qui t'aide à le formuler sans te tromper." },

      { h: "Le thème : « Dans ce texte, on parle de… »" },
      { p: "Le thème, c'est le sujet du texte, ce dont il parle. Pour le trouver, complète la phrase : « Dans ce texte, on parle de… ». Ce qui suit est le thème. Il s'écrit toujours sous la forme d'un groupe nominal, c'est-à-dire un nom avec ses compléments, sans verbe conjugué." },
      { def: [
        ["Juste", "Dans ce texte, on parle de la place de la tradition orale face à l'écriture."],
        ["Faux", "Dans ce texte, on parle que la tradition orale est importante."]
      ] },
      { p: "La deuxième phrase est fausse pour deux raisons : elle contient un verbe conjugué (« est »), et elle ne dit plus de quoi parle le texte, mais ce qu'il pense. Ça, c'est déjà la thèse. Garder le thème sous forme de groupe nominal t'oblige à bien séparer les deux." },
      { p: "Sois précis. « La culture » est trop vague : des milliers de textes parlent de la culture. Ce qui fait l'originalité de ce texte, c'est l'angle sous lequel il en parle. Prends ce court texte :" },
      { sujet: DE_CLOSETS },
      { p: "« Dans ce texte, on parle de l'école » serait trop large. Mieux : « Dans ce texte, on parle du rythme d'apprentissage des élèves et de l'apport de l'ordinateur »." },

      { h: "La thèse : « L'auteur pense que… »" },
      { p: "La thèse, c'est l'idée que l'auteur défend sur son thème. Pour la trouver, commence ta phrase par « L'auteur pense que… ». Ce qui suit, c'est la thèse. Cette fois, il faut une vraie phrase, avec un verbe, puisque l'auteur affirme quelque chose." },
      { p: "Pour le texte de François de Closets : « L'auteur pense que l'ordinateur permet à chaque élève d'apprendre à son propre rythme, contrairement à la classe actuelle qui impose une vitesse moyenne. »" },
      { p: "Attention au piège : dans un texte argumentatif, l'auteur rapporte souvent les idées des autres pour les combattre. Il ne faut pas les confondre avec la sienne. Le vocabulaire t'aide : quand l'auteur n'est pas d'accord, il emploie des mots qui rabaissent. Regarde :" },
      { sujet: ELLA },
      { p: "L'auteur cite trois explications de la pauvreté de l'Afrique : les croyances ancestrales, le climat, le trop grand nombre d'enfants. Mais ce ne sont pas ses idées. Il parle d'« anthropologues d'occasion », de « vieux catalogue », il écrit « plus vulgairement », et il met des guillemets autour de « retard » et d'« impuissance » pour montrer qu'il n'y croit pas. Sa vraie thèse est dans la première ligne : « L'auteur pense que ces vieilles explications servent à éviter le vrai débat, celui des violences créées par l'argent dans les sociétés africaines. »" },
      { astuce: "« L'auteur pense que… » est une phrase pour ton brouillon et pour les questions. Dans le résumé lui-même, tu ne l'écriras pas : tu parleras directement à la place de l'auteur. Tu verras pourquoi dans la leçon sur le résumé." },

      { h: "La visée argumentative : « L'auteur voudrait que… »" },
      { p: "La visée argumentative, c'est ce que l'auteur cherche à obtenir de son lecteur. Il n'écrit pas pour rien : il veut changer quelque chose dans sa façon de penser ou d'agir. Pour la trouver, commence ta phrase par « L'auteur voudrait que… » ou « L'auteur veut que… »." },
      { p: "Pour François de Closets : « L'auteur voudrait que l'on accepte l'ordinateur à l'école, parce qu'il respecte le rythme de chaque élève. » Pour Jean-Marc Ela : « L'auteur voudrait que l'on cesse d'accuser les cultures africaines et que l'on regarde enfin les vraies causes de la pauvreté. »" },
      { p: "Ne confonds pas thèse et visée. La thèse, c'est ce que l'auteur pense. La visée, c'est ce qu'il veut que tu fasses ou que tu penses après l'avoir lu." },

      { h: "La situation d'énonciation : qui parle, à qui, où, quand ?" },
      { p: "La situation d'énonciation, c'est le cadre dans lequel le texte est écrit. Quatre questions suffisent :" },
      { def: [
        ["Qui parle ?", "L'auteur, et en quelle qualité : écrivain, journaliste, scientifique, responsable politique… Parle-t-il avec « je », avec « nous », ou s'efface-t-il derrière des phrases générales ?"],
        ["À qui parle-t-il ?", "Aux lecteurs d'un journal, à des spécialistes, à des jeunes, à des dirigeants ? Parfois il les interpelle directement avec « vous » ou une question."],
        ["Où ?", "Dans quel support : un journal, une revue, un livre, un discours ?"],
        ["Quand ?", "À quelle date, et dans quel contexte ?"]
      ] },
      { p: "Ces réponses, tu les as en partie trouvées avec le paratexte. La lecture active les complète grâce aux indices du texte : les pronoms (« je », « nous », « vous »), les temps des verbes, les questions posées au lecteur. Elles te servent à respecter la voix de l'auteur dans ton résumé : un texte écrit avec « nous » donne un résumé avec « nous »." },

      { h: "La structure logique : découper et donner des titres" },
      { p: "Dernière étape, la plus utile pour le résumé : trouver comment le texte avance. Pour cela, tu le découpes en unités significatives. Une unité significative, c'est un morceau du texte qui développe une seule idée. Tu traces un trait entre deux unités, puis tu donnes un titre à chacune : quelques mots qui disent son idée." },
      { p: "Pour trouver où couper, sers-toi des mots de liaison que tu as entourés. « Mais », « pourtant », « cependant » annoncent un changement de direction. « Certes » annonce une concession : l'auteur accorde un point à l'adversaire, avant de répondre. « Donc », « ainsi » annoncent une conséquence. « Par exemple » annonce une illustration." },
      { p: "Attention : une unité ne correspond pas toujours à un paragraphe. Un long paragraphe peut contenir trois idées, et deux paragraphes peuvent développer la même. Ce sont les idées qui comptent, pas la mise en page." },
      { astuce: "Avec « certes… mais… », la vraie pensée de l'auteur est après « mais ». Ce qui suit « certes » est ce qu'il accorde aux autres." },

      { h: "Application : la fiche de compréhension du texte de Bebey" },
      { p: "Relis le texte de Francis Bebey crayon en main, puis compare avec ce qu'on trouve. Voici, rangés dans l'ordre, tous les éléments de la compréhension. C'est ce que tu dois avoir sur ton brouillon avant d'écrire la moindre ligne de ta copie." },
      { def: [
        ["Thème", "Dans ce texte, on parle de la place de la tradition orale face à l'écriture dans le développement des sociétés."],
        ["Thèse", "L'auteur pense que la tradition orale n'est pas un frein au progrès : elle fonde les sociétés et leur diversité, et l'écriture elle-même est née d'elle."],
        ["Visée argumentative", "L'auteur voudrait que ses lecteurs cessent de mépriser la tradition orale et reconnaissent qu'elle est à l'origine de l'écriture."],
        ["Qui parle ?", "Francis Bebey, écrivain et musicien africain. Il s'efface derrière des phrases générales, au présent, et dit parfois « nous » (« l'écrit nous rapproche »), qui l'unit au lecteur."],
        ["À qui ?", "Aux lecteurs d'une revue de pédagogie et de culture : enseignants, chercheurs, éducateurs."],
        ["Où et quand ?", "Dans l'avant-propos d'une revue, en 1977, à l'époque où l'Afrique cherche à revaloriser ses cultures."]
      ] },
      { p: "Notre hypothèse de départ était juste, mais incomplète : l'auteur défend bien la tradition orale, mais il est honnête, il reconnaît ses dangers et les qualités de l'écrit. C'est justement pour cela que la lecture active est indispensable." },
      { p: "Pour la structure logique, les mots de liaison font presque tout le travail. « Mais, malgré cela » (paragraphe 3) marque le moment où l'auteur affirme sa thèse, après avoir admis un danger. « Certes » (paragraphe 4) annonce la concession sur l'écrit. « Mais » (paragraphe 6) annonce le retournement final. On obtient six unités significatives :" },
      { etapes: [
        ["Une tradition universelle", "Paragraphe 1 : tous les peuples ont une tradition orale, base de toute société."],
        ["La gardienne de la diversité", "Paragraphe 2 : elle garde l'originalité de chaque peuple, même là où l'on écrit beaucoup."],
        ["Une force qui ne freine pas le progrès", "Paragraphe 3 : elle enrichit la vie et protège les cultures ; elle peut diviser un pays ; mais elle n'empêche pas le développement."],
        ["La preuve par l'Égypte", "Paragraphe 4 (début) : elle a porté la grande civilisation de l'Égypte antique."],
        ["L'écrit, moteur des sciences", "Fin du paragraphe 4 et paragraphe 5 : certes, l'écrit est un progrès ; sans lui, pas de mathématiques ni de sciences."],
        ["L'oral, père de l'écrit", "Paragraphe 6 : mais l'écrit n'existerait pas sans la parole, qui l'a précédé."]
      ] },
      { p: "Remarque que le paragraphe 3 contient à lui seul plusieurs idées, et que le paragraphe 4 se coupe en deux. Avec cette fiche sous les yeux, tu as compris le texte en profondeur. Tu es prêt à répondre aux questions, ce que tu vas apprendre dans la leçon suivante." }
    ]
  },
  { id: "questions", titre: "Répondre aux questions", duree: "", blocs: [] },
  { id: "resume", titre: "Le résumé (contraction de texte)", duree: "", blocs: [] },
  { id: "production", titre: "La production écrite (essai ou discussion)", duree: "", blocs: [] }
];

export const QUIZ_RS: Record<string, QuestionQuiz[]> = {
  definition: [
    { q: "Quel autre nom donne-t-on au résumé de texte ?", choix: ["La contraction de texte", "Le commentaire de texte", "La dissertation"], bonne: 0, pourquoi: "Résumé de texte et contraction de texte désignent le même exercice." },
    { q: "Résumer un texte, c'est…", choix: ["l'expliquer avec ses mots", "le réduire en gardant ses idées essentielles", "donner son avis sur lui"], bonne: 1, pourquoi: "On réduit le texte, on garde l'essentiel, sans expliquer ni juger." },
    { q: "Un texte compte 600 mots. Ton résumé doit faire environ…", choix: ["60 mots", "150 mots", "300 mots"], bonne: 1, pourquoi: "On réduit au quart : 600 ÷ 4 = 150 mots, avec une marge de 10 % en plus ou en moins." },
    { q: "Dans un résumé, l'énumération « ballon de plage, drap de bain, rouge à lèvres » devient…", choix: ["elle reste telle quelle", "« tout ce que possède le touriste »", "elle disparaît avec l'idée"], bonne: 1, pourquoi: "Les exemples énumérés se remplacent par une expression qui les regroupe ; l'idée reste." },
    { q: "Où donnes-tu ton avis personnel sur le texte ?", choix: ["Dans le résumé", "Dans la production écrite", "Nulle part"], bonne: 1, pourquoi: "Le résumé est fidèle à l'auteur. Ton point de vue, c'est la production écrite (l'essai ou la discussion)." }
  ],
  comprendre: [
    { q: "Que fais-tu avant même de lire le texte ?", choix: ["Je compte les mots", "J'observe le paratexte : titre, auteur, source, date", "Je souligne les mots clés"], bonne: 1, pourquoi: "Le paratexte permet de faire des suppositions sur le sens du texte avant de le lire." },
    { q: "La lecture passive sert à trouver…", choix: ["le thème", "la thèse", "la structure"], bonne: 0, pourquoi: "La lecture passive ne sert qu'à savoir de quoi parle le texte. Le reste vient avec la lecture active." },
    { q: "Lequel est bien formulé comme un thème ?", choix: ["L'école doit changer.", "Le rôle de l'ordinateur dans l'apprentissage", "L'auteur pense que l'école doit changer."], bonne: 1, pourquoi: "Le thème est un groupe nominal, sans verbe conjugué : « Dans ce texte, on parle du rôle de l'ordinateur dans l'apprentissage »." },
    { q: "« L'auteur voudrait que les jeunes lisent davantage. » Cette phrase donne…", choix: ["le thème", "la thèse", "la visée argumentative"], bonne: 2, pourquoi: "« L'auteur voudrait que… » introduit la visée : ce que l'auteur cherche à obtenir de son lecteur." },
    { q: "Une unité significative, c'est…", choix: ["toujours un paragraphe", "un morceau du texte qui développe une seule idée", "une phrase importante"], bonne: 1, pourquoi: "On découpe selon les idées, pas selon les paragraphes, et on donne un titre à chaque unité." }
  ]
};
