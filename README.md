# Noclone

**Copiez-nous. Vous n’y arriverez pas.**

Noclone est une banque en ligne **fictive**, conçue contre la fraude : chaque fonctionnalité répond à une arnaque précise.

> Projet étudiant. Noclone n’est pas une vraie banque : le site ne manipule que des données de démonstration et ne demande jamais de véritable information bancaire.

Projet libre du cours **8WEB101 Conception et programmation de sites Web**, Université du Québec à Chicoutimi, automne 2026.

## Fonctionnalités

**Essentiel, démontré à la séance 14**

1. Connexion par passkey, sans mot de passe.
2. Délai de sécurité annulable sur les virements vers un nouveau bénéficiaire.
3. Coffre à retardement pour l’épargne.
4. Code de détresse ouvrant un compte factice.
5. **Le Check** : deux amis se vérifient une fois en personne, en scannant le code Noclone l’un de l’autre. Ensuite, chaque demande d’argent envoyée sur Instagram ou Snapchat est signée par le téléphone de son auteur : un compte piraté ne peut plus rien réclamer.
6. Démonstrateur de billet quantique : une contrefaçon est détectée.

**Bonus, si le temps le permet**

- **Quittes** : les dépenses entre amis checkés se règlent seules, sans virement ni relance.
  - Les deux amis choisissent ensemble le rythme lors du Check : chaque semaine (par défaut), chaque jour, ou dès que le solde atteint un montant fixé.
  - À chaque échéance, Noclone additionne les dettes dans les deux sens et ne transfère que la différence.
  - « Payer maintenant » reste disponible à tout moment.
  - Chaque dette est validée par le téléphone de la personne qui doit, dans la limite fixée lors du Check.
  - Seules les dettes de plus de 24 heures sont réglées : chacune peut être contestée pendant ce délai.
  - Les amis checkés à proximité sont détectés en Bluetooth (simulé dans la démonstration).
- Ange gardien : un proche co-valide les virements inhabituels.
- Journal d’accès : qui a consulté votre dossier.
- « Est-ce vraiment nous ? » : vérification des appels de la banque.

## Équipe

| Membre | GitHub | Rôle |
| --- | --- | --- |
| [Prénom A] [NOM A] | [@compte-a] | Coordination et documentation |
| [Prénom B] [NOM B] | [@compte-b] | Référent technique |
| [Prénom C] [NOM C] | [@compte-c] | Conception et expérience utilisateur |
| [Prénom D] [NOM D] | [@compte-d] | Intégration et qualité |

## Technologies

- [WebAuthn (passkeys)](https://www.w3.org/TR/webauthn/) : connexion, confirmation des opérations sensibles et signature des demandes d’argent entre amis, sans mot de passe (technologie explorée dans le cadre du projet)
- [API QRNG de l’ANU](https://quantumnumbers.anu.edu.au) : nombres aléatoires d’origine quantique pour le démonstrateur de billet quantique
- HTML, CSS et JavaScript, publiés avec GitHub Pages

## Documents

- [Proposition de projet et plan de travail (PDF)](docs/8web101-projet-libre-proposition-noclone.pdf) et sa [source HTML](docs/proposition.html)
- [Wiki](https://github.com/[compte]/noclone/wiki) : journal d’apprentissage et décisions
- [Tableau des tâches](https://github.com/[compte]/noclone/projects) : une issue par tâche (T01 à T24)

## État du projet

Proposition déposée le 8 octobre 2026, en attente de validation.
