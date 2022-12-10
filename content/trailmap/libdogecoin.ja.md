+++
title = "プロジェクト: Libdogecoin"
date = "2021-12-10"
type = "about"
[ author ]
name = "Dogecoin Foundation"
+++

<section class="presentation">
<div class="left">

<div class="title">


 ## <img width="60px" style='display: inline;' src="/marker.png"/>Project: Libdogecoin 

<div class="underline"></div>
</div>

<div class="description">
 
* [Dogecoin Trailmap: Prologue](/trailmap/prologue/) 
* [Project: Dogecoin.com makeover & Dogepedia](/trailmap/website/)
* [**プロジェクト: Libdogecoin**](/trailmap/libdogecoin/)
* [プロジェクト: Dogecoin Standard](/trailmap/standard/)
* [プロジェクト: GigaWallet](/trailmap/gigawallet/)
* プロジェクト: Dogecoin Keyring (App / SDK)
* プロジェクト: RadioDoge (Starlink + Radio nodes for remote locations)
* プロポーサル: Community Staking (Proof of Stake)
* パートナーシップ: Point of Sale (L2 app) 
</div>

</div>

<div class="right">
<img class="dogegoin-light" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
<img class="dogegoin-dark" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
</div>


</section>

<section class='board'>

## LibdogecoinはDogecoinの構成要素であるクリーンなCライブラリです。

LibdogecoinはDogecoinプロトコルに実装となる予定です。
Cライブラリ(および一般的な言語への一連のバインディング)として、Dogecoinプロトコルの完全な実装されます。
暗号化で使用される関数の詳細について心配することなく、誰でもDogecoinに準拠した製品を作ることができるようになります。

libdogecoinは純粋なライブラリであり、「実行可能なノード機能」を提供するものではないことに注意して下さい。
これは、エンジンへのビットの接続は、ホスト言語のネットワーキングライブラリーを介して行われることを意図しています。 

Dogecoinのコア（参照実装）から基本的な部分を抽出する過程で
私たちは「Dogecoinがどのように動くのか」をドキュメント化することを目指しています。
[Dogecoin Standard](/trailmap/standard)と呼んでいる一連のテストとドキュメントとして記録することで、Libdogecoinの実装がDogecoinの内部を正確に再現しているかどうかを検証することができます。

## 何故、何のためにドージコインなのですか?

通貨の採用による効用であり、採用は統合によってもたらされます。
今、老朽化したDogecoin Coreウォレットは、10年前のデスクトップで実行するには非常に難しい状況となっています。
10年前のデスクトップを用いて動作させるには非常に重く、開発を遅らせるような設備に邪魔されています。
開発速度を低下させ、ユーティリティに分割した方が良いようです。

私たちは、Dogecoinからコアとなる機能を取り出し、多くの言語に対応したシンプルなCライブラリとして利用できるようにすることで、コミュニティの開発力を高めることができると考えています。

* Pythonで新しいDogecoin Walletを作りたいですか？Ruby、Node.jsなどでもでしょうか？是非とも試してみて下さい！
* 開発案件の目的（[GigaWallet](/trailmap/gigawallet)など）のために、スリム化したDogecoinノードを作りたいですか？開発への参加を歓迎致します！
* GolangでHD Dogecoinキーペアを管理するシェルユーティリティを作りたいですか？一緒に頑張りましょう！

私たちは、Dogecoinのエコシステムを、より健全なものにすることを目指しています。:

* Dogecoinブロックチェーンの単一の定義として、Core Walletへの依存を多様化する。
* 標準ベースのウォレット＆ノードの実装を開発するための選択肢を増やす。
* プラットフォームによるDogecoinの採用を改善するために、統合オプションを増やす。
* Dogecoinネットワークに参加するプロセスを改善し、より多くの人がDogecoinノードを運営できるようにする。

<img class='center' src="/libdogecoin-purpose.png">

これらの目的は、主にDogecoinのライブラリ化および検証された 
[Dogecoin スタンダート](/trailmap/standard)の コミュニティがDogecoinのノードとウォレットの複雑な実装に関して、安全に実行することができます。

Libdogecoinは、これを実現するための、財団の計画の基礎となる重要な構成要素の１つとなっています。

</section>
