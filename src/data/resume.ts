// Résumé de texte argumentatif : leçons, quiz, textes.
// Brouillon sur le site d'essai : le contenu passera par le serveur (clé d'accès) avant le vrai site.
// Source : le livre de l'auteur, « Secret Français Terminale » (partie Résumé de texte, questions, production écrite).
import type { BlocLecon, QuestionQuiz } from "./types";
import type { TexteEtudie } from "./cc-types";

export type BlocRS = BlocLecon | { texte: TexteEtudie } | { plie: { titre: string; liste: string[] } };
export interface LeconRS { id: string; partie: string; titre: string; duree: string; blocs: BlocRS[] }

/** Les quatre parties du cours, dans l'ordre de l'épreuve. */
export const PARTIES_RS = [
  { id: "comprendre", titre: "Comprendre le texte" },
  { id: "questions", titre: "Répondre aux questions" },
  { id: "resume", titre: "Rédiger le résumé" },
  { id: "production", titre: "La production écrite" }
];

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
    id: "definition", partie: "comprendre", titre: "Le résumé de texte, c'est quoi ?", duree: "8 min", blocs: [
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
    id: "comprendre", partie: "comprendre", titre: "Le paratexte et la lecture passive", duree: "6 min", blocs: [
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
    ]
  },
  {
    id: "lecture-active", partie: "comprendre", titre: "La lecture active : thème, thèse et visée", duree: "7 min", blocs: [
      { p: "Après le paratexte et la lecture passive, tu connais le thème général du texte. Il faut maintenant aller plus loin : c'est le rôle de la lecture active." },
      { p: "Tu relis maintenant le texte crayon en main. Tu soulignes les mots qui reviennent, tu entoures les mots de liaison (mais, certes, car, donc…), tu notes dans la marge ce que tu comprends. Dans l'appli, ouvre le texte support et touche « Crayon » : tu peux souligner, entourer, encadrer et écrire des annotations, comme sur ta feuille. Cette lecture active doit te permettre de trouver cinq éléments. Pour chacun, il existe une petite phrase qui t'aide à le formuler sans te tromper." },
      { texte: BEBEY },

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
    ]
  },
  {
    id: "enonciation-structure", partie: "comprendre", titre: "Situation d'énonciation et structure logique", duree: "7 min", blocs: [
      { p: "Tu as trouvé le thème, la thèse et la visée. La lecture active doit encore te donner deux choses : la situation d'énonciation, puis la structure logique du texte. Ensuite, tu rangeras tout sur une fiche de compréhension." },
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
      { p: "Relis le texte de Francis Bebey crayon en main, et cherche toi-même les cinq éléments avant de lire la suite." },
      { texte: BEBEY },
      { p: "Compare maintenant avec ce qu'on trouve. Voici, rangés dans l'ordre, tous les éléments de la compréhension. C'est ce que tu dois avoir sur ton brouillon avant d'écrire la moindre ligne de ta copie." },
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
  {
    id: "questions", partie: "questions", titre: "À quoi servent les questions ?", duree: "7 min", blocs: [
      { p: "Avant le résumé, le sujet te pose deux ou trois questions sur le texte. Elles valent 4 points. Leur but est simple : permettre au correcteur de vérifier que tu as compris le texte. Chaque réponse lui montre si tu as saisi de quoi parle l'auteur, ce qu'il pense, ce qu'il veut, et le sens de ses mots." },
      { p: "C'est une bonne nouvelle. Si tu as fait le travail de la première partie (paratexte, lecture passive, lecture active), tu as déjà presque toutes les réponses sur ton brouillon. Les questions ne te demandent rien de nouveau : elles te demandent de montrer ce que tu as compris." },

      { h: "Les questions que l'on peut te poser" },
      { p: "On retrouve presque toujours les mêmes familles de questions :" },
      { def: [
        ["Le thème", "« Quel est le thème de ce texte ? » ou « De quoi parle ce texte ? »"],
        ["La thèse", "« Quelle est la thèse de l'auteur ? » ou « Relevez la phrase qui exprime la thèse de l'auteur. »"],
        ["La visée argumentative", "« Quelle est la visée argumentative de l'auteur ? » ou « Que cherche à obtenir l'auteur ? »"],
        ["Le vocabulaire", "« Expliquez en contexte le mot… », « Expliquez l'expression… », « Expliquez la phrase… »"]
      ] },
      { p: "On peut aussi te demander combien de points de vue sont présentés dans le texte, ou de relever une phrase précise. Ce sont toujours des façons de vérifier la même chose : as-tu bien lu ?" },
      { p: "Les trois premières questions, tu sais déjà y répondre grâce aux petites phrases de la lecture active. La question de vocabulaire est différente : elle a sa propre technique, que tu verras dans la leçon suivante." },

      { h: "La règle d'or : des phrases complètes" },
      { p: "Une réponse ne s'écrit jamais en quelques mots jetés sur la copie. Tu réponds avec une phrase complète, qui reprend les mots de la question. Le correcteur doit pouvoir comprendre ta réponse sans relire la question." },
      { def: [
        ["Réponse à éviter", "Thème : la tradition orale."],
        ["Bonne réponse", "Le thème abordé dans ce texte est la place de la tradition orale face à l'écriture."]
      ] },
      { p: "Pour ne jamais te tromper, garde ces débuts de phrase :" },
      { etapes: [
        ["Pour le thème", "« Le thème abordé dans ce texte est… »"],
        ["Pour la thèse", "« La thèse de l'auteur est la suivante : … »"],
        ["Pour la visée", "« La visée argumentative de l'auteur est que… »"],
        ["Pour une phrase à relever", "« La phrase qui exprime la thèse de l'auteur est : « … » »"]
      ] },
      { astuce: "Ces débuts de phrase ressemblent à ceux de ton brouillon (« Dans ce texte, on parle de… », « L'auteur pense que… », « L'auteur voudrait que… »). Sur la copie, tu les transformes en vraies phrases de réponse." },

      { h: "Application : le texte de Francis Bebey" },
      { p: "Ouvre le texte et réponds toi-même aux trois questions avant de lire les réponses." },
      { texte: BEBEY },
      { def: [
        ["Quel est le thème du texte ?", "Le thème abordé dans ce texte est la place de la tradition orale face à l'écriture dans le développement des sociétés."],
        ["Relevez la phrase qui exprime la thèse de l'auteur.", "La phrase qui exprime la thèse de l'auteur est : « L'expérience et l'histoire prouvent que la tradition orale n'est pas un frein à l'éclosion et au développement d'une société, d'une culture, d'une civilisation. »"],
        ["Quelle est la visée argumentative de l'auteur ?", "La visée argumentative de l'auteur est que le lecteur reconnaisse l'importance et l'utilité de la tradition orale, et qu'il travaille à la préserver."]
      ] },
      { p: "Remarque que chaque réponse se suffit à elle-même. Même sans la question, on sait de quoi elle parle." }
    ]
  },
  {
    id: "vocabulaire", partie: "questions", titre: "Expliquer un mot ou une expression en contexte", duree: "8 min", blocs: [
      { p: "La question de vocabulaire te demande d'expliquer un mot, une expression ou une phrase du texte. Sa particularité : le jour de l'examen, tu n'as pas de dictionnaire. Tu dois donc trouver le sens tout seul. Bonne nouvelle : le texte lui-même te le donne, à condition de savoir où regarder. C'est ce qu'on appelle le contexte." },

      { h: "Le contexte, c'est quoi ?" },
      { p: "Le contexte d'un mot, ce sont les phrases qui l'entourent. Concrètement, c'est trois phrases :" },
      { etapes: [
        ["La phrase qui précède", "Elle prépare l'idée."],
        ["La phrase qui contient le mot", "C'est là que le mot prend son sens."],
        ["La phrase qui suit", "Elle prolonge ou explique l'idée."]
      ] },
      { p: "Un mot n'a pas toujours le même sens. « Arrêter », c'est appréhender un voleur, fixer une date, cesser de faire quelque chose, ou bloquer un ballon. Seule la phrase dit lequel. C'est pour cela qu'on te demande toujours d'expliquer « en contexte » : le correcteur ne veut pas la définition du dictionnaire, il veut le sens du mot dans ce texte-là." },

      { h: "La technique" },
      { etapes: [
        ["Repère les trois phrases", "Souligne la phrase du mot, entoure celle d'avant et celle d'après."],
        ["Explique ces phrases avec tes mots", "Demande-toi : que dit l'auteur ici ? Redis-le simplement, comme à un camarade."],
        ["Fais ressortir le sens du mot", "En expliquant les phrases, le sens logique du mot apparaît tout seul. Tu n'as plus qu'à l'écrire clairement."]
      ] },

      { h: "Exemple : « la force réfractaire du milieu ethnique »" },
      { p: "Dans le texte de Bebey, on te demande d'expliquer cette expression. Le mot « réfractaire » est difficile. Regardons son contexte, au paragraphe 3." },
      { def: [
        ["Phrase d'avant", "« En préservant et perpétuant ainsi les différences entre communautés ou groupes ethniques, la tradition orale contribue à agrémenter la vie des hommes, de laquelle elle bannit la monotonie. »"],
        ["Phrase du mot", "« Elle oppose à la civilisation uniforme ou homogène des nations la force réfractaire du milieu ethnique, de la croyance de petits groupes à des valeurs non codifiées par l'écrit, de l'enracinement enfin. »"],
        ["Phrase d'après", "« Force perpétuellement en mouvement, force dynamique donc, grâce à laquelle le breton, le provençal, le bambara ou le lingala restent des réalités vivantes… »"]
      ] },
      { p: "Expliquons. Avant : la tradition orale garde les différences entre les groupes. Dans la phrase : elle « oppose » quelque chose à une civilisation qui voudrait que tout le monde soit pareil. Après : grâce à cette force, des langues comme le bambara ou le lingala restent vivantes. La force réfractaire, c'est donc une force qui s'oppose, qui résiste. On peut répondre :" },
      { modele: "Dans ce texte, l'expression « la force réfractaire du milieu ethnique » désigne la capacité des petits groupes ethniques à résister à l'uniformisation que tente de leur imposer le monde extérieur." },
      { p: "Tu vois que tu n'as pas eu besoin de dictionnaire : le contexte a tout dit." },

      { h: "Un mot clé, ou une phrase entière" },
      { p: "Quand l'expression contient un mot difficile, ton explication doit faire ressortir le sens de ce mot. Pour « les civilisations les plus rompues à l'écriture », le mot clé est « rompues » : « Cette expression désigne les civilisations les plus habituées à l'écriture, celles qui la pratiquent le mieux. »" },
      { p: "Quand on te demande d'expliquer une phrase entière, simple à comprendre, explique ce qu'elle veut dire et à quoi elle sert dans le texte. Pour la dernière phrase de Bebey, « Si l'homme était né muet, […] y aurait-il jamais eu d'écriture ? » : « Cette phrase est une question qui n'attend pas de réponse. Par elle, l'auteur affirme que l'écriture est née de l'oralité, et que l'oral est donc à l'origine de l'écrit. »" },

      { h: "Trois pièges à éviter" },
      { def: [
        ["Oublier le sens figuré", "Dans un texte sur la propagande, « intoxiquer » ne veut pas dire seulement « empoisonner ». Écris : « Au sens premier, intoxiquer, c'est empoisonner. Mais dans ce texte, le mot désigne un empoisonnement des esprits par la propagande. »"],
        ["Changer la nature du mot", "Un nom s'explique par un nom, un verbe par un verbe. Le synonyme de « trépas » est « la mort », pas « mourir ». Le synonyme de « s'insurger » est « se révolter », pas « une révolte »."],
        ["Confondre deux mots qui se ressemblent", "Un accès de colère n'est pas un excès de vitesse ; l'attitude d'une personne n'est pas l'altitude d'une montagne. Lis bien le mot demandé."]
      ] },
      { p: "Ouvre le texte et entraîne-toi : explique en contexte « une pointe de mépris » (paragraphe 2) et « la photographie du verbe » (paragraphe 6), en suivant les trois étapes." },
      { texte: BEBEY },
      { plie: { titre: "Voir des réponses possibles", liste: [
        "L'expression « une pointe de mépris » désigne une légère nuance de dédain : ceux qui appellent la tradition orale « populaire » la regardent de haut, comme si elle valait moins que l'écrit.",
        "L'expression « la photographie du verbe » signifie que l'écrit ne fait que fixer sur le papier la parole, comme une photo fixe une image : l'écrit est une copie de l'oral, qui existait avant lui."
      ] } }
    ]
  },
  {
    id: "rediger-reponses", partie: "questions", titre: "Bien rédiger ses réponses", duree: "6 min", blocs: [
      { p: "Tu sais maintenant trouver les réponses. Reste à bien les écrire. Une bonne réponse a trois qualités : elle est complète, elle est précise, et elle tient compte du contexte. Une réponse juste mais mal écrite perd des points." },

      { h: "1. Une réponse complète" },
      { p: "On l'a vu : jamais de style télégraphique. Une phrase entière, qui reprend les mots de la question, et qui justifie quand on te le demande." },
      { def: [
        ["Réponse maladroite", "Polémique : « nous ne voyons pas pourquoi on ferait l'un supérieur à l'autre »."],
        ["Bonne réponse", "La tonalité dominante dans ce texte est la tonalité polémique, parce que l'auteur dénonce les prétentions des esclavagistes à la supériorité raciale. La phrase qui le montre est : « Nous ne voyons pas pourquoi on ferait l'un supérieur à l'autre. »"]
      ] },

      { h: "2. Une réponse précise" },
      { p: "Précise ne veut pas dire longue. Va droit au but : le correcteur cherche une idée, pas un paragraphe qui tourne autour. On te demande par exemple d'expliquer en contexte : « C'est avec des bulletins de vote et non des balles que l'on dépose un tyran. »" },
      { def: [
        ["Réponse qui tourne en rond", "Les bulletins de vote sont des bouts de papier utilisés pour voter. Pendant les élections, il y a plusieurs candidats et chacun choisit celui qui lui plaît. En démocratie, on n'utilise pas de balles, c'est-à-dire qu'il n'y a pas de fusils…"],
        ["Réponse précise", "En démocratie, c'est par les élections, et non par la violence, qu'un peuple peut se débarrasser d'un dirigeant qui l'opprime."]
      ] },
      { p: "Ne donne pas non plus plus que ce qu'on te demande. Si la question dit « Relevez une phrase », relève-en une seule. Si tu en donnes deux et que l'une est fausse, tu peux perdre tous les points de la question." },

      { h: "3. Une réponse qui tient compte du contexte" },
      { p: "Ta réponse parle de ce texte-là, pas du mot en général. Commence volontiers par « Dans ce texte, … » : cela t'oblige à rester dans le contexte, et le correcteur voit tout de suite que tu l'as fait." },

      { h: "Avant de passer au résumé" },
      { p: "Relis tes réponses en te posant trois questions. Ma réponse est-elle une phrase complète ? Répond-elle exactement à la question, sans plus ? Parle-t-elle bien du texte ? Si oui, tu peux passer au résumé. Et tu remarqueras que ces réponses t'ont fait comprendre le texte encore mieux : c'est exactement ce dont tu as besoin pour le résumer." }
    ]
  },
  {
    id: "idees-essentielles", partie: "resume", titre: "Repérer les idées essentielles", duree: "8 min", blocs: [
      { p: "Le résumé, ou contraction de texte, se fait en plusieurs étapes. Les élèves qui échouent sont souvent ceux qui commencent à écrire tout de suite. Toi, tu vas suivre quatre étapes, dans l'ordre :" },
      { etapes: [
        ["Repérer les idées essentielles", "Trouver, dans le texte, les phrases qui apportent une information nouvelle."],
        ["Reformuler ces idées", "Les redire avec tes propres mots. C'est le cœur de l'exercice."],
        ["Enchaîner les idées", "Les relier par des connecteurs logiques pour qu'elles forment un raisonnement."],
        ["Rédiger le résumé", "Écrire le tout en un seul paragraphe, en respectant le nombre de mots."]
      ] },
      { p: "Cette leçon s'occupe de la première étape." },

      { h: "Une idée essentielle, c'est une information nouvelle" },
      { p: "Une idée essentielle est une idée importante du texte. Pour la reconnaître, retiens cette définition simple : une idée essentielle, c'est une nouvelle information. C'est une phrase qui fait avancer le texte, qui ajoute quelque chose à ce que l'auteur a déjà dit." },
      { p: "Pense à quelqu'un qui te raconte un match. « On a gagné 2 à 1. » Information nouvelle. « Le premier but est venu d'un corner, à la 20e minute, Koffi a sauté plus haut que tout le monde… » Ce sont des détails qui racontent le premier but. « Mais on a joué à dix pendant toute la seconde mi-temps. » Information nouvelle. Si tu dois répéter l'essentiel à quelqu'un, tu gardes : « On a gagné 2 à 1, alors qu'on a joué à dix toute la seconde mi-temps. »" },
      { p: "Devant chaque phrase du texte, pose-toi donc la question : « Est-ce que cette phrase m'apprend quelque chose de nouveau, ou est-ce qu'elle développe ce que je sais déjà ? »" },

      { h: "Ce qu'il faut bannir" },
      { p: "Autour des idées essentielles, l'auteur ajoute beaucoup de choses pour convaincre son lecteur. Elles sont utiles dans son texte, mais pas dans ton résumé. Voici ce que tu enlèves :" },
      { def: [
        ["Les exemples et les illustrations", "« Par exemple », « ainsi », « comme », des noms de personnes, de pays, d'événements. Ils servent à montrer l'idée, ils ne sont pas l'idée."],
        ["Les explications", "Quand l'auteur redit son idée plus longuement pour qu'on la comprenne bien (« c'est-à-dire », « en effet »)."],
        ["Les répétitions et les reformulations", "Quand l'auteur dit la même chose une deuxième fois avec d'autres mots (« en d'autres termes », « autrement dit »)."],
        ["Les données chiffrées", "Les dates, les pourcentages, les sommes d'argent. Garde l'idée qu'ils prouvent, pas les chiffres."],
        ["Les citations", "Les paroles d'un autre auteur que le texte rapporte pour appuyer son idée."]
      ] },
      { p: "Et les questions ? Une question n'est pas une information. Mais très souvent, l'auteur pose une question dont il connaît la réponse, pour faire réfléchir son lecteur. Si cette question porte une vraie idée, tu la gardes, mais tu la transformes en phrase affirmative." },
      { def: [
        ["Dans le texte", "« Si l'homme était né muet, […] y aurait-il jamais eu d'écriture ? »"],
        ["L'idée essentielle", "Sans la parole, l'écriture n'aurait jamais existé."]
      ] },
      { astuce: "Attention à un cas particulier : quand un exemple est la seule preuve d'une idée, c'est lui qui porte l'idée. On ne le supprime pas, on le garde en quelques mots. Chez Bebey, l'Égypte antique prouve que la tradition orale ne freine pas le progrès : elle reste dans le résumé." },
      { p: "Quand un exemple est une liste de plusieurs éléments, remplace-la par un seul mot qui les regroupe. « Le cacao, le café, l'arachide, le coton » deviennent « les cultures d'exportation ». « Un ballon de plage, un drap de bain, une paire de lunettes » deviennent « les objets du touriste »." },

      { h: "Application : le texte de Bebey, paragraphe par paragraphe" },
      { p: "Ouvre le texte, prends le crayon, et souligne dans chaque paragraphe ce qui te paraît être une information nouvelle. Puis compare." },
      { texte: BEBEY },
      { def: [
        ["Paragraphe 1", "Tous les peuples ont une tradition orale, qui est à la base de toute société. On enlève la précision « plus ou moins vivante selon le degré d'empiètement de l'écrit », qui nuance sans ajouter d'idée forte."],
        ["Paragraphe 2", "Même là où l'on écrit beaucoup, la tradition orale garde l'originalité de chaque peuple. On enlève « que d'aucuns appellent populaire » : c'est un détail sur ce que pensent les autres."],
        ["Paragraphe 3", "Trois idées : elle rend la vie plus riche en gardant les différences ; elle permet aux petits groupes de résister à l'uniformisation ; elle peut créer des conflits ; mais elle ne freine pas le progrès. On enlève les exemples du breton, du provençal, du bambara, du lingala, et la remarque sur l'Europe."],
        ["Paragraphe 4", "La preuve : elle a porté la civilisation égyptienne. Puis la concession : certes, l'écrit est un progrès. On enlève l'anecdote du pharaon et du papyrus."],
        ["Paragraphe 5", "L'écrit a permis le progrès des sciences et nous rapproche de la vraie connaissance. On enlève l'algèbre, la géométrie, Archimède, Einstein, la relativité : ce sont des exemples."],
        ["Paragraphe 6", "Mais l'écrit est né de l'oral. On transforme la question finale en affirmation, et on enlève « en d'autres termes », qui annonce une reformulation."]
      ] },
      { p: "Regarde ce qui reste : une douzaine d'idées courtes. Tout le reste du texte servait à les expliquer, les illustrer ou les prouver. C'est avec ces idées seulement que tu vas construire ton résumé." }
    ]
  },
  {
    id: "reformuler", partie: "resume", titre: "Reformuler les idées essentielles", duree: "10 min", blocs: [
      { p: "Reformuler, c'est dire dans un autre langage ce que l'auteur a dit. C'est le cœur de l'exercice : c'est là que le correcteur voit si tu as vraiment compris le texte, et c'est là que se gagnent ou se perdent la plupart des points." },
      { p: "Beaucoup d'élèves pensent que reformuler, c'est remplacer chaque mot de la phrase par un synonyme. Ce n'est pas le cas. On obtient alors une phrase bizarre, qui garde exactement la construction de l'auteur. Reformuler, c'est changer la façon de dire, pas seulement les mots. Pour cela, tu as tout un ensemble de techniques. En voici dix, de la plus simple à la plus fine." },

      { h: "1. Utiliser un synonyme qui convient au contexte" },
      { p: "C'est la technique la plus connue, mais choisis un synonyme qui a le même sens dans cette phrase. « Arrêter le voleur » devient « appréhender le voleur » ; « arrêter une date » devient « fixer une date »." },
      { p: "Une exception importante : les mots clés qui portent le thème ne se remplacent pas. Chez Bebey, « tradition orale » et « écriture » restent tels quels. Les remplacer par de mauvais équivalents changerait le sens." },

      { h: "2. Transformer un verbe en nom" },
      { p: "On appelle cela la nominalisation. Elle raccourcit beaucoup les phrases." },
      { def: [
        ["Avant", "Les prix ont augmenté, et cela inquiète les familles."],
        ["Après", "La hausse des prix inquiète les familles."]
      ] },

      { h: "3. Remplacer un complément du nom par un adjectif, ou l'inverse" },
      { def: [
        ["Avant", "La vie de la ville est chère. Les problèmes de l'économie s'aggravent."],
        ["Après", "La vie urbaine est chère. Les problèmes économiques s'aggravent."]
      ] },
      { p: "L'inverse marche aussi : « une décision gouvernementale » peut devenir « une décision du gouvernement »." },

      { h: "4. Remplacer une proposition relative par un adjectif ou un groupe nominal" },
      { def: [
        ["Avant", "Un élève qui ne se fatigue jamais. L'informatique, qui est un outil aux possibilités immenses, envahit tous les domaines."],
        ["Après", "Un élève infatigable. L'informatique, outil aux possibilités immenses, envahit tous les domaines."]
      ] },

      { h: "5. Remplacer un long groupe de mots par un seul mot" },
      { def: [
        ["Avant", "Les gens qui habitent la ville. Ceux qui ne savent ni lire ni écrire. Rendre une plante plus forte."],
        ["Après", "Les citadins. Les analphabètes. Fortifier une plante."]
      ] },

      { h: "6. Remplacer une liste par un mot qui la regroupe" },
      { def: [
        ["Avant", "Le breton, le provençal, le bambara ou le lingala restent des réalités vivantes."],
        ["Après", "Les langues locales restent vivantes."]
      ] },

      { h: "7. Transformer une phrase complexe en une ou deux phrases simples" },
      { p: "Quand une phrase de l'auteur est longue, avec plusieurs subordonnées, découpe-la. Ta phrase sera plus claire et tu t'éloigneras de la construction de l'auteur." },
      { def: [
        ["Avant", "Force perpétuellement en mouvement, force dynamique donc, grâce à laquelle les langues locales restent des réalités vivantes, la tradition orale peut s'avérer être, également, dans certains cas, une source de discorde profonde entre les citoyens d'un même pays."],
        ["Après", "La tradition orale garde les langues vivantes. Mais elle peut aussi diviser les citoyens d'un même pays."]
      ] },

      { h: "8. Réunir deux phrases en une seule" },
      { p: "C'est l'inverse : deux phrases qui disent des choses proches peuvent devenir une seule phrase, avec un connecteur." },
      { def: [
        ["Avant", "Tous les peuples de la terre ont une tradition orale. Elle reste l'un des éléments de base de l'organisation des communautés humaines."],
        ["Après", "Universelle, la tradition orale est le socle de toute société humaine."]
      ] },

      { h: "9. Passer de la négation à l'affirmation, et inversement" },
      { def: [
        ["Avant", "Ce n'est pas facile. Il n'a pas réussi."],
        ["Après", "C'est difficile. Il a échoué."]
      ] },
      { p: "Vérifie toujours que le sens reste exactement le même. « La tradition orale n'est pas un frein au progrès » ne veut pas dire « La tradition orale crée le progrès ». Mieux vaut : « La tradition orale n'empêche pas le progrès »." },

      { h: "10. Transformer une question ou une citation en affirmation" },
      { def: [
        ["Une question", "« Si l'homme était né muet, y aurait-il jamais eu d'écriture ? » devient « Sans la parole, l'écriture n'aurait jamais existé. »"],
        ["Une citation", "« « Un fait social total », a dit de lui le grand essayiste Norbert Elias. » devient « Le football touche à tous les aspects de la société. »"]
      ] },

      { h: "Les deux erreurs à éviter" },
      { def: [
        ["Le collage", "Souligner les phrases importantes du texte et les recopier l'une après l'autre. Ce n'est pas un résumé, c'est un découpage."],
        ["Le décalque", "Garder la phrase de l'auteur en changeant seulement un mot par-ci, un verbe par-là. La construction reste celle de l'auteur : le correcteur le voit tout de suite."]
      ] },
      { p: "Ces deux erreurs ont le même nom : la paraphrase. Elle est sévèrement sanctionnée, car elle montre que l'élève n'a pas fait l'effort de reformuler." },
      { astuce: "Un bon test : cache le texte, et redis l'idée avec tes mots, comme si tu l'expliquais à un ami. Puis vérifie que tu n'as pas changé le sens. Si tu y arrives sans regarder, tu as vraiment reformulé." },

      { h: "Application : quelques idées de Bebey reformulées" },
      { def: [
        ["Texte", "« Souvent, c'est cette tradition orale […] qui maintient avec force le caractère de diversité et de spécificité des peuples. »"],
        ["Reformulation", "C'est elle qui garantit l'originalité de chaque culture."],
        ["Texte", "« Elle oppose à la civilisation uniforme ou homogène des nations la force réfractaire du milieu ethnique… »"],
        ["Reformulation", "Grâce à elle, les petits groupes résistent à l'uniformisation que le monde extérieur veut leur imposer."],
        ["Texte", "« Elle fut pendant très longtemps à la base de la civilisation de l'Égypte antique. »"],
        ["Reformulation", "La preuve : son rôle déterminant dans l'essor de la culture égyptienne antique."]
      ] }
    ]
  },
  {
    id: "enchainer", partie: "resume", titre: "Enchaîner les idées avec des connecteurs", duree: "6 min", blocs: [
      { p: "Tu as maintenant une liste d'idées reformulées. Mais une liste n'est pas un résumé. Si tu les écris l'une après l'autre, sans lien, le lecteur ne comprend plus le raisonnement de l'auteur : on ne sait plus ce qui est une cause, une conséquence, une objection. Il faut donc rétablir la cohérence entre les idées. C'est le rôle des connecteurs logiques." },

      { h: "Retrouver la logique de l'auteur" },
      { p: "Pendant la lecture active, tu as entouré les connecteurs du texte et trouvé sa structure logique. Ils te disent comment les idées sont reliées. Ton résumé doit garder les mêmes liens, même s'il n'emploie pas les mêmes mots. Si l'auteur fait une concession (« certes… mais… »), ton résumé fait aussi une concession." },
      { p: "Voici les principales relations, et des connecteurs pour les exprimer :" },
      { def: [
        ["Ajouter une idée", "de plus, en outre, par ailleurs, également, d'abord, ensuite, enfin"],
        ["Opposer", "mais, pourtant, cependant, toutefois, en revanche"],
        ["Concéder", "certes… mais, il est vrai que… mais, bien que, malgré"],
        ["Donner une cause", "car, en effet, parce que, puisque, grâce à"],
        ["Tirer une conséquence", "donc, ainsi, c'est pourquoi, par conséquent, aussi (en début de phrase)"],
        ["Prouver", "la preuve, en témoigne, comme le montre"],
        ["Conclure", "en somme, finalement, en définitive"]
      ] },
      { astuce: "Varie tes connecteurs, et n'en mets pas partout. Un « de plus » à chaque phrase rend le texte lourd. Mets un connecteur là où le raisonnement change de direction." },

      { h: "Application : les idées de Bebey reliées" },
      { p: "Voici le plan du résumé, avec les connecteurs qui relient les idées. Chaque ligne correspond à une étape de la structure logique trouvée dans la première partie." },
      { plan: [
        "La tradition orale est universelle : elle est le socle de toute société.",
        "C'est elle qui garantit l'originalité de chaque culture.",
        "Ainsi, elle embellit la vie et permet aux petits groupes de résister à l'uniformisation.",
        "Toutefois, elle peut créer des conflits.",
        "Pour autant, elle ne freine pas le progrès : la preuve, l'Égypte antique.",
        "Certes, le développement passe par l'écriture, comme le montrent les sciences.",
        "Mais l'écriture n'aurait jamais existé sans l'oralité."
      ] },
      { p: "Remarque « toutefois », « pour autant », « certes », « mais » : ils reproduisent fidèlement les mouvements du texte. Avec eux, le lecteur suit le raisonnement de Bebey sans avoir lu son texte." }
    ]
  },
  {
    id: "rediger", partie: "resume", titre: "Rédiger le résumé", duree: "8 min", blocs: [
      { p: "Tu as tes idées reformulées et reliées. Il ne reste plus qu'à les écrire au propre. Voici les règles de la rédaction." },

      { h: "Un seul paragraphe" },
      { p: "Le résumé se rédige en un seul bloc, sans retour à la ligne, avec un alinéa au début (un petit retrait de la première ligne). Il n'a pas de titre, pas d'introduction ni de conclusion à toi : il commence par la première idée de l'auteur et finit par sa dernière." },

      { h: "Un texte cohérent" },
      { p: "Ton résumé doit se lire comme un vrai texte, pas comme une liste. Un lecteur qui n'a jamais vu le texte de départ doit le comprendre sans effort. Relis-toi : chaque phrase s'enchaîne-t-elle bien avec la précédente ? Les connecteurs sont-ils à leur place ?" },
      { p: "Évite le style télégraphique, les parenthèses, « etc. » et les points de suspension. Soigne l'orthographe et les accords : un résumé plein de fautes perd des points, même si les idées sont justes." },

      { h: "La voix de l'auteur" },
      { p: "Tu écris à la place de l'auteur, comme s'il avait lui-même raccourci son texte. Tu n'écris donc jamais « l'auteur dit que… », « selon le texte… ». Si l'auteur dit « nous », ton résumé dit « nous ». Tu ne donnes pas ton avis et tu n'ajoutes aucune idée." },
      { def: [
        ["À ne pas écrire", "Francis Bebey pense que la tradition orale est universelle."],
        ["À écrire", "La tradition orale est universelle."]
      ] },

      { h: "Le nombre de mots" },
      { p: "Le sujet donne le nombre de mots du texte et te demande de le réduire, en général au quart, parfois au tiers. Une marge de 10 % en plus ou en moins est acceptée. Pour un texte de 610 mots réduit au quart : 610 ÷ 4 = environ 153 mots. 10 % de 153, c'est environ 15. Ton résumé doit donc faire entre 138 et 168 mots." },
      { p: "Pour compter, une règle simple : est compté comme un mot tout ce qui est séparé par un blanc, une apostrophe ou un trait d'union. « L'école » compte 2 mots ; « c'est-à-dire » en compte 4 ; un nombre en chiffres ou un sigle comme « ONU » compte 1 mot." },
      { p: "À la fin de ton résumé, tu indiques le nombre de mots, par exemple : « Nombre de mots : 143 »." },
      { def: [
        ["Si ton résumé est trop long", "Tu as sans doute gardé un exemple ou une explication. Cherche aussi les phrases que tu peux raccourcir avec les techniques de reformulation."],
        ["Si ton résumé est trop court", "Tu as peut-être oublié une idée essentielle, ou trop serré une idée. Relis ta liste d'idées."]
      ] },
      { astuce: "Ne perds pas tout ton temps à compter. Compte une première fois au brouillon, rapidement, pour savoir où tu en es, puis une fois au propre. Dans Outils, le calculateur de mots te donne la fourchette à respecter et compte les mots de ton résumé." },

      { h: "Le résumé du texte de Bebey" },
      { p: "Voici le résultat des quatre étapes. Compare-le avec le texte : toutes les idées essentielles sont là, dans l'ordre, reliées par les mêmes mouvements, et rien n'est recopié." },
      { modele: "La tradition orale est universelle. Elle est le socle de toute société humaine. C'est elle qui garantit l'originalité de chaque culture, y compris dans les civilisations de l'écriture. En assurant ainsi la vitalité des diversités culturelles, elle embellit la vie. C'est grâce à elle que les groupes restreints peuvent résister à l'uniformisation que tente de leur imposer le monde extérieur. Toutefois, malgré cette force, les différences identitaires peuvent quelquefois générer des conflits intracommunautaires. Pour autant, l'histoire en témoigne, la tradition orale ne saurait entraver le progrès. À preuve, son rôle déterminant dans l'expansion de la culture égyptienne antique. Le développement, reconnaissons-le, passe par l'écriture. L'exemple de l'évolution scientifique, qui nous conduit manifestement vers la connaissance authentique, l'atteste. Mais l'écriture n'aurait jamais existé si l'oralité ne l'avait fécondée. (Nombre de mots : 143)" },
      { p: "Le texte faisait 610 mots ; la fourchette était de 138 à 168 mots. Avec 143 mots, le résumé est dans les règles." },
      { lien: { texte: "Ouvrir le calculateur de mots", href: "#/rs/outils" } }
    ]
  },
  { id: "production", partie: "production", titre: "La production écrite (essai ou discussion)", duree: "", blocs: [] }
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
    { q: "Le titre « Tradition orale et écriture » permet surtout de supposer que le texte va…", choix: ["raconter une histoire", "comparer la parole et l'écrit", "expliquer l'Égypte antique"], bonne: 1, pourquoi: "Le titre met face à face deux façons de transmettre le savoir : on peut supposer que le texte va les comparer." }
  ],
  "lecture-active": [
    { q: "Lequel est bien formulé comme un thème ?", choix: ["L'école doit changer.", "Le rôle de l'ordinateur dans l'apprentissage", "L'auteur pense que l'école doit changer."], bonne: 1, pourquoi: "Le thème est un groupe nominal, sans verbe conjugué : « Dans ce texte, on parle du rôle de l'ordinateur dans l'apprentissage »." },
    { q: "« L'auteur voudrait que les jeunes lisent davantage. » Cette phrase donne…", choix: ["le thème", "la thèse", "la visée argumentative"], bonne: 2, pourquoi: "« L'auteur voudrait que… » introduit la visée : ce que l'auteur cherche à obtenir de son lecteur." },
    { q: "Pour formuler la thèse, tu commences ta phrase par…", choix: ["« Dans ce texte, on parle de… »", "« L'auteur pense que… »", "« L'auteur voudrait que… »"], bonne: 1, pourquoi: "« L'auteur pense que… » introduit la thèse ; « Dans ce texte, on parle de… » introduit le thème ; « L'auteur voudrait que… », la visée." }
  ],
  "enonciation-structure": [
    { q: "Une unité significative, c'est…", choix: ["toujours un paragraphe", "un morceau du texte qui développe une seule idée", "une phrase importante"], bonne: 1, pourquoi: "On découpe selon les idées, pas selon les paragraphes, et on donne un titre à chaque unité." },
    { q: "La situation d'énonciation répond à quatre questions. Lesquelles ?", choix: ["Qui parle, à qui, où, quand ?", "Quoi, comment, pourquoi, combien ?", "Thème, thèse, visée, structure ?"], bonne: 0, pourquoi: "Qui parle, à qui il parle, où et quand : c'est le cadre dans lequel le texte est écrit." },
    { q: "Dans « Certes, l'écrit est un progrès. Mais il est né de l'oral », la pensée de l'auteur est surtout…", choix: ["après « certes »", "après « mais »", "dans les deux, à égalité"], bonne: 1, pourquoi: "« Certes » introduit ce que l'auteur accorde aux autres ; « mais » introduit ce qu'il pense vraiment." }
  ],
  questions: [
    { q: "À quoi servent les questions posées avant le résumé ?", choix: ["À vérifier que l'élève a compris le texte", "À noter l'orthographe", "À préparer la conclusion"], bonne: 0, pourquoi: "Les questions permettent au correcteur de vérifier que tu as bien compris le texte." },
    { q: "Quelle est la meilleure réponse à « Quel est le thème du texte ? »", choix: ["La tradition orale.", "Thème : tradition orale et écriture.", "Le thème abordé dans ce texte est la place de la tradition orale face à l'écriture."], bonne: 2, pourquoi: "On répond toujours par une phrase complète qui reprend les mots de la question." },
    { q: "Pour répondre sur la visée argumentative, tu peux commencer par…", choix: ["« La visée argumentative de l'auteur est que… »", "« Visée : … »", "« Je pense que… »"], bonne: 0, pourquoi: "C'est le début de phrase qui transforme ton « L'auteur voudrait que… » du brouillon en réponse complète." }
  ],
  vocabulaire: [
    { q: "Le contexte d'un mot, c'est…", choix: ["sa définition dans le dictionnaire", "la phrase qui le contient, celle d'avant et celle d'après", "le titre du texte"], bonne: 1, pourquoi: "Le contexte, ce sont ces trois phrases : c'est là que tu trouves le sens du mot sans dictionnaire." },
    { q: "Quelle est la bonne méthode pour expliquer un mot en contexte ?", choix: ["Donner tous les sens possibles du mot", "Expliquer les phrases du contexte : le sens du mot en ressort", "Recopier la phrase du texte"], bonne: 1, pourquoi: "En expliquant les phrases autour du mot, son sens logique apparaît." },
    { q: "Quel est le bon synonyme du nom « trépas » ?", choix: ["mourir", "la mort", "mortel"], bonne: 1, pourquoi: "Un nom s'explique par un nom : le trépas, c'est la mort." },
    { q: "Dans un texte sur la propagande, que vaut la réponse « intoxiquer, c'est empoisonner » ?", choix: ["Elle est complète", "Elle oublie le sens figuré du mot dans le texte", "Elle est fausse"], bonne: 1, pourquoi: "Il faut donner le sens dans le texte : un empoisonnement des esprits par la propagande." }
  ],
  "rediger-reponses": [
    { q: "On te demande : « Relevez une phrase qui montre les avantages de la démocratie. » Que fais-tu ?", choix: ["J'en relève une seule, la plus juste", "J'en relève trois pour être sûr", "Je résume tout le paragraphe"], bonne: 0, pourquoi: "On ne donne pas plus que demandé : si l'une de tes phrases est fausse, tu peux perdre tous les points." },
    { q: "Une réponse précise, c'est une réponse…", choix: ["très longue", "qui va droit à l'idée demandée", "écrite en style télégraphique"], bonne: 1, pourquoi: "Précise ne veut pas dire longue : le correcteur cherche une idée claire." },
    { q: "Pourquoi commencer une explication par « Dans ce texte, … » ?", choix: ["Pour rester dans le contexte du texte", "Pour faire plus de mots", "C'est obligatoire au bac"], bonne: 0, pourquoi: "Cela t'oblige à expliquer le sens du mot dans ce texte-là, pas en général." }
  ],
  "idees-essentielles": [
    { q: "Une idée essentielle, c'est…", choix: ["une phrase longue", "une information nouvelle qui fait avancer le texte", "un exemple frappant"], bonne: 1, pourquoi: "Une idée essentielle apporte une information nouvelle : elle fait progresser le texte." },
    { q: "Lequel de ces éléments garde-t-on dans le résumé ?", choix: ["Une donnée chiffrée", "Une explication introduite par « c'est-à-dire »", "Une idée nouvelle introduite par « mais »"], bonne: 2, pourquoi: "Chiffres, explications, exemples et répétitions disparaissent ; les idées nouvelles restent." },
    { q: "L'auteur écrit : « Y aurait-il eu d'écriture sans la parole ? » Que fais-tu ?", choix: ["Je supprime la question", "Je la transforme en affirmation : « Sans la parole, l'écriture n'aurait pas existé. »", "Je la recopie"], bonne: 1, pourquoi: "Une question qui porte une vraie idée se garde sous forme affirmative." },
    { q: "« Le cacao, le café, l'arachide et le coton » deviennent dans le résumé…", choix: ["rien du tout", "« les cultures d'exportation »", "« le cacao, etc. »"], bonne: 1, pourquoi: "Une énumération se remplace par un mot qui la regroupe." }
  ],
  reformuler: [
    { q: "Reformuler, c'est…", choix: ["remplacer chaque mot par un synonyme", "dire autrement ce que l'auteur a dit", "recopier les phrases importantes"], bonne: 1, pourquoi: "On change la façon de dire, pas seulement les mots." },
    { q: "« Les prix ont augmenté, ce qui inquiète les familles » devient, par nominalisation…", choix: ["« La hausse des prix inquiète les familles. »", "« Les prix ont monté, ce qui inquiète les familles. »", "« Les familles sont inquiètes. »"], bonne: 0, pourquoi: "Le verbe « augmenter » devient le nom « hausse » : la phrase est plus courte et le sens reste le même." },
    { q: "« Un élève qui ne se fatigue jamais » devient…", choix: ["« un élève infatigable »", "« un élève fatigué »", "« un élève qui n'est jamais las »"], bonne: 0, pourquoi: "La proposition relative est remplacée par un adjectif." },
    { q: "Garder la phrase de l'auteur en changeant juste un ou deux mots, c'est…", choix: ["une bonne reformulation", "du décalque", "une nominalisation"], bonne: 1, pourquoi: "Le décalque garde la construction de l'auteur : c'est de la paraphrase, sanctionnée." }
  ],
  enchainer: [
    { q: "À quoi servent les connecteurs dans le résumé ?", choix: ["À allonger le résumé", "À rétablir la cohérence entre les idées", "À donner son avis"], bonne: 1, pourquoi: "Ils montrent comment les idées sont reliées : cause, opposition, concession, conséquence…" },
    { q: "L'auteur écrit « Certes… mais… ». Dans ton résumé…", choix: ["tu gardes une concession", "tu supprimes la partie après « certes »", "tu inverses l'ordre"], bonne: 0, pourquoi: "Le résumé garde les mêmes liens logiques que le texte, même avec d'autres mots." },
    { q: "Quel connecteur exprime une conséquence ?", choix: ["pourtant", "c'est pourquoi", "car"], bonne: 1, pourquoi: "« C'est pourquoi » introduit une conséquence ; « car » une cause ; « pourtant » une opposition." }
  ],
  rediger: [
    { q: "Comment se présente le résumé sur la copie ?", choix: ["En plusieurs paragraphes avec un titre", "En un seul paragraphe, avec un alinéa au début", "Sous forme de liste"], bonne: 1, pourquoi: "Le résumé se rédige en un seul bloc, avec un alinéa." },
    { q: "Un texte de 800 mots est à réduire au quart, avec 10 % de marge. Ton résumé doit faire…", choix: ["entre 180 et 220 mots", "entre 720 et 880 mots", "exactement 200 mots"], bonne: 0, pourquoi: "800 ÷ 4 = 200 mots ; 10 % de 200 = 20 ; donc entre 180 et 220 mots." },
    { q: "Combien de mots compte « c'est-à-dire » ?", choix: ["1", "2", "4"], bonne: 2, pourquoi: "On compte comme mot tout ce qui est séparé par un blanc, une apostrophe ou un trait d'union : c', est, à, dire." },
    { q: "Ton résumé est trop long. Que vérifies-tu d'abord ?", choix: ["Que tu n'as pas gardé d'exemples ou d'explications", "Que tu as bien donné ton avis", "Que tu as recopié les phrases clés"], bonne: 0, pourquoi: "Un résumé trop long a souvent gardé des exemples ou des explications à supprimer." }
  ]
};
