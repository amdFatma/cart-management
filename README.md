Initialiser du projet:

- A partir du root du folder, lancer un `yarn install`

- Puis lancer les deux commandes suivantes
    `yarn app:serve` et `yarn server:serve`

- le projet s'initialise avec une api répondant à l'url suivante
    SERVER http://localhost:3000/cart
    APP  http://localhost:8080/


**TODO #1**

- En tant qu'utilisateur, j'ai besoin de me rendre sur la page panier
    - création d'une page `CART`

- En tant qu'utilisateur, j'ai doit pouvoir consulter le contenu de mon panier
    - création d'un composant de type panier.

- En tant qu'utilisateur, j'ai doit pouvoir consulter le contenu de mon panier
    - mise en place d'un call permettant de récupérer les données du panier

- En tant qu'utilisateur, je dois pouvoir consulter les informations suivantes
    nom, ref, image, prix, quantité

- En tant qu'utilisateur, je dois pouvoir faire varier la quantité de chaque produit

- En tant qu'utilisateur, je dois pouvoir supprimer un produit du panier

- En tant qu'utilisateur, je dois pouvoir consulter le total du panier

**TODO #2**

- Ajouter un minicart dans le header de l'application
- il contiendra un rappel de la quantity de produits du panier

- En tant qu'utilisateur, je dois pouvoir cliquer sur le minicart pour afficher le panier
sous une forme flottante --  ok

- ce panier reprend le fonctionnement déjà vu sur la page `CART``

**TODO #3 BONUS**

- En tant qu'utilisateur, lorsque je supprime un produit de mon panier
- une modale de confirmation s'affiche pour valider mon action

**TODO #4 BONUS**

- En tant qu'utilisateur, je peux choisir un mode de livraison

**TODO #5 BONUS**

- test unitaire
