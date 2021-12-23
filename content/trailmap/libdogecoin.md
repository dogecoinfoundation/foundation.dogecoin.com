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
 
* [Dogecoin Trailmap: Prologue](/trailmap/prologue/) 
* [Project: Dogecoin.com makeover & Dogepedia](/trailmap/website/)
* [**Project: Libdogecoin**](/trailmap/libdogecoin/)
* [Project: Dogecoin Standard](/trailmap/standard/)
* [Project: GigaWallet](/trailmap/gigawallet/)
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

## Libdogecoin, a clean C library of Dogecoin building blocks.

Libdogecoin will be a complete implementation of the Dogecoin Protocols, 
as a C library (and series of bindings to popular languages) which will 
allow anyone to build a Dogecoin compliant product, without needing to 
worry about the deeper specifics of the crypto functions.  

It’s important to note that libdogecoin will be a pure library, not 
providing a ‘runnable’ node facility. It is intended that connecting 
the bits together into an engine be done at the level above, via the 
networking libraries of the host language.  

During the process of extracting the fundamentals from the Dogecoin Core
Wallet (reference implementation) we aim to document 'how Dogecoin works' 
as a suite of tests and documents we are calling the [Dogecoin Standard](/trailmap/standard).
By doing this we will be able to verify that the Libdogecoin implementation
of Dogecoin's internals is accurate to the OG wallet, and thus provide 
a mechanism for any future Dogecoin implementations to verify compliance
with the Dogecoin Network.

## Why, what does this do for Dogecoin?

It's all about utility through adoption, and adoption comes through integration. 
Right now the aging Dogecoin Core wallet is heavy with desktop metaphors that
made sense a decade ago, and encumbered with facilities which slow down development
and would better be broken out into utilities. 

We believe that by taking the core functionality from Dogecoin and making it
available as a simple C library with bindings for many languages, we multiply
the community's ability to innovate. 

* Want to create a new Dogecoin Wallet in Python? Ruby? Node.js? Do it!
* Want to create a slimmed down Dogecoin node for a specific purpose (like [GigaWallet](/trailmap/gigawallet))? Sure!
* Want to create a shell utility for managing HD Dogecoin keypairs in Golang? Go nuts! 

We're aiming to make the Dogecoin Ecosystem healthier as we:

* Diversify the dependence on the Core Wallet as the single definition of the Dogecoin Blockchain. 
* Increase the options for standard-based wallet & node implementations to be developed. 
* Increase the integration options to improve adoption of Dogecoin by platforms. 
* Improve the process of joining the Dogecoin network so more people run Dogecoin nodes. 

<img class='center' src="/libdogecoin-purpose.png">

These objectives are met primarily through the librarification of Dogecoin and validated by a 
[Dogecoin Standard](/trailmap/standard) which will allow the community to have confidence in 
diverse implementations of Dogecoin Nodes and Wallets.   

Libdogecoin is the underlying building block in the Foundation's plan to make this happen.

</section>
