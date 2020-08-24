import React from 'react';
import me from '../../assets/me.jpg'
import './welcome-card.styles.scss';

const WellcomeCard = ({ welcome }) => {
  // Componente dónde se renderizará el render de bienvenida
  return (
    welcome === null ?
      <h1>Cargando...</h1> : 
      <section className='homepage'>
        <div className='foto'>
          <img src={me} alt=""/>
        </div>
        <div className='mensaje'>
          <h2>{ welcome.data.data.welcome }</h2>
        </div>
        <div className='mensaje'>
          <h3> Versión de la aplicación: { welcome.data.data.visitorId } </h3>
        </div>
      </section>
  )
};

export default WellcomeCard;
