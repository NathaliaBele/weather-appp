import React from 'react';
import styles from './Card.module.css'
export default function Card(props) {
  // acá va tu código
  
  const {max, min, name, img, onClose} = props;
  return (
    <div className={styles.card}>
    <button style={{display: 'none'}} onClick={onClose}>X</button>

    <span className={styles.name}>{name}</span>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Icono del Clima"/>

    <div className={styles.temps}>
   <Temp label = "Min" temp={min}/>
   <Temp label = "Max" temp={max}/>
    </div>
  </div>
    
  )
};


//Hacer en un archivo aparte

function Temp({label, temp}){
  return (
    <div className={styles.temp}>
      <span>{label}</span>
      <span>{temp}°</span>
    </div>
  )
}

