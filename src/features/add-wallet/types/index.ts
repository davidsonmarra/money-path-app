import {IconType} from 'src/assets/icons/types';

export interface WalletProps {
  name: string;
  icon: IconType;
  color?: string;
  backgroundColor?: string;
  type: 'personal' | 'bank';
  amount?: number;
}

export type SelectWalletSection = {
  title: string;
  data: WalletProps[];
};
