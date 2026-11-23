import { Icon } from "./Icon";
import { quand, useDevoirsComposa } from "../lib/composa";

/** Accueil : les devoirs du professeur (COMPOSA). Un devoir ouvert passe devant ; sinon une entrée discrète. */
export function TuileDevoirs() {
  const devoirs = useDevoirsComposa();
  const premier = devoirs[0];
  if (!premier) return (
    <a class="devoirs-tuile devoirs-tuile-calme" href="#/composa">
      <Icon name="fact_check" size={22} />
      <span class="devoirs-tuile-texte">
        <span class="devoirs-tuile-titre">Devoirs de ton professeur</span>
        <span class="devoirs-tuile-detail">Entre le code qu'il t'a donné pour composer.</span>
      </span>
      <Icon name="chevron_right" size={22} />
    </a>
  );
  const ouvert = premier.etat !== "a_venir";
  const autres = devoirs.length - 1;
  return (
    <a class="devoirs-tuile" href={`#/composa?salle=${premier.id}`}>
      <Icon name="fact_check" size={22} />
      <span class="devoirs-tuile-texte">
        <span class="devoirs-tuile-sur">{premier.etat === "a_terminer" ? "Devoir à terminer" : ouvert ? "Devoir en cours" : "Devoir programmé"}</span>
        <span class="devoirs-tuile-titre">{premier.titre}</span>
        <span class="devoirs-tuile-detail">{quand(premier)}{autres > 0 ? ` · ${autres} autre${autres > 1 ? "s" : ""} devoir${autres > 1 ? "s" : ""}` : ""}</span>
      </span>
      <span class="devoirs-tuile-action">{ouvert ? "Composer" : "Voir"}</span>
    </a>
  );
}
