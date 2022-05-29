import React from 'react';

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
