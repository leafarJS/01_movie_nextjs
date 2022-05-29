import React from 'react';
import Card from './Card';

const Results = ({ results }) => {
  return (
    <section className='bg-gray-700 text-gray-200 select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 '>
      {results.map((res) => (
        <Card key={res.id} res={res} />
      ))}
    </section>
  );
};

export default Results;
