/*
 * Noclone : proposition de projet
 * proposition.js : aide à la rédaction
 *
 * 1. Typographie française : apostrophes typographiques et espaces insécables,
 *    même si le texte a été tapé avec les touches habituelles du clavier.
 * 2. Repère les champs à compléter, écrits entre crochets (par exemple [Prénom A]),
 *    les surligne et affiche leur nombre dans un bandeau visible à l'écran seulement.
 * 3. Compte les tâches de chaque membre dans le tableau des tâches et met à jour
 *    la phrase « Répartition » : impossible d'oublier de la corriger.
 */

const CHAMP = /\[[^\]]+\]/;           // un texte entre crochets
const DECOUPE = /(\[[^\]]+\])/;       // même motif, conservé lors du découpage
const A_IGNORER = ["CODE", "PRE", "SCRIPT", "STYLE"];


/* 1. Typographie française ---------------------------------------------------- */

// L'apostrophe droite (') devient typographique (’) ; une espace normale devant
// : ; ! ? » ou après « devient insécable, pour ne jamais commencer une ligne.
function corrigerTypographie(element) {
  for (const noeud of element.childNodes) {
    if (noeud.nodeType === Node.ELEMENT_NODE && !A_IGNORER.includes(noeud.tagName)) {
      corrigerTypographie(noeud);
    } else if (noeud.nodeType === Node.TEXT_NODE) {
      const corrige = noeud.textContent
        .replace(/'/g, "’")
        .replace(/ ([:;!?»])/g, " $1")
        .replace(/« /g, "« ");
      if (corrige !== noeud.textContent) {
        noeud.textContent = corrige;
      }
    }
  }
}

corrigerTypographie(document.body);


/* 2. Champs à compléter ------------------------------------------------------ */

// Parcourt récursivement un élément et entoure chaque [champ] d'un <mark class="todo">.
function surlignerChamps(element) {
  for (const noeud of [...element.childNodes]) {
    if (noeud.nodeType === Node.ELEMENT_NODE) {
      surlignerChamps(noeud);
    } else if (noeud.nodeType === Node.TEXT_NODE && CHAMP.test(noeud.textContent)) {
      const fragment = document.createDocumentFragment();

      for (const morceau of noeud.textContent.split(DECOUPE)) {
        if (CHAMP.test(morceau)) {
          const marque = document.createElement("mark");
          marque.className = "todo";
          marque.textContent = morceau;
          fragment.append(marque);
        } else if (morceau !== "") {
          fragment.append(morceau);
        }
      }

      noeud.replaceWith(fragment);
    }
  }
}

surlignerChamps(document.body);

const champs = document.querySelectorAll("mark.todo");
const aide = document.querySelector(".aide");

if (aide && champs.length > 0) {
  aide.querySelector(".aide__nombre").textContent = champs.length;
  aide.querySelector(".aide__texte").textContent =
    champs.length > 1 ? "champs à compléter" : "champ à compléter";
  aide.hidden = false;

  // Chaque clic fait défiler la page jusqu'au champ suivant.
  let suivant = 0;
  aide.querySelector(".aide__bouton").addEventListener("click", () => {
    champs[suivant].scrollIntoView({ behavior: "smooth", block: "center" });
    suivant = (suivant + 1) % champs.length;
  });
}


/* 3. Répartition des tâches --------------------------------------------------- */

const repartition = document.querySelector(".repartition__valeurs");
const comptes = [];

// Membres dans l'ordre des lettres (a, b, c, d) : prénom et nombre de tâches
for (const lettre of ["a", "b", "c", "d"]) {
  const taches = document.querySelectorAll(`#taches .membre--${lettre}`);
  if (taches.length > 0) {
    const prenom = taches[0].textContent.trim();
    comptes.push(`${prenom}, ${taches.length}\u00a0tâche${taches.length > 1 ? "s" : ""}`);
  }
}

if (repartition && comptes.length > 0) {
  repartition.textContent = comptes.join("\u00a0; ");
}
