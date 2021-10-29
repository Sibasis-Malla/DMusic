// contracts/MyToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";




contract MyToken is ERC20 {
	constructor (uint256 initialSupply) ERC20 ("DMusicToken", "DMT") {
		_mint(msg.sender, initialSupply*(10 ** uint256(decimals())));
	}

	function decimals() public pure override returns (uint8) {
		return 13;
	}
}