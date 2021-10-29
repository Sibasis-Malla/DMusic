pragma solidity ^0.8.7;
// SPDX-License-Identifier: MIT
import "./Crowdsale.sol";


contract MyTokenSale is Crowdsale {



    constructor (
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token
        
    )
        Crowdsale(rate, wallet, token)
        public
    {
       

    }
        function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view override {
      
    }

}

