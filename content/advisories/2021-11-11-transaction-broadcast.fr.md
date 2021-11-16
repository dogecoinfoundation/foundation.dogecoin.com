
+++
title = "Réponse concernant les transactions qui sont automatiquement relancées"
date = "2021-11-11"
[ author ]
  name = "Dogecoin Foundation"
+++

Remarque : dans une version précédente de cet avis, le terme "nous" faisait référence à un groupe distinct de la Fondation. Il a été modifié pour
clarifier le propos.

Binance a aujourd'hui mis en pause les retraits de Dogecoin et a déclaré avoir trouvé un "problème mineur" dans le Dogecoin. Nous voulions aborder ce sujet :

Il y a plusieurs mois (à noter que si l'avis précédent mentionnait une année, la première mention confirmée est en avril), Binance a informé l'équipe de développeurs du Dogecoin Core qu'il y avait des cas où des transactions étaient bloquées, ce qui signifie qu'elles n'étaient pas minées avec succès. L'équipe de développeurs a suggéré que Binance utilise RBF (replace by fee) sur ces transactions, ce qui remplacerait les transactions originales par une nouvelle transaction avec des frais plus élevés. Notamment, cela a été suggéré parce que le remplacement par des frais invalide la transaction précédente (d'où le terme "remplacer"). Comme la transaction avait le RBF désactivé, nous avons recommandé de créer une nouvelle transaction manuellement, qui consommerait les mêmes entrées pour invalider de force la transaction précédente.

Quelque temps plus tard, Binance a informé l'équipe de développeurs qu'ils avaient des problèmes de réconciliation de compte. Nous n'avons pas été en mesure de reproduire ces problèmes avec les données fournies par Binance, mais nous avons suggéré (il y a plusieurs mois maintenant) d'utiliser l'option de ligne de commande -zapwallettxes pour atténuer le problème. Ceci est important car nous pensons que cela aurait également permis d'éviter le problème constaté.

Hier, le 10 novembre, nous avons été informés que des transactions précédemment bloquées avaient soudainement été relayées avec succès, après la mise à jour 1.14.5 ; probablement parce que les minfees ont été abaissés dans la version 1.14.5, rendant relayables les transactions précédemment valides mais non relayables. Le seul exemple que nous ayons venant de Binance, est une transaction avec des frais qui sont valides à partir de la v1.14.5, mais qui étaient invalides (trop bas) en 1.14.3 et avant. Notez que Binance a fait une mise à jour directe de la v1.14.3 à la 1.14.5, ces derniers jours.

Actuellement, nous pensons que les transactions précédemment bloquées ont été tentées à nouveau automatiquement, comme cela se produit à chaque redémarrage de nœud après la mise à jour - et ont été effectuées, puisque maintenant les frais de relais minimum requis sont plus bas. Il s'agit d'un comportement correct résultant de la réduction des frais.

## Leçons

* La manipulation correcte pour annuler une transaction est de passer les entrées de la transaction à annuler à une transaction différente, qui invalide la première.
* L'idéal est d'utiliser le remplacement par les frais s'il est disponible, mais sinon, la création et l'envoi d'une transaction dépensant les entrées précédemment choisies invalidera la transaction précédente.
* Veuillez noter que les transactions n'ont pas de délai d'expiration défini, mais sont généralement éliminées en raison des limites de mémoire.

## Conseils

La fondation n'a reçu aucune autre réponse à ce sujet. Pour tous les fournisseurs qui s'inquiètent de la stagnation de transactions invalides, nous recommandons d'arrêter les nœuds, de supprimer le fichier mempool.dat au cas où, puis de démarrer le nœud avec -zapwallettxes.

Pour les utilisateurs individuels inquiets, notez que le fait de renvoyer tous vos Dogecoins à vous-même (idéalement une nouvelle adresse, mais vous pouvez utiliser une adresse existante pour cela) dépensera également toutes les sorties de transactions précédentes, et invalidera toute transaction "bloquée".

