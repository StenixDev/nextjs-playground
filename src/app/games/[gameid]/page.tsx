async function GameId({ params }: { params: { gameid: string } }) {
  const { gameid } = await params;
  return <div>{gameid}</div>;
}

export default GameId;
