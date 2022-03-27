// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MatchMeNft is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Chainlink for Chainlink.Request;

    Counters.Counter private _tokenIdCounter;

    // chainlink vars
    uint256 public price;
    address private oracle;

    address adminAddress;

    uint256 public constant MAX_SUPPLY = 10000;
    uint256 public constant PRICE = 1;
    mapping(uint256 => address) tokensToOwner;
    mapping(address => bool) _userExists;

    event OracleRequestSent(bytes32 requestId);
    event OracleResultReturned(bytes32 requestId, uint256 data);
    event OracleResultReturnedBool(bytes32 requestId, bool data);

    modifier userNew(address user) {
        require(!_userExists[user], "User already  exists");
        _;
    }
    modifier userExists(address user) {
        require(_userExists[user], "User doesn't exists");
        _;
    }

    modifier notSmaller(uint256 value) {
        require(value >= PRICE, "Not enough money send");
        _;
    }

    // Max minting number 10000
    // Price is 1 AVAX

    //transfer function
    // isowner  // was Owner // readonly

    constructor() ERC721("MatchMeNft", "MMN") {}

    function safeMint(address to) public userNew(to) onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    // function transfer(
    //     address from,
    //     address to,
    //     uint256 value
    // ) public userNew(to) notSmaller(value) onlyOwner {
    //     uint256 tokenId = _tokenIdCounter.current();
    //     _tokenIdCounter.increment();
    //     _safeMint(to, tokenId);
    // }

    function requestData(string calldata apiKey, address user)
        public
        userExists(user)
        returns (
            // onlyOwner
            bytes32 requestId
        )
    {
        // construct the covalent API URL
        string memory url = string(
            abi.encodePacked(
                "https://api.covalenthq.com/v1/",
                "43113",
                "/address/",
                user,
                "/balances_v2/?&key=",
                apiKey
            )
        );
    }
}
// https://api.covalenthq.com/v1/:chain_id/address/:address/balances_v2/?&key=ckey_7abfc88a48da48059c2d3d195b0
