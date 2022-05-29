import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
const Card = ({ res }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <section className='p-3 hover:text-white cursor-pointer active:text-red-400 xl:hover:scale-105 transition-transform duration-200'>
      <Image
        layout='responsive'
        src={BASE_URL + res.backdrop_path}
        width={200}
        height={100}
      />
      <div className=''>
        <p className='truncate text-lg'>{res.overview}</p>
        <h2 className='text-lg font-bold'>
          {res.name || res.original_name || res.original_title}
        </h2>
        <p className='flex items-center '>
          {res.release_date || res.first_air_date}
          <ThumbUpIcon className='h-5 ml-3 mr-2' />
          {res.vote_count}
        </p>
      </div>
    </section>
  );
};

export default Card;
