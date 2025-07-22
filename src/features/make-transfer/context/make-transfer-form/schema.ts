import { z } from 'zod';

const makeTransferSchema = z.object({
  categoryId: z.string(),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().optional(),
});

const titleSchema = makeTransferSchema.pick({
  title: true,
});

export type MakeTransferFormValues = z.infer<typeof makeTransferSchema>;

export { makeTransferSchema, titleSchema };
