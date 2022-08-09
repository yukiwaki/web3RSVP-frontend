import abiJSON from "./web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0xbfb7EA955800173A2f99cb7af3c29915f18f33a7";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            rsvpContract = new ethers.Contract(contractAddress, contractABI, signer);
        } else {
            console.log("Etherem object doesn't exist!");
        }
    } catch (error) {
        console.log("ERROR:", error);
    }
    return rsvpContract;
}

export default connectContract;