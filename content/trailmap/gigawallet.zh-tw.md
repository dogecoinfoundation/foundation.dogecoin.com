+++
title = "專案：GigaWallet"
date = "2021-12-10"
type = "about"
[ author ]
name = "Dogecoin Foundation"
+++

<section class="presentation">
<div class="left">

<div class="title">


 ## <img width="60px" style='display: inline;' src="/marker.png"/>專案：GigaWallet

<div class="underline"></div>
</div>

<div class="description">

* [狗狗幣發展路線圖：序言](/zh-tw/trailmap/prologue/)
* [專案：Dogecoin.com 改造 & Dogepedia 狗狗幣百科](/zh-tw/trailmap/website/)
* [專案：Libdogecoin](/zh-tw/trailmap/libdogecoin/)
* [專案：Dogecoin Standard 狗狗幣標準](/zh-tw/trailmap/standard/)
* [**專案：GigaWallet**](/zh-tw/trailmap/gigawallet/)
* 專案：Dogecoin Keyring (App / SDK)
* 專案：RadioDoge (Starlink + Radio nodes for remote locations)
* 提案：Community Staking (Proof of Stake)
* 合作：Point of Sale (L2 app)
</div>

</div>

<div class="right">
<img class="dogegoin-light" src="/logo-gigawallet.jpg" alt="Dogecoin logo">
<img class="dogegoin-dark" src="/logo-gigawallet.jpg" alt="Dogecoin logo">
</div>


</section>

<section class='board'>

## GigaWallet，一個企業級的狗狗幣服務.

就像我們在[序言](/zh-tw/trailmap/prologue)提到的，我們相信效用來自採用，採用也來自於效用，這是個反饋循環，但目前因為平台採用的過程遇到阻力而發展較緩慢。

這份發展路線圖裡的許多倡議，都是注重在減少開發周期時間，以及讓開發者能更順暢地將狗狗幣整合進他們的平台。

這趟旅程中一個重大的障礙是，缺乏一種切合用途且便捷的後端服務，使任何平台、交易所或零售商可以在他們的基礎架構上運行，並提供現代化、非託管的方式來處理狗狗幣交易。

GigaWallet 專案是一個開源的提案，以填補前述的空缺為目標。它將提供能快速設置的節點/API解決方案，讓開發者將狗狗幣交易功能整合進他們的平台，就像使用其它完善精練的支付方案提供商的服務那樣容易。

GigaWallet 的目標是提供兩層 API，第一層是用來處理和驗證傳統的狗狗幣交易，並以現代的事件驅動架構（ event-architecture）來連接訊息佇列（message queues）與 web APIs。第二層將用於整合另一提案中提到的狗狗幣鑰匙圈應用程式（Dogecoin Keyring App）和 SDK。這是行動裝置優先的解決方案，它將允許使用 GigaWallet 的平台從他們的應用程式直接向 Dogecoin Keyring App 提出收費要求，接著 Dogecoin Keyring App 向使用者要求許可。這很重要，因為它把密鑰的所有權交還到使用者手中，而不會影響平台使用狗狗幣交易的功能。

我們相信，以開源專案形式提供這雙重的解決方案 ── 後端和可快速整合的行動裝置 SDK ── 以支援狗狗幣支付，將能很快加速零售商、社群平台、遊戲開發者和更多人對狗狗幣的採用。


</section>
