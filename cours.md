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

## Les Pipes

Les pipes sont des fonctions qui prennent une valeur en entrée, et ressorte la valeur transformée.
Il y a des pipes pour le texte ``uppercase``, `lowercase`, `titlecase`
Il y a un pipe ``number`` qui prend en paramètre une string qui défini : 
- le nombre minimum de chiffres avant la virgule,
- le nombre min de chiffres après la virgule
- le nombre max de chiffres après la virgule
- "1.2-3"
