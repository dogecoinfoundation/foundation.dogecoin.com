<<<<<<< HEAD

+++
title = "Advisory: Response to transactions being automatically retried"
date = "2021-11-11"
[ author ]
  name = "Dogecoin Foundation"
+++

Binance has today paused Dogecoin withdrawals and stated they have found a "minor issue" in Dogecoin. We wanted to address this:

Several months ago (noting while an earlier post stated a year, first confirmed mention is April) Binance notified us they had cases where transactions were stuck, meaning they were not being mined successfully. We suggested Binance use RBF (replace by fee) on these transactions, which would replace the original transactions with a new transaction with a higher fee paid. Notably this was suggested because replace by fee invalidates the previous transaction (hence "replace"). As the transaction had RBF disabled, we recommended creating a new transaction manually, which would consume the same inputs to forcibly invalidate the previous transaction.

Some time later Binance notified us that they had account reconciliation issues. We were unable to reproduce those issues with the data we were given by Binance, but we suggested (months ago, now) using the `-zapwallettxes` command line option to mitigate the issue. This is notable as we believe this would have also prevented the issue seen.

Yesterday November 10th we were notified that previously stuck transactions had suddenly relayed successfully, post 1.14.5 update; likely because minfees have been lowered in 1.14.5, making the previously valid but unrelayable transactions relayable. The sole example we have, from Binance, is a transaction with fees which are valid as of v1.14.5, but were invalid (too low) in 1.14.3 and before. Note, Binance updated directly from v1.14.3 to 1.14.5, in the past few days.

Currently what we believe has happened is that the previously stuck transactions have been retried automatically, as would happen on each node restart after upgrade - and went through, since now the minimum required relay fee is lower. This is correct behaviour as a result of reducing fees.

## Lessons

* Correct handling to cancel a transaction is to spend the to-be-cancelled transaction's inputs to a different transaction, which invalidates the first.
  * Ideally use replace-by-fee if available, but otherwise crafting and sending a transaction spending the previously chosen inputs, will invalidate the previous transaction.
* Please note that transactions don't have a defined timeout period, but are typically disposed of due to memory limits.

## Guidance

We have received no further reports of this happening. For any providers with concerns about stagnant invalid transactions, we recommend stopping the nodes, removing the mempool.dat file just in case, and then starting the node with -zapwallettxes.

For individual users with concerns, note that sending all of your Dogecoins back to yourself (ideally a new address, but you can use an existing one for this) will also spend any previous transaction outputs, and invalidate any such "stuck" transactions.

=======

+++
title = "告示：对交易自动重试的回复"
date = "2021-11-11"
[ author ]
  name = "Dogecoin Foundation"
+++

币安今天暂停了狗狗币的提款，并表示他们在狗狗币中发现了一个“小问题”。我们想说明一下这个问题：

几个月前（请注意，虽然较早的帖子说是一年，但首次确认提及是4月）Binance 通知我们他们有交易卡住的情况，这意味着他们没有被成功挖出。我们建议币安在这些交易中使用 RBF（replace by fee），这将用支付更高费用的新交易替换原始交易。值得注意的是，我们建议这样做是因为按费用替换会使之前的交易无效（因此称之为“替换”）。由于交易禁用了 RBF，我们当时建议手动创建一个新交易，这将具有相同的效果来强制使之前的交易无效。

一段时间后，币安通知我们他们有帐户对帐问题。我们无法使用币安提供的数据重现这些问题，但我们建议（几个月前，现在）使用“-zapwallettxes”命令行选项来缓解该问题。这是值得注意的，因为我们相信这也可以防止这个问题。

在11月10日，我们收到通知，在v1.14.5更新之后，之前卡住的交易突然中继成功；可能是因为转账费率在v1.14.5中降低了，使得以前有效但不可中继的交易可以中继。我们从币安获得的唯一案例是其费用自 v1.14.5 起有效的一笔交易，但在 1.14.3 及之前无效（太低）。请注意，币安最近几天直接从 v1.14.3 更新到 1.14.5。

目前我们认为这种情况是因为之前卡住的交易已自动重试，就像升级后每个节点重新启动时会发生的那样-并且通过了，因为现在所需的最低中继费用较低。这是费用降低后的一种正确行为。

## 教训

* 取消交易的正确处理是将要取消的交易的输入用于不同的交易，这会使第一个交易失效。
  * 理想情况下，请尽量使用“replace-by-fee”，不然就重新创建一个交易并用之前的费用作为手续费，以此将先前的交易失效。
* 请注意，转账交易没有具体的超时期限，但通常由于内存限制而被处理掉。

## 指导

我们没有收到关于这种情况的进一步报告。对于任何担心停滞无效交易的提供商，我们建议您停止节点，删除mempool.dat文件以防万一，然后使用“-zapwallettxes”启动节点。

对于有顾虑的个人用户，请注意将您所有的狗狗币发送回自己（理想情况下是一个新地址，但您可以使用现有地址）也将花费任何先前的交易输出，并使此类“卡住”的交易失效。

>>>>>>> 4c96da825c8b7837e1ef2a8f09c42fce5fe4b5f4
