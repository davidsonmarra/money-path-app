import { useFormContext } from 'react-hook-form';
import { MakeTransferFormValues } from 'src/features/make-transfer/context/make-transfer-form/schema';

const useMakeTransferForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useFormContext<MakeTransferFormValues>();

  return {
    register,
    setValue,
    handleSubmit,
    watch,
    getValues,
    errors,
  };
};

export default useMakeTransferForm;
