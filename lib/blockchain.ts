export interface NetworkConfig {
  id: string;
  name: string;
  icon: string;
  chainId?: number; // Ethereum chain ID
  rpcUrl?: string; // Solana RPC URL
  explorerUrl: string;
  explorerName: string;
  type: 'evm' | 'solana'; // 网络类型
  fundsDividerContract?: string; // 手续费分配合约地址
  crowdfundingContract?: string; // 众筹合约地址（按网络）
}

// 钱包配置
export interface WalletConfig {
  id: string;
  name: string;
  icon: string;
  supportedNetworks: string[]; // 支持的网络ID列表
  connectorId?: string; // wagmi connector ID
  isExternal?: boolean; // 是否为外部钱包（如Phantom）
}

// 加密货币配置
export interface CryptoCurrencyConfig {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  decimals: number;
  networks: Array<{
    networkId: string;
    contractAddress?: string; // ERC-20代币合约地址
    isNative?: boolean; // 是否为该网络的原生代币
  }>;
}

// 统一的区块链配置
export const BLOCKCHAIN_CONFIG = {
  // 网络配置
  networks: {
    'ethereum-sepolia': {
      id: 'ethereum-sepolia',
      name: 'Ethereum Sepolia',
      icon: 'ethereum',
      chainId: 11155111,
      rpcUrl: 'https://sepolia.infura.io/v3/3f0a3b8ee4134ebcb0947ecb057dcba5', // Joey's personal project
      explorerUrl: 'https://sepolia.etherscan.io',
      explorerName: 'Etherscan',
      type: 'evm',
      fundsDividerContract: '0xfEeC3028Af62B78E0D54F650063E1800Ac7Dfd98',
      crowdfundingContract: '0xce714E8190a22E1475aaF01D904eb34502FC3904',
    } as NetworkConfig,
    'ethereum-mainnet': {
      id: 'ethereum-mainnet',
      name: 'Ethereum Mainnet',
      icon: 'ethereum',
      chainId: 1,
      rpcUrl: 'https://eth.llamarpc.com',
      explorerUrl: 'https://etherscan.io',
      explorerName: 'Etherscan',
      type: 'evm',
      // fundsDividerContract: '', // TODO: Deploy contract on mainnet
    } as NetworkConfig,
    'solana-devnet': {
      id: 'solana-devnet',
      name: 'Solana Devnet',
      icon: 'solana',
      rpcUrl: 'https://api.devnet.solana.com',
      explorerUrl: 'https://explorer.solana.com',
      explorerName: 'Solana Explorer',
      type: 'solana',
    } as NetworkConfig,
    'solana-mainnet': {
      id: 'solana-mainnet',
      name: 'Solana Mainnet',
      icon: 'solana',
      rpcUrl: 'https://api.mainnet-beta.solana.com',
      explorerUrl: 'https://explorer.solana.com',
      explorerName: 'Solana Explorer',
      type: 'solana',
    } as NetworkConfig,
    'pharos-testnet': {
      id: 'pharos-testnet',
      name: 'Pharos Testnet',
      icon: 'pharos',
      chainId: 688688,
      rpcUrl: 'https://api.zan.top/node/v1/pharos/testnet/e3d694bd610c4a11a98b15b2296236c3',
      explorerUrl: 'https://testnet.pharosscan.xyz',
      explorerName: 'Pharos Testnet Explorer',
      type: 'evm',
      // fundsDividerContract: '', // TODO: Deploy contract on pharos testnet
      crowdfundingContract: '0x543B59955cEb03169EcbF8eE63312a5258212098',
    } as NetworkConfig,
    'edu-testnet': {
      id: 'edu-testnet',
      name: 'EDU Chain Testnet',
      icon: 'edu',
      chainId: 656476,
      rpcUrl: 'https://rpc.open-campus-codex.gelato.digital',
      explorerUrl: 'https://edu-chain-testnet.blockscout.com',
      explorerName: 'EDU Chain Testnet Explorer',
      type: 'evm',
      // fundsDividerContract: '', // TODO: Deploy contract on pharos testnet
      crowdfundingContract: '0xF7db74785A2e3991627996A84AC72B9310b24951',
    } as NetworkConfig,
  },

  // 钱包配置
  wallets: {
    metamask: {
      id: 'metamask',
      name: 'MetaMask',
      icon: 'metamask',
      supportedNetworks: ['ethereum-sepolia', 'ethereum-mainnet', 'pharos-testnet', 'edu-testnet'],
      connectorId: 'metaMaskSDK',
    } as WalletConfig,
    'wallet-connect': {
      id: 'wallet-connect',
      name: 'WalletConnect',
      icon: 'wallet-connect',
      supportedNetworks: ['ethereum-sepolia', 'ethereum-mainnet', 'pharos-testnet', 'edu-testnet'],
      connectorId: 'walletConnect',
    } as WalletConfig,
    coinbase: {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: 'coinbase',
      supportedNetworks: ['ethereum-sepolia', 'ethereum-mainnet', 'pharos-testnet', 'edu-testnet'],
      connectorId: 'coinbaseWalletSDK',
    } as WalletConfig,
    phantom: {
      id: 'phantom',
      name: 'Phantom',
      icon: 'phantom',
      supportedNetworks: ['solana-devnet', 'solana-mainnet'],
      isExternal: true,
    } as WalletConfig,
  },

  // 加密货币配置
  currencies: {
    usdc: {
      id: 'usdc',
      name: 'USD Coin',
      symbol: 'USDC',
      icon: 'usdc',
      decimals: 6,
      networks: [
        {
          networkId: 'ethereum-sepolia',
          contractAddress: '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8', // USDC on Sepolia testnet
        },
        {
          networkId: 'ethereum-mainnet',
          contractAddress: '0xA0b86a33E6441e16174B7d45cfE8b84D5bF4E5F1', // USDC on Ethereum mainnet
        },
        {
          networkId: 'pharos-testnet',
          contractAddress: '0x72df0bcd7276f2dFbAc900D1CE63c272C4BCcCED',
        },
        {
          networkId: 'solana-devnet',
          contractAddress: 'Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr', // USDC-Dev on Solana Devnet, not circle's USDC
        },
        {
          networkId: 'solana-mainnet',
          contractAddress: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', // USDC on Solana Mainnet
        },
        {
          networkId: 'edu-testnet',
          contractAddress: '0x19EeaDcBA1801Afec43e87Cefcd4239E13fc294d', // USDC on Solana Mainnet
        }
      ],
    } as CryptoCurrencyConfig,
    sol: {
      id: 'sol',
      name: 'Solana',
      symbol: 'SOL',
      icon: 'solana',
      decimals: 9,
      networks: [
        {
          networkId: 'solana-devnet',
          isNative: true,
        },
        {
          networkId: 'solana-mainnet',
          isNative: true,
        },
      ],
    } as CryptoCurrencyConfig,
    phrs: {
      id: 'phrs',
      name: 'Pharos',
      symbol: 'PHRS',
      icon: 'pharos-logo',
      decimals: 18,
      networks: [
        {
          networkId: 'pharos-testnet',
          isNative: true,
        },
      ],
    } as CryptoCurrencyConfig,
    eth: {
      id: 'eth',
      name: 'Ethereum',
      symbol: 'ETH',
      icon: 'ethereum',
      decimals: 18,
      networks: [
        {
          networkId: 'ethereum-sepolia',
          isNative: true,
        },
        {
          networkId: 'ethereum-mainnet',
          isNative: true,
        },
      ],
    } as CryptoCurrencyConfig,
    edu: {
      id: 'edu',
      name: 'EDU',
      symbol: 'EDU',
      icon: 'edu',
      decimals: 18,
      networks: [
        {
          networkId: 'edu-testnet',
          isNative: true,
        },
      ],
    } as CryptoCurrencyConfig,
  },
} as const;

export function getExplorerUrl(networkId: string, txHash: string): string {
  const network = BLOCKCHAIN_CONFIG.networks[networkId as keyof typeof BLOCKCHAIN_CONFIG.networks];
  if (!network) return '';

  if (network.type === 'solana') {
    const cluster = networkId.includes('devnet') ? '?cluster=devnet' : '';
    return `${network.explorerUrl}/tx/${txHash}${cluster}`;
  } else {
    return `${network.explorerUrl}/tx/${txHash}`;
  }
}
