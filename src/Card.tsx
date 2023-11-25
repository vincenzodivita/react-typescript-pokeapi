import React from 'react';
interface CardProps {
    id: number;
    name: string;
    url: string;
  }

const Card: React.FC<CardProps> = ({ id, name, url }) => (
<div>
    <p>#{id}</p>
    <p>{name}</p>
    <p>Url: {url}</p>
</div>
);

export default Card