import React from 'react';
import Card from './Card';

const Results = ({ results }) => {
  return (
    <section>
      {results.map((res) => (
        <h1>{res.title}</h1>
      ))}
    </section>
  );
};

export default Results;
