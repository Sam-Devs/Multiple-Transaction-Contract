const MultipleTransaction = artifacts.require("MultipleTransaction");

module.exports = function(deployer) {
  deployer.deploy(MultipleTransaction);
};
