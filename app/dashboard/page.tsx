import Link from 'next/link';

function page() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link href={`/dashboard/reports`}>View Report</Link>
    </div>
  );
}
export default page;
