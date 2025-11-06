async function Project({ params }: { params: { all: string[] } }) {
  const { all } = await params;

  console.log(all);

  return (
    <div>
      <h1>The Params</h1>

      {all.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
}
export default Project;
