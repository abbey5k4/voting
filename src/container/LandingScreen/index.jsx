import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const LandingScreen = () => {
    const [isWeb3Connected, setIsWeb3Connected] = useState(false);
    const connectBC = async function loadWeb3() {
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.web3.eth.requestAccounts();
            setIsWeb3Connected(true);
        } else if(window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
            setIsWeb3Connected(true);
        } else {
            alert('No ethereum browser detected. You can checkout Meta mask');
            setIsWeb3Connected(false);
        }
    };

    async function loadBlochchainData() {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
    }

    useEffect(() => {
        // loadWeb3();
        loadBlochchainData();
    }, [])
    return (
        <div>
            {isWeb3Connected ?  <div>Welcome to my voting platform!</div> : <div><button onClick={connectBC}>connect</button></div>}
        </div>
    )
}

export default LandingScreen;
