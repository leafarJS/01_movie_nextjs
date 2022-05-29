import React from 'react';
import Card from './Card';

const Results = ({ results }) => {
  return (
    <section>
      {results.map((res) => (
        <Card key={res.id} res={res} />
      ))}
    </section>
  );
};

export default Results;
