'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6'>
      <button onClick={() => router.push('/dashboard')}>
        Go to the dashboard
      </button>
    </div>
  );
}
