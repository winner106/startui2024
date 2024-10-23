import React from 'react';

import { Stack } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  FormField,
  FormFieldController,
  FormFieldLabel,
} from '@/components/Form';
import { FormFieldsRepository } from '@/features/products/schemas';

export const RepositoryForm = () => {
  const { t } = useTranslation(['common', 'products']);
  const form = useFormContext<FormFieldsRepository>();

  return (
    <Stack spacing={4}>
      <FormField>
        <FormFieldLabel>{t('products:data.name.label')}</FormFieldLabel>
        <FormFieldController control={form.control} type="text" name="name" />
      </FormField>

      <FormField>
        <FormFieldLabel>{t('products:data.link.label')}</FormFieldLabel>
        <FormFieldController control={form.control} type="text" name="link" />
      </FormField>

      <FormField>
        <FormFieldLabel optionalityHint="optional">
          {t('products:data.description.label')}
        </FormFieldLabel>
        <FormFieldController
          control={form.control}
          type="textarea"
          name="description"
          rows={6}
        />
      </FormField>
    </Stack>
  );
};
