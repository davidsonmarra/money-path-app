import {z} from 'zod';
import {IconType} from 'src/assets/icons/types';

const addWalletSchema = z.object({
  name: z.string().nonempty().min(3).max(255),
  icon: z.enum(Object.values(IconType) as [string, ...string[]]),
  color: z.string(),
  backgroundColor: z.string(),
  type: z.enum(['personal', 'bank']),
  amount: z.number().optional(),
});

export type AddWalletFormValues = z.infer<typeof addWalletSchema>;

export {addWalletSchema};
