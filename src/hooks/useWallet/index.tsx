import { create } from 'zustand';
import Wallet from 'src/@types/wallet';
import { IconType } from 'src/assets/icons/types';

interface WalletStore {
  wallets: Wallet[];
  getWallets: (force?: boolean) => Promise<Wallet[]>;
}

export const useWalletStore = create<WalletStore>((set, get) => ({
  wallets: [],
  getWallets: async () => {
    set({
      wallets: [
        {
          id: '1',
          name: 'Inter',
          balance: 100,
          icon: IconType.inter,
          backgroundColor: '#EA7100',
        },
        {
          id: '2',
          name: 'Nubank',
          balance: 100,
          icon: IconType.nubank,
          backgroundColor: '#820AD1',
        },
        {
          id: '3',
          name: 'Itaú',
          balance: 100,
          icon: IconType.itau,
          backgroundColor: '#FF6A00',
        },
      ],
    });

    return get().wallets;
  },
}));
