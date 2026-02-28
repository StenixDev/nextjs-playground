// import { NextResponse } from 'next/server';

// export async function GET() {
//   const response = new NextResponse('<h1>Hello World</h1>', {
//     status: 200,
//   });

//   response.headers.set('Content-Type', 'text/html');
//   response.headers.set('Cache-Control', 'no-store');
//   response.headers.set('X-Custom-Header', 'MyValue');

//   return response;
// }

import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ message: 'Cookie set' });

  response.cookies.set('user', 'Stephen', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
