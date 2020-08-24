import React from 'react';
import './homepage.styles.scss';
import axios from 'axios'
import WellcomeCard from '../../components/welcome-card/welcome-card.component';

class HomePage extends React.Component {

  state = {
    welcome: null
  }
  
  componentDidMount() {
    //Consumo de servicio bienvenida
    const url = 'https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/visitors';
    axios.post(url, {})
    .then((response) => {
      // handle succes, seteo de datos para la página de inicio
      this.setState({ welcome: response });
    })
    .catch((error) =>  {
      // handle error 
      console.error(error);
    });
  }

  render () {
    const { welcome } = this.state;
    return ( 
      <WellcomeCard welcome={welcome} />
    );
  }
}



export default HomePage;
