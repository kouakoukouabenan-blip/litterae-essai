import { Icon } from "./Icon";
import { codeLisible, quand, useCodesAffiches, useDevoirsComposa } from "../lib/composa";

/**
 * Haut de l'accueil, seulement quand il y a un devoir : une ligne compacte.
 * Devoir dont le professeur affiche le code : le code, et toucher la ligne fait entrer avec.
 * Devoir déjà rejoint : « Composer ».
 */
export function TuileDevoirs() {
  const rejoints = useDevoirsComposa();
  const affiches = useCodesAffiches();
  const dejaLa = new Set(rejoints.map(d => d.id));
  const aRejoindre = affiches.find(d => !dejaLa.has(d.id));
  const rejoint = rejoints[0];
  // Un devoir déjà commencé ou ouvert passe d'abord ; sinon le code à entrer.
  if (rejoint && (rejoint.etat !== "a_venir" || !aRejoindre)) {
    const ouvert = rejoint.etat !== "a_venir";
    return (
      <a class="devoir-ligne" href={`#/composa?salle=${rejoint.id}`}>
        <span class="devoir-ligne-texte">
          <span class="devoir-ligne-sur">{rejoint.etat === "a_terminer" ? "À terminer" : ouvert ? "En cours" : "Programmé"} · {quand(rejoint)}</span>
          <span class="devoir-ligne-titre">{rejoint.titre}</span>
        </span>
        <span class="devoir-ligne-action">{ouvert ? "Composer" : "Voir"}</span>
      </a>
    );
  }
  if (!aRejoindre) return null;
  const ouvert = Date.parse(aRejoindre.ouverture_at) <= Date.now();
  return (
    <a class="devoir-ligne" href={`#/composa?code=${aRejoindre.code}`} aria-label={`${aRejoindre.titre}, code ${codeLisible(aRejoindre.code)}, entrer dans le devoir`}>
      <span class="devoir-ligne-texte">
        <span class="devoir-ligne-sur">{ouvert ? "En cours" : "Programmé"} · {quand(aRejoindre)}</span>
        <span class="devoir-ligne-titre">{aRejoindre.titre}</span>
      </span>
      <span class="devoir-ligne-code"><span class="devoir-ligne-code-mot">Code</span>{codeLisible(aRejoindre.code)}</span>
    </a>
  );
}

/** Entrée discrète vers l'espace Devoirs, en bas de l'accueil (pour taper un code reçu du professeur). */
export function LienDevoirs() {
  return (
    <a class="devoirs-lien" href="#/composa">
      <Icon name="fact_check" size={20} />
      <span>Devoirs de ton professeur</span>
      <Icon name="chevron_right" size={20} />
    </a>
  );
}
