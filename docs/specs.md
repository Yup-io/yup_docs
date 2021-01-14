# Technical Specs

## Overview

The Yup app ecosystem consists of the Yup protocol implementation and supporting web services that make it easy for users to curate content, receive rewards, and build their social influence. Users primarily interact with the protocol via the Yup Browser Extension and the Yup Web App, which are both powered by [EOS smart contracts](https://developers.eos.io/eosio-cpp/docs/introduction-to-smart-contracts). What follows is an overview of the current tech stack for the Yup protocol and supporting applications.

## Extension

The [Yup browser extension](https://chrome.google.com/webstore/detail/yup-opinions-social-capit/nhmeoaahigiljjdkoagafdccikgojjoi) includes the following core features:

* Fully featured EOS wallet for storing and transferring YUP and EOS, and signing transactions for web-based DApps
* Simple and easy onboarding \(email verification → username → password\)
* Overlays for specific sites \(Twitter, Reddit, Google, Google Maps, YouTube, Columbia University course registration sites\)
* Social influence weighted rating on any site on the Internet
* Social level color identifier representing how other Yup users have rated a piece of content
* Ability to submit votes in multiple contextualized categories \(e.g., funny, smart\)
* Ability to convert earned YUP to Amazon credits \(at a rate of 20 cents per token\)
* Referral system for incentivizing users to invite their friends and relatives
* Optional cloud-based EOS account backup, enabling users to sign-in on multiple browsers and devices without having to store and transfer their EOS keychain
* Shortened usernames linked to actual, full length EOS account names
* Rewards system for incentivizing users to rate content using the Yup protocol
* Whitelisting of non-financial Yup related transactions, so no annoying pop-ups whenever a user upvotes or downvotes content
* Notifications for recent rewards / activity on the network
* Wallet compatibility with any [Scatter](https://get-scatter.com/) integrated EOS dApp.

The extension is implemented in JavaScript and uses the Vue web frontend framework.

## Architecture

### EOS

EOS smart contracts execute the core business logic of the Yup protocol. The smart contracts expose an interface for processing user ratings, comments, posts, and other interactions. EOS smart contracts are based on actions, which are functions that execute core business logic and can modify smart contract state.

EOS provides a high-performance smart contract platform for building scalable, mission-critical applications. The platform uniquely enables us to build applications with a user experience that is suitable for lay users. It also provides built-in abstractions that make it easier to develop and maintain complex applications.

Some of the important features include:

* Human readable account names
* Built-in support for account permissions and recovery
* “Free” transactions for users, no micropayment for each transaction
* Low latency, high transaction throughput
* Built-in database abstractions for storing persistent, indexed state within contracts e.g., multi-index tables
* Large, and growing, developer ecosystem and robust developer tools
* Familiar and widely popular smart contract language and build target \(C++, WASM\)
* Easy smart contract upgrades
* Proxy staking for EOS account resources

A note on EOS resources usage and transaction costs:

While EOS does not have traditional transaction fees, submitting transactions on the EOS network requires staking of “resources”. EOS resources represent the physical hardware costs for processing a transaction. There are 3 core resource types: RAM \(the storage costs associated with a transaction\), CPU \(how long it takes a transaction to execute\), and NET \(network bandwidth consumed for a transaction\). New Yup users cannot be expected to acquire and manage EOS resources for their newly created EOS account. So we do it for them using what is known as “proxy staking”, which allows us to reserve EOS resources on behalf of our users.

#### Actions

EOS smart contracts are written in C++, and are based on actions. Actions are functions that your smart contract can execute. The smart contract contains the following EOS actions:

* Create/Edit/Delete Post
* Create/Edit/Delete Vote
* Create/Edit/Delete Comment
* Follow/Unfollow Account

Smart contracts actions are tested using [EOS Factory](https://eosfactory.io/), a Python EOS testing framework.

Multi-Index Tables

EOS smart contracts include [multi-index tables](https://developers.eos.io/eosio-cpp/docs/db-api), which provide a quasi-database service for smart contracts. **Such tables are stored in RAM**  and provide abstractions for indexing and sorting contract data. We use such tables to store votes, comments, post info, followers lists, and other lightweight data. Larger pieces of data, such as images and videos, are stored off-chain using IPFS.

Smart Contract Deployments

**Contract accounts for mainnet**

YUP\_CONTRACT\_ACCOUNT=yupyupyupyup

TOKEN\_CONTRACT\_ACCOUNT=yupyupxtoken

**Contract accounts for jungle testnet**

YUP\_CONTRACT\_ACCOUNT=yupcorjungle

TOKEN\_CONTRACT\_ACCOUNT=yupxxxjungle

You can view action data using the [EOSX](https://www.eosx.io/) block explorer.

