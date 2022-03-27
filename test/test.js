const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('MatchMeNft', function () {
  it("Should return the new greeting once it's changed", async function () {
    const MatchMeNft = await ethers.getContractFactory('MatchMeNft')
    const matchMeNft = await MatchMeNft.deploy()
    await matchMeNft.deployed()

    const [_, playerAddress] = await ethers.getSigners()

    expect(await matchMeNft.greet()).to.equal()

    const safeMint = await matchMeNft.safeMint(playerAddress)

    // wait until the transaction is mined
    await safeMint.wait()

    expect(await matchMeNft.greet()).to.equal()
  })
})
