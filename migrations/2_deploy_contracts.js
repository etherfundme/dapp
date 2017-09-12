var EtherFundMeCrowdfunding = artifacts.require("./EtherFundMeCrowdfunding.sol");

module.exports = function(deployer) {
  const dateTime = Date.now();
  const timestamp = Math.floor(dateTime / 1000);

  deployer.deploy(EtherFundMeCrowdfunding, 1, "test1", timestamp, timestamp + 1000000000, 1000000000000000000, "0x62ec1a9d60819442eddd7ec8d23074cde18dbd0f", "0x62ec1a9d60819442eddd7ec8d23074cde18dbd0f");
  };
