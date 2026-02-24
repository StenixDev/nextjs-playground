import { NextResponse } from 'next/server';
import { users } from '../route';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);

    const user = users.find((user) => user.id === userId);
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      error: "can't get user " + error,
    });
  }
}
