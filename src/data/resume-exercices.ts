// Exercices du résumé de texte : textes corrigés pas à pas et textes d'entraînement pour l'atelier.
// Source des textes et des sujets : le livre de l'auteur, « Secret Français Terminale ».
// La méthode suivie est celle des leçons : comprendre, répondre aux questions, résumer, production écrite.

import { BEBEY } from "./resume";
import { TEXTES_RS } from "./resume-textes";

export type Verbe = "étayer" | "réfuter" | "discuter";

/** Une idée essentielle : les phrases du texte qui la portent (début exact de chaque phrase), et sa reformulation. */
export interface IdeeRS { cles: string[]; reformulation: string }
export interface ArgumentPE { argument: string; explication: string; exemple: string }

export interface ProductionRS {
  verbe: Verbe;
  /** Le sujet tel qu'il est posé. */
  consigne: string;
  citation: string;
  theme: string;
  these: string;
  /** L'introduction rédigée avec la formule de la leçon. */
  intro: string;
  /** Corrigés : la production entière. Entraînement : seulement des pistes. */
  phrase?: string;
  arguments?: ArgumentPE[];
  transition?: string;
  bilan?: string;
  jugement?: string;
  ouverture?: string;
  pistes?: string[];
}

export interface ExerciceRS {
  id: string;
  titre: string;
  auteur: string;
  source: string;
  date?: string;
  /** Nombre de mots annoncé par le sujet. */
  mots: number;
  fraction: 4 | 3;
  texte: string;
  note?: string;
  corrige: boolean;
  paratexte: string;
  theme: string;
  these: string;
  visee: string;
  enonciation: string;
  structure: [string, string][];
  questions: { q: string; reponse: string }[];
  idees: IdeeRS[];
  enchainement: string;
  resume: string;
  pe: ProductionRS;
}

export const NOMS_VERBES: Record<Verbe, string> = { "étayer": "Étayer", "réfuter": "Réfuter", "discuter": "Discuter" };

export const EXERCICES_RS: ExerciceRS[] = [
  // ——— Corrigés ———
  {
    id: "divorce",
    corrige: true,
    titre: "Vers un divorce entre Paris et le continent africain ?",
    auteur: "Delphine Lecoutre et Admore Mupoki Kambudzi",
    source: "*Le Monde diplomatique*, juin 2006",
    date: "2006",
    mots: 696, fraction: 4,
    texte: TEXTES_RS.divorce,
    paratexte: "Le titre est une question, avec une image : le « divorce », c'est la séparation d'un couple. La France et l'Afrique sont présentées comme deux époux qui risquent de se séparer. La source, *Le Monde diplomatique*, est un journal d'analyse de l'actualité internationale, et la date, 2006, est récente. Hypothèse : les auteurs vont expliquer pourquoi la relation entre la France et ses anciennes colonies se dégrade, et peut-être dire comment la sauver.",
    theme: "Dans ce texte, on parle de la crise de confiance entre la France et l'Afrique francophone.",
    these: "Les auteurs pensent que beaucoup d'Africains se détournent de la France parce qu'elle a sacrifié leurs intérêts aux siens, et que la France doit refonder sa relation avec eux.",
    visee: "Les auteurs voudraient que la France change sa politique africaine pour regagner la confiance des Africains.",
    enonciation: "Deux auteurs s'expriment à la troisième personne, sans « je » : ils se placent en observateurs. Ils écrivent en 2006 dans un journal d'analyse internationale, pour des lecteurs français et étrangers qui s'intéressent aux relations entre la France et l'Afrique, et aussi pour les responsables politiques.",
    structure: [
      ["Le constat", "Paragraphe 1 : beaucoup d'Africains reprochent à la France de les sacrifier."],
      ["Première cause : l'immigration et la jeunesse", "Paragraphes 2 à 4 : une politique d'immigration humiliante, peu d'avenir pour les jeunes, un lien qui s'efface."],
      ["Deuxième cause : le soutien aux dictateurs", "Paragraphes 5 et 6 : la France protège ses entreprises en soutenant des dictatures, ce qui pousse certains à prendre le pouvoir par la force."],
      ["Troisième cause : moins d'aide", "Paragraphe 7 : la France réduit son aide au continent."],
      ["Quatrième cause : les richesses exploitées", "Paragraphe 8 : les Africains veulent profiter de leurs richesses et conquérir leur indépendance économique."],
      ["La solution", "Paragraphe 9 : la France doit prouver aux Africains qu'ils ont à gagner avec elle."]
    ],
    questions: [
      { q: "Quelle est la thèse développée dans le texte ?", reponse: "La thèse des auteurs est la suivante : beaucoup d'Africains pensent que la France a sacrifié leurs intérêts au profit des siens, et la France doit refonder sa relation avec l'Afrique si elle veut retrouver leur confiance." },
      { q: "Expliquez en contexte la phrase suivante : « Les intérêts économiques de ses grandes entreprises l'incitent (la France) à certaines complaisances. »", reponse: "Cette phrase signifie que, pour protéger les profits de ses grandes entreprises installées en Afrique, la France ferme les yeux sur les fautes de certains régimes et les ménage. Le contexte l'éclaire : la phrase d'avant dit que la France « néglige la nature des régimes en place », et la phrase d'après parle de son « incapacité à se conformer à ses grands discours sur les droits humains ». Les « complaisances », ce sont donc les faveurs que la France accorde aux dictateurs au nom de ses intérêts." }
    ],
    idees: [
      { cles: ["Nombre d'Africains pensent"], reformulation: "Beaucoup d'Africains reprochent à la France de défendre ses intérêts au détriment des leurs" },
      { cles: ["Ils estiment qu'elle s'enferme"], reformulation: "et de tenir des discours coupés de la réalité." },
      { cles: ["Les causes de ces jugements"], reformulation: "Plusieurs raisons expliquent ce jugement sévère." },
      { cles: ["Premièrement, la politique migratoire"], reformulation: "D'abord, sa politique d'immigration, de plus en plus fermée, humilie les Africains." },
      { cles: ["En outre, la France donne peu d'espoir", "Les étudiants francophones s'expatrient"], reformulation: "De plus, elle offre peu d'avenir à leur jeunesse, qui part étudier en Amérique du Nord." },
      { cles: ["Progressivement, le sentiment"], reformulation: "Ainsi, le lien privilégié avec Paris s'efface au profit du monde anglo-saxon." },
      { cles: ["Deuxièmement, la France a la réputation", "En outre, les intérêts économiques", "Le malaise vient ainsi"], reformulation: "Ensuite, la France soutient les dictateurs pour protéger ses entreprises, trahissant ses discours sur les droits humains." },
      { cles: ["Confrontés à ces incohérences"], reformulation: "Lassés de ces contradictions, des cadres africains sont prêts à prendre le pouvoir par la force pour démocratiser leur pays." },
      { cles: ["Troisièmement, la France paraît diminuer"], reformulation: "Par ailleurs, la France réduit son aide au continent." },
      { cles: ["Quatrièmement, les populations locales", "Elles appellent à une relation équilibrée"], reformulation: "Enfin, les Africains refusent que leurs richesses soient exploitées sans améliorer leur vie : ils réclament un partenariat équitable et d'autres partenaires." },
      { cles: ["Après l'achèvement de la lutte"], reformulation: "Après l'indépendance politique, ils veulent conquérir leur indépendance économique." },
      { cles: ["Il appartient donc à la France", "Entre les deux extrêmes"], reformulation: "Il revient donc à la France de leur prouver qu'ils ont à gagner avec elle, en trouvant un juste milieu entre domination et abandon." },
      { cles: ["Les pays du continent pourraient"], reformulation: "Elle pourrait alors redevenir leur porte-parole privilégié auprès des grandes puissances." }
    ],
    enchainement: "Le texte annonce lui-même ses étapes : « premièrement », « deuxièmement », « troisièmement », « quatrièmement ». Le résumé garde cet ordre avec « d'abord », « ensuite », « par ailleurs », « enfin », plus légers. « Ainsi » marque une conséquence (le lien avec Paris s'efface), et « donc » introduit la solution finale. On ne recopie pas les numéros du texte : on garde le mouvement.",
    resume: "Beaucoup d'Africains reprochent à la France de défendre ses intérêts au détriment des leurs et de tenir des discours coupés de la réalité. Plusieurs raisons expliquent ce jugement sévère. D'abord, sa politique d'immigration, de plus en plus fermée, humilie les Africains. De plus, elle offre peu d'avenir à leur jeunesse, qui part étudier en Amérique du Nord. Ainsi, le lien privilégié avec Paris s'efface au profit du monde anglo-saxon. Ensuite, la France soutient les dictateurs pour protéger ses entreprises, trahissant ses discours sur les droits humains. Lassés de ces contradictions, des cadres africains sont prêts à prendre le pouvoir par la force pour démocratiser leur pays. Par ailleurs, la France réduit son aide au continent. Enfin, les Africains refusent que leurs richesses soient exploitées sans améliorer leur vie : ils réclament un partenariat équitable et d'autres partenaires. Après l'indépendance politique, ils veulent conquérir leur indépendance économique. Il revient donc à la France de leur prouver qu'ils ont à gagner avec elle, en trouvant un juste milieu entre domination et abandon. Elle pourrait alors redevenir leur porte-parole privilégié auprès des grandes puissances.",
    pe: {
      verbe: "étayer",
      consigne: "Dans un développement organisé et argumenté, vous étayerez ces propos : « Après l'achèvement de la lutte pour la libération politique, c'est désormais le combat pour l'émancipation économique et pour le développement du continent que nombre d'Africains ont envie de mener. »",
      citation: "Après l'achèvement de la lutte pour la libération politique, c'est désormais le combat pour l'émancipation économique et pour le développement du continent que nombre d'Africains ont envie de mener.",
      theme: "Dans cette citation, on parle de l'indépendance économique de l'Afrique.",
      these: "Les auteurs pensent qu'après avoir obtenu leur indépendance politique, beaucoup d'Africains veulent maintenant que leur continent devienne maître de son économie et se développe.",
      intro: "Dans leur article intitulé « Vers un divorce entre Paris et le continent africain ? », extrait du mensuel *Le Monde diplomatique*, paru en juin 2006, Delphine Lecoutre et Admore Mupoki Kambudzi affirment : « Après l'achèvement de la lutte pour la libération politique, c'est désormais le combat pour l'émancipation économique et pour le développement du continent que nombre d'Africains ont envie de mener. » Dans notre analyse, nous allons étayer cette affirmation.",
      phrase: "La thèse selon laquelle les Africains veulent désormais mener le combat de l'indépendance économique se justifie à plusieurs niveaux.",
      arguments: [
        { argument: "D'abord, les Africains veulent transformer eux-mêmes leurs matières premières.", explication: "Vendre le cacao, le coton ou le minerai à l'état brut, c'est laisser aux usines étrangères l'essentiel de la richesse. Les transformer sur place crée des emplois, des industries, et permet de vendre plus cher.", exemple: "Ainsi, la Côte d'Ivoire, premier producteur mondial de cacao, développe le broyage de ses fèves sur son sol, pour que le chocolat ne rapporte plus seulement aux usines d'Europe." },
        { argument: "Ensuite, ils cherchent à diversifier leurs partenaires.", explication: "Un pays qui dépend d'un seul partenaire doit accepter ses conditions. Avec plusieurs partenaires, il peut comparer, négocier et choisir l'offre la plus avantageuse.", exemple: "Depuis les années 2000, de nombreux pays africains signent des accords avec la Chine, l'Inde, la Turquie ou les pays du Golfe pour construire des routes, des ports et des barrages." },
        { argument: "Enfin, ils veulent maîtriser leur monnaie et unir leurs marchés.", explication: "Une monnaie est un signe de souveraineté : celui qui la contrôle décide de sa politique économique. Un grand marché commun permet aussi aux Africains de commercer entre eux au lieu de tout vendre au-dehors.", exemple: "Le débat sur la réforme du franc CFA en Afrique de l'Ouest et la création de la Zone de libre-échange continentale africaine (ZLECAf), lancée en 2019, montrent cette volonté." }
      ],
      bilan: "Au terme de notre analyse, il apparaît que la thèse des auteurs est justifiée : en transformant leurs matières premières, en diversifiant leurs partenaires et en cherchant à maîtriser leur monnaie et leurs marchés, les Africains mènent bien le combat de l'indépendance économique.",
      jugement: "Pour notre part, nous pensons que ce combat ne sera gagné que si les dirigeants africains gèrent leurs richesses avec rigueur et honnêteté.",
      ouverture: "Mais la jeunesse africaine, tentée par l'exil, restera-t-elle pour construire cette économie ?"
    }
  },
  {
    id: "revel",
    corrige: true,
    titre: "La connaissance inutile",
    auteur: "Jean-François Revel",
    source: "*La Connaissance inutile*, 1988",
    date: "1988",
    mots: 506, fraction: 4,
    texte: TEXTES_RS.revel,
    paratexte: "Le titre surprend : on dit toujours que le savoir est utile. L'auteur, Jean-François Revel, est un philosophe et journaliste français, et le texte vient de son essai du même nom, paru en 1988, à l'époque où la télévision et l'information de masse se multiplient. Hypothèse : l'auteur va montrer que l'abondance de connaissances ne rend pas forcément les hommes plus sages.",
    theme: "Dans ce texte, on parle de la place de l'information et de la connaissance dans la civilisation du XXe siècle.",
    these: "L'auteur pense que notre siècle dispose de plus de connaissances que jamais, mais que ce progrès du savoir n'a pas forcément rendu l'humanité plus sage, car le mensonge reste la première force qui mène le monde.",
    visee: "L'auteur voudrait que le lecteur se méfie de l'idée que plus d'information produit forcément de meilleures décisions.",
    enonciation: "Jean-François Revel parle en essayiste. Il dit « notre siècle », « nous couvrent » : il s'inclut parmi les hommes de son temps et parle au lecteur cultivé de son époque, en 1988.",
    structure: [
      ["Une thèse qui surprend", "Phrase 1 : le mensonge est la première force qui mène le monde."],
      ["Une civilisation du savoir", "Fin du paragraphe 1 et paragraphe 2 : notre siècle repose sur la connaissance et la démocratie ; l'information, même mal répartie, n'a jamais tant compté."],
      ["La question posée", "Paragraphe 3 : ce savoir a-t-il rendu l'humanité plus sage ?"],
      ["Le progrès du savoir et de l'information", "Paragraphe 4 et début du paragraphe 5 : plus de connaissances, mieux diffusées, à tous."],
      ["Le doute final", "Fin du paragraphe 5 : logiquement, l'humanité devrait être plus sage. Mais l'est-elle ?"]
    ],
    questions: [
      { q: "Quel est le sens de l'expression « le mensonge » dans ce texte ?", reponse: "Dans ce texte, « le mensonge » désigne tout ce qui trompe les hommes : les fausses informations et les vérités cachées. L'auteur le place dès la première phrase avant toutes les autres forces, ce qui annonce son idée : malgré l'abondance du savoir, les hommes restent menés par ce qui les trompe." },
      { q: "Quel est le sens de l'expression « prépondérance de la connaissance » ?", reponse: "« La prépondérance de la connaissance » signifie que le savoir occupe la première place dans notre civilisation : il pèse plus que tout le reste. Le contexte le montre : la phrase d'avant dit que le rôle de l'information est « plus important, plus constant et plus général qu'aux époques antérieures »." }
    ],
    idees: [
      { cles: ["La première de toutes les forces"], reformulation: "Le mensonge est la première force qui gouverne le monde." },
      { cles: ["La civilisation du XXe siècle"], reformulation: "Pourtant, notre siècle repose sur le savoir et sur la démocratie, qui l'offre à tous." },
      { cles: ["Sans doute, comme la démocratie"], reformulation: "Certes, la liberté d'informer reste inégalement partagée," },
      { cles: ["Mais, si lacunaire"], reformulation: "mais l'information pèse aujourd'hui plus que jamais sur les décisions des hommes." },
      { cles: ["Il est donc intéressant"], reformulation: "Il faut donc vérifier si cette abondance de savoir a rendu l'humanité plus sage," },
      { cles: ["La question importe"], reformulation: "d'autant que l'information deviendra le centre de notre civilisation." },
      { cles: ["En notre siècle", "En d'autres termes"], reformulation: "En effet, le savoir a progressé et s'est largement diffusé" },
      { cles: ["D'abord l'enseignement"], reformulation: ": on étudie plus longtemps et les médias se multiplient." },
      { cles: ["Qu'il s'agisse de vulgariser"], reformulation: "L'information, de plus en plus égalitaire, réduit l'écart entre gouvernants et gouvernés." },
      { cles: ["La supériorité de notre siècle"], reformulation: "Les dirigeants décident donc mieux informés, et le public peut juger leurs choix." },
      { cles: ["Une si faste convergence"], reformulation: "Logiquement, l'humanité aurait dû devenir plus sage et plus heureuse." },
      { cles: ["En est-il ainsi"], reformulation: "Rien n'est moins sûr." }
    ],
    enchainement: "« Pourtant » oppose la première phrase (le mensonge) à tout ce qui suit (le savoir). « Certes… mais » reprend la concession du texte (« sans doute… mais »). « Donc » et « d'autant que » posent la question. « En effet » introduit les preuves du progrès. La question finale du texte devient une affirmation courte : « Rien n'est moins sûr. »",
    resume: "Le mensonge est la première force qui gouverne le monde. Pourtant, notre siècle repose sur le savoir et sur la démocratie, qui l'offre à tous. Certes, la liberté d'informer reste inégalement partagée, mais l'information pèse aujourd'hui plus que jamais sur les décisions des hommes. Il faut donc vérifier si cette abondance de savoir a rendu l'humanité plus sage, d'autant que l'information deviendra le centre de notre civilisation. En effet, le savoir a progressé et s'est largement diffusé : on étudie plus longtemps et les médias se multiplient. L'information, de plus en plus égalitaire, réduit l'écart entre gouvernants et gouvernés. Les dirigeants décident donc mieux informés, et le public peut juger leurs choix. Logiquement, l'humanité aurait dû devenir plus sage et plus heureuse. Rien n'est moins sûr.",
    pe: {
      verbe: "réfuter",
      consigne: "Réfutez cette affirmation de Jean-François Revel : « La machine universelle à informer devient de plus en plus égalitaire et généreuse. »",
      citation: "La machine universelle à informer devient de plus en plus égalitaire et généreuse.",
      theme: "Dans cette citation, on parle de l'information de masse et de l'égalité entre les hommes.",
      these: "L'auteur pense que les moyens d'information donnent à tous, de plus en plus, les mêmes informations, et en abondance.",
      intro: "Dans son texte intitulé « La connaissance inutile », extrait de son essai *La Connaissance inutile*, paru en 1988, Jean-François Revel affirme : « La machine universelle à informer devient de plus en plus égalitaire et généreuse. » Dans notre analyse, nous allons réfuter cette affirmation.",
      phrase: "Il n'est pas justifiable de dire que la machine universelle à informer devient de plus en plus égalitaire et généreuse.",
      arguments: [
        { argument: "D'abord, l'accès à l'information reste très inégal.", explication: "Pour s'informer aujourd'hui, il faut un appareil, de l'électricité, une connexion, de l'argent pour payer les données, et savoir lire. Tous ne réunissent pas ces conditions.", exemple: "Dans beaucoup de villages africains, une grande partie de la population n'a toujours pas accès à Internet, et le prix des forfaits prive de nombreux élèves des ressources en ligne que d'autres consultent chaque jour." },
        { argument: "Ensuite, l'information n'est pas généreuse : elle est souvent un commerce.", explication: "Les médias vivent de la publicité et de l'audience. Ils choisissent ce qui fait vendre plutôt que ce qui instruit, et les meilleures enquêtes sont réservées à ceux qui paient.", exemple: "Les grands journaux en ligne réservent leurs articles à leurs abonnés, tandis que sur les réseaux sociaux, les vidéos qui choquent circulent bien plus que les explications sérieuses." },
        { argument: "Enfin, l'abondance d'information n'apporte pas l'égalité du savoir : elle trompe autant qu'elle instruit.", explication: "Trop d'informations noient l'essentiel, et les fausses nouvelles se mêlent aux vraies. Celui qui sait trier en profite ; celui qui ne sait pas se laisse manipuler. L'écart entre les deux se creuse.", exemple: "Pendant la pandémie de Covid-19, de fausses nouvelles sur de prétendus remèdes ont circulé sur WhatsApp et ont trompé de nombreuses personnes." }
      ],
      bilan: "Au terme de notre analyse, il apparaît que la thèse de Jean-François Revel ne résiste pas à l'examen : l'accès à l'information reste inégal, l'information est souvent un commerce, et son abondance trompe autant qu'elle instruit.",
      jugement: "Pour notre part, nous pensons que l'information ne deviendra vraiment égalitaire que si l'école apprend à chacun à la chercher et à la vérifier.",
      ouverture: "Mais l'intelligence artificielle, qui répond à toutes nos questions, rendra-t-elle le savoir plus juste ou plus trompeur ?"
    }
  },
  {
    id: "tourisme",
    corrige: true,
    titre: "Le tourisme, une rencontre manquée ?",
    auteur: "Abdelwahab Bouhdiba",
    source: "*Le Courrier de l'UNESCO*, février 1981",
    date: "1981",
    mots: 770, fraction: 4,
    texte: TEXTES_RS.tourisme,
    paratexte: "Le titre est une question : le tourisme devrait être une rencontre, mais l'est-il vraiment ? L'auteur est professeur de sociologie à l'université de Tunis : il parle d'un pays qui reçoit beaucoup de touristes. La source est le journal de l'UNESCO, l'organisation des Nations unies pour l'éducation et la culture, qui veut rapprocher les peuples. Hypothèse : l'auteur va montrer que le tourisme ne rapproche pas vraiment les hommes.",
    theme: "Dans ce texte, on parle des effets du tourisme sur les sociétés pauvres qui accueillent les touristes.",
    these: "L'auteur pense que le tourisme bouleverse les sociétés pauvres en y apportant la société de consommation, et qu'il manque son but le plus beau : la vraie rencontre entre les hommes.",
    visee: "L'auteur voudrait que le tourisme devienne une vraie rencontre entre les peuples, et non une simple promenade.",
    enonciation: "Abdelwahab Bouhdiba, sociologue tunisien, parle au nom de son pays : « notre société », « nos jeunes délinquants », « mon pays ». Il s'adresse en 1981 aux lecteurs du monde entier du journal de l'UNESCO, donc aussi aux pays d'où viennent les touristes.",
    structure: [
      ["Le choc de la société de consommation", "Paragraphe 1 : le touriste riche gaspille au milieu de la pauvreté, et ses objets font rêver."],
      ["Tourisme et délinquance", "Paragraphe 2 : la tentation qu'il crée pousse des jeunes à la délinquance."],
      ["Tourisme et mœurs", "Paragraphe 3 : il change les habitudes, mais il n'est pas seul en cause."],
      ["Un accélérateur", "Paragraphe 4 : il accélère une modernisation inévitable et crée des besoins trop tôt."],
      ["La rencontre espérée", "Paragraphe 5 et début du paragraphe 6 : le tourisme devrait permettre de rencontrer l'autre."],
      ["La rencontre manquée", "Fin du paragraphe 6 et paragraphe 7 : le touriste vient pour le pays, pas pour les hommes."]
    ],
    questions: [
      { q: "Expliquez en contexte : « Il (le touriste) introduit un comportement de société de gaspillage au sein d'une société en pénurie. »", reponse: "Cette phrase signifie que le touriste, venu d'un pays riche où l'on consomme sans compter, dépense sans retenue dans un pays où beaucoup manquent du nécessaire. Le contexte le montre : la phrase d'avant dit qu'il « change de cadre, de régime » après avoir « trimé » toute l'année, et la phrase d'après parle du « choc des sociétés riches sur les sociétés pauvres »." },
      { q: "Expliquez en contexte l'expression « besoins prématurés ».", reponse: "Les « besoins prématurés » sont des envies qui apparaissent trop tôt, avant que la société ait les moyens de les satisfaire. La phrase d'avant le dit : l'idéal serait que les nouveaux besoins n'apparaissent pas « avant que la société ait dégagé les moyens d'y faire face ». Le tourisme crée des richesses, mais il fait naître des désirs de consommation plus vite encore." }
    ],
    idees: [
      { cles: ["Avec le tourisme, les tendances"], reformulation: "Le tourisme fait entrer la société de consommation dans notre pays." },
      { cles: ["Ce faisant, il introduit"], reformulation: "Le touriste, travailleur en vacances, gaspille au milieu de la pauvreté." },
      { cles: ["Ce choc des sociétés riches", "Il est une réalité quotidienne"], reformulation: "Ce choc entre riches et pauvres est une réalité de chaque jour :" },
      { cles: ["Le moindre petit objet", "Il y a, à bien réfléchir"], reformulation: "ses moindres objets font rêver ceux qui le servent, et cette tentation est dangereuse." },
      { cles: ["Ainsi, dans une enquête", "Nous avions alors souligné"], reformulation: "C'est pourquoi le tourisme favorise la délinquance des jeunes, poussés non par la faim mais par de nouveaux désirs." },
      { cles: ["Autre aspect, le rôle du tourisme"], reformulation: "Il transforme aussi les mœurs, en attirant la jeunesse locale dans ses lieux de divertissement." },
      { cles: ["On aurait tort cependant", "Si l'impact du tourisme"], reformulation: "Pourtant, il serait injuste de lui imputer tous les maux :" },
      { cles: ["Le facteur touristique précipite", "C'est un catalyseur"], reformulation: "il ne fait qu'accélérer une modernisation inévitable." },
      { cles: ["Le problème est surtout de savoir", "En tant qu'industrie"], reformulation: "Mais, en faisant naître des besoins plus vite que les moyens d'y répondre, il risque d'emballer une société déjà fragile." },
      { cles: ["Le problème demeure de savoir"], reformulation: "Reste à savoir s'il peut prospérer dans l'austérité." },
      { cles: ["Sur un autre plan", "Le tourisme est un moyen d'accès"], reformulation: "Par ailleurs, le tourisme devrait permettre de rencontrer l'autre, mais cette rencontre est manquée." },
      { cles: ["Aussi l'éducation du public"], reformulation: "On éduque donc les populations à l'accueil, mais aussi à la dignité." },
      { cles: ["Aussi voudrions-nous", "Et il faut qu'il en soit ainsi"], reformulation: "Nous voudrions une vraie rencontre, où chacun se découvre au contact de l'autre." },
      { cles: ["Malheureusement, il n'en va pas", "Le touriste, au fond"], reformulation: "Hélas, le touriste vient voir le pays, non les hommes." },
      { cles: ["Finalement, le touriste est un homme", "Et d'ailleurs que cherche-t-il"], reformulation: "Il passe sans rien voir et ne cherche qu'à confirmer ses préjugés et à retrouver son confort." }
    ],
    enchainement: "Le texte a deux grands mouvements : les effets du tourisme sur la société, puis la rencontre manquée. « C'est pourquoi » relie la tentation à la délinquance. « Pourtant » reprend la nuance de l'auteur (« on aurait tort cependant »), puis « mais » le danger des besoins nouveaux. « Par ailleurs » ouvre le second mouvement (« sur un autre plan »), et « hélas » traduit « malheureusement ». La question finale du texte devient une affirmation.",
    resume: "Le tourisme fait entrer la société de consommation dans notre pays. Le touriste, travailleur en vacances, gaspille au milieu de la pauvreté. Ce choc entre riches et pauvres est une réalité de chaque jour : ses moindres objets font rêver ceux qui le servent, et cette tentation est dangereuse. C'est pourquoi le tourisme favorise la délinquance des jeunes, poussés non par la faim mais par de nouveaux désirs. Il transforme aussi les mœurs, en attirant la jeunesse locale dans ses lieux de divertissement. Pourtant, il serait injuste de lui imputer tous les maux : il ne fait qu'accélérer une modernisation inévitable. Mais, en faisant naître des besoins plus vite que les moyens d'y répondre, il risque d'emballer une société déjà fragile. Reste à savoir s'il peut prospérer dans l'austérité. Par ailleurs, le tourisme devrait permettre de rencontrer l'autre, mais cette rencontre est manquée. On éduque donc les populations à l'accueil, mais aussi à la dignité. Nous voudrions une vraie rencontre, où chacun se découvre au contact de l'autre. Hélas, le touriste vient voir le pays, non les hommes. Il passe sans rien voir et ne cherche qu'à confirmer ses préjugés et à retrouver son confort.",
    pe: {
      verbe: "discuter",
      consigne: "Dans un développement organisé et argumenté, vous discuterez cette affirmation : « Le tourisme est une rencontre manquée. »",
      citation: "Le tourisme est une rencontre manquée.",
      theme: "Dans cette citation, on parle du tourisme et de la rencontre entre les peuples.",
      these: "L'auteur pense que le tourisme ne permet pas une vraie rencontre entre le touriste et les habitants du pays qu'il visite.",
      intro: "Dans son texte intitulé « Le tourisme, une rencontre manquée ? », extrait du *Courrier de l'UNESCO*, paru en février 1981, Abdelwahab Bouhdiba affirme : « Le tourisme est une rencontre manquée. » Dans notre analyse, nous allons discuter cette affirmation.",
      phrase: "La thèse selon laquelle le tourisme est une rencontre manquée est juste à bien des égards, mais elle a ses limites.",
      arguments: [
        { argument: "D'abord, le touriste vient souvent consommer un décor plutôt que rencontrer des hommes.", explication: "Les séjours organisés, les circuits en car et les hôtels fermés sur eux-mêmes lui montrent des paysages, pas des gens. Ses rapports avec les habitants se limitent au service.", exemple: "Dans de nombreux hôtels « tout compris » au bord de la mer, les vacanciers ne sortent presque jamais de l'enceinte : les seuls habitants qu'ils côtoient sont les serveurs et les vendeurs de souvenirs." },
        { argument: "Ensuite, l'argent rend la relation inégale.", explication: "L'un paie, l'autre sert. La relation devient commerciale, et la culture locale se transforme en spectacle à vendre, arrangé pour plaire au visiteur.", exemple: "Certaines danses traditionnelles sont jouées chaque soir pour les touristes, coupées de leur sens rituel, comme un numéro de cabaret." },
        { argument: "En effet, beaucoup de voyageurs cherchent vraiment l'autre.", explication: "Le séjour chez l'habitant, le tourisme solidaire, l'apprentissage de quelques mots de la langue permettent de partager la vie des gens et de créer des liens qui durent.", exemple: "Au Sénégal, en Casamance, des campements villageois accueillent des voyageurs qui vivent au rythme du village et participent à sa vie." },
        { argument: "De plus, certaines rencontres touristiques changent durablement les regards.", explication: "Quand le voyageur vient pour une fête, un festival, un artisanat, il rencontre des artistes et des habitants, et repart avec une autre image du pays.", exemple: "À Abidjan, le Marché des arts du spectacle (MASA) et le Festival des musiques urbaines d'Anoumabo (FEMUA) attirent des visiteurs du monde entier, qui découvrent la culture ivoirienne au contact de ceux qui la font vivre." }
      ],
      transition: "Cependant, cette thèse a ses limites.",
      bilan: "Au terme de notre analyse, il apparaît que la thèse d'Abdelwahab Bouhdiba n'est vraie qu'en partie : le tourisme de masse, qui consomme des décors et achète des services, manque bien la rencontre ; mais le voyage curieux et solidaire, comme les grandes fêtes culturelles, permet encore de vraies rencontres.",
      jugement: "Pour notre part, nous pensons que la rencontre n'est jamais manquée d'avance : elle dépend de la curiosité du voyageur et de l'accueil de l'hôte.",
      ouverture: "Mais à l'heure où l'on visite le monde depuis son téléphone, aurons-nous encore envie de voyager pour rencontrer l'autre ?"
    }
  },

  // ——— Entraînement ———
  {
    id: "bebey",
    corrige: false,
    titre: "Tradition orale et écriture",
    auteur: "Francis Bebey",
    source: "Avant-propos de la revue *Recherche, Pédagogie et Culture*, n° 29-30, mai-août 1977",
    date: "1977",
    mots: 610, fraction: 4,
    texte: BEBEY.texte,
    note: BEBEY.note,
    paratexte: "Le titre met face à face la parole et l'écrit. L'auteur est un artiste africain, venu d'une culture où la parole compte énormément. La revue parle de pédagogie et de culture, et 1977 est l'époque où l'Afrique revalorise ses cultures. Hypothèse : l'auteur va défendre la tradition orale face à l'écriture.",
    theme: "Dans ce texte, on parle de la place de la tradition orale face à l'écriture dans le développement des sociétés.",
    these: "L'auteur pense que la tradition orale n'est pas un frein au progrès : elle fonde les sociétés et leur diversité, et l'écriture elle-même est née d'elle.",
    visee: "L'auteur voudrait que ses lecteurs cessent de mépriser la tradition orale et reconnaissent qu'elle est à l'origine de l'écriture.",
    enonciation: "Francis Bebey, écrivain et musicien africain, s'efface derrière des phrases générales au présent et dit parfois « nous ». Il s'adresse en 1977 aux lecteurs d'une revue de pédagogie : enseignants, chercheurs, éducateurs.",
    structure: [
      ["Une tradition universelle", "Paragraphe 1 : tous les peuples ont une tradition orale, base de toute société."],
      ["La gardienne de la diversité", "Paragraphe 2 : elle garde l'originalité de chaque peuple."],
      ["Une force qui ne freine pas le progrès", "Paragraphe 3 : elle enrichit la vie, peut diviser, mais n'empêche pas le développement."],
      ["La preuve par l'Égypte", "Paragraphe 4 (début) : elle a porté la civilisation égyptienne."],
      ["L'écrit, moteur des sciences", "Fin du paragraphe 4 et paragraphe 5 : certes, l'écrit est un progrès."],
      ["L'oral, père de l'écrit", "Paragraphe 6 : mais l'écrit est né de la parole."]
    ],
    questions: [
      { q: "Quel est le thème de ce texte ?", reponse: "Le thème abordé dans ce texte est la place de la tradition orale face à l'écriture dans le développement des sociétés." },
      { q: "Expliquez en contexte l'expression « la force réfractaire du milieu ethnique ».", reponse: "Dans ce texte, l'expression « la force réfractaire du milieu ethnique » désigne la capacité des petits groupes ethniques à résister à l'uniformisation que tente de leur imposer le monde extérieur. La phrase d'avant dit que la tradition orale préserve « les différences entre communautés », et la phrase d'après montre que, grâce à cette force, des langues comme le bambara ou le lingala restent vivantes." }
    ],
    idees: [
      { cles: ["Tous les peuples de la terre"], reformulation: "La tradition orale est universelle." },
      { cles: ["Mais en tout état de cause"], reformulation: "Elle est le socle de toute société humaine." },
      { cles: ["Aujourd'hui encore", "Souvent, c'est cette tradition orale"], reformulation: "C'est elle qui garantit l'originalité de chaque culture, y compris dans les civilisations de l'écriture." },
      { cles: ["En préservant et perpétuant"], reformulation: "En assurant ainsi la vitalité des diversités culturelles, elle embellit la vie." },
      { cles: ["Elle oppose à la civilisation"], reformulation: "C'est grâce à elle que les groupes restreints peuvent résister à l'uniformisation que tente de leur imposer le monde extérieur." },
      { cles: ["Force perpétuellement en mouvement"], reformulation: "Toutefois, malgré cette force, les différences identitaires peuvent quelquefois générer des conflits intracommunautaires." },
      { cles: ["Mais, malgré cela"], reformulation: "Pour autant, l'histoire en témoigne, la tradition orale ne saurait entraver le progrès." },
      { cles: ["Elle fut pendant très longtemps"], reformulation: "À preuve, son rôle déterminant dans l'expansion de la culture égyptienne antique." },
      { cles: ["Certes, l'écrit représente"], reformulation: "Le développement, reconnaissons-le, passe par l'écriture." },
      { cles: ["Il est douteux que l'algèbre", "C'est dire combien l'écrit"], reformulation: "L'exemple de l'évolution scientifique, qui nous conduit manifestement vers la connaissance authentique, l'atteste." },
      { cles: ["Mais l'écrit n'existerait pas", "Si l'homme était né muet"], reformulation: "Mais l'écriture n'aurait jamais existé si l'oralité ne l'avait fécondée." }
    ],
    enchainement: "« Toutefois », « pour autant », « reconnaissons-le » (la concession) et « mais » reproduisent les mouvements du texte : un danger admis, la thèse réaffirmée, la concession sur l'écrit, puis le retournement final.",
    resume: "La tradition orale est universelle. Elle est le socle de toute société humaine. C'est elle qui garantit l'originalité de chaque culture, y compris dans les civilisations de l'écriture. En assurant ainsi la vitalité des diversités culturelles, elle embellit la vie. C'est grâce à elle que les groupes restreints peuvent résister à l'uniformisation que tente de leur imposer le monde extérieur. Toutefois, malgré cette force, les différences identitaires peuvent quelquefois générer des conflits intracommunautaires. Pour autant, l'histoire en témoigne, la tradition orale ne saurait entraver le progrès. À preuve, son rôle déterminant dans l'expansion de la culture égyptienne antique. Le développement, reconnaissons-le, passe par l'écriture. L'exemple de l'évolution scientifique, qui nous conduit manifestement vers la connaissance authentique, l'atteste. Mais l'écriture n'aurait jamais existé si l'oralité ne l'avait fécondée.",
    pe: {
      verbe: "réfuter",
      consigne: "Réfutez cette affirmation de l'auteur : « La tradition orale n'est pas un frein à l'éclosion et au développement d'une société. »",
      citation: "La tradition orale n'est pas un frein à l'éclosion et au développement d'une société.",
      theme: "Dans cette citation, on parle de la tradition orale et du développement des sociétés.",
      these: "L'auteur pense que la tradition orale ne bloque ni la naissance ni le progrès d'une société.",
      intro: "Dans son texte intitulé « Tradition orale et écriture », extrait de la revue *Recherche, Pédagogie et Culture*, paru en 1977, Francis Bebey affirme : « La tradition orale n'est pas un frein à l'éclosion et au développement d'une société. » Dans notre analyse, nous allons réfuter cette affirmation.",
      pistes: [
        "Le respect absolu de la coutume peut étouffer l'initiative et la créativité : ce qui est nouveau est vu comme une menace.",
        "La tradition orale transmet aussi des croyances et des préjugés qui empêchent de raisonner : par exemple, attribuer une maladie à un sort plutôt que d'aller à l'hôpital.",
        "Elle peut enfermer chacun dans son groupe : favoritisme envers les siens, méfiance envers les autres, conflits entre communautés."
      ]
    }
  },
  {
    id: "images",
    corrige: false,
    titre: "Faut-il vraiment se méfier des images ?",
    auteur: "",
    source: "Texte proposé au bac (auteur non indiqué)",
    mots: 359, fraction: 4,
    texte: TEXTES_RS.images,
    paratexte: "Le titre est une question qui met en doute une idée reçue : on dit souvent qu'il faut se méfier des images. Le mot « vraiment » laisse deviner la réponse de l'auteur. Hypothèse : le texte va montrer que les images ont moins de pouvoir qu'on le croit.",
    theme: "Dans ce texte, on parle du pouvoir des images de propagande sur les foules.",
    these: "L'auteur pense que les images de propagande sont moins efficaces qu'on le croit : des individus leur résistent toujours, et elles ne fonctionnent que dans un contexte précis.",
    visee: "L'auteur voudrait que le lecteur cesse de croire que les images manipulent forcément les foules.",
    enonciation: "L'auteur ne dit jamais « je » : il s'exprime de façon neutre, comme un historien, et pose des questions au lecteur pour le faire réfléchir.",
    structure: [
      ["Une croyance discutée", "Paragraphe 1 : la propagande passe pour asservir les esprits, mais l'effet réel des images est discuté."],
      ["L'histoire de la propagande", "Paragraphes 2 et 3 : née en 1914, poussée à l'extrême par les dictatures, elle joue sur l'émotion et la mise en scène."],
      ["La question de son efficacité", "Paragraphe 4 : le pouvoir veut diriger les esprits, mais y parvient-il ?"],
      ["La réponse", "Paragraphe 5 : des individus résistent toujours ; la force des images dépend du contexte."]
    ],
    questions: [
      { q: "Relevez la phrase qui exprime la thèse de l'auteur.", reponse: "La phrase qui exprime le mieux la thèse de l'auteur est : « En ce sens, l'importance de la diffusion des images de propagande tient moins à leur impact réel sur les foules, qu'à la croyance en la réalité d'un tel impact. »" },
      { q: "Expliquez en contexte l'expression « moyen d'asservissement politique ».", reponse: "Cette expression désigne un moyen de soumettre un peuple au pouvoir politique, de le rendre esclave. Le contexte l'éclaire : la phrase d'avant dit que la propagande cherche à « convaincre le grand public », et l'expression est suivie d'« aliénation idéologique et inconsciente », c'est-à-dire d'une perte de la liberté de penser sans qu'on s'en rende compte." }
    ],
    idees: [
      { cles: ["La propagande est l'utilisation", "Elle passe souvent pour"], reformulation: "La propagande, qui diffuse des idées politiques par des moyens modernes, passe pour asservir les esprits." },
      { cles: ["Mais quel est l'effet réel", "Les images favorisent-elles", "Cette très ancienne croyance"], reformulation: "Mais l'effet des images sur les foules est aujourd'hui contesté." },
      { cles: ["La Première Guerre mondiale invente", "Mais la propagande par l'image"], reformulation: "Née pendant la Grande Guerre, elle a été poussée à l'extrême par les dictatures," },
      { cles: ["Jouant sur l'émotion"], reformulation: "qui jouent sur l'émotion et la mise en scène," },
      { cles: ["La propagande totalitaire ira", "Le pouvoir entend donc"], reformulation: "jusqu'à truquer les photographies pour diriger les esprits." },
      { cles: ["Mais la propagande est-elle", "Parvient-elle réellement"], reformulation: "Son efficacité reste pourtant douteuse." },
      { cles: ["Certes, certaines périodes"], reformulation: "Certes, certaines époques croient aux images," },
      { cles: ["Mais il existe toujours"], reformulation: "mais des individus leur résistent toujours." },
      { cles: ["En ce sens, l'importance"], reformulation: "Leur force tient donc surtout à la croyance en leur impact," },
      { cles: ["Finalement, les images"], reformulation: "et n'existe que dans un contexte précis." }
    ],
    enchainement: "« Mais » marque le doute du premier paragraphe. Les questions du texte deviennent des affirmations : « est aujourd'hui contesté », « reste pourtant douteuse ». « Certes… mais » reprend la concession du dernier paragraphe, et « donc » la conclusion.",
    resume: "La propagande, qui diffuse des idées politiques par des moyens modernes, passe pour asservir les esprits. Mais l'effet des images sur les foules est aujourd'hui contesté. Née pendant la Grande Guerre, elle a été poussée à l'extrême par les dictatures, qui jouent sur l'émotion et la mise en scène, jusqu'à truquer les photographies pour diriger les esprits. Son efficacité reste pourtant douteuse. Certes, certaines époques croient aux images, mais des individus leur résistent toujours. Leur force tient donc surtout à la croyance en leur impact, et n'existe que dans un contexte précis.",
    pe: {
      verbe: "étayer",
      consigne: "Étayez l'affirmation selon laquelle « il existe toujours des résistances individuelles aux images de propagande ».",
      citation: "Il existe toujours des résistances individuelles aux images de propagande.",
      theme: "Dans cette citation, on parle de la résistance des individus à la propagande.",
      these: "L'auteur pense que, même sous la propagande la plus forte, certaines personnes refusent toujours de croire les images qu'on leur impose.",
      intro: "Dans le texte intitulé « Faut-il vraiment se méfier des images ? », l'auteur affirme : « Il existe toujours des résistances individuelles aux images de propagande. » Dans notre analyse, nous allons étayer cette affirmation.",
      pistes: [
        "L'esprit critique et l'éducation permettent de décoder les images : on apprend à repérer une photo truquée ou un montage.",
        "L'expérience vécue contredit la propagande : on voit bien que la vie réelle n'est pas celle des affiches (par exemple les pays du bloc soviétique avant la chute du mur de Berlin, en 1989).",
        "Des opposants répondent par d'autres images : caricatures, tracts, chansons ; par exemple le groupe de la Rose blanche, qui diffusait des tracts contre le nazisme."
      ]
    }
  },
  {
    id: "violence",
    corrige: false,
    titre: "La violence urbaine",
    auteur: "Josyane Savigneau",
    source: "*Le Monde*, Dossiers et documents, 1979",
    date: "1979",
    mots: 327, fraction: 4,
    texte: TEXTES_RS.violence,
    paratexte: "Le titre annonce un sujet qui fait peur : la violence dans les villes. Le texte vient d'un dossier du journal *Le Monde*, en 1979 : un article qui s'appuie sur des faits et des chiffres. Hypothèse : l'auteure va analyser la violence d'aujourd'hui, et peut-être corriger les idées toutes faites sur elle.",
    theme: "Dans ce texte, on parle de la violence au XXe siècle et de la façon dont on la perçoit.",
    these: "L'auteure pense que la violence n'a pas augmenté au XXe siècle, mais que les médias nous la rendent plus visible : elle nous paraît intolérable, et pourtant elle nous fascine.",
    visee: "L'auteure voudrait que le lecteur se méfie de ses peurs et comprenne le rôle des médias dans l'image qu'il se fait de la violence.",
    enonciation: "Josyane Savigneau, journaliste, écrit en 1979 dans *Le Monde* pour un large public. Elle commence par rapporter l'opinion des autres au conditionnel, sans la prendre à son compte, avant de donner son analyse.",
    structure: [
      ["Une impression répandue", "Paragraphe 1 : on croit que la violence est propre au XXe siècle, avec New York pour symbole."],
      ["Une hausse récente", "Paragraphe 2 : sur quelques années, la violence semble avoir augmenté."],
      ["Un recul sur un siècle", "Paragraphe 3 : sur une longue période, elle a diminué, et la peur varie sans lien avec elle."],
      ["Une perception nouvelle", "Paragraphe 4 : ce qui a changé, c'est notre perception, à cause des médias."]
    ],
    questions: [
      { q: "Quelle est la thèse défendue par l'auteure ?", reponse: "La thèse de l'auteure est la suivante : la violence n'a pas augmenté au XXe siècle, mais les médias la rendent plus visible, si bien qu'elle nous paraît intolérable tout en nous fascinant." },
      { q: "Pourquoi l'auteure a-t-elle utilisé le conditionnel dans le premier paragraphe ?", reponse: "L'auteure a utilisé le conditionnel dans le premier paragraphe (« pourrait », « s'étendrait », « seraient nés », « trouverait ») parce qu'elle rapporte une opinion répandue qu'elle ne partage pas. Le conditionnel lui permet de prendre ses distances avec cette idée, qu'elle va ensuite contredire avec les statistiques." }
    ],
    idees: [
      { cles: ["La violence est un phénomène", "Surgie de la société"], reformulation: "On croit que la violence, née de la société de consommation et de ses frustrations, caractérise notre siècle et répand la peur." },
      { cles: ["Le XXe siècle, période de violence"], reformulation: "New York en serait le symbole." },
      { cles: ["Peut-on donner à ces peurs"], reformulation: "Il faut vérifier si ces peurs sont fondées." },
      { cles: ["En additionnant les attaques"], reformulation: "Certes, la violence semble avoir progressé récemment." },
      { cles: ["Mais en examinant une plus longue"], reformulation: "Mais, sur un siècle, elle a reculé," },
      { cles: ["L'examen statistique montre"], reformulation: "et la peur varie sans lien avec elle." },
      { cles: ["La caractéristique de la violence"], reformulation: "Ce qui est nouveau, c'est donc notre perception de la violence :" },
      { cles: ["Par le développement des moyens", "Toute violence individuelle"], reformulation: "grâce aux médias, chacune devient publique." },
      { cles: ["Connue, commentée"], reformulation: "Ainsi connue, elle paraît intolérable," },
      { cles: ["Mais plus que jamais"], reformulation: "mais elle fascine plus que jamais." }
    ],
    enchainement: "« Certes… mais » reproduit la concession du texte : une hausse récente, mais un recul sur un siècle. « Donc » introduit la conclusion de l'auteure. Le dernier « mais » garde l'opposition finale entre « intolérable » et « fascine ».",
    resume: "On croit que la violence, née de la société de consommation et de ses frustrations, caractérise notre siècle et répand la peur. New York en serait le symbole. Il faut vérifier si ces peurs sont fondées. Certes, la violence semble avoir progressé récemment. Mais, sur un siècle, elle a reculé, et la peur varie sans lien avec elle. Ce qui est nouveau, c'est donc notre perception de la violence : grâce aux médias, chacune devient publique. Ainsi connue, elle paraît intolérable, mais elle fascine plus que jamais.",
    pe: {
      verbe: "étayer",
      consigne: "À l'aide d'exemples et d'arguments précis et clairs, vous étayerez l'idée de Josyane Savigneau selon laquelle la violence « plus que jamais […] fascine ».",
      citation: "Mais plus que jamais elle fascine.",
      theme: "Dans cette citation, on parle de l'attirance des hommes pour la violence.",
      these: "L'auteure pense qu'aujourd'hui, plus qu'avant, la violence attire et captive les gens, même s'ils la condamnent.",
      intro: "Dans son article intitulé « La violence urbaine », extrait du journal *Le Monde*, paru en 1979, Josyane Savigneau affirme : « Mais plus que jamais elle [la violence] fascine. » Dans notre analyse, nous allons étayer cette affirmation.",
      pistes: [
        "Les médias vivent de la violence parce qu'elle fait de l'audience : faits divers à la une, chaînes d'information en boucle, vidéos d'agressions parmi les plus partagées sur les réseaux sociaux.",
        "Le divertissement en fait un spectacle : films d'action, séries et jeux vidéo violents comptent parmi les plus grands succès.",
        "La foule elle-même est attirée : attroupements autour d'une bagarre ou d'un accident, téléphones levés pour filmer au lieu d'aider."
      ]
    }
  },
  {
    id: "lwoff",
    corrige: false,
    titre: "Que représente la race ?",
    auteur: "André Lwoff",
    source: "*Le Monde*, 24 avril 1977",
    date: "1977",
    mots: 306, fraction: 4,
    texte: TEXTES_RS.lwoff,
    paratexte: "Le texte s'ouvre sur une question : « Que représente la race ? ». L'auteur, André Lwoff, est un biologiste français, prix Nobel de médecine en 1965. Il écrit dans *Le Monde* en 1977. Hypothèse : un scientifique va répondre à la question de la race avec les arguments de la science, sans doute contre le racisme.",
    theme: "Dans ce texte, on parle de la notion de race du point de vue de la science.",
    these: "L'auteur pense que la science ne permet ni de classer les races ni de parler de races pures : les théories racistes n'ont aucun fondement.",
    visee: "L'auteur voudrait que le lecteur rejette le racisme en comprenant ce que dit vraiment la science.",
    enonciation: "André Lwoff, biologiste et prix Nobel, parle en scientifique : phrases neutres, chiffres, mots de la génétique. Il s'adresse en 1977 au grand public des lecteurs du *Monde*.",
    structure: [
      ["Une seule espèce", "Paragraphe 1 : les races sont des divisions d'une seule espèce ; presque tous les gènes sont communs."],
      ["La race, un mythe social", "Paragraphe 2 : une race est un groupe variable, non une catégorie fixe."],
      ["Ce qui existe vraiment", "Paragraphe 3 : les cultures existent, mais elles s'apprennent ; l'intelligence ne dépend pas de la race."]
    ],
    questions: [
      { q: "Quelle est la visée argumentative de l'auteur ?", reponse: "La visée argumentative de l'auteur est que le lecteur rejette le racisme, en comprenant que la science ne permet ni de hiérarchiser les races ni de parler de races pures." },
      { q: "Relevez dans les deux derniers paragraphes trois indices textuels en rapport avec le thème développé.", reponse: "Trois indices textuels en rapport avec le thème de la race sont : « un groupe d'individus apparentés par intermariage », « la fréquence de certains gènes » et « les différents groupes raciaux »." }
    ],
    idees: [
      { cles: ["L'homme de la rue", "Mais en fait les groupes"], reformulation: "On distingue aisément plusieurs races humaines, mais elles appartiennent toutes à une seule espèce." },
      { cles: ["Chez cette espèce", "En fait, plus de 99", "De plus, la génétique"], reformulation: "Presque tous nos gènes sont communs, et aucune différence entre races n'est fixe." },
      { cles: ["Scientifiquement, une race", "L'idée de race ne correspond"], reformulation: "Une race n'est qu'un groupe dont certains gènes varient : c'est un mythe social plutôt qu'un fait biologique." },
      { cles: ["En revanche, il existe", "La culture est affaire"], reformulation: "Les cultures, elles, existent, mais elles s'apprennent et ne s'héritent pas." },
      { cles: ["La science nous apprend"], reformulation: "L'intelligence ne dépend pas de la race." },
      { cles: ["La théorie de la hiérarchie"], reformulation: "Hiérarchie et pureté des races sont donc des théories sans fondement." }
    ],
    enchainement: "« Mais » corrige l'impression du début (on voit des races, mais il n'y a qu'une espèce). « Elles, … mais » reprend « en revanche ». « Donc » introduit la conclusion de l'auteur.",
    resume: "On distingue aisément plusieurs races humaines, mais elles appartiennent toutes à une seule espèce. Presque tous nos gènes sont communs, et aucune différence entre races n'est fixe. Une race n'est qu'un groupe dont certains gènes varient : c'est un mythe social plutôt qu'un fait biologique. Les cultures, elles, existent, mais elles s'apprennent et ne s'héritent pas. L'intelligence ne dépend pas de la race. Hiérarchie et pureté des races sont donc des théories sans fondement.",
    pe: {
      verbe: "étayer",
      consigne: "Étayez l'affirmation d'André Lwoff selon laquelle « la théorie de la hiérarchie des races aussi bien que celle de la pureté des races est dépourvue de tout fondement ».",
      citation: "La théorie de la hiérarchie des races aussi bien que celle de la pureté des races est dépourvue de tout fondement.",
      theme: "Dans cette citation, on parle des théories racistes.",
      these: "L'auteur pense que l'idée de races supérieures à d'autres, comme celle de races pures, ne repose sur rien de vrai.",
      intro: "Dans son article paru dans le journal *Le Monde*, le 24 avril 1977, André Lwoff affirme : « La théorie de la hiérarchie des races aussi bien que celle de la pureté des races est dépourvue de tout fondement. » Dans notre analyse, nous allons étayer cette affirmation.",
      pistes: [
        "La science le prouve : deux êtres humains, d'où qu'ils viennent, ont un patrimoine génétique presque identique (travaux sur le génome humain, achevés en 2003).",
        "L'histoire le montre : de grandes civilisations sont nées sur tous les continents (l'Égypte antique, l'empire du Mali, la Chine, les Mayas).",
        "Les peuples se sont toujours mélangés par les migrations et les échanges : aucune race n'est « pure ». Et des hommes et des femmes de toutes origines brillent dans tous les domaines (Wole Soyinka et Wangari Maathai, prix Nobel)."
      ]
    }
  },
  {
    id: "lecomte",
    corrige: false,
    titre: "Relations sociales en danger",
    auteur: "Bernard Lecomte",
    source: "*Communication et nouvelles technologies*, 1984",
    date: "1984",
    mots: 691, fraction: 4,
    texte: TEXTES_RS.lecomte,
    paratexte: "Le titre sonne comme une alerte : nos relations avec les autres seraient menacées. Le livre d'où vient le texte parle des nouvelles technologies, en 1984, au moment où l'ordinateur et les écrans entrent dans les foyers. Hypothèse : l'auteur va montrer que les nouvelles techniques de communication risquent d'éloigner les hommes.",
    theme: "Dans ce texte, on parle des effets des nouvelles techniques de communication sur les relations humaines.",
    these: "L'auteur pense que les nouvelles techniques de communication rapprochent les hommes, mais qu'en remplaçant l'expérience vécue par des écrans, elles risquent de déshumaniser les relations sociales.",
    visee: "L'auteur voudrait que l'on réfléchisse à cette évolution et que l'on cultive chez les jeunes le sens de l'autre.",
    enonciation: "Bernard Lecomte écrit en 1984, dans un livre de réflexion. Il dit « nos relations », « nous » : il parle à tous les hommes de son temps, et il leur pose des questions pour les faire réfléchir.",
    structure: [
      ["Une révolution qui inquiète", "Paragraphe 1 : les nouvelles techniques vont changer nos relations."],
      ["Un vrai progrès", "Paragraphe 2 : la communication rapproche les hommes."],
      ["L'écran qui cache", "Paragraphes 3 et 4 : l'image reste abstraite ; seule l'expérience lui donne un sens."],
      ["Le danger", "Paragraphe 5 : l'expérience vécue risque de disparaître derrière les écrans."],
      ["Réfléchir sans condamner", "Paragraphe 6 : il faut cultiver le sens de l'autre."]
    ],
    questions: [
      { q: "Quel est le sens de l'interrogation « Qui peut contester que cela soit un progrès ? » ?", reponse: "Cette interrogation est une question oratoire : elle n'attend pas de réponse, car la réponse va de soi. Elle signifie que personne ne peut contester que les nouvelles formes de communication, en rapprochant les hommes, soient un progrès. L'auteur s'en sert pour reconnaître ce progrès avant d'en montrer les dangers." },
      { q: "Relevez dans le texte la phrase qui exprime le mieux la thèse de l'auteur.", reponse: "La phrase qui exprime le mieux la thèse de l'auteur est : « La montée de l'individualisme, la tendance croissante au repli sur soi (sa famille, sa communauté) vont de pair avec ce phénomène de déshumanisation des relations sociales qui se profile à l'horizon. »" }
    ],
    idees: [
      { cles: ["L'avenir de nos relations", "Comme l'apparition du téléphone"], reformulation: "Nos relations sociales dépendront des nouvelles techniques de communication, qui en changeront la forme comme les bases." },
      { cles: ["Il est naturel qu'à l'aube"], reformulation: "Cette révolution inquiète, et c'est légitime." },
      { cles: ["La communication, étymologiquement", "La route, la poste", "La radio, le cinéma"], reformulation: "Communiquer, c'est relier les hommes : les transports, puis les médias, ont tissé entre eux un réseau serré de solidarités." },
      { cles: ["En raccourcissant les distances", "Qui peut contester"], reformulation: "En réduisant les distances et en multipliant les informations, ces techniques rapprochent d'abord les hommes : c'est un progrès incontestable." },
      { cles: ["Ce qui modifie ces données", "Or, l'étymologie"], reformulation: "Mais l'écran, qui se généralise, est d'abord ce qui cache." },
      { cles: ["L'image elle-même", "L'image informe", "Et c'est encore sa propre expérience"], reformulation: "En effet, l'image reste abstraite : seule l'expérience de celui qui la regarde lui donne un sens et distingue le réel de la fiction." },
      { cles: ["Laquelle, au rythme"], reformulation: "Or, son émotion s'use à mesure que les images se multiplient." },
      { cles: ["Le danger se situe"], reformulation: "Le danger est donc que l'expérience vécue recule devant des informations désincarnées." },
      { cles: ["Or ce risque point", "Demain, l'on pourra", "Que restera-t-il"], reformulation: "Ce danger approche, puisque bientôt presque tout se fera à distance, au détriment des contacts humains." },
      { cles: ["La montée de l'individualisme"], reformulation: "Cette déshumanisation accompagne la montée de l'individualisme." },
      { cles: ["En se gardant de tout mélanger"], reformulation: "Sans condamner une évolution inévitable, il faut y réfléchir." },
      { cles: ["L'homme statique", "Encore faut-il"], reformulation: "L'homme inventera de nouvelles formes de communication chaleureuse, à condition qu'on cultive chez les jeunes le sens de l'autre." }
    ],
    enchainement: "Le texte tourne au paragraphe 3 : après le progrès vient le danger. « Mais » marque ce tournant, « en effet » l'explique, « or » ajoute une étape, « donc » tire la conséquence. La fin garde la nuance de l'auteur : « sans condamner… il faut y réfléchir ».",
    resume: "Nos relations sociales dépendront des nouvelles techniques de communication, qui en changeront la forme comme les bases. Cette révolution inquiète, et c'est légitime. Communiquer, c'est relier les hommes : les transports, puis les médias, ont tissé entre eux un réseau serré de solidarités. En réduisant les distances et en multipliant les informations, ces techniques rapprochent d'abord les hommes : c'est un progrès incontestable. Mais l'écran, qui se généralise, est d'abord ce qui cache. En effet, l'image reste abstraite : seule l'expérience de celui qui la regarde lui donne un sens et distingue le réel de la fiction. Or, son émotion s'use à mesure que les images se multiplient. Le danger est donc que l'expérience vécue recule devant des informations désincarnées. Ce danger approche, puisque bientôt presque tout se fera à distance, au détriment des contacts humains. Cette déshumanisation accompagne la montée de l'individualisme. Sans condamner une évolution inévitable, il faut y réfléchir. L'homme inventera de nouvelles formes de communication chaleureuse, à condition qu'on cultive chez les jeunes le sens de l'autre.",
    pe: {
      verbe: "étayer",
      consigne: "Étayez cette idée de Bernard Lecomte : « En raccourcissant les distances, en accélérant les contacts, en multipliant les sources d'information (locales, étrangères), les nouvelles formes de communication ont pour premier effet de rapprocher les hommes. »",
      citation: "En raccourcissant les distances, en accélérant les contacts, en multipliant les sources d'information (locales, étrangères), les nouvelles formes de communication ont pour premier effet de rapprocher les hommes.",
      theme: "Dans cette citation, on parle des moyens de communication et des liens entre les hommes.",
      these: "L'auteur pense que les nouveaux moyens de communication, parce qu'ils rendent les contacts plus rapides et les informations plus nombreuses, rapprochent d'abord les hommes.",
      intro: "Dans son texte intitulé « Relations sociales en danger », extrait de son livre *Communication et nouvelles technologies*, paru en 1984, Bernard Lecomte affirme : « En raccourcissant les distances, en accélérant les contacts, en multipliant les sources d'information (locales, étrangères), les nouvelles formes de communication ont pour premier effet de rapprocher les hommes. » Dans notre analyse, nous allons étayer cette affirmation.",
      pistes: [
        "Ils gardent le lien avec les proches éloignés : appels vidéo avec la famille partie à l'étranger, groupes WhatsApp de famille ou d'anciens élèves.",
        "Ils créent une solidarité au-delà des frontières : après une catastrophe, l'information circule en quelques minutes et les collectes en ligne s'organisent.",
        "Ils partagent le savoir : un élève d'un village peut suivre les mêmes cours en ligne qu'un élève de la capitale."
      ]
    }
  }
];

export const exerciceRS = (id: string) => EXERCICES_RS.find(e => e.id === id);

/** Découpe un paragraphe en phrases (point, point d'exclamation ou d'interrogation, puis majuscule). */
export function phrasesDe(texte: string): { par: number; phrase: string }[] {
  const out: { par: number; phrase: string }[] = [];
  texte.split("\n\n").forEach((par, p) => {
    // Pas de « lookbehind » : les anciens iPhone ne le comprennent pas.
    par.replace(/([.!?…][»)]?)\s+(?=[«"(A-ZÀÂÉÈÊÎÔÛÇ])/g, "$1\u0001").split("\u0001").map(s => s.trim()).filter(Boolean).forEach(phrase => out.push({ par: p, phrase }));
  });
  return out;
}

/** Les phrases du texte qui portent une idée essentielle, avec l'idée correspondante. */
export function phrasesEssentielles(ex: ExerciceRS) {
  const phrases = phrasesDe(ex.texte);
  const idee = new Map<number, number>();
  ex.idees.forEach((d, k) => d.cles.forEach(c => {
    const i = phrases.findIndex(x => x.phrase.startsWith(c));
    if (i >= 0) idee.set(i, k);
  }));
  return { phrases, idee };
}
