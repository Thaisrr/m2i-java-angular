# Les Exos !

## Exercice 1: 

- Créer un nouveau Angular 
- Créer un composant "counter"
- Intégrer le composant dans app
- Le composant counter doit afficher un compteur, 
- qui commence à 0
- qui est rouge si le nombre est impair, et vert si le nombre est pair
- qui s'incrémente ou se décrémente grâce à 2 boutons


## Exercice 2:

- Créer un nouveau composant "Séries";
- Créer la route du composant + la route du composant counter.
- Créer la barre de navigation
- Afficher ces 2 composants.
- Dans séries, créer une liste de séries en dur.
- Afficher la liste
- Afficher un message si il n'y a rien dans la liste
- Ajouter un bouton de suppression sur chaque élément de liste.

## Exercice 3

- Créer un pipe personnalisé qui prend en paramétre un tableau, et une string 'order' ( 'asc', 'desc');
- Utiliser ce pipe sur le tableau des séries pour le trier par alphabétique/
- Ajouter 2 boutons pour modifier l'ordre du tableau (asc, desc).

## Exercice 4

- Créer un composant Librairie, et sa route
- Dans ce composant, afficher une liste de livres
  - title
  - author
  - isRead
- Quand les livres sont lus, on affiche un emoji pouce vers le haut à côté du titre 
- + titre souligné,
- sinon un emoji pouce vers le bas. ( Utiliser un pipe pour l'emoji )
- Ajouter un bouton pour marquer un livre comme lu / pas lu.

## Exercice 5

Dans le composant librairie, créer une formulaire pour créer un livre.
Le titre et l'auteur.trice sont obligatoire.
Par défaut, la valeur de isRead est false.
Ajouter le nouveau livre à la liste précédente.


## Exercice 6

Créer un nouveau composant et sa route
- Dans ce composant, créer un formulaire réactif pour créer un pokemon.
  - nom
  - description
  - liste de types ( eau, psy, feu, ect... )
  - liste d'attaques
    - nom
    - description
    - dégats
  - zone 
    - nom (string)
    - region (string)
