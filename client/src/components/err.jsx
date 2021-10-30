import React from "react";
import { Link } from "react-router-dom";
function err(){
    return(
        <div>
        You are viewing this page beacause Metamask is not installed or You are on a wrong network
        Please visit the link below to download the Metamask extension and create an account(Its Free!)
        <div>
        <Link to="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"/>
        </div>
        <div>
        After installing Select and connect to Ropsten Test network and visit the below link to get test ether
        </div>
        <Link to="https://faucet.ropsten.be/"/>
        <div>To get address click on "Account 1" and paste the address in the form</div>
        <div>Refresh Page! You are set to go !</div>
    
        </div>
    )

}

export default err