import { useEffect, useState } from "preact/hooks";
import { Page } from "../components/Page";
import { LockPanel } from "../components/LockPanel";
import { adresseComposa, useCodesAffiches, useLimiteDevoirs } from "../lib/composa";

/**
 * Espace « Devoirs » : COMPOSA, la plateforme de devoirs en ligne du professeur, dans Litterae.
 * L'élève y entre le code donné par son professeur, compose et retrouve ses notes.
 * Sans clé, un nombre limité de devoirs (réglé dans le tableau de bord) ; les devoirs déjà faits restent ouverts.
 */
export function ComposaScreen({ params }: { params: URLSearchParams }) {
  const salle = params.get("salle"), code = params.get("code");
  const affiches = useCodesAffiches();
  const { peutOuvrir, limite, premium } = useLimiteDevoirs();
  // Un code affiché sur l'accueil correspond à un devoir connu : déjà fait, il reste ouvert.
  const cible = salle ?? affiches.find(d => d.code === code)?.id ?? null;
  const ouvert = premium || peutOuvrir(cible);
  // L'adresse est fixée à l'ouverture : changer d'écran dans COMPOSA ne recharge pas le cadre.
  const [src] = useState(() => adresseComposa(salle, code, params.get("vue")));
  const [charge, setCharge] = useState(false);
  useEffect(() => {
    if (!ouvert) return;
    document.documentElement.dataset.univers = "composa";
    return () => { delete document.documentElement.dataset.univers; };
  }, [ouvert]);
  if (!ouvert) return (
    <Page title="Devoirs" back="#/accueil">
      <LockPanel reason={limite === 0 ? "Les devoirs en ligne sont réservés à l'accès complet" : `Tu as fait tes ${limite} devoir${limite > 1 ? "s" : ""} gratuit${limite > 1 ? "s" : ""}`}
        contenu="Avec l'accès complet, tu fais tous les devoirs de ton professeur dans Litterae, et tu retrouves tes notes et tes corrections." />
    </Page>
  );
  return (
    <Page title="Devoirs" back="#/accueil">
      <h1 class="sr-only">Devoirs de ton professeur</h1>
      {!charge && <p class="composa-attente" role="status">Ouverture de tes devoirs…</p>}
      <EntreeSalle pret={charge} />
      <iframe class="composa-cadre" src={src} title="Devoirs de ton professeur (COMPOSA)"
        allow="fullscreen; clipboard-write" referrerpolicy="strict-origin" onLoad={() => setCharge(true)} />
    </Page>
  );
}

/**
 * Entrée dans la salle de devoir, avec le logo : les deux L s'écartent comme une porte,
 * le carré passe l'ouverture et grandit jusqu'à devenir la page de COMPOSA.
 * Au moins 1,8 s pour qu'on la voie, et jamais plus de 6 s même si COMPOSA tarde.
 */
function EntreeSalle({ pret }: { pret: boolean }) {
  const calme = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [vue, setVue] = useState(false);
  const [fin, setFin] = useState(false);
  const [parti, setParti] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => setVue(true), calme ? 500 : 1800);
    const b = setTimeout(() => setFin(true), 6000);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  const sortir = fin || (vue && pret);
  useEffect(() => { if (sortir) { const t = setTimeout(() => setParti(true), 350); return () => clearTimeout(t); } }, [sortir]);
  if (parti) return null;
  return (
    <div class={`salle-entree${sortir ? " salle-sortie" : ""}`} role="status" aria-label="Tu entres dans la salle de devoir">
      <svg class="salle-logo" viewBox="0 0 256 256" aria-hidden="true" focusable="false">
        <path class="salle-l salle-l1" d="M56,56 H84 V172 H156 V200 H56 Z" />
        <path class="salle-l salle-l2" d="M200,200 H172 V84 H100 V56 H200 Z" />
        <rect class="salle-carre" x="114" y="114" width="28" height="28" />
      </svg>
      <p class="salle-titre">Salle de devoir</p>
      {vue && !pret && <p class="salle-attente">Ouverture de tes devoirs…</p>}
    </div>
  );
}
