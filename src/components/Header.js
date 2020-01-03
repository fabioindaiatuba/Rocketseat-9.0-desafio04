
import React from 'react';

import Logo from '../assets/logo.png';

function  Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo"/>
      <div className="perfil">
        <strong>Meu perfil</strong>
      </div>
    </div>
  );
} 

export default Header;
  