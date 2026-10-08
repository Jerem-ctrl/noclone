# Noclone

**Copiez-nous. Vous n’y arriverez pas.**

Noclone est une banque en ligne **imaginaire**, conçue pour lutter contre la fraude : chaque fonctionnalité est une réponse à une arnaque précise.

> Projet étudiant. Noclone n’est pas une véritable banque : le site ne travaille qu’avec des données de démonstration et ne vous demandera jamais de réelles informations bancaires.

Projet libre du cours **8WEB101 Conception et programmation de sites Web**, Université du Québec à Chicoutimi, automne 2026.

## Fonctionnalités

**Essentiel, démontré à la séance 14**

1. Connexion par passkey, sans mot de passe.
2. Délai de sécurité annulable pour les virements vers un nouveau bénéficiaire.
3. Coffre à retardement pour l’épargne.
4. Code de détresse permettant d’ouvrir un compte factice.
5. **Le Check** : deux amis se vérifient une fois en personne, en scannant mutuellement leur code Noclone. Ensuite, toute demande d’argent envoyée sur Instagram ou Snapchat sera signée par le téléphone de son auteur : un compte piraté ne pourra plus rien exiger.
6. Démonstrateur de billet quantique :  détection d’une contrefaçon.

**Bonus, si le temps le permet**

- **Quittes** : les dépenses entre amis vérifiées se règlent d’elles-mêmes, sans virement ni relance.
  - Les deux amis décident ensemble de la fréquence du Check : chaque semaine (par défaut), chaque jour, ou dès que le solde atteint le montant convenu.
  - À chaque date d’échéance, Noclone additionne les dettes dans les deux sens et ne transfère que la différence.
  - « Payer maintenant » reste disponible à tout instant.
  - Chaque dette est validée par le téléphone de la personne qui doit, dans la limite fixée lors du Check.
  - Seules les dettes de plus de 24 heures sont réglées, chacune pouvant être contestée dans ce délai.
  - Les amis situés à proximité sont détectés par Bluetooth (simulation lors de la démonstration).
- Ange gardien : un proche co-valide les virements inhabituels.
- Journal d’accès : qui a vu votre dossier.
- « Est-ce vraiment nous ? » : vérification des appels bancaires.

## Équipe

| Membre | GitHub | Rôle |
| --- | --- | --- |
| Gabriel Lessard| [@gabless11](https://github.com/gabless11) | Coordination et documentation |
| Adam Benahmed | [@Benahmed-AdamBenahmed](https://github.com/Benahmed-AdamBenahmed) | Référent technique |
| Olwen Cravilly-Mitaine | [@Cravilly-Olwen](https://github.com/Cravilly-Olwen) | Conception et expérience utilisateur |
| Jeremy Girard | [@Jerem-ctrl](https://github.com/Jerem-ctrl) | Intégration et qualité |

## Technologies

- [WebAuthn (passkeys)](https://www.w3.org/TR/webauthn/) : connexion, confirmation des opérations sensibles et signature des demandes d’argent entre amis, sans mot de passe (technologie explorée dans le cadre du projet)
- [API QRNG de l’ANU](https://quantumnumbers.anu.edu.au) : nombres aléatoires d’origine quantique pour le démonstrateur de billet quantique
- HTML, CSS et JavaScript, publiés avec GitHub Pages

## Documents

- [Proposition de projet et plan de travail (PDF)](docs/8web101-projet-libre-proposition-noclone.pdf) et sa [source HTML](docs/proposition.html)
- [Wiki](https://github.com/Jerem-ctrl/noclone/wiki) : journal d’apprentissage et décisions
- [Tableau des tâches](https://github.com/Jerem-ctrl/noclone/projects) : une issue par tâche (T01 à T24)

## État du projet

Proposition déposée le 8 octobre 2026, en cours de validation.
