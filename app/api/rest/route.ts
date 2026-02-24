import { NextResponse } from 'next/server';

const users = [
  {
    id: 1,
    name: 'stenix',
  },
  {
    id: 2,
    name: 'htenaj',
  },
  {
    id: 3,
    name: 'robert',
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
