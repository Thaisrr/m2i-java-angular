# Angular

## Créer un projet : 

```bash
ng new nomduprojet
```

## Récupérer un projet existant : 
Installer les dépendances avec `npm i` ou `npm install`.

## Lancer le projet

On lance le serveur avec `npm start` ou `ng serve`.

Si le port 4200 est déjà utilisé, on peut le killer avec : 
```bash
netstat -ano | findstr :4200
```

## Créer un nouveau composant

```bash
ng g c dossier/nom-composant
```

## L'interpolation

C'est le fait d'interpréter du JS dans le template.
Pour ça, on utilise les balises moustaches `{{ }}`.
On peut afficher n'importe quelle expressions JS tant qu'elle retourne quelque chose.

## Data Binding : 

Permet d'interpréter du JS dans les attributs HTML.
On peut interpréter du JS dans n'importe quel attribut HTML à condition de mettre l'attribut entre crochets.

```angular2html
<img [src]="uneImageEnVariable" />
```

## Les classes

On peut gérer dynamiquement les classes avec la directive [ngClass] : 
On peut alors passer les classes sous forme de tableau : 
```angular2html
<p [ngClass]="['classe1', variable1]"></p>
```

Ou sous forme d'objet dont la clef est le nom de la classe, et la valeur un boolean.
C'est pratique pour passer des classes conditionnellement.

```angular2html
<p [ngClass]="{maClasseA: true}"></p>
```

Attention, lorsque vous souhaitez utiliser ngClass dans un composant, il faut l'importer afin de rendre la directive accessible : 

```ts
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [
    NgClass
  ],
})
export class PresentationComponent { }
```

## Le router

Pour créer des "routes", on les définit dans le fichier app.routes.ts sous la forme d'un objet
qui contient un path ( le chemin dans l'url ), et le composant.

```ts
export const routes = [
  {path: '', component: HomeComponent}
]
```

On peut ensuite créer des liens vers ces routes avec des balises d'ancre, et l'attribut `routerLink` : 
```angular2html
<a routerLink="/">Home</a>
```

## Les Images

Les images sont gérées en lazy loading par Angular grâce à la directive [ngSrc]
- Importer `ngOptmizedImage` dans le composant
- Remplacer src par [ngSrc]
- Indiquer une width et height ou fill
- Lorsque fill, le parent doit être en `position: relative`, et l'image en `object-fit: contain ou cover`.

```angular2html
<img [ngSrc]="'monimage'" priority width="200" height="100" />
```


## Les Pipes

Les pipes sont des fonctions qui prennent une valeur en entrée, et ressorte la valeur transformée.
Il y a des pipes pour le texte ``uppercase``, `lowercase`, `titlecase`
Il y a un pipe ``number`` qui prend en paramètre une string qui défini : 
- le nombre minimum de chiffres avant la virgule,
- le nombre min de chiffres après la virgule
- le nombre max de chiffres après la virgule
- "1.2-3"

On peut créer un pipe personnalisé avec la commande :
```bash
ng g pipe chemin/monpipe
```

## Les Formulaires

2 types en Angular : 
- Template Driven Form : avec [(ngModel)] qui permet de faire du two way binding
- Reactive Forms

Les états des formControl / formGroup / formArray :
- valid -> respecte tous les validators
- invalid -> ne respecte au moins des validators
- touched (?) -> le champs à déjà perdu le focus
- untouched -> le champs n'a jamais perdu le focus
- dirty -> le champs a déjà reçu une intéraction
- pristine -> le champs n'a jamais reçu d'intéraction

Dans les formulaires réactives, on peut retrouver 3 classes principales pour représenter les données :
- FormControl pour les données simples ( inputs, selects, textarea ),
- FormGroup pour les objets d'inputs ( ensemble d'inputs qui forment un objet ),
- FormArray pour les tableaux d'inputs

Dans un formArray, les formControlName sont l'index récupéré par le @for.
Il faut donc le passer dynamiquement, en mettant formControlName entre crochets :
`[formControlName]="$index"`.


On peut créer des Validators personnalisés dans un fichier typescript.
Ces validators sont des fonctions, qui retourne une fonction de type `ValidatorFn`.
Cette `ValidatorFn` prend en paramétre un élément de type `AbstractControl`, qui peut être une instance de FormGroup, FormControl, ou FormArray.

Enfin, la fonction doit retourner un objet dont la clef est le nom de l'erreur, et la valeur true si il y a erreur, false dans le cas contraire.


## Cycle de Vie

Il y a trois hooks principaux pour le cycle de vie : 
- OnChange 
  - -> se lance quand l'@Input() change. Ne se lance pas si pas d'Inputs
  - Pour réagir aux modifications d'un input
  - On reçoit la valeur précédente, la nouvelle valeur, et si c'est le premier changement.
- OnInit 
  - -> se lance quand tous les Input ont été chargés. Se lance même si pas d'input.
  - Pour agir quand le composant est prét -> faire les requêtes HTTP
  - Récupérer des données
- OnDestroy 
  - -> se lance quand on quitte le composant.
  - Pour couper les streams, les souscriptions, les web sockets, les écouteurs...

## RXJS

### Les Observables : 

- Un observable est un flux auquel il faut s'abonner.
- Il peut renvoyer 3 types données: 
  - next: une valeur. On peut en recevoir plusieurs tant qu'on est abonné à l'observable
  - error: retourne un objet Error. Une erreur marque la fin de l'observable, et coupe les abonnements.
  - complete: ne retourne rien. S'exécute quand l'observable se termine naturellement de lui même.

- On peut agir avant la souscription avec les pipes : 
  - catchError : gére l'erreur et doit retourner soit une erreur plus user friendly, soit un observable
  - map: récupère et modifie la donnée de l'observable
  - tap: récupère la donnée, et ne retourne rien

### Les subjects

Ce sont des types d'observable. 
Les différences :
- On n'a pas accès aux valeurs émises avant la souscription
- On peut faire des nexts en dehors du constructor, quand on le souhaite.

### Behaviour Subject

C'est un type de subject.
- Il prend une valeur par défaut
- A la souscription, on récupère la dernière valeur émise
- On peut faire des next quand on le souhaite

### Replay Subject

Idem, c'est un type de subject
- Il ne prend pas de valeur par défaut.
- A la souscription, il récupère toutes les valeurs émises précédemment
- On peut faire des nexts quand on le souhaite
