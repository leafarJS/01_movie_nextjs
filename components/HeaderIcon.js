import React from 'react';

const HeaderIcon = ({ Icon, title }) => {
  return (
    <section>
      <Icon className='h-8' />
      <p>{title}</p>
    </section>
  );
};

export default HeaderIcon;
