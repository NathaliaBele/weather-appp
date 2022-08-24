import React from 'react';
import sty from './SearchBar.module.css';

export default function SearchBar({onSearch}) {

  // acá va tu código
  return (
    <div className={sty.container}>
    <input type="text" placeholder='Ciudad...'/>
    <button onClick={() => onSearch('Agregar una ciudad...')}> Agregar </button> {/* no entiendo este pedazo */}
    </div>
    )
};