import NewUser from '@/components/new-user';
import UsersList from '@/components/userslist';

function Home() {
  return (
    <div className='container mx-auto p-6 max-w-4xl'>
      <h1 className='text-3xl font-bold mb-8 text-center'>
        Hello Tanstact Query
      </h1>

      <div className=''>
        <UsersList />
        <NewUser />
      </div>
    </div>
  );
}
export default Home;
