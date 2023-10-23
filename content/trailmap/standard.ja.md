+++
title = "プロジェクト: Dogecoin Standard"
date = "2021-12-10"
type = "about"
[ author ]
name = "Dogecoin Foundation"
+++

<section class="presentation">
<div class="left">

<div class="title">


 ## <img width="60px" style='display: inline;' src="/marker.png"/>Project: Dogecoin Standard 

<div class="underline"></div>
</div>

<div class="description">
 
* [Dogecoin Trailmap: Prologue](/trailmap/prologue/) 
* [Project: Dogecoin.com makeover & Dogepedia](/trailmap/website/)
* [Project: Libdogecoin](/trailmap/libdogecoin/)
* [**Project: Dogecoin Standard**](/trailmap/standard/)
* [Project: GigaWallet](/trailmap/gigawallet/)
* Project: Dogecoin Keyring (App / SDK)
* Project: RadioDoge (Starlink + Radio nodes for remote locations)
* Proposal: Community Staking (Proof of Stake)
* Partnership: Point of Sale (L2 app) 
</div>

</div>

<div class="right">
<img class="dogegoin-light" src="/logo-standard.jpg" alt="Dogecoin logo">
<img class="dogegoin-dark" src="/logo-standard.jpg" alt="Dogecoin logo">
</div>


</section>

<section class='board'>

## Dogecoin Standard（Dogecoinスタンダート） - 仕様書

Dogecoin Standard（以下、Dogecoinスタンダート）は、[libdogecoin](/trailmap/libdogecoin)の作成過程でDogecoin Core Walletから派生した*Written Specification*と*test suite*を検証するものとなります。
Dogecoinスタンダードの目的は、参照実装（コアウォレット）を完全に文書化することであり、しばしば要求される開発初期における「白紙状態」とのギャップを埋めることです。
Dogecoinスタンダートは、参照用の実装（Core Wallet）を完全に文書化し、よく要求される「ホワイトペーパー」のギャップを埋め、Dogecoinの仕組みを理解しようとする人たちにドキュメントを提供することを目的としています。

過去に取引所で流出被害や管理問題が見られたように「Dogecoinウォレットを正しく使う」ことは簡単なことではありません。
Dogecoinの仕組みを理解するためには、コードを読むか、Dogecoinプロジェクトの初期から参加している必要があります。
私たちがDogecoinをドキュメント化することで実現したいことは、開発に関する障壁問題の解決を行うことにあります。

### 新規開発者のハードルを下げることに関して

Dogecoinコミュニティに多くの開発者を参加させようとしている私たちが経験したことのひとつは、Dogecoinの技術仕様には、経験豊富な開発者でも直面する急峻な学習曲線が存在していることです。経験豊富な開発者でさえも直面する学習曲線で困難に直面しています。現在、私たちは人々にBitcoinのドキュメントを見せながら、「こんな感じですが、違うところもありますよ」と様々なDogecoinに興味を持ってくださる開発者に説明を行っています。しかしながら、pocket-ross/michi/pat/max（Dogecoinの開発者名）のサポート無しには開発が難しい状況です。開発者向けのドキュメントを作成することで 
開発者向けのドキュメントを作成することで、Dogecoinに参入する開発者の数が増えることを期待しています。

### 標準ベース規格に関する機能テストスイートについて

規格は素晴らしいものですが証明できるものでなければ、あまり意味を持ちません。そのため Dogecoinのスタンダードを作る過程にむけて、Dogecoinの実装を効果的に実行し、検証を行うことができるテストスイートを作成する予定です。これはDogecoinの実装を効果的に実行し、Dogecoinが規格に準拠していることを証明、検証することができます。 

これは複雑なDogecoinのエコシステムにとって大きな加速装置です。
ノードやウォレットの実装のフローを変更し、それがエコシステムで機能することを即座に検証することができれば 、誰もが以前よりもより速く、スムーズにDogecoinの実装に向けて動けるようになります。

### コミュニティによるプロポーサルプロセス（提案の流れ）

Dogecoinプロトコルは、初めてコアウォレットとは独立した形で実装される予定です。これにより、コミュニティがDIP（Dogecoin Improvement Proposal）を通じて、強固な変更プロセスを構築する機会を提供します。

私たちは、（私たちが分散型ネットワークを介して持っている）コンセンサスベースのコミュニティは、DIPを行使し、その有効性を実証する実験的な実装を強く支持するべきだと考えています。
また、ウェブ標準のためのW3Cのアプローチと同様に、DIPを行使し、その有効性を実証する実験的な実装を強く優先させるべきだと考えています。

当財団は、Dogecoinプロトコルの決定的な参照先を、古いCore Walletを *コミュニティが管理する仕様*に移行することで、Dogecoinの未来が守られると考えています。
より多くの*Dogecoinスタンダード*に準拠したウォレットが存在すればするほどプロトコルは実されているのコンセンサスによってより安全に管理されます。
ライブネットワークのコンセンサスベースの安全性は、ノードの多様性にかかっているのです。



</section>
