import React from 'react';

function LogementCard({ cover, title }) {
  return (
    <div className='logement-card'>
      <img src={cover} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default LogementCard;
