+++
title = "Projet: Libdogecoin"
date = "2021-12-10"
type = "about"
[ author ]
name = "Dogecoin Fondation"
+++

<section class="presentation">
<div class="left">

<div class="title">


 ## <img width="60px" style='display: inline;' src="/marker.png"/>Project: Libdogecoin 

<div class="underline"></div>
</div>

<div class="description">
 
* [Dogecoin Trailmap: Prologue](/trailmap/prologue/) 
* [Projet: Dogecoin.com makeover & Dogepedia](/trailmap/website/)
* [Projet: Libdogecoin](/trailmap/libdogecoin/)
* [Projet: Dogecoin Standard](/trailmap/standard/)
* [**Projet: GigaWallet**](/trailmap/gigawallet/)
* Projet: Dogecoin Keyring (App / SDK)
* Projet: RadioDoge (Starlink + Radio nodes pour région éloignée)
* Proposition: Community Staking (Proof of Stake)
* Partenariat: Point de vente (L2 app) 
</div>

</div>

<div class="right">
<img class="dogegoin-light" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
<img class="dogegoin-dark" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
</div>


</section>

<section class='board'>

## Libdogecoin, une bibliothèque C de blocs de construction Dogecoin.

Libdogecoin sera une implémentation complète des protocoles Dogecoin, 
sous la forme d'une bibliothèque C (et d'une série de liaisons avec les langages populaires) qui 
permettra à quiconque de construire un produit compatible avec Dogecoin, sans avoir à se 
sans avoir à se soucier des spécificités des fonctions cryptographiques.  

Il est important de noter que libdogecoin sera une bibliothèque pure, ne 
fournissant qu'une installation de nœud "exécutable". Il est prévu que la connexion 
des bits ensemble dans un moteur se fasse au niveau supérieur, via les bibliothèques 
bibliothèques de réseau du langage hôte.  

Pendant le processus d'extraction des éléments fondamentaux du Dogecoin Core
Wallet (implémentation de référence) nous visons à documenter "comment fonctionne Dogecoin". 
sous la forme d'une suite de tests et de documents que nous appelons le [standard Dogecoin] (/trailmap/standard).
En faisant cela, nous serons en mesure de vérifier que l'implémentation Libdogecoin
interne de Dogecoin est correcte par rapport au porte-monnaie original, et donc fournir 
un mécanisme permettant à toute implémentation future de Dogecoin de vérifier sa conformité
avec le réseau Dogecoin.

## Pourquoi, qu'est-ce que ça fait pour le Dogecoin ?

Il s'agit de l'utilité par l'adoption, et l'adoption passe par l'intégration. 
Actuellement, le portefeuille  vieillissant Dogecoin Core est lourd de métaphores de bureau qui
qui avaient un sens il y a dix ans, et encombré d'installations qui ralentissent le développement
et qui seraient mieux réparties en utilitaires. 

Nous croyons qu'en prenant la fonctionnalité de base de Dogecoin et en la rendant
disponible comme une simple bibliothèque C avec des liens pour de nombreux langages, nous multiplions
la capacité de la communauté à innover. 

* Vous voulez créer un nouveau porte-monnaie Dogecoin en Python ? Ruby ? Node.js ? Faites-le !
* Vous voulez créer un nœud Dogecoin réduit pour un but spécifique (comme [GigaWallet](/trailmap/gigawallet)) ? Bien sûr !
* Vous voulez créer un utilitaire shell pour gérer les paires de clés HD Dogecoin en Golang ? Allez-y ! 

Notre objectif est de rendre l'écosystème Dogecoin plus sain en :

* Diversifiant la dépendance au Core Wallet comme définition unique de la Blockchain Dogecoin. 
* Augmentant les options de développement de portefeuilles et de nœuds standard. 
* Augmentant les options d'intégration pour améliorer l'adoption de Dogecoin par les plateformes. 
* Améliorant le processus d'adhésion au réseau Dogecoin afin que davantage de personnes gèrent les nœuds Dogecoin. 

<img class='center' src="/libdogecoin-purpose.png">

Ces objectifs sont atteints principalement par la documentation du Dogecoin et validés par une 
[norme Dogecoin] (/trailmap/standard) qui permettra à la communauté d'avoir confiance dans les diverses implémentations des nœuds et des portefeuilles Dogecoin. 
diverses implémentations de nœuds et de portefeuilles Dogecoin.   

Libdogecoin est l'élément de base du plan de la Fondation pour y parvenir.

</section>
