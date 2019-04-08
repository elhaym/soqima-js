This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


##  Avancement

Les dossiers et données relatives à ceux-ci demandées sont affichées après avoir été récupérées depuis le JSON et un [proxy](https://cors-anywhere.herokuapp.com/) pour s'affranchir des erreurs liées au CORS. Axios (AJAX) est utilisé pour créer l'appel HTTP et lancer une requête GET qui récupére les données, une promesse permet de vérifier si les données sont parsées, auquel cas une fenêtre d'alerte s'affiche avec l'erreur concernée et le booléen 'isLoading' dans le state du composant est mis à jour sur false afin d'afficher un message de chargement. Une fois la promesse résolu, une fonction callback récupére les données et les stocke dans un tableau "bookings" qui pourra être dynamiquement manipulé et passé dans le props afin de pouvoir être utilisé par les autres composants. Le design des dossiers et de leurs données a aussi été rapidement revisité.

### Améliorations à apporter

Avec plus de temps, j'aurai voulu améliorer la modularité du code et des composants de manière à ce que chacun d'entre eux aient les données qui lui sont liées ainsi que leurs propres affichages et fonctions réutilisables. En plus de cela, j'aurai bien voulu développer une barre de recherche qui permettrait d'afficher les données en temps réel selon chaque valeur d'une chaine de caratères donnée grâce à Axios (AJAX) que je voulais apprendre et utiliser pour la première fois lors de ce test. 

## Problème(s) rencontré(s)

La logique pour afficher l'itinéraire d'un client et des voyageurs d'un dossier est comprise (vérifier à chaque itération si la valeur de location[j].to.airport.code à location[j + 1].from.airport.code / sinon affichage par défaut) mais je n'ai pas pu y venir à bout à temps.

## Technologies utilisées 

React.js / Javascript / SASS / Axios / Material UI Icons / Bootstrap 4 / 

