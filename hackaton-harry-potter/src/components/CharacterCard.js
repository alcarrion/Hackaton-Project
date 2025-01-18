import React from 'react';

function CharacterCard({ name, house, image }) {
  return (
    <div className="bg-gray-700 text-white p-4 rounded shadow-md">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-sm">Casa: {house}</p>
    </div>
  );
}

export default CharacterCard;
