var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('dcececdc'),
  addressVersion: 0x00,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('c84c8d0f52a7418b28a24e7b5354d6febed47c8cc33b3fa20fdbe4b3a1fcd9c4'),
    merkle_root: hex('45eef7a7ed92208bcb532a58c3048bc38a299f9edfd8b48b677cabf4370274c9'),
    height: 0,
    nonce: 1157535,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1405483400,
    bits: 1e0ffff0,
  },
  dnsSeeds: [
    'stella.hopto.org',
    'syscoin.selfip.com',
    'dnsseed.syscoin.org',
    'node.syscoin.me',
    'dnsseed.syscoin.me'
  ],
  defaultClientPort: 8333
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
