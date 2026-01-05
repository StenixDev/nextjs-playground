'use client';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { z } from 'zod';

// Define your schema
const formSchema = z.object({
  username: z.string().min(2, 'Name must be at least 2 characters'),
});

async function submitForm(formData: FormData) {
  const data = {
    username: formData.get('username'),
  };

  // Validate with Zod
  const result = formSchema.safeParse(data);

  console.log(result);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Process validated data
  const validatedData = result.data;
  console.log('Valid data:', validatedData);
}

function Form() {
  return (
    <form action={submitForm}>
      <div className='grid w-full max-w-sm items-center gap-3'>
        <Label htmlFor='username'>Username</Label>
        <Input id='username' name='username' type='text' />
        <Button className='cursor-pointer'>Submit</Button>
      </div>
    </form>
  );
}
export default Form;
