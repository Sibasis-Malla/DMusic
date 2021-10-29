pragma solidity ^0.8.7;
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";



contract LicenseToken is ERC721 {
    uint256 counter;
    mapping (uint256 => string) private _tokenURIs;

    constructor()  ERC721("DMusicLicense", "DML") {

    }
    event TokenURI(string tokenuri);

    function _setTokenURI(uint256 tokenId,string memory tokenURI)internal virtual{
        _tokenURIs[tokenId] = tokenURI;

    }
    function CreateLicense(address artist, string memory tokenURI)public returns(uint256)
    {
        uint256 newItemId = counter;
        _safeMint(artist, newItemId);
        _setTokenURI(newItemId, tokenURI);
        counter++;
        emit TokenURI(tokenURI);

        return newItemId;
    }
}