# BlogVoyage2

Créer un blog de voyage en version Desktop et Mobile.

Le blog est responsive, dynamique et connectée à une API.


1 -Composants:

Header:

- Contient un titre
- Une ville et sa température qui provient d'une API.

Page Home:

- Affiche en couverture l'image et les informations du dernier voyage réalisé
(filtre sur le mock comprenant tous les voyages sur le boolean isActive)

- Affiche en dessous sous formes de cartes, les autres voyages réalisés précédemment.


Page Article:

- Image du voyage selectionné depuis la page Home,
- Toutes les informations relatives à ce voyages s'affiche de façon dynamique
- Toutes les informations sont envoyés aux composants (input)


Footer




2- Fonctionnalités

- Fonction qui récupère l'id de l'article afin de pouvoir afficher cet article sur la page article
- Fonction filter pour recupérer les bonnes données sur le mock



3 - Connexion API

- Création d'un compte sur l'API avec récupération de l'URL et du token
- Création du fichier environnement avec ajout des variables et ajout dans le .gitignore
- Création de l'interface de l'observable basé sur le JSON de l'API
- Import du module HttpCLientModule dans le appModule.ts
- Création du service Temperature 
- Creation de la fonction Http.get et suscribe à l'observable



4 - Style et CSS

- Ajout de \n dans le mock
- Ajout de la propriété white-space : pré-wrap dans le css afin que le \n soit pris en compte




--------------------------------------- Fin ----------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
