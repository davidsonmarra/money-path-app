import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {
  AddWalletFormValues,
  addWalletSchema,
} from 'src/features/add-wallet/context/add-wallet-form/schema';

interface AddWalletFormContextProps {
  children: React.ReactNode;
  initialValues?: AddWalletFormValues;
}

const AddWalletFormContext = ({
  children,
  initialValues,
}: AddWalletFormContextProps) => {
  const methods = useForm<AddWalletFormValues>({
    resolver: zodResolver(addWalletSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default AddWalletFormContext;
