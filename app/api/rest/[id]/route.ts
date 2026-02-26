import { NextResponse } from 'next/server';
import { users } from '../route';
import { success } from 'zod';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);

    const user = users.find((user) => user.id === userId);

    return NextResponse.json({
      success: user ? true : false,
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      error: "can't get user " + error,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);
    const { name, email } = await request.json();

    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: 'user id not found',
        },
        { status: 404 },
      );
    }

    users[userIndex] = {
      id: userId,
      email,
      name,
    };

    return NextResponse.json({
      success: true,
      data: users[userIndex],
      message: 'user successfully updated',
    });
  } catch (error) {
    return NextResponse.json({
      error: "can't update the user " + error,
    });
  }
}

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);
    const body = await request.json();

    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: 'user id not found',
        },
        { status: 404 },
      );
    }

    users[userIndex] = {
      ...users[userIndex],
      ...body,
      id: userId,
    };

    return NextResponse.json({
      success: true,
      data: users[userIndex],
      message: 'user successfully updated/patched',
    });
  } catch (error) {
    return NextResponse.json({
      error: "can't update the user " + error,
    });
  }
}
