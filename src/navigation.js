import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <header className="navigation-header">
      <div className="container">
        <div className="navigation-content">
          <Link to="/" className="navigation-logo">
            Brenda Ortiz Advocacia
          </Link>
          
          <nav>
            <ul className="navigation-menu">
              <li>
                <Link 
                  to="/" 
                  className={`navigation-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Início
                </Link>
              </li>
              <li>
                <a href="#about" className="navigation-link">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="navigation-link">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="navigation-link">
                  Contato
                </a>
              </li>
              <li>
                <Link 
                  to="/escritorio" 
                  className={`navigation-link ${location.pathname === '/escritorio' ? 'active' : ''}`}
                >
                  Escritório
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;