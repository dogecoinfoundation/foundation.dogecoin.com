+++
title = "Project: Libdogecoin"
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
 
* [Dogecoin Trailmap: Prologue](/kr/trailmap/prologue/) 
* [Project: Dogecoin.com makeover & Dogepedia](/kr/trailmap/website/)
* [**Project: Libdogecoin**](/kr/trailmap/libdogecoin/)
* [Project: Dogecoin Standard](/kr/trailmap/standard/)
* [Project: GigaWallet](/kr/trailmap/gigawallet/)
* Project: Dogecoin Keyring (App / SDK)
* Project: RadioDoge (Starlink + Radio nodes for remote locations)
* Proposal: Community Staking (Proof of Stake)
* Partnership: Point of Sale (L2 app) 
</div>

</div>

<div class="right">
<img class="dogegoin-light" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
<img class="dogegoin-dark" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
</div>


</section>

<section class='board'>

## Libdogecoin, 도지코인의 건설자재에 해당하는 clean C library.

Libdogecoin은 도지코인 프로토콜의 완전한 구현으로,
C library (그리고 인기있는 언어로 되어있는 binding series)로서
누구나 도지코인 준수 제품을 만들수 있게 해줄 것이며, 보다 더 상세한
가상화폐 function을 걱정하지 않아도 될 것 이다.

중요시 할 것은 libdogecoin은 오로지 library일 것이며,
'실행가능한' 노드 facility를 제공하는 것이 아니다. 윗 단계에서, 
host language networking libraries를 통하여, engine이 
형성될 수 있도록 서로 연결하는 것이 의도이다.

도지코인 코어 지갑에서 근본적인 요소를 추출하는 과정에서 (reference implementation)
우리는 '도지코인 작동 원리'를 문서화하는 것을 목표로 하고 있으며
이는 여러개의 test와 문서의 모음으로 이를 [Dogecoin Standard](/kr/trailmap/standard) 이라 한다.
이를 통하여 Libdogecoin 구현의 도지코인 내부 시스템이
OG(원조) 지갑에 정확하게 일치하는 것을 확인하며, 즉
미래의 도지코인 구현이 도지코인 네트워크에 준수하는 것을
확인 하는 메커니즘을 제공하게 된다.

## Why, 이는 도지코인을 위하여 무엇을 제공하는가?

채택을 통한 유용성, 그리고 채택은 구현을 통하여 일어난다. 
지금으로서 나이가 어느 정도 있는  도지코언 코어는 10년전의 상황에는 적절했던 
데스크톱용 metaphor로 무거우며, 또한 개발을 늦추는 facilities로 인해 방해를 받고 있으며
이는 utilities으로 분해하는 것이 나을 것이다.

저희는 도지코인의 코어 작동원리를 가지고
여러 언어에 대한 binding이 있는 단순한 C library로 제공하여,
커뮤니티가 혁신을 일으킬 수 있는 능력을 배로 늘리는 것이라고 생각한다.

* Python을 위한 도지코인 지갑을 만들고 싶나요? Ruby? Node.js? Do it!
* 특정한 목적을 위하여 가벼운 도지코인 노드를 만들고 싶나요 (예를 들어 [GigaWallet](/kr/trailmap/gigawallet))? Sure!
* Golang에서 HD 도지코인 keypair를 관리하기 위한 shell utility를 만들고 싶나요? Go nuts! 

저희는 도지코인 에코시스템을 보다더 건강하게 만드는 것을 목표로 하고 있으며 그 방법으로는:

* 도지코인 블록체인의 단일 정의인 코어 지갑에 대한 의존성을 다양화. 
* standard-based 지갑과 개발될 노드 구현 선택지를 늘리는 것. 
* 구현/통합 선택지를 늘려 플랫폼의 도지코인 채택을 개선. 
* 도지코인 네트워크에 참여하는 프로세스를 개선하여 보다 더 많은 사람들이 도지코인 노드를 운영하게 하는 것. 

<img class='center' src="/libdogecoin-purpose.png">

이 목표들은 일차적으로 Dogecoin의 librarification을 통하여 완수가 되며
[Dogecoin Standard](/kr/trailmap/standard) 을 통하여 검증을 받아 커뮤니티가
다양화 된 도지코인 노드와 지갑의 구현에 대한 자신감을 가질 수 있게 해줄 것이다.

Libdogecoin은 재단의 이를 실현 시키기 위한 계획 중에 제일의 구성 요소에 해당한다.

</section>
