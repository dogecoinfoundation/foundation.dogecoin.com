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
 
* [Dogecoin Trailmap: Prologue](/fr/trailmap/prologue/) 
* [Projet: Dogecoin.com transformation & Dogepedia](/fr/trailmap/website/)
* [**Projet: Libdogecoin**](/fr/trailmap/libdogecoin/)
* [Projet: Dogecoin Standard](/fr/trailmap/standard/)
* [Projet: GigaWallet](/fr/trailmap/gigawallet/)
* Projet: Dogecoin Keyring (App / SDK)
* Projet: RadioDoge (Starlink + Nœuds radio pour les régions éloignées)
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

## Libdogecoin, une bibliothèque C de construction de blocs Dogecoin.

Libdogecoin sera une implémentation complète des protocoles Dogecoin, sous la forme d'une bibliothèque C (et d'une série de liens vers des langages populaires) qui permettra à quiconque de construire un produit conforme à Dogecoin, sans avoir à se soucier des spécificités plus complexes des fonctions cryptographiques.  

Il est important de noter que libdogecoin sera une bibliothèque pure, ne fournissant pas une installation de nœud ‘exécutable’. Il est prévu que la connexion des bits ensemble dans un moteur soit faite au niveau supérieur, via les bibliothèques de réseau du langage hôte.  

Au cours du processus d'extraction des fondamentaux du Dogecoin Core Wallet (implémentation de référence), nous visons à documenter 'comment fonctionne Dogecoin' sous la forme d'une suite de tests et de documents que nous appelons le [Dogecoin Standard](/fr/trailmap/standard). En faisant cela, nous serons en mesure de vérifier que l'implémentation Libdogecoin des internes de Dogecoin est exacte au portefeuille OG, et ainsi fournir un mécanisme pour toutes les implémentations futures de Dogecoin pour vérifier la conformité avec le réseau Dogecoin.

## Pourquoi, qu'est-ce que ça fait pour le Dogecoin ?

Il s'agit de l'utilité par l'adoption, et l'adoption passe par l'intégration. À l'heure actuelle, le portefeuille Dogecoin Core vieillissant est lourd de métaphores de bureau qui avaient un sens il y a dix ans, et encombré d'installations qui ralentissent le développement et seraient mieux réparties en utilitaires. 

Nous pensons qu'en prenant la fonctionnalité de base de Dogecoin et en la rendant disponible sous la forme d'une simple bibliothèque C avec des liens pour de nombreux langages, nous multiplions la capacité de la communauté à innover. 

* Vous voulez créer un nouveau walet Dogecoin en Python ? Ruby ? Node.js ? Faites-le !
* Vous voulez créer un nœud Dogecoin réduit pour un but spécifique (comme [GigaWallet](/fr/trailmap/gigawallet)) ? Bien sûr !
* Vous voulez créer un utilitaire shell pour gérer les paires de clés HD Dogecoin en Golang ? Allez-y ! 

Nous visons à rendre l'écosystème Dogecoin plus sain en :

* Diversifiant la dépendance au Core Wallet comme définition unique de la Blockchain Dogecoin. 
* Augmentant les options de développement de portefeuilles et de nœuds standard. 
* Augmentant les options d'intégration pour améliorer l'adoption de Dogecoin par les plateformes. 
* Améliorant le processus d'adhésion au réseau Dogecoin afin que davantage de personnes gèrent les nœuds Dogecoin. 

<img class='center' src="/libdogecoin-purpose.png">

Ces objectifs sont atteints principalement par la documentation de Dogecoin et validés par un [stantard Dogecoin](/fr/trailmap/standard) qui permettra à la communauté d'avoir confiance dans les diverses implémentations des nœuds et des portefeuilles Dogecoin. 

Libdogecoin est l'élément de base du plan de la Fondation pour y parvenir.

</section>
