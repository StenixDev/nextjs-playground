import Image from 'next/image';

function UserCard({ type }: { type: string }) {
  return (
    <div className='rounded-2xl odd:bg-lama-purple even:bg-lama-yellow p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] bg-whote px-2 py-1 rounded-full text-green-600'>
          2025/07
        </span>

        <Image src='/more.png' alt='' width={20} height={20} />
      </div>

      <h1 className='text-2xl font-semibold my-4'>1,231</h1>
      <h2 className='capitalize text-sm font-medium text-gray-500'>{type}</h2>
    </div>
  );
}
export default UserCard;
