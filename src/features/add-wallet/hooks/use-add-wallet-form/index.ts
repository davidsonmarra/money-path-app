import {useFormContext} from 'react-hook-form';
import {AddWalletFormValues} from 'src/features/add-wallet/context/add-wallet-form/schema';

const useAddWalletForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    getValues,
    formState: {errors},
  } = useFormContext<AddWalletFormValues>();

  return {
    register,
    setValue,
    handleSubmit,
    watch,
    getValues,
    errors,
  };
};

export default useAddWalletForm;
