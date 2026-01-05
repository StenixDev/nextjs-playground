'use server';

import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(2, 'Name must be at least 2 characters'),
});

export type FormState = {
  success?: boolean;
  errors?: {
    username?: string[];
  };
};

export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const data = {
    username: formData.get('username'),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return { success: true };
}
