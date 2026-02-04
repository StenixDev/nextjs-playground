type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug = [] } = await params;

  if (slug.includes('users')) return <div>this is a user params</div>;

  return (
    <div>
      <h1>This is a catch-all slug</h1>
      <p>The params are: {slug.join(' / ')}</p>
    </div>
  );
}
