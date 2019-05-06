pragma solidity ^0.5.0;

import "./TellorGetters.sol";
import "./libraries/TellorLibrary.sol";
import "./libraries/TellorGettersLibrary.sol";

contract TellorMaster is TellorGetters{
    /**
    * @dev The constructor sets the original `tellorStorageOwner` of the contract to the sender
    * account.
    */
    constructor (address _tellorContract)  public{
        tellor.tellorMasterConstructor(_tellorContract);
    }

    function changeTellorContract(address _tellorContract) external{
        tellor.changeTellorContract(_tellorContract);
    }

        //Only needs to be in library
    function changeDeity(address _newDeity) external{
        tellor.changeDeity(_newDeity);
    }

    /**
    @dev this fuction allows for delegate calls to the Tellor contract.???
    */
    function () external payable {
        address addr = tellor.addressVars[keccak256("tellorContract")];
        bytes memory _calldata = msg.data;
        assembly {
            let result := delegatecall(not(0), addr, add(_calldata, 0x20), mload(_calldata), 0, 0)
            let size := returndatasize
            let ptr := mload(0x40)
            returndatacopy(ptr, 0, size)
            // revert instead of invalid() bc if the underlying call failed with invalid() it already wasted gas.
            // if the call returned error data, forward it
            switch result case 0 { revert(ptr, size) }
            default { return(ptr, size) }
        }
    }
}