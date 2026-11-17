// Informations d'édition et adresses de service.
/** Site d'essai : les nouveautés y sont testées avant le vrai site. Pas de statistiques. */
export const ESSAI = true;

export const EDITEUR = "Donatien Kouabenan";
/** Adresse de contact affichée dans les CGU et la page Confidentialité. */
export const CONTACT_EMAIL = "livresfaciles@gmail.com";
export const MISE_A_JOUR = "31 octobre 2026";

/** Page de vente Chariow de l'accès complet (vide tant que le produit n'est pas créé). */
export const ACHAT_URL = "https://livresfaciles.mychariow.shop/prd_mhf6g1pp";
/** Serveur de vérification des clés (Cloudflare Worker), sans barre finale. */
export const SERVEUR_URL: string = import.meta.env.VITE_SERVEUR_URL ?? "https://litterae-serveur.kouakoukouabenan.workers.dev";

/** Numéro WhatsApp de l'assistance, au format international sans « + » ni espaces (ex. 2250700000000). Vide : e-mail seulement. */
export const WHATSAPP = "2250758806323";

/** Lien d'aide quand la clé n'arrive pas ou est refusée : WhatsApp si un numéro est renseigné, sinon e-mail. */
export function lienAide(sujet: string) {
  const texte = `Bonjour, ${sujet}. Mon adresse e-mail d'achat : `;
  return WHATSAPP
    ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texte)}`
    : `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Litterae : " + sujet)}&body=${encodeURIComponent(texte)}`;
}

/**
 * Nouvelle adresse du site (avec la barre finale). Sur l'ancienne adresse (github.io), l'appli y emmène l'élève
 * avec sa clé et sa progression, dès que la nouvelle adresse répond. Vide : pas de passage.
 * Site d'essai : vide, sauf pour un essai (VITE_PASSAGE_VERS).
 */
export const PASSAGE_VERS: string = import.meta.env.VITE_PASSAGE_VERS ?? "";

/** WhatsApp pour l'aide au changement d'adresse (numéro donné par Atikan le 17/11/2026). */
export const WHATSAPP_PASSAGE = "2250101280717";
export const lienAidePassage = () =>
  `https://wa.me/${WHATSAPP_PASSAGE}?text=${encodeURIComponent("Bonjour, j'ai besoin d'aide pour passer Litterae à la nouvelle adresse litterae.app.")}`;
