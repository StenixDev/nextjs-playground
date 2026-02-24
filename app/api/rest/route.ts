import { NextResponse } from 'next/server';

export const users = [
  {
    id: 1,
    name: 'stenix',
    email: 'stenix@cc.co',
  },
  {
    id: 2,
    name: 'htenaj',
    email: 'daw@cc.co',
  },
  {
    id: 3,
    name: 'robert',
    email: 'rob@cc.co',
  },
];

export async function GET(request) {
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
