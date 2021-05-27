const Migrations = artifacts.require("LibraswapRouter02");

module.exports = function (deployer) {
  deployer.deploy(Migrations, "0x246e51A6eF229fc71D5bb7Eb1178482618001139","0x02683C287b55fAF2a1B1aF01841A85d36Ce7eea9");
};
