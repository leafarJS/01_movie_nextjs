import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
const Card = ({ res }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <section className=''>
      <Image
        layout='responsive'
        src={BASE_URL + res.backdrop_path}
        width={200}
        height={100}
      />
      <div className=''>
        <p className='truncate'>{res.overview}</p>
        <h2>{res.name || res.original_name || res.original_title}</h2>
        <p>
          {res.release_date || res.first_air_date}
          <ThumbUpIcon className='h-5' />
          {res.vote_count}
        </p>
      </div>
    </section>
  );
};

export default Card;
