import { contenuLibre } from "./libre";
import { read, write } from "./storage";
import { IDENTITE_PAR_DEFAUT } from "./identite-defaut";

export type Identite = "nouvelle" | "ancienne";

/**
 * Identité visuelle en vigueur, par ordre de priorité :
 * 1. le choix fait sur ce téléphone (Mon espace, site d'essai seulement : pour comparer) ;
 * 2. le réglage du tableau de bord, s'il existe (champ « identite » du contenu libre) ;
 * 3. l'interrupteur IDENTITE_PAR_DEFAUT.
 * Le même calcul est fait très tôt dans index.html, avant l'écran d'ouverture.
 */
export function identiteActive(): Identite {
  const ici = read<Identite | null>("identite", null);
  if (ici === "nouvelle" || ici === "ancienne") return ici;
  const tdb = (contenuLibre() as { identite?: string } | null)?.identite;
  if (tdb === "nouvelle" || tdb === "ancienne") return tdb;
  return IDENTITE_PAR_DEFAUT;
}

const COULEUR_BARRE: Record<Identite, string> = { nouvelle: "#26285E", ancienne: "#0F3D2E" };

/** Pose la classe sur <html> (toute la nouvelle identité est rangée sous `.identite-nouvelle`), la couleur de barre et l'icône d'onglet. */
export function appliquerIdentite(id: Identite = identiteActive()) {
  const html = document.documentElement;
  html.classList.toggle("identite-nouvelle", id === "nouvelle");
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", COULEUR_BARRE[id]);
  document.querySelector('link[rel="icon"][type="image/svg+xml"]')?.setAttribute("href", id === "nouvelle" ? "./identite/favicon.svg" : "./favicon.svg");
}

/** Choix fait sur ce téléphone (null : suivre le réglage général). */
export function choisirIdentite(id: Identite | null) {
  write("identite", id);
  appliquerIdentite();
}
export const identiteChoisieIci = () => read<Identite | null>("identite", null);

// Le tableau de bord a peut-être changé le réglage : on le reprend quand le contenu libre est actualisé.
window.addEventListener("contenu-libre", () => appliquerIdentite());
