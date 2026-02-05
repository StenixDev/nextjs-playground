import Link from 'next/link';

function page() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link href={`/profile`}>View Profile</Link>
    </div>
  );
}
export default page;
