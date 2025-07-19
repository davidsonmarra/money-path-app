import api from 'src/configs/service';
import { WalletProps } from 'src/features/add-wallet/types';

const createWallet = async (wallet: WalletProps) => {
  console.log('wallet', wallet);
  const response = await api.post('/api/wallet', wallet);
  return response.data;
};

export default createWallet;
