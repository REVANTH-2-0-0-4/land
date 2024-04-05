const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const LandModule = buildModule("landModule", (m) => {
  const land = m.contract("land");

  return { land };
});

module.exports = LandModule;
