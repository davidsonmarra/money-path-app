import { z } from 'zod';

const makeTransferSchema = z.object({
  categoryId: z.string(),
});

export type MakeTransferFormValues = z.infer<typeof makeTransferSchema>;

export { makeTransferSchema };
