import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.hardhatLocal,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ThisIs69',
  tokenName: 'This is 69 NFT',
  tokenSymbol: '69NFT',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 6969,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.005,
    maxMintAmountPerTx: 4,
  },
  publicSale: {
    price: 0.005,
    maxMintAmountPerTx: 4,
  },
  contractAddress: "0x00fE842811626241aF3eCB9eaEb046e512454289",
  marketplaceIdentifier: 'This-is-69-NFT',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
