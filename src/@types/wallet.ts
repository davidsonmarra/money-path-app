import { IconType } from 'src/assets/icons/types';

export default interface Wallet {
  id: string;
  name: string;
  balance: number;
  icon: IconType;
  backgroundColor: string;
}
