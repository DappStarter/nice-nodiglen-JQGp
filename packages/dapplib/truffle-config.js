require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food tragic rate pitch unique grace immense army genius'; 
let testAccounts = [
"0x46194e45b3f8dddbb677103e3f951f14c01f567d2fafee5c57d81bbe7ef09bb9",
"0x0177e0f266eed5eff0306784c842942b825404cad4f7d08903d2d8ba81a192b3",
"0x8dcdc9cd83f732503cc3a07c71152d31d89287f99988e668eef2c362d1acd237",
"0x251e32b3a6bd7a5e58b6b00824ddbe04d9f3d698f6f07c37edb4b8144a4b188d",
"0xaad2bad060facec614914d8a55774696543d61a4fb04ec4fef1dcaa767241742",
"0x01a86626a3ff58ab15c354a4b2eaf8c43fab62cd829113f8b7c2c0d82a759e96",
"0x41c5e85e57a363761fa0c0a2a33447094bd9d6fe450f9c1ab94cbd008b261c10",
"0x6fd9b1f8381b6637a0362441ee51eb987f3fe4a44e57c163f57351476034560a",
"0x55afafeb7ab16cc70e041645fb8b58d058c2b5776a862c70553eea3652f60450",
"0x6854978548828b2a49c3cb848ac88da18fe12762bb0fbf4bb9b28c9e01c48f74"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


