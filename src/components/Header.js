import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import Logo from '../assets/logo.png';

function  Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo"/>
      <div className="perfil">
        <strong>Meu perfil</strong>
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
    </div>
  );
} 

export default Header;
  