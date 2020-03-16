var Accessory, Service, Characteristic, UUIDGen;

module.exports = function (homebridge) {
  console.log("Homebridge API version: " + homebridge.version);

  Accessory = homebridge.platformAccessory;
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  UUIDGen = homebridge.hap.uuid;

  EcobeeSensor = require("./source/sensor.js")(Accessory, Service, Characteristic);
  EcobeePlatform = require("./source/platform.js")(UUIDGen, Accessory, EcobeeSensor);

  homebridge.registerPlatform("homebridge-ecobee", "Ecobee Sensors", EcobeePlatform, true);
};
