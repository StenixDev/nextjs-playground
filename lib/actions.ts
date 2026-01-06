'use server';

import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(2, 'Name must be at least 2 characters'),
});

export async function submitForm(formData: FormData) {
  const data = {
    username: formData.get('username'),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  console.log('submiting to the database', data.username);

  return { success: true };
}
