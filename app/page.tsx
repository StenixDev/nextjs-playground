type UserType = {
  id: number;
  name: string;
};

async function Home() {
  const res = await fetch('http://localhost:3000/api/rest');
  const data = await res.json();

  console.log(data);
  return (
    <div>
      {data.users.map((user: UserType) => (
        <span key={user.id} className='block'>
          {user.name}
        </span>
      ))}
    </div>
  );
}
export default Home;
