# Proof of Interest: MatchMeNFT

## Hackathon Project for Avalanche Summit 2022 BCN

[H.E.R. DAO](https://linktr.ee/H.E.R.DAO) Team: Anna Hessler, Kisu Phohleli, Lena Hierzi, Olivia Sladen, Natasha Simone

Find the app [here](https://matchme-nft.vercel.app)
Find our linktree [here](https://linktr.ee/MatchMe.NFTxAvalanche)
Find our video presentation [here](https://www.loom.com/share/90b09d01f56c416f81f5ccc64c8ddf3b)

For [BOUNTIES](#technical-implementation-and-bounties) please check out the technical implementation below.

## The Idea

The evolution of matching platforms is finally here.

I think we can all safely say that we’re bored of these repetitive and shallow dating apps that seem to only differentiate themselves by a feature here and there, but in retrospect all feel rather samey.

Constantly swiping left or right at strangers faces on ours phones, matching to some, chatting to a few, and actually meeting even fewer.
Yes, we all have a friend or two who have met their husband or wife on Tinder or Bumble etc, and that’s great, very happy for them, but these dating apps haven’t really evolved much in the last decade, whereas technology has!

This app will also solve the growing problem of more and more discord servers of NFT projects that we are involved in. We can go to the specific ones and it's just to much and so loud and not easy to connect to people. Here you will be challenged and incentivized to communicate. - > communicate2earn

## So it’s time for a new matching platform!

Blockchain technology has come leaps and bounds in it development and adoption in the past decade, providing endless exciting possibilities. One of these already very popular uses of blockchain is NFT’s. NFT’s have hit the headlines so much in the past year with new projects and collections popping up every week.

The NFT community has exploded in the past 2 years. It is already vast, and growing at an accelerated pace. Within this new and evolving market are so many opportunities to create further value.

People are wanting new matching platforms, and Covid has accelerated us into the future of working from anywhere in the world. Organisations that are seeing this are getting rid of their offices, their employees working from home, Co working spaces, having teams all around the world.
The NFT community is global, so not specific to location. Thus the problem many people find within this community is that while they can join a discord channel of different NFT projects / collections and talk within that specific community, they struggle to meet and chat to people who have similar interests to them across all their NFT collections and not just in one project. This is where MatchMeNFT comes in.

MatchMeNFT’s mission is to connect / match people through data driven algorithm from users NFT collections and interests by connecting their wallet.

By matching with other people also with highly similar interests and NFT collections we bring people closer on a more personal basis allowing them to connect, chat, discuss and share, thus learning and growing further. None of this outdated swiping, no photos, no bios with funny or not so funny answers and captions.

## Token distribution

Once you have a community interested in the token / project, it is necessary to promote its use among the community. This is only possible by distributing the tokens among the community to make use of them.

This stimulates the token economy and enables the network that supports the token and make it grow.
Users buying the token and staking it to earn interest.

Airdrops to early users and special announcement of airdrops as rewards for competitions on the platform. This will incentivise users to use the app and be interactive on it (the competition will be something interactive).

The objective is to distribute the tokens as widely as possible, reaching many users.
Other ways we will distributing tokens is through our Gamify feature in which the user will need MatchMe tokens to play the game, where they can win more tokens if they win.

The game involves guessing what the same NFT’s their match has, if they guess correctly the user will win a token, if they guess incorrectly they lose the token they used to play the game. If the user wants to play again then they will have to use another token or buy a token if they don’t already have one.

We will also have a premium feature which the user needs to pay for using the MatchMe token to access. This feature will allow users to personalise their matches further by matching people who have more specific NFT categories such as Women led NFT collections or / and Photography NFT’s etc.
This feature provides matches between the more enthusiastic NFT collectors to connect.

## Conclusion / wrap up

provide a service and utility to bring people closer among the sometimes overwhelming telegram and discord channels of communities within NFT projects and collections.
A very common theme in the blockchain, crypto and NFT industry is that people are eager to learn more constantly. We learn more by connecting with others with similar interests. Through connecting, discussing and sharing, we grow individually as well as a community and as an industry.

## Technical Implementation and Bounties

- implementation of the coinbase wallet

- Indexing through Covalent like this:

```
https://api.covalenthq.com/v1/:chain_id/address/:address/balances_v2/?&key=ckey_7abfc88a48da48059c2d3d195b0
```

for all users that own or owned a MatchMe.nft

- Pull in cross-chain data into a smart contract using Chainlink’s HTTP get adapter

using Layer Zero for chat communictaion and game:
A huge part of the app will be the chat function where the matched and start a game inside a chat. The users wont have any information about each other, only the number of matching proects. They will be isentivisted to talk to each other, as they can give guesses for what projects they share. You will have to pay one token for guessing but you will get rewarded two tokens i you guess right. Also the player, that guesses the most wins an extra prize of an amount of tokens tokens. They can then decide to share or not to share.

### Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/script.js
npx hardhat help
```
