import UsersList from '@/components/userslist';

function Home() {
  return (
    <div className='container mx-auto p-6 max-w-4xl'>
      <h1 className='text-3xl font-bold mb-8 text-center'>
        Hello Tanstact Query
      </h1>

      <div className='grid gap-6 md:grid-cols-2'>
        <div className='space-y-6'>
          <UsersList />
        </div>
      </div>
    </div>
  );
}
export default Home;
