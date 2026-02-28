import { NextResponse } from 'next/server';

export const users = [
  {
    id: 1,
    name: 'stenix',
    email: 'stenix@cc.co',
    age: 20,
  },
  {
    id: 2,
    name: 'htenaj',
    email: 'daw@cc.co',
    age: 30,
  },
  {
    id: 3,
    name: 'robert',
    email: 'rob@cc.co',
    age: 40,
  },
];

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const age = searchParams.get('age');

  console.log(age);

  try {
    return NextResponse.json({
      success: true,
      users,
      total: users.length,
    });
  } catch (error) {
    return NextResponse.json({
      error: "can't get users " + error,
    });
  }
}

export async function POST(request) {
  try {
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
