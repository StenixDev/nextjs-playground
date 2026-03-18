'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useRef } from 'react';

type UserType = {
  name: string;
  email: string;
};

// Optional: define response type
type UserResponse = {
  id: number;
  name: string;
  email: string;
};

async function createUser(newUser: UserType): Promise<UserResponse> {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  console.log(res);

  if (res.status == 400) {
    throw new Error('Failed to create user');
  }

  return res.json();
}

function NewUser() {
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);

  const mutation = useMutation<UserResponse, Error, UserType>({
    mutationFn: createUser,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      // 🔥 clear inputs
      formRef.current?.reset();
    },

    onError: (error) => {
      console.error(error.message);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    mutation.mutate({ name, email });
  };

  return (
    <div className='space-y-5'>
      <h1 className='text-2xl'>Add new user</h1>

      <form ref={formRef} className='w-xs space-y-2' onSubmit={handleSubmit}>
        <Input name='name' type='text' placeholder='enter your username' />
        <Input
          name='email'
          type='email'
          placeholder='enter your email address'
        />

        <Button type='submit' disabled={mutation.isPending}>
          {mutation.isPending ? 'Submitting...' : 'Submit'}
        </Button>

        {mutation.isError && (
          <p className='text-red-500'>{mutation.error.message}</p>
        )}

        {mutation.isSuccess && <p className='text-green-500'>User created!</p>}
      </form>
    </div>
  );
}

export default NewUser;
