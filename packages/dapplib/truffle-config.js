require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift release sad universe hunt glide equal gauge'; 
let testAccounts = [
"0x5daaf2a35800e18e13da658f68ab32800dc9111c58e85c1daebb14051a5c1f8f",
"0xe402d669dd47094b0c7be91179b01edf9f2aa41806a77bb7d04033135fc3efcb",
"0xead11ab236a311fc9ea2350e226c477326a565a5dce40ece6eeb332a5cf83044",
"0xdc88df8e133f9950dfe47e13175182f50b4dedc0194ebd26eee2c47c4aea9d15",
"0xa7d1a71d4529a3f1e3c12e53160368581d38f5a8ff24ca6d311444af4333628a",
"0x2c4e07ee137fd964d21c6a313ff0d2f238a2b0b91f4a0f2fa9ba0b4f130018a0",
"0x26293cab9246600785efb2c012f9093eb8fcb59176ac08c4addbda661502f422",
"0x684dae0b4fe0d52e45f24780846f33999da98094e268ba666c78fcfd8c159a0f",
"0xc1007631fd708d49bddbd4b5d489887983139494d91f5cc5eac8dfea87340466",
"0x791cb39355d1c04ffbcb81dd14b6726d216a59decc2f57486aca62bb9984603e"
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


