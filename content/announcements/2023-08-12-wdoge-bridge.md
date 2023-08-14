+++
draft = true
title = "Dogecoin Foundation & wDoge DAO"
date = "2023-07-12"
[ author ]
  name = "Dogecoin Foundation"
+++



This post is a continuation of our [initial post](https://foundation.dogecoin.com/announcements/2022-09-12-wdoge-bridge/), 
announcing the Dogecoin Foundation’s support of the Dogecoin and Ethereum bridge via wDoge and our 
membership of its DAO.

## ***Introduction***

“Not your keys, not your crypto” has been a long-held maxim within the Dogecoin Foundation and the Dogecoin 
community. Recent events involving centralized organizations demonstrate the risk involved with trusting 
others with their crypto.

The subsequent increased awareness and enhanced focus on self-custodial crypto services represents a welcome 
turning point for digital assets. The Foundation welcomes this evolution in addition to enhanced compliance 
standards that protect people and their crypto.

While we are strong proponents of self-custody, the road to decentralization entails stepping-stones to unlock 
functionalities that fully decentralized services cannot yet provide. In these situations, best-practices must 
be implemented.

The Foundation is confident that our relationship with the wDoge project will serve as an exemplar of the best 
possible practices that a custodial crypto project can offer: including transparency, security practices, code 
auditing and finally, insurance.

This article outlines the Foundations rights and duties as a member of the DAO, in addition to the primary risks 
involved in using wDoge, and its immense benefits.

To learn more about this history of the bridge and how it functions, please [click here](https://medium.com/@bluepepper/doge-eth-bridge-past-present-and-future-89f7623bcab6).

## ***A Brief Overview***

All wDOGE is backed by native DOGE at a 1:1 ratio.

There are a number of important **entities** that are essential to the proper functioning of the DOGE ⇄ Ethereum bridge.

The primary function of **merchants** is to distribute wDOGE to users and communicate with the smart contracts that
mint new wDOGE and burn redeemed wDOGE.

Once a user indicates they would like to wrap their DOGE, merchants send the DOGE plus minting fees to the **custodian**. 
In the case of wBTC and wDOGE, BitGo serves as the custodian, safeguarding deposited funds using the security measures 
outlined above.

A custodian then verifies that the mint request is valid, by checking for details like the number of confirmations on 
the DOGE deposit and requests are made from approved merchants. Once the mint request is approved, wDOGE is minted 
directly to the Merchant’s ethereum address.

When a user indicates that they would like to redeem their wDOGE for native DOGE, the process is reversed. The 
merchant burns wDOGE by sending a burn request to the token contract. Then the custodian verifies the burn request. 
Once the request is approved, the wDOGE is burned and DOGE is sent back to the merchant’s address giving them full 
control of their assets on the Dogecoin blockchain.

## ***Risks Involved with Using any Crypto Bridge***

At the Dogecoin Foundation, we believe that educating users of crypto is important. This is a principal reason 
behind our Dogepedia and Dogeathon initiatives. Moreover, we encourage all builders in the Dogecoin ecosystem to 
create reliable projects and be fully transparent about the risks involved in using their services. To this end, 
the below illustrates potential risks:

### **The code could be compromised or faulty, allowing for a hacker to steal coins or tokens as they “cross” the bridge, or causing coins or tokens to be “stuck” on the bridge.**

**What this would look like:**

The code used to facilitate the “wrapping” of Dogecoin into wDoge (and vice-versa) could contain a bug that allows a malicious actor to redirect Dogecoin or wDoge from the bridge into their possession.

*or*

The code used to facilitate the “wrapping” of Dogecoin into wDoge (and vice-versa) could contain a bug that causes Dogecoin or wDoge to remain stuck on the bridge.

**What has been done to minimize the risk of this transpiring:**

The wDoge source code, organization, architecture and legal structure mirrors that used for the wBTC bridge, which has been functioning flawlessly since 2018 and has seen billions of dollars in volume transferred across it. It is by far the largest blockchain bridge that has ever existed.

Any changes to the code must be approved by the wDoge DAO, which currently requires a 2-of-4 multisig to be signed before any updates are made. The four signatories are: Bluepepper, Bitgo, MyDoge and the Dogecoin Foundation, with plans to increase the DAO as appropriate participants become available**.**

It has been agreed that the Foundation will be notified before any code updates are made. The Foundation will immediately alert the community if we are not notified or any updates are made that we disagree with. This will be done via @DogecoinFDN account.

Those who created the bridge have staked their reputations on it running flawlessly, and it is most certainly not in the interests of anyone involved to break protocol or proceed with any updates that are not consented to by all DAO members. This is an extremely unlikely possibility.

It is also important to note that the DAO signatories *cannot collude to mint or burn wDoge*, because that isn’t the nature of the smart contract. You can learn more about the specifics of the smart contract [HERE](https://github.com/WrappedBTC/bitcoin-token-smart-contracts/blob/master/ethereumV2/contracts/token/WDOGE.sol).

The DAO can also be viewed [HERE](https://www.notion.so/This%20is%20the%20DAO%20https:/app.safe.global/home?safe=eth:0x50320064273a73c989bE28bAC35DE058b12C6CEb).

It is anticipated that this code should rarely, if ever, require adjustment, and all adjustments will be announced via the @DogecoinFDN account. We will also make announcements if any new signatories are added to the DAO.

**What would happen if this did transpire?**

The underlying DOGE held in custody (that backs wDoge) is covered under insurance in the case of theft or hacks to BitGo specifically. If there are hacks of the wDoge token contract, those would not be covered but, as outlined above, this is an extremely unlikely scenario.

### **The crypto could be stolen from the custodial service (Bitgo) by a rogue employee or hacker or lost due to human error.**

**What this would look like:**

Bitgo uses industry-leading security practices to store their crypto. All significant amounts are stored offline in “cold storage” wallets, which feature multi-signature keys stored in multiple bank vaults in different cities. They are one of the oldest and most respected participants in the crypto industry. Headquartered in the USA, they have safely stored tens of billions of dollars of customer funds for many years.

**What has been done to minimize the risk of this transpiring:**

Unlike some other custodial services, Bitgo does not lend out customer funds and provides a fully transparent live audit of their reserves, which can be viewed here: https://wdoge.tech/proof-of-assets.php

If BitGo decides to change any of their storage or custodial practices, they have agreed to alert the Foundation well in advance, allowing us to warn the community of the changes. This will be done via the @DogecoinFDN account.

Learn more about the specifics of how the bridge and Bitgo’s custodial service works here: https://wbtc.network/assets/wrapped-tokens-whitepaper.pdf

**What would happen if this did transpire?**

BitGo have never had an insurance claim before. Put another way, they’ve never had a breach or malicious actor resulting in theft of funds. If human error or a malicious actor caused BitGo’s Dogecoin reserves to be lost, a an insurance policy per wallet available to compensate any affected wDoge holders. No wallets will be permitted to exceed 250 million dollars in value, because BitGo has internal processes and controls to rebalance wallets if a wallet’s value exceeds 250 million].**[To be confirmed by BitGo].**

### **One of the companies involved goes bankrupt, is sold or stops supporting the project.**

BitGo Trust is a regulated and qualified custodian. This means that they have a fiduciary responsibility to the Merchants. If BitGo were to go bankrupt, they would work with the appropriate organization / agencies to return assets to the Merchant. If there are plans to wind down wDoge support from BitGo, BitGo will work with the DAO and Merchants to add another custodian to keep the protocol alive. If there are no active Merchants remaining, BitGo will work with the DAO to find appropriate Merchants that can fill the need. This would be announced via @DogecoinFDN accounts.

### ***Risks that Don’t Involve the Bridge or Bitgo***

There is highly improbable risk that the Ethereum blockchain (where the wDoge resides) could be compromised by a 51% attack or other attack or malfunction and the wDoge could be stolen or frozen. Vitalik, the founder of Ethereum discusses this on Reddit: https://old.reddit.com/r/ethereum/comments/rwojtk/ama_we_are_the_efs_research_team_pt_7_07_january/hrngyk8/

There is a risk that the user of the bridge enters a faulty Dogecoin or Ethereum address and loses their Doge or wDoge OR their device is infected with malware that replaces their receiving address with a hacker’s address (and it is not noticed before the funds are sent to the hacker’s address). This is why its crucial to always double-check that your receiving address is accurate before sending and to always send a small test amount before sending a larger amount to ensure that everything is working ok.

There is a risk that the hardware wallet, mobile device or passphrase used to store your Dogecoin or wDoge gets lost, broken or stolen. This is why it’s always advisable to have multiple backups of your crypto in multiple locations. 

Crypto is still a very new realm of innovation and experimentation. With great freedom comes great responsibility. Along with the rewards, there are many risks involved and the best way to minimize these is to operate slowly and thoughtfully and educate yourself to the greatest possible degree.

A good rule of thumb when entering the world of cryptocurrency is always: “don’t invest more that you’re willing to lose overnight”.

## ***Frequently Asked Questions:***

**Q: Why was the Foundation asked to join the DAO and support this project?**

A: This reply comes directly from Oscar, chief architect of the bridge, when we asked him this very question:

*“Normal users are not crypto experts. Many people can’t differentiate wDoge from scam projects. The fact the Foundation is a DAO member would give users confidence in wDoge. What we expect from you is to ask hard questions, advocate for transparency, warn users if anything shady is going on, and use your DAO seat to vote against proposals that are bad for the community. Just to be clear, the DAO won’t do custody of the funds, Bitgo is the custodian.”*

**Q: Is the Foundation being paid to participate in this project?**

A: The Foundation has not been paid and no payment has been promised. If the bridge is successful, donations may be made to the Foundation, at which time we would disclose them. The bridge and wDoge are supported because wDoge offers interesting opportunities for Dogecoin holders to make use of their Doge in new and novel ways. Through the wDoge project, Oscar, Gabriel and the Blue Pepper team are demonstrating how this can be achieved in an open and transparent manner. 

**Q: How do BluePepper and Bitgo make money from this?**

A: Bluepepper buys and sells wDoge in exchange for Dogecoin, charging a small fee for each transaction. Bitgo charges Bluepepper a small fee when they mint or burn wDoge.

**Q: Is Dogecoin first deposited to Bluepepper before being sent to Bitgo to be converted to wDoge and then sent back to the client?**

A: No. Clients will send Dogecoin to Bluepepper and they will receive wDoge directly from Bluepepper. The client will not know whether new wDoge is minted via Bitgo or they will receive wDoge that was minted beforehand or they will receive wDoge that Bluepepper bought from another client. Most users won’t buy directly from Bluepepper, besides maybe a few at the very beginning. As with wBTC, most transactions will be with market makers and other large players, who will fund Centralized and Decentralized exchanges, where normal retail buyers will acquire their wDoge.

**Q: Is there an estimate as to when the bridge will be fully Decentralized?**

A: At this time, no date is set for full Decentralization of the Dogethereum bridge.

**Q: How would wDoge be moved from Bitgo to somewhere else when the bridge is fully Decentralized?**

A: At this time, a specific plan has not been agreed upon, but it could potentially work like this: wDoge token smart contact remains the same and user balances are unmodified. The mint/burn logic can be updated by the DAO. New smart contracts would be deployed on Ethereum mainnet and the DAO would approve changing the mint/burn logic to use the new logic.

**Q: Is the bridge code fully Open-Source, allowing anyone to create their own version of the bridge?**

A: Yes!

***Wen Maximal Decentralization?***

The Dogecoin bridge itself has been five years in the making. Creating a fully decentralized bridge is extremely complicated and the custodial bridge is intended to be a temporary measure to allow for use and experimentation while a fully Decentralized bridge is completed.

Unlike many other projects, this bridge is simple, inexpensive, and has no new blockchain. There is also no token “premine”. All wDoge that will ever be minted is always backed 1-1 with native Dogecoin.

It’s also important to note that even if this were a “fully Decentralized bridge”, it would still be necessary to trust the bridge code, the DAO signatories who control code adjustments, and the Dogecoin and Ethereum blockchains. And there would likely not be any insurance if the Dogecoin held in trust were stolen!

Having a ‘Centralized” custodian adds risk in some areas, but also mitigates risk in others. It’s all part of a very large experiment and while there are many bad actors in the cryptocurrency world, there are also many good people seeking to build a more accessible, equitable and accountable financial future for all the people of the world.

Read more about the history of the wDoge bridge and the people involved here: https://medium.com/@bluepepper/doge-eth-bridge-past-present-and-future-89f7623bcab6

The Dogecoin Foundation

---

### **About BitGo**

BitGo provides the most secure and scalable solutions for the digital asset economy, offering regulated custody, borrowing and lending, and core infrastructure to investors and builders alike.

Founded in 2013 — the early days of crypto — BitGo pioneered the multi-signature wallet and later built TSS to improve upon other companies’ MPC offerings. Between multi-sig and TSS, BitGo offers the safest technology on the market and safeguards over 600 tokens across a wide variety of blockchains.

Over the years, BitGo has expanded from offering wallets into providing a full-suite solution that lets clients hold assets safely and then put them to work. BitGo launched BitGo Trust Company in 2018, providing fully regulated, qualified cold storage to complement BitGo Inc’s original hot wallet solution.

In 2020, BitGo launched BitGo Prime, which allows its clients to trade, borrow, and lend. Moreover, BitGo also provides access to DeFi, staking, NFT wallets, and beyond, and serves as the world’s sole custodian for WBTC, or wrapped Bitcoin.

Today, BitGo is the leader in digital asset security, custody, and liquidity, providing the operational backbone for more than 1500 institutional clients in over 50 countries — a list that includes many regulated entities and the world’s top cryptocurrency exchanges and platforms. BitGo also processes approximately 20% of all global Bitcoin transactions by value.

### **About BluePepper**

BluePepper leads the development of the Dogecoin/Ethereum bridge. The company investors are Bill Lee, Vinny Lingham, Jon Smith, Sunny Madra, Ken Howery and Jeff Skoll.

*No legal, tax, investment, or other advice is provided by the Dogecoin Foundation. Please consult your legal/tax/investment professional for questions about your specific circumstances. Digital asset holdings involve a high degree of risk, and can fluctuate greatly on any given day. Accordingly, your digital asset holdings may be subject to large swings in value and may even become worthless. Please educate yourself to the many inherent risks before using these tools and products.*

