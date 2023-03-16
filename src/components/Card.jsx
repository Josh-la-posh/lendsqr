import React from 'react';

export default function Card({icon, name, amount}) {
  return (
    <div className='card'>
        <div className="icon"><span><img src={icon} alt="" /></span></div>
        <div className="name">{name}</div>
        <div className="amount">{amount}</div>
    </div>
  )
}
