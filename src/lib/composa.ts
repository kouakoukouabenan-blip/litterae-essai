// COMPOSA (devoirs en ligne du professeur) ouvert dans Litterae, espace « Devoirs ».
// COMPOSA reste un site à part (sa base, l'espace professeur) : Litterae l'affiche dans un cadre
// et retient les devoirs en cours qu'il lui envoie, pour la case de l'accueil.
import { useEffect } from "preact/hooks";
import { read, useStored, write } from "./storage";
import { titulaire } from "./licence";
import { ESSAI } from "./site";

/** Adresse de COMPOSA, sans barre finale. Site d'essai : la version d'essai de COMPOSA. */
export const COMPOSA_URL: string = import.meta.env.VITE_COMPOSA_URL
  ?? (ESSAI ? "https://dans-litterae.composa-eyb.pages.dev" : "https://composa-eyb.pages.dev");
const ORIGINE = new URL(COMPOSA_URL).origin;

export interface DevoirComposa {
  id: string;
  titre: string;
  matiere: string;
  etat: "en_cours" | "a_venir" | "a_terminer";
  ouverture_at: string;
  fermeture_at: string;
}
interface Memo { devoirs: DevoirComposa[]; maj: number }
const CLE = "composa-devoirs";

const texte = (v: unknown, max: number) => typeof v === "string" ? v.slice(0, max) : "";
const date = (v: unknown) => typeof v === "string" && !Number.isNaN(Date.parse(v)) ? v : "";

/** Ne garde que des devoirs bien formés (le message vient d'un autre site). */
export function lireDevoirs(donnees: unknown): DevoirComposa[] | null {
  if (!donnees || typeof donnees !== "object" || (donnees as { type?: unknown }).type !== "composa:devoirs") return null;
  const liste = (donnees as { devoirs?: unknown }).devoirs;
  if (!Array.isArray(liste)) return null;
  return liste.slice(0, 10).flatMap((d): DevoirComposa[] => {
    if (!d || typeof d !== "object") return [];
    const o = d as Record<string, unknown>;
    const etat = o.etat === "en_cours" || o.etat === "a_venir" || o.etat === "a_terminer" ? o.etat : null;
    const id = texte(o.id, 40);
    if (!etat || !/^[0-9a-f-]{36}$/.test(id) || !date(o.ouverture_at) || !date(o.fermeture_at)) return [];
    return [{ id, titre: texte(o.titre, 120) || "Devoir", matiere: texte(o.matiere, 60), etat, ouverture_at: date(o.ouverture_at), fermeture_at: date(o.fermeture_at) }];
  });
}

/** Écoute les nouvelles de COMPOSA (seulement de son adresse). */
export function useEcouteComposa() {
  useEffect(() => {
    const recevoir = (e: MessageEvent) => {
      if (e.origin !== ORIGINE) return;
      const devoirs = lireDevoirs(e.data);
      if (devoirs) write<Memo>(CLE, { devoirs, maj: Date.now() });
    };
    window.addEventListener("message", recevoir);
    return () => window.removeEventListener("message", recevoir);
  }, []);
}

/** Devoirs encore ouverts, d'après le dernier passage dans l'espace Devoirs. */
export function devoirsOuverts(memo: Memo | null, maintenant = Date.now()): DevoirComposa[] {
  return (memo?.devoirs ?? []).filter(d => Date.parse(d.fermeture_at) > maintenant)
    .map(d => d.etat === "a_venir" && Date.parse(d.ouverture_at) <= maintenant ? { ...d, etat: "en_cours" as const } : d);
}

export const useDevoirsComposa = () => devoirsOuverts(useStored<Memo | null>(CLE, null)[0]);
export const aDejaOuvertComposa = () => read<Memo | null>(CLE, null) !== null;

/** Adresse à ouvrir dans le cadre : un devoir précis, sinon la liste des devoirs. */
export function adresseComposa(salle?: string | null) {
  const chemin = salle && /^[0-9a-f-]{36}$/.test(salle) ? `/eleve/salles/${salle}` : "/eleve";
  const q = new URLSearchParams({ dans: "litterae" });
  const prenom = titulaire()?.prenom;
  if (prenom) q.set("prenom", prenom);
  return `${COMPOSA_URL}${chemin}?${q}`;
}

const heure = (d: Date) => d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }).replace(":", " h ");
function jour(d: Date, maintenant: Date) {
  const j = (x: Date) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
  const ecart = Math.round((j(d) - j(maintenant)) / 864e5);
  if (ecart === 0) return "aujourd'hui";
  if (ecart === 1) return "demain";
  return d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
}

/** « Se termine aujourd'hui à 18 h 00 », « Commence demain à 08 h 00 ». */
export function quand(d: DevoirComposa, maintenant = new Date()) {
  const debut = d.etat === "a_venir";
  const t = new Date(debut ? d.ouverture_at : d.fermeture_at);
  return `${debut ? "Commence" : "Se termine"} ${jour(t, maintenant)} à ${heure(t)}`;
}
