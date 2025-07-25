import { z } from 'zod';

const makeTransferSchema = z.object({
  type: z.string(),
  categoryId: z.string(),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().optional(),
  amount: z.number().optional(),
  sourceWalletId: z.string().optional(),
  destinationWalletId: z.string().optional(),
  timestamp: z.date().optional(),
});

const titleSchema = makeTransferSchema.pick({
  title: true,
});

export type MakeTransferFormValues = z.infer<typeof makeTransferSchema>;

export { makeTransferSchema, titleSchema };
