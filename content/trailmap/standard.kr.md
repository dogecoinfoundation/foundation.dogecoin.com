+++
title = "Project: Dogecoin Standard"
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
 
* [Dogecoin Trailmap: Prologue](/kr/trailmap/prologue/) 
* [Project: Dogecoin.com makeover & Dogepedia](/kr/trailmap/website/)
* [Project: Libdogecoin](/kr/trailmap/libdogecoin/)
* [**Project: Dogecoin Standard**](/kr/trailmap/standard/)
* [Project: GigaWallet](/kr/trailmap/gigawallet/)
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

## Dogecoin Standard - 사양.

Dogecoin Standard는 *쓰여진 사양* 그리고 검증을 해주는 *test 모음* 일 것이며
이는 도지코인 코어 지갑에서 [libdogecoin](/kr/trailmap/libdogecoin) 를 쓰는 과정에서 파생될 것이다.
Dogecoin Standard의 목표는 reference implementation 인 코어 지갑을 완전히 문서화하는 것이다,
자주 요청이 되는 'whitepaper' 의 빈틈을 채울 것이며 도지코인의 작동원리를 이해하고자 하는 이에게
문서를 제공한다.

최근 몇개의 거래소에서 보았듯이, '도지코인 지갑을 제대로' 만드는 것이 쉽지 않으며
지금으로서 도지코인이 어떻게 작동하는지를 알기위해 코드를 읽거나, 일찍이 부터 도지코인 프로젝트에 참여
했어야한다. 도지코인을 문서함으로서 달성하고자 하는 것은 여러개이다:

### 새로운 개발자들의 진입장벽 낮추기.

저희가 보다더 개발자가 도지코인 커뮤니티에 참가할 수 있도록 하는 과정에서 배운 것 중 하나가
 경험이 있는 개발자일지라도 매우 높은 진입장벽이 있다는 것이다. 현재로서 저희는 그들에게
비트코인 문서를 읽고 온다음에 "이와 비슷하지만 차이가 조금씩있다" 말해주고 있지만, 이는
계속해서 도와줄 주머니속의 ross/michi/pat/max (개발자명)이 없다면 별로 의미가 없다. 개발자 중점의
문서를 만듦으로서 저희 도지코인에 참여하는 개발자의 수가 늘 것을 기대하고 있으며
이는 모두를 위해 긍정적입니다.

### Standard-based functional test suite

Standard는 환상적입니다, 하지만 검증할 수 없다면 큰 의미가 없습니다.
Dogecoin Standard를 만드는 과정 중 일부는 같이 할 수 있는 test-모음(test-suite)를
만드는 것이며 이는 도지코인의 그 어떤 구현을 exercise 할 것이며 도지코인 네트워크에 
준수한다는 것을 검증할 것이다.

이는 다양화 된 도지코인 에코시스템을 위한 가속장치이다: 우리가
우리의 노드와 지갑 구현에 변화를 주고 곧바로 제대로 에코시스템 준수하며 작동한다는 것을 
검증한다면, 모두가 보다 더 빠르게 움직일 수 있다.

### 커뮤니티 제안 프로세스.

처음으로 도지코인 프로토콜은 코어 지갑과 별도로 구현 될 수 있도록 represent 될 것이다.
이는 커뮤니티가 DIPs (도지코인 개선 제안서)를 통한 change-process 기회를 제공해줄 것이며
이는 이후 채택이전 특정기간 동안 커뮤니티 내부적으로 논의가 될 수 있으며 또한 
중심 stakeholder와 논의가 될 수 있을 것이다.

저희는 의견일치-중심의 커뮤니티가 (decentralised network 덕분에 있습니다)
DIPs를 exercise하며 그 효과성을 증명하는 실험적인 구현를 선호한다고 믿고 있으며,
이는 W3C의 web standard에 대한 접근방식과 유사하다.

재단은 도지코인 코어 지갑 *구현*에서 결정적인 도지코인 프로토콜 reference를
커뮤니티 관리를 받고 있는 *사양*으로 옮기는 것이 오늘날 하나의 지갑으로 만 존재하는 도지코인의 미래를 확보
하는 것이라고 믿습니다. 보다 더 많은 Dogecoin Standard *준수* 지갑 구현이 존재 할 수록,
*프로토콜*이 보다 더 secure-by-impementation-consensus 할 것이라고 믿으며, 이는
네트워크의 의견일치 중심의 보안이 다양화된 노드를 통하여 확보되는 것과 유사하다.



</section>
