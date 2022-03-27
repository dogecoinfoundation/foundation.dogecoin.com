
+++
title = "Advisory: Response to transactions being automatically retried"
date = "2021-11-11"
[ author ]
  name = "Dogecoin Foundation"
+++

Note: A previous version of this advisory used "we" to refer to a group separate to the Foundation. It has been edited to
clarify.

Binance has today paused Dogecoin withdrawals and stated they have found a "minor issue" in Dogecoin. The Foundation wishes to address this:

Several months ago (noting while an earlier post stated a year, first confirmed mention is April) Binance notified a group of Dogecoin Core maintainers that Binance had cases where transactions were stuck, meaning the transactions were not being mined successfully. The maintainers suggested Binance use RBF (replace by fee) on these transactions, which would replace the original transactions with a new transaction with a higher fee paid. Notably this was suggested because replace by fee invalidates the previous transaction (hence "replace"). As the transaction had RBF disabled, it was recommended that Binance create a new transaction manually, which would consume the same inputs to forcibly invalidate the previous transaction.

Some time later Binance notified the maintainers that they had account reconciliation issues. The maintainers were unable to reproduce those issues with the data we were given by Binance, but at the time suggested using the `-zapwallettxes` command line option to mitigate the issue. This is notable as it is anticipated this would have also prevented the issue seen.

Yesterday November 10th Binance notified the maintainers that previously stuck transactions had suddenly relayed successfully, post 1.14.5 update; likely because minfees have been lowered in 1.14.5, making the previously valid but unrelayable transactions relayable. The sole example provided is a transaction with fees which are valid as of v1.14.5, but were invalid (too low) in 1.14.3 and before. Note, Binance updated directly from v1.14.3 to 1.14.5, in the past few days.

Based on the information available it appears that the previously stuck transactions have been retried automatically, as would happen on each node restart after upgrade - and went through, since now the minimum required relay fee is lower. This is correct behaviour as a result of reducing fees.

## Lessons

* Correct handling to cancel a transaction is to spend the to-be-cancelled transaction's inputs to a different transaction, which invalidates the first.
  * Ideally use replace-by-fee if available, but otherwise crafting and sending a transaction spending the previously chosen inputs, will invalidate the previous transaction.
* Please note that transactions don't have a defined timeout period, but are typically discarded due to memory limits.

## Guidance

The Foundation has received no further reports of this happening. For any providers with concerns about stagnant invalid transactions, we recommend stopping the nodes, removing the mempool.dat file just in case, and then starting the node with `-zapwallettxes`.

For individual users with concerns, note that sending all of your Dogecoins back to yourself (ideally a new address, but you can use an existing one for this) will also spend any previous transaction outputs, and invalidate any such "stuck" transactions.

