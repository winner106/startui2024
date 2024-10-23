import { t } from 'i18next';
import { z } from 'zod';

import { zu } from '@/lib/zod/zod-utils';

export type Product = z.infer<ReturnType<typeof zProduct>>;

export const zProduct = () =>
  z.object({
    id: z.string().cuid(),
    name: zu.string.nonEmpty(z.string(), {
      required_error: t('products:data.name.required'),
    }),
    link: zu.string
      .nonEmpty(z.string(), {
        required_error: t('products:data.link.required'),
      })
      .pipe(
        z
          .string()
          .min(4, t('products:data.link.tooSmall', { min: 4 }))
          .includes('.', { message: t('products:data.link.missingDot') })
      )
      .transform((v) => (v.startsWith('http') ? v : `https://${v}`)),
    description: zu.string.nonEmptyNullable(z.string()),
  });

export type FormFieldsProduct = z.infer<ReturnType<typeof zFormFieldsProduct>>;
export const zFormFieldsProduct = () =>
  zProduct().pick({ name: true, link: true, description: true });
