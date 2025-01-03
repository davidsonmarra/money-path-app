import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {InstitutionProps} from 'src/features/add-wallet/types';

interface AddWalletFormState {
  institution: InstitutionProps | null;
  setInstitution: (institution: InstitutionProps) => void;
}

const useAddWalletForm = create<AddWalletFormState>()(
  devtools(
    set => ({
      institution: null,
      setInstitution: institution => set(() => ({institution})),
    }),
    {
      name: 'add-wallet-form',
    },
  ),
);

export default useAddWalletForm;
