import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  MakeTransferFormValues,
  makeTransferSchema,
} from 'src/features/make-transfer/context/make-transfer-form/schema';

interface MakeTransferFormContextProps {
  children: React.ReactNode;
  initialValues?: MakeTransferFormValues;
}

const MakeTransferFormContext = ({
  children,
  initialValues,
}: MakeTransferFormContextProps) => {
  const methods = useForm<MakeTransferFormValues>({
    resolver: zodResolver(makeTransferSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default MakeTransferFormContext;
