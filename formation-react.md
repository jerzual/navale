
# Formation React

Formateur Frédéric Gaurat (TOTEM).

  * 
  * 
  * React (Declarative, Component-based, Learn once write anywhere.)

Apparté RxJS. Observateur / Itérateur 

React : reactive appliqué au dom.

C'est à la mode (logos airbnb / fb / dropbox / netflix )

MVC : 'date de 1930'. flou, 

Slide mvc : pas clairs, agénérifier, actions .

Problème : induit violation de SRP (SingleResponsabilityPrinciple)
Note : Uncle bob critères de qualité d'architecture. 
Apparté (SOLID);


## Etat de l'art - dev web

### WebComponents : specs W3C
- ShadowDOM (dom privé, != de virtual dom)
- Custom components
- HTML Imports
- template html (HTML5 balise <template>)

### Outillage

fanboy d'Atom
Apparté (ékectron) .

#### NPM / Yarn

Installation avec chocolatey : 

lancer un cmd.exe avec droits administrateur : 

```
    @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

puis :

    choco install yarn

#### Webpack

Webpack est un bundler javascript. package des modules applications.



### React

create-react-app c'est trop magique. une dépendance transitive gère toutes les autres (à la spring-boot starters)

Génère un fichier 

    yarn eject

Vire create-react-app et remets les outils utilisés dans le projet et les dépendances dans le JSON.

## Bases de React

TP : Composant Hello world

### VirtualDOM

React propose une abstraction au dessus du DOM lui permettant, via un algorithme de diff, de ne mettre à jour que ce qui a changé.



### JSX

Le JSX permet de génèrer du js à partir de XML.

https://babeljs.io/docs/plugins/transform-react-jsx/
https://jasonformat.com/wtf-is-jsx/

Valeurs dans le dom.

### React props et state

Les propertiess sont passées de parent vers enfant.

les proptypes permettent de sécuriser le type / spécifier l'api du composant
définition des propTypes et defaultProps en static sur la classe es2015.



#### props

Paramètre du parent
Lecture seule
Validable
Valeur par défaut

#### states

* Créés dans un composant
* Lecture écriture (this.state dans le composant)
* Updatable (updateState, setState)

### React forms

Les valeurs de champs modifiables sont dans le DOM (input, textarea, select etc..)

Il faut récupérer leur valeurs dans des composants

* 

## Communication composants

Remontée d'infos par les handlers (onClick, onChange etc...) passés en props aux composants enfants 

    O
    |
    /\
   O  O

### FLux

#### Store

Stocke les données

#### Actions

'Quelque chose arrive dans l'app' Event, clicks, Réponses ajax, timer, websocket

Action = type (nom unique) + contenu

#### Dispatcher

créé des actions réparties vers le store.

        Views

Stores          Actions
  
      Dispatcher




## Isomorphic apps


## React Native

Composants natifs. 

## Les tests

Jest

https://facebook.github.io/jest/docs/tutorial-react.html