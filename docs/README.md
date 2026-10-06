# Proposition de projet : mode d’emploi

Ce dossier contient la proposition de projet du projet libre (étape de validation obligatoire, séance 6).

| Fichier | Rôle |
| --- | --- |
| `proposition.html` | contenu, en HTML sémantique |
| `proposition.css` | mise en page à l’écran et à l’impression (format Lettre) |
| `proposition.js` | aide à la rédaction : typographie française, champs à compléter, répartition des tâches |
| `img/` | logo et cartes du pied de page (SVG), rendus 3D : couverture, douze cartes (`cartes/`) et douze mises en scène (`scenes/`) |
| `3d/cartes-3d.html` | la scène 3D des cartes (three.js), qui produit les images de `img/` |
| `fonts/` | polices hébergées dans le dépôt, sous licence SIL Open Font License |
| `8web101-projet-libre-proposition-noclone.pdf` | version déposée sur Moodle |

## Modifier

1. `git pull` pour récupérer le travail des autres membres.
2. Ouvrir le dossier du dépôt dans VSCodium, puis `docs/proposition.html` avec **Live Preview** (la page s’actualise à chaque enregistrement).
3. Remplacer les champs entre crochets (`[Prénom A]`, `[compte]`…) avec **Ctrl+H**. Le bandeau jaune en haut de la page indique combien il en reste ; il ne s’imprime jamais.
4. `git add docs/proposition.html`, puis `git commit -m "…"` et `git push`.

Règles de mise en page :

- Les numéros de sections et de tableaux sont générés par le CSS : ne les écrivez pas à la main.
- Pour qu’un titre commence une nouvelle page, ajoutez-lui `class="saut-de-page"`.
- Les couleurs et les polices se changent à un seul endroit : les variables au début de `proposition.css`.
- Pour changer le responsable d’une tâche, modifiez la lettre de la carte de couleur (`membre--a` à `membre--d`) **et** le prénom ; la phrase « Répartition » se recalcule seule.

## Refaire les images 3D

Ouvrez `docs/3d/cartes-3d.html` avec **Live Preview**, attendez la fin du calcul, puis cliquez sur « Télécharger l’image ». L’adresse choisit la scène :

- `cartes-3d.html` : l’éventail de la couverture ;
- `cartes-3d.html?scene=carte&couleur=lagon` : une carte seule (cobalt, orange, emeraude, lavande, corail, rose, cuivre, sauge, glacier, ambre, cerise, lagon) ;
- `cartes-3d.html?scene=mise-en-scene&nom=etui` : une mise en scène (perspective, deux-cartes, verticale, relief, givree, holographique, epaisseur, reflet, etui, application, gros-plan, guilloche).

Les couleurs, le texte imprimé sur les cartes et les cadrages se modifient au début du script.

## Exporter en PDF

Utilisez un navigateur basé sur Chromium (Vivaldi, Chrome, Edge ou Brave) : c’est avec lui que le gabarit a été testé, et d’autres navigateurs peuvent ignorer les en-têtes et les numéros de page.

**Ctrl+P**, destination « Enregistrer au format PDF », puis dans « Plus de paramètres » :

- Marges : par défaut (le format Lettre et les marges viennent du CSS)
- Graphiques d’arrière-plan : coché
- En-têtes et pieds de page : décoché

Enregistrez sous `docs/8web101-projet-libre-proposition-noclone.pdf`.

En ligne de commande, pendant que Live Preview est ouvert (remplacez `chromium` par `chromium-browser` ou `google-chrome` selon votre installation) :

```bash
chromium --headless --no-pdf-header-footer \
  --print-to-pdf=docs/8web101-projet-libre-proposition-noclone.pdf \
  http://127.0.0.1:3000/docs/proposition.html
```

Le résultat attendu : 6 pages au format Lettre (couverture et 5 pages), sans aucun champ surligné.
