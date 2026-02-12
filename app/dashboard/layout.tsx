import { ReactNode } from 'react';

export default function DashboardLayout({ analytics, info }) {
  return (
    <div className='flex min-h-screen'>
      {/* Sidebar */}
      <aside className='w-64 bg-zinc-900 text-white p-6'>
        <h2 className='text-lg font-bold mb-6'>Dashboard</h2>
        <nav className='space-y-3'>
          <a href='/dashboard'>Overview</a>
          <br />
          <a href='/dashboard/settings'>Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-8 bg-zinc-100'>
        {info}
        {analytics}
      </main>
    </div>
  );
}
