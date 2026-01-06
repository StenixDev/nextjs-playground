'use client';
import { submitForm } from '@/lib/actions';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

function Form() {
  return (
    <form
      action={async (formData) => {
        await submitForm(formData);
      }}
    >
      <div className='grid w-full max-w-sm items-center gap-3'>
        <Label htmlFor='username'>Username</Label>
        <Input id='username' name='username' type='text' />
        <Button className='cursor-pointer'>Submit</Button>
      </div>
    </form>
  );
}
export default Form;
