const users = [
  { id: 1, name: 'stneix', email: 'stenix@xcode.dev' },
  { id: 2, name: 'janeth', email: 'janeth@xcode.dev' },
  { id: 3, name: 'rob', email: 'rob@xcode.dev' },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Response.json(users);
}

export async function POST(request: Request) {
  const { name, email } = await request.json();

  if (name && email) {
    // proceed
    const newUser = {
      id: users.length + 1,
      name,
      email,
    };
    users.push(newUser);

    return Response.json(newUser);
  }

  return new Response('failed to create user', { status: 400 });
}
