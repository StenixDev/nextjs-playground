async function Analytics() {
  const data = await getData();

  return <div>{data}</div>;
}
export default Analytics;

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 'Dashboard Loaded';
}
