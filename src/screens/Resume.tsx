import { useEffect, useState } from "preact/hooks";
import { Page } from "../components/Page";
import { Icon } from "../components/Icon";
import { Texte } from "../components/Texte";
import { InstallBanner } from "../components/Install";
import { Annonces } from "../components/Annonces";
import { LienDevoirs, TuileDevoirs } from "../components/TuileDevoirs";
import { MessageALaUne } from "../components/Suggestions";
import { useStored } from "../lib/storage";
import { useMethode } from "../lib/methodes";
import { marquer } from "../lib/progres";
import { NotFound } from "./NotFound";
import { Bloc } from "./Lecon";
import { Segments } from "../components/SujetsOnglets";
import { TexteCrayon } from "../components/Crayon";
import { LECONS_RS, PARTIES_RS, QUIZ_RS, type BlocRS } from "../data/resume";
import type { TexteEtudie } from "../data/cc-types";
import { compterMots } from "../lib/mots";
import { AtelierRS, CorrigeRS, SujetsRS } from "./ResumeExercices";
import { BILANS_PE, CONNECTEURS_RS, DEBUTS_REPONSES, INTRO_PE, JUGEMENT_PE, PHRASES_INTRO_PE, TECHNIQUES_RS, TRANSITION_PE } from "../data/resume-outils";

function DefListe({ lignes }: { lignes: [string, string][] }) {
  return <dl class="def">{lignes.map(([t, d]) => [<dt key={t}>{t}</dt>, <dd key={t + "d"}>{d}</dd>])}</dl>;
}
import type { QuestionQuiz } from "../data/types";

// Résumé de texte argumentatif (contraction de texte) : cours, puis exercices.
// Adresses : #/rs/cours[/id], #/rs/sujets, #/rs/corrige/<id>, #/rs/atelier/<id>, #/rs/outils. Brouillon du site d'essai : tout est ouvert pour la relecture.

const pretes = () => LECONS_RS.filter(l => l.blocs.length);

/** Accueil quand l'élève a choisi le résumé de texte. */
export function AccueilResume() {
  const [lues] = useStored<string[]>("rs-lecons-lues", []);
  const suivante = pretes().find(l => !lues.includes(l.id));
  const nbLues = LECONS_RS.filter(l => lues.includes(l.id)).length;
  return (
    <Page>
      <header class="home-header">
        <p class="eyebrow">Résumé ou contraction de texte</p>
        <h1 class="home-title">Que veux-tu faire ?</h1>
      </header>
      <TuileDevoirs />
      <MessageALaUne />
      <nav class="choix" aria-label="Que veux-tu faire ?">
        <a class="choix-carte choix-methode" href={suivante && nbLues > 0 ? `#/rs/cours/${suivante.id}` : "#/rs/cours"}>
          <Icon name="menu_book" size={24} />
          <span class="choix-titre">{nbLues === 0 ? "Les cours" : suivante ? "Continuer les cours" : "Revoir les cours"}</span>
          <span class="choix-detail">Questions, résumé, production écrite</span>
          {nbLues > 0 && <span class="progress-bar" aria-hidden="true"><span style={{ width: `${(nbLues / LECONS_RS.length) * 100}%` }} /></span>}
        </a>
        <a class="choix-carte choix-corriges" href="#/rs/sujets">
          <Icon name="history_edu" size={24} />
          <span class="choix-titre">Exercices</span>
          <span class="choix-detail">Textes corrigés et entraînement</span>
        </a>
        <a class="choix-carte choix-outils" href="#/rs/outils">
          <Icon name="inventory_2" size={24} />
          <span class="choix-titre">Calculateur de mots</span>
          <span class="choix-detail">La fourchette de mots et le compte de ton résumé</span>
        </a>
      </nav>
      <LienDevoirs />
      <Annonces />
      <InstallBanner />
    </Page>
  );
}

function CoursRS() {
  const [lues] = useStored<string[]>("rs-lecons-lues", []);
  return (
    <Page>
      <header class="page-header">
        <h1 class="page-title">Le résumé de texte</h1>
        <p class="lede">Aussi appelé contraction de texte.</p>
      </header>
      {PARTIES_RS.map((partie, k) => {
        const lecons = LECONS_RS.filter(l => l.partie === partie.id);
        return (
          <section key={partie.id} class="rs-partie">
            <h2 class="rs-partie-titre"><span class="rs-partie-num">{k + 1}</span>{partie.titre}</h2>
            <ol class="list" aria-label={partie.titre}>
              {lecons.map(l => {
                const i = LECONS_RS.indexOf(l), lue = lues.includes(l.id), vide = !l.blocs.length;
                return (
                  <li key={l.id}>
                    <a class="row" href={`#/rs/cours/${l.id}`}>
                      <span class={`step-num ${lue ? "done" : ""}`} aria-hidden="true">{lue ? <Icon name="check" size={18} /> : i + 1}</span>
                      <span class="row-body"><span class="row-title">{l.titre}</span><span class="meta">{vide ? "Bientôt" : `${l.duree}${lue ? " · lue" : ""}`}</span></span>
                      <Icon name="chevron_right" />
                    </a>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </Page>
  );
}

/** Tous les textes supports des leçons (et plus tard des exercices), par identifiant. */
const TEXTES_RS = new Map<string, TexteEtudie>();
LECONS_RS.forEach(l => l.blocs.forEach(b => { if ("texte" in b) TEXTES_RS.set(b.texte.id, b.texte); }));
// Le nombre de mots donné par le sujet fait foi ; sinon on compte comme au bac.
const nbMots = (t: TexteEtudie) => Number(/(\d+) mots/.exec(t.consigne)?.[1]) || compterMots(t.texte);

/** Dans une leçon : le texte support se lit sur sa propre page, avec le crayon. */
export function CarteTexte({ t }: { t: TexteEtudie }) {
  const [traits] = useStored<unknown[]>(`crayon:${t.id}`, []);
  const [ouvert, setOuvert] = useState(false);
  // Le texte s'ouvre dans la leçon : sous le texte, la suite de la leçon continue.
  return (
    <aside class={`rs-carte-texte ${ouvert ? "is-ouvert" : ""}`}>
      <p class="callout-label">Texte support</p>
      <p class="rs-carte-titre"><Texte text={`« ${t.titre} »`} /></p>
      <p class="meta">{t.auteur}, <Texte text={t.source} /> · {nbMots(t)} mots{traits.length ? " · annoté" : ""}</p>
      {ouvert && <TexteCrayon id={t.id} texte={t.texte} note={t.note} />}
      <button type="button" class={`btn ${ouvert ? "btn-secondary" : "btn-primary"} align-start`} aria-expanded={ouvert}
        onClick={e => {
          const carte = (e.currentTarget as HTMLElement).closest(".rs-carte-texte");
          setOuvert(!ouvert);
          if (ouvert) setTimeout(() => carte?.scrollIntoView({ block: "start" }));
        }}>
        <Icon name={ouvert ? "expand_less" : "menu_book"} size={20} />{ouvert ? "Refermer le texte" : "Ouvrir le texte support"}
      </button>
    </aside>
  );
}

/** Le texte support en pleine page, avec le crayon pour souligner, entourer, encadrer et annoter. */
function TexteSupportRS({ id }: { id: string }) {
  const t = TEXTES_RS.get(id);
  if (!t) return <NotFound what="Ce texte n'existe pas." back="#/rs/cours" />;
  return (
    <Page title="Texte support" back="#/rs/cours">
      <article class="reading">
        <header class="page-header">
          <p class="eyebrow">Texte support · {nbMots(t)} mots</p>
          <h1 class="page-title">{t.titre}</h1>
          <p class="lede">{t.auteur}, <Texte text={t.source} /></p>
        </header>
        <TexteCrayon id={t.id} texte={t.texte} note={t.note} />
      </article>
    </Page>
  );
}

function BlocLeconRS({ b }: { b: BlocRS }) {
  if ("texte" in b) return <CarteTexte t={b.texte} />;
  if ("plie" in b)
    return (
      <details class="cc-plie">
        <summary>{b.plie.titre}</summary>
        <ul class="bullets">{b.plie.liste.map(x => <li key={x}><Texte text={x} /></li>)}</ul>
      </details>
    );
  return <Bloc b={b} />;
}

function QuizRS({ id, questions }: { id: string; questions: QuestionQuiz[] }) {
  const [n, setN] = useState(0);
  const [choix, setChoix] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [meilleurs, setMeilleurs] = useStored<Record<string, number>>("rs-quiz-meilleurs", {});
  const q = questions[n];
  function repondre(i: number) {
    if (choix !== null) return;
    setChoix(i);
    if (i === q.bonne) setScore(score + 1);
    marquer(`quiz:rs:${id}`);
  }
  function suivante() {
    if (n + 1 >= questions.length && score > (meilleurs[id] ?? -1)) setMeilleurs({ ...meilleurs, [id]: score });
    setN(n + 1); setChoix(null);
  }
  return (
    <section class="quiz" aria-labelledby="quiz-rs-titre">
      <p class="eyebrow">Quiz · {questions.length} questions</p>
      <h2 id="quiz-rs-titre" class="section-title">Vérifie ce que tu as retenu</h2>
      {n >= questions.length ? (
        <div class="quiz-card quiz-fin" role="status">
          <p class="quiz-score">{score} / {questions.length}</p>
          <p>{score === questions.length ? "Parfait, tu maîtrises cette leçon." : score >= questions.length / 2 ? "Bien. Relis les points manqués, puis refais le quiz." : "Relis la leçon, puis refais le quiz."}</p>
          <button type="button" class="btn btn-secondary align-start" onClick={() => { setN(0); setChoix(null); setScore(0); }}>Recommencer</button>
        </div>
      ) : (
        <div class="quiz-card">
          <p class="small muted">Question {n + 1} sur {questions.length}</p>
          <p class="quiz-q"><Texte text={q.q} /></p>
          <ul class="quiz-choix">
            {q.choix.map((c, i) => {
              const etat = choix === null ? "" : i === q.bonne ? "ok" : i === choix ? "faux" : "";
              return (
                <li key={c}>
                  <button type="button" class={`quiz-option ${etat}`} disabled={choix !== null} aria-pressed={choix === i} onClick={() => repondre(i)}>
                    <span>{c}</span>
                    {etat === "ok" && <Icon name="check" size={20} />}
                    {etat === "faux" && <Icon name="close" size={20} />}
                  </button>
                </li>
              );
            })}
          </ul>
          {choix !== null && (
            <div class="quiz-correction" role="status">
              <p><strong>{choix === q.bonne ? "Bonne réponse." : "Pas tout à fait."}</strong> <Texte text={q.pourquoi} /></p>
              <button type="button" class="btn btn-primary align-start" onClick={suivante}>{n + 1 < questions.length ? "Question suivante" : "Voir mon score"}</button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function LeconRS({ id }: { id: string }) {
  const i = LECONS_RS.findIndex(l => l.id === id);
  const [lues, setLues] = useStored<string[]>("rs-lecons-lues", []);
  if (i < 0) return <NotFound what="Cette leçon n'existe pas." back="#/rs/cours" />;
  const l = LECONS_RS[i], prev = LECONS_RS[i - 1], next = LECONS_RS[i + 1];
  if (l.blocs.length && !lues.includes(id)) setTimeout(() => setLues([...lues, id]));
  return (
    <Page title={`Leçon ${i + 1}`} back="#/rs/cours">
      <article class="reading">
        <header class="page-header">
          <p class="eyebrow">{PARTIES_RS.find(x => x.id === l.partie)?.titre} · Leçon {i + 1}{l.duree ? ` · ${l.duree}` : ""}</p>
          <h1 class="page-title"><Texte text={l.titre} /></h1>
        </header>
        {l.blocs.length
          ? <div class="prose">{l.blocs.map((b, k) => <BlocLeconRS key={k} b={b} />)}</div>
          : <p class="lede">Cette leçon arrive bientôt.</p>}
        {QUIZ_RS[l.id] && <QuizRS id={l.id} questions={QUIZ_RS[l.id]} />}
        <nav class="pager" aria-label="Leçons">
          {prev ? <a class="pager-link" href={`#/rs/cours/${prev.id}`}><span class="meta">Précédente</span>{prev.titre}</a> : <span />}
          {next ? <a class="pager-link pager-next" href={`#/rs/cours/${next.id}`}><span class="meta">Suivante</span>{next.titre}</a> : <span />}
        </nav>
      </article>
    </Page>
  );
}

const FRACTIONS = [{ d: 4, nom: "au quart" }, { d: 3, nom: "au tiers" }];

/** Calculateur de mots : la fourchette à respecter, puis le compte du résumé de l'élève (règle du bac). */
function OutilsRS({ vue }: { vue?: string }) {
  const [total, setTotal] = useStored<string>("rs-calcul-total", "");
  const [div, setDiv] = useStored<number>("rs-calcul-fraction", 4);
  const [brouillon, setBrouillon] = useStored<string>("rs-calcul-brouillon", "");
  const n = parseInt(total, 10);
  const cible = n > 0 ? Math.round(n / div) : 0;
  const marge = Math.round(cible / 10);
  const min = cible - marge, max = cible + marge;
  const compte = compterMots(brouillon);
  const etat = !cible || !compte ? "" : compte < min ? "court" : compte > max ? "long" : "ok";
  return (
    <Page>
      <Segments groupe="rs-outils" label="Outils" items={[
        { label: "Calculateur de mots", href: "#/rs/outils", actif: vue !== "aide" },
        { label: "Aide-mémoire", href: "#/rs/aide", actif: vue === "aide" }
      ]} />
      <header class="page-header">
        <h1 class="page-title">{vue === "aide" ? "Aide-mémoire" : "Calculateur de mots"}</h1>
        <p class="lede">{vue === "aide" ? "Tout ce qu'il faut garder sous la main pour la copie." : "Combien de mots doit faire ton résumé, et combien il en fait."}</p>
      </header>
      {vue !== "aide" && <>
      <section class="rs-calcul">
        <label class="rs-calcul-champ">
          <span>Nombre de mots du texte</span>
          <input type="number" inputMode="numeric" min={1} placeholder="Ex. 610" value={total} onInput={e => setTotal((e.target as HTMLInputElement).value)} />
        </label>
        <div class="rs-calcul-champ">
          <span>Le sujet demande de réduire le texte…</span>
          <div class="chips" role="group" aria-label="Réduire le texte">
            {FRACTIONS.map(f => <button key={f.d} type="button" class="chip" aria-pressed={div === f.d} onClick={() => setDiv(f.d)}>{f.nom}</button>)}
          </div>
        </div>
        {cible > 0 && (
          <div class="rs-calcul-resultat" role="status">
            <p class="rs-calcul-fourchette">Entre <strong>{min}</strong> et <strong>{max}</strong> mots</p>
            <p class="meta">{n} ÷ {div} = environ {cible} mots, avec une marge de 10 % ({marge} mots) en plus ou en moins.</p>
          </div>
        )}
      </section>
      <section class="rs-calcul">
        <label class="rs-calcul-champ">
          <span>Écris ou colle ton résumé pour compter ses mots</span>
          <textarea rows={7} value={brouillon} placeholder="Ton résumé…" onInput={e => setBrouillon((e.target as HTMLTextAreaElement).value)} />
        </label>
        <div class="rs-calcul-ligne">
          <p class={`rs-calcul-compte ${etat}`} role="status">
            <strong>{compte} mot{compte > 1 ? "s" : ""}</strong>
            {etat === "ok" && " · dans la fourchette"}
            {etat === "court" && ` · trop court de ${min - compte} mot${min - compte > 1 ? "s" : ""}`}
            {etat === "long" && ` · trop long de ${compte - max} mot${compte - max > 1 ? "s" : ""}`}
          </p>
          {brouillon && <button type="button" class="rs-calcul-effacer" onClick={e => {
            setBrouillon("");
            ((e.currentTarget as HTMLElement).closest(".rs-calcul")?.querySelector("textarea") as HTMLTextAreaElement | null)?.focus();
          }}>Tout effacer</button>}
        </div>
        <p class="meta">Compté comme au bac : « l'école » = 2 mots, « c'est-à-dire » = 4 mots, un nombre en chiffres ou un sigle = 1 mot.</p>
      </section>
      </>}
      {vue === "aide" && <>
      <details class="cc-plie rs-outil">
        <summary>Ce qu'on enlève dans un résumé</summary>
        <ul class="bullets">{["Les exemples et les illustrations", "Les explications et les répétitions", "Les données chiffrées", "Les reformulations de l'auteur (« en d'autres termes », « c'est-à-dire »)", "Les questions : on les transforme en affirmations"].map(x => <li key={x}>{x}</li>)}</ul>
      </details>
      <details class="cc-plie rs-outil">
        <summary>Les techniques pour reformuler</summary>
        <DefListe lignes={TECHNIQUES_RS} />
      </details>
      <details class="cc-plie rs-outil">
        <summary>Les connecteurs logiques</summary>
        <DefListe lignes={CONNECTEURS_RS.map(([t, m]) => [t, m.join(", ")])} />
      </details>
      <details class="cc-plie rs-outil">
        <summary>Les débuts de réponses aux questions</summary>
        <DefListe lignes={DEBUTS_REPONSES} />
      </details>
      <details class="cc-plie rs-outil">
        <summary>Les formules de la production écrite</summary>
        <DefListe lignes={[
          ["Introduction", INTRO_PE],
          ["Pour étayer", PHRASES_INTRO_PE["étayer"].join(" ; ")],
          ["Pour réfuter", PHRASES_INTRO_PE["réfuter"].join(" ; ")],
          ["Pour discuter", `${PHRASES_INTRO_PE["discuter"].join(" ; ")} Puis : « ${TRANSITION_PE} »`],
          ["Chaque argument", "L'argument, son explication, un exemple."],
          ["Bilan", `${BILANS_PE["étayer"]} (ou : « ne résiste pas à l'examen », « n'est vraie qu'en partie »)`],
          ["Jugement personnel", JUGEMENT_PE],
          ["Ouverture", "Une question sur un problème voisin."]
        ]} />
      </details>
      </>}
    </Page>
  );
}

/** Toutes les pages du résumé de texte, selon l'adresse #/rs/… */
export function ResumeScreen({ path }: { path: string[] }) {
  const [, partie, id] = path;
  const [methode, choisir] = useMethode();
  useEffect(() => {
    // Une page du résumé ouverte depuis un lien : l'appli passe en résumé de texte.
    if (partie && methode.id !== "resume") choisir("resume");
  }, [partie]);
  switch (partie) {
    case "cours": return id ? <LeconRS id={id} /> : <CoursRS />;
    case "sujets": return <SujetsRS />;
    case "entrainement": return <SujetsRS vue="entrainement" />;
    case "aide": return <OutilsRS vue="aide" />;
    case "corrige": return id ? <CorrigeRS id={id} /> : <SujetsRS />;
    case "atelier": return id ? <AtelierRS id={id} /> : <SujetsRS />;
    case "outils": return <OutilsRS />;
    case "texte": return id ? <TexteSupportRS id={id} /> : <CoursRS />;
    default: return <AccueilResume />;
  }
}
