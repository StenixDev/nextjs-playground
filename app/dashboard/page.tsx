import Link from 'next/link';

function Dashboard() {
  return (
    <div>
      Dashboard
      <Link href={`/dashboard/stats`}>Stats</Link>
    </div>
  );
}
export default Dashboard;
