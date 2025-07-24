import { z } from 'zod';

const walletSchema = z.object({
  id: z.string(),
  name: z.string(),
  balance: z.number(),
});

const makeTransferSchema = z.object({
  type: z.string(),
  categoryId: z.string(),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().optional(),
  amount: z.number().optional(),
  sourceWallet: walletSchema.optional(),
  destinationWallet: walletSchema.optional(),
});

const titleSchema = makeTransferSchema.pick({
  title: true,
});

export type MakeTransferFormValues = z.infer<typeof makeTransferSchema>;

export { makeTransferSchema, titleSchema };
