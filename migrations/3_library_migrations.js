/****Uncomment the body below to run this with Truffle migrate for truffle testing*/
var TellorTransfer = artifacts.require("./libraries/TellorTransfer.sol");
var TellorDispute = artifacts.require("./libraries/TellorDispute.sol");
var TellorStake = artifacts.require("./libraries/TellorStake.sol");
var TellorLibrary = artifacts.require("./libraries/TellorLibrary.sol");
var TellorGettersLibrary = artifacts.require("./libraries/TellorGettersLibrary.sol");
var OldTellor = artifacts.require("./oldContracts/OldTellor.sol");
var OldTellorMaster = artifacts.require("./oldContracts/OldTellorMaster.sol");
var OldTellorStake = artifacts.require("./oldContracts/libraries/OldTellorStake.sol");
var OldTellorTransfer = artifacts.require("./oldContracts/libraries/OldTellorTransfer.sol")
var OldTellorDispute = artifacts.require("./oldContracts/libraries/OldTellorDispute.sol")
var OldTellorLibrary = artifacts.require("./oldContracts/libraries/OldTellorLibrary.sol")
/****Uncomment the body to run this with Truffle migrate for truffle testing*/

/**
*@dev Use this for setting up contracts for testing 
*this will link the Factory and Tellor Library
*These commands that need to be ran:
*truffle migrate --network rinkeby
*truffle exec scripts/Migrate_1.js --network rinkeby
*truffle exec scripts/Migrate_2.js --network rinkeby
*/
// function sleep_s(secs) {
//   secs = (+new Date) + secs * 1000;
//   while ((+new Date) < secs);
// }
/****Uncomment the body below to run this with Truffle migrate for truffle testing*/


module.exports = async function (deployer) {

  //   //OLD DEPS
  // await deployer.deploy(OldTellorTransfer);

  // //deploy dispute
  // await deployer.link(OldTellorTransfer,OldTellorDispute);
  // await deployer.deploy(OldTellorDispute);

  //   // deploy stake
  // await deployer.link(OldTellorTransfer,OldTellorStake);
  // await deployer.link(OldTellorDispute,OldTellorStake);
  // await deployer.deploy(OldTellorStake);

  // // deploy getters lib
  // await deployer.deploy(TellorGettersLibrary);

  // // deploy lib
  // await deployer.link(OldTellorDispute, OldTellorLibrary);
  // await deployer.link(OldTellorTransfer, OldTellorLibrary);
  // await deployer.link(OldTellorStake, OldTellorLibrary);
  // await deployer.deploy(OldTellorLibrary);


  // // deploy tellor
  // await deployer.link(OldTellorTransfer,OldTellor);
  // await deployer.link(OldTellorDispute,OldTellor);
  // await deployer.link(OldTellorStake,OldTellor);
  // await deployer.link(OldTellorLibrary,OldTellor);
  // await deployer.deploy(OldTellor);

  // // deploy tellor master
  // await deployer.link(OldTellorTransfer,OldTellorMaster);
  // await deployer.link(TellorGettersLibrary,OldTellorMaster);
  //   await deployer.link(OldTellorStake,OldTellorMaster);
  // await deployer.deploy(OldTellor).then(async function() {
  //   await deployer.deploy(OldTellorMaster, OldTellor.address)
  // });


};