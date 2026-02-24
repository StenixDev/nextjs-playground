import { users } from '@/app/api/rest/route';
import { NextResponse } from 'next/server';
export async function POST(request) {
  const { name, email } = await request.json();
  if (!name) {
    return NextResponse.json(
      {
        success: false,
        error: 'name is required',
      },
      {
        status: 400,
      },
    );
  }

  const emailExists = users.find((user) => user.email === email);
  if (emailExists) {
    return NextResponse.json(
      {
        success: false,
        error: 'email already exists',
      },
      {
        status: 400,
      },
    );
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  return NextResponse.json(
    {
      success: true,
      data: users,
      message: 'User Created',
    },
    {
      status: 201,
    },
  );

  try {
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'failed to create user',
      },
      {
        status: 500,
      },
    );
  }
}
