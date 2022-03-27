+++
title = "專案：Libdogecoin"
date = "2021-12-10"
type = "about"
[ author ]
name = "Dogecoin Foundation"
+++

<section class="presentation">
<div class="left">

<div class="title">


 ## <img width="60px" style='display: inline;' src="/marker.png"/>專案：Libdogecoin

<div class="underline"></div>
</div>

<div class="description">

* [狗狗幣發展路線圖：序言](/zh-tw/trailmap/prologue/)
* [專案：Dogecoin.com 改造 & Dogepedia 狗狗幣百科](/zh-tw/trailmap/website/)
* [**專案：Libdogecoin**](/zh-tw/trailmap/libdogecoin/)
* [專案：Dogecoin Standard 狗狗幣標準](/zh-tw/trailmap/standard/)
* [專案：GigaWallet](/zh-tw/trailmap/gigawallet/)
* 專案：Dogecoin Keyring (App / SDK)
* 專案：RadioDoge (Starlink + Radio nodes for remote locations)
* 提案：Community Staking (Proof of Stake)
* 合作：Point of Sale (L2 app)
</div>

</div>

<div class="right">
<img class="dogegoin-light" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
<img class="dogegoin-dark" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
</div>


</section>

<section class='board'>

## Libdogecoin，一個清楚明瞭的狗狗幣應用開發模組 C 函式庫.

Libdogecoin 將會是狗狗幣通訊協定的完整實作，作為一個 C 函式庫（以及一系列其他熱門程式語言的綁定），讓任何人無須費心於加密貨幣運作的底層細節規格，也能建造出合乎規範的狗狗幣應用產品。

需要注意的是 Libdogecoin 會單純只是個函式庫，並不提供直接可運行的節點能力。這是刻意設計的，那些連結的工夫應在更外一層，用該程式主要語言的網路函式庫來實作。

從作為參考實作（reference implementation）的 Dogecoin Core Wallet 擷取基礎的過程中，我們把目標放在完成一份關於狗狗幣如何運作的測試和說明文件，稱之為 [Dogecoin Standard 狗狗幣標準](/zh-tw/trailmap/standard)。

這樣一來，我們將可以確保 Libdogecoin 對狗狗幣內部的實作是和最初的 Core Wallet 精確相符的，也因此能提供一種是否合乎狗狗幣網路規範的驗證機制給未來任何狗狗幣應用實作。


## 為什麼，這些能為狗狗幣做什麼?

這些都是關於來自採用的效用，而採用來自於整合。
Dogecoin Core wallet 是桌面程式，這在十年前是合理的設計，但隨著時間過去，它已顯得笨重，並受到拖慢發展的設備限制，因此將它分解為較小的功能模組會是比較好的做法。

我們相信，從中提取出核心功能並將它們整理成一個簡單的 C 函式庫，並提供其他程式語言的綁定，可以大大提升社群創新的能力。

* 想用 Python / Ruby / 或 Node.js 創造一個新的狗狗幣錢包？動手做吧！
* 想要為特定用途打造一個精簡版的狗狗幣節點（像是 [GigaWallet](/zh-tw/trailmap/gigawallet)）？當然可以！
* 想用 Golang 開發一個管理 HD（Hierarchical Deterministic，分層確定性）狗狗幣金鑰對的 shell 工具？去吧！

我們將目標放在讓狗狗幣生態系更健康，藉由：

* 使對作為狗狗幣區塊鏈單一定義的 Core Wallet 的依賴分散、多樣化
* 增加建構於標準規範之錢包 & 節點實作的選擇
* 增加整合方案的選項，以增進平台對狗狗幣的採用率
* 改善加入狗狗幣網絡的過程，讓更多人運行狗狗幣節點

<img class='center' src="/libdogecoin-purpose.png">

這些目標主要是透過打造此狗狗幣函式庫、以及藉由[Dogecoin Standard 狗狗幣標準](/zh-tw/trailmap/standard)的驗證來達成，讓社群可以信任各種新的狗狗幣節點和錢包實作。

Libdogecoin 在基金會計畫中是基礎的建構組件，是讓這一切成真的重要基石。

</section>
