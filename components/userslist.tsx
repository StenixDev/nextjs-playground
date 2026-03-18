'use client';

import { useQuery } from '@tanstack/react-query';
import { Card } from './ui/card';

type Users = {
  id: number;
  name: string;
  email: string;
};

async function fetchUsers() {
  const response = await fetch('/api/users');
  return response.json();
}

function UsersList() {
  const {
    data: users,
    isLoading,
    error,
    isError,
  } = useQuery<Users[]>({
    queryFn: fetchUsers,
    queryKey: ['users'],
  });

  if (isLoading) return <p>Loading users....</p>;
  if (isError) return <p>Error {error.message}</p>;

  return (
    <div>
      <h1 className='text-3xl font-bold'>UserList</h1>
      <div className='flex'>
        {users?.map((user) => (
          <Card key={user.id} className='p-5 m-5 w-xs'>
            <h1>{user.name}</h1>
            <span>{user.email}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default UsersList;
