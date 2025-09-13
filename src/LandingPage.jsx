import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-text">BL ADVOGADOS</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')}>HOME</a>
            <a href="#areas" onClick={() => scrollToSection('areas')}>ÁREAS DE ATUAÇÃO</a>
            <a href="#sobre" onClick={() => scrollToSection('sobre')}>SOBRE</a>
            <a href="#credenciais" onClick={() => scrollToSection('credenciais')}>CREDENCIAIS</a>
            <a href="#contato" onClick={() => scrollToSection('contato')}>CONTATO</a>
          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                RENDA ORTIZ ADVOCACIA
                <br />
                <span className="title-light"></span>
              </h1>
              <p className="hero-subtitle">
                Especialização em Direito Digital &<br />
                Criminal, LGPD & Cyber-Security
              </p>
              <div className="hero-description">
                <p>Formação única combinando expertise jurídica com conhecimento tecnológico avançado para oferecer soluções inovadoras em um mundo digital.</p>
              </div>
              <button 
                className="cta-button"
                onClick={() => window.open('https://wa.me/5511948364223', '_blank')}
              >
                CONSULTA ESPECIALIZADA
              </button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">CONHEÇA A ESPECIALISTA</span>
            <h2 className="section-title">Dra. Brenda Ortiz Ferreira</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                Advogada especializada com formação única que combina Direito, Engenharia de Software, 
                e Cyber-Security. Esta intersecção de conhecimentos proporciona uma visão abrangente 
                e inovadora para questões jurídicas no ambiente digital.
              </p>
              
              <div className="credentials-grid">
                <div className="credential-item">
                  <h4>OAB/SP</h4>
                  <p>São Caetano do Sul</p>
                </div>
                <div className="credential-item">
                  <h4>Pós-graduação</h4>
                  <p>Direito Digital</p>
                </div>
                <div className="credential-item">
                  <h4>Formação Técnica</h4>
                  <p>Engenharia de Software</p>
                </div>
                <div className="credential-item">
                  <h4>Especialização</h4>
                  <p>LGPD & Cyber-Security</p>
                </div>
              </div>
            </div>
            
            <div className="about-photo">
              <div className="professional-photo">
                <img 
                  src="/dra-brenda.jpg" 
                  alt="Dra. Brenda Ortiz Ferreira - Advogada especializada em Direito Digital"
                  className="photo-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="practice-areas">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">ESPECIALIDADES</span>
            <h2 className="section-title white">Áreas de Atuação</h2>
            <div className="title-underline white"></div>
          </div>

          <div className="areas-grid">
            <div className="area-card">
              <div className="card-icon">🔒</div>
              <h3>Direito Digital</h3>
              <p>Especialização em questões jurídicas do ambiente digital, contratos eletrônicos, propriedade intelectual online e regulamentação de tecnologias emergentes.</p>
            </div>

            <div className="area-card">
              <div className="card-icon">⚖️</div>
              <h3>Direito Criminal</h3>
              <p>Defesa criminal especializada com foco no ambiente digital, crimes cibernéticos, fraudes eletrônicas e investigações digitais.</p>
            </div>

            <div className="area-card">
              <div className="card-icon">🛡️</div>
              <h3>LGPD & Proteção de Dados</h3>
              <p>Consultoria especializada em adequação à Lei Geral de Proteção de Dados, implementação de políticas de privacidade e compliance.</p>
            </div>

            <div className="area-card">
              <div className="card-icon">🔐</div>
              <h3>Cyber-Security Jurídica</h3>
              <p>Assessoria jurídica em segurança cibernética, proteção digital empresarial e resposta a incidentes de segurança.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credenciais */}
      <section id="credenciais" className="credentials-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">RECONHECIMENTO</span>
            <h2 className="section-title">Formação & Credenciais</h2>
            <div className="title-underline"></div>
          </div>

          <div className="credentials-list">
            <div className="credential-badge">
              <div className="badge-icon">🎓</div>
              <div className="badge-content">
                <h4>Direito</h4>
                <p>Graduação com especialização em Direito Digital</p>
              </div>
            </div>

            <div className="credential-badge">
              <div className="badge-icon">💻</div>
              <div className="badge-content">
                <h4>Engenharia de Software</h4>
                <p>Formação técnica em desenvolvimento e arquitetura de sistemas</p>
              </div>
            </div>

            <div className="credential-badge">
              <div className="badge-icon">🔐</div>
              <div className="badge-content">
                <h4>Cyber-Security</h4>
                <p>Especialização em segurança cibernética e proteção digital</p>
              </div>
            </div>

            <div className="credential-badge">
              <div className="badge-icon">📊</div>
              <div className="badge-content">
                <h4>Ciência de Dados</h4>
                <p>Conhecimento em análise e interpretação de dados digitais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag white">ENTRE EM CONTATO</span>
            <h2 className="section-title">Vamos conversar sobre seu <span style={{color: '#fbbf24'}}>desafio jurídico</span></h2>
            <div className="title-underline white"></div>
            <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px', margin: '20px auto 0'}}>
              Agende uma consulta estratégica ou entre em contato para descobrir como podemos proteger e impulsionar seu negócio.
            </p>
          </div>

          <div className="contact-grid-simple">
            <div className="contact-methods-centered">
              {/* WhatsApp */}
              <div className="contact-card enhanced">
                <div className="contact-icon-wrapper">
                  <div className="contact-icon">📱</div>
                </div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <p>(21) 98828-6701</p>
                  <button 
                    className="contact-action-btn"
                    onClick={() => window.open('https://wa.me/5511948364223?text=Olá! Gostaria de agendar uma consulta jurídica.', '_blank')}
                  >
                    Conversar agora
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="contact-card enhanced">
                <div className="contact-icon-wrapper">
                  <div className="contact-icon">📧</div>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>advocaciabrendaortiz@gmail.com</p>
                  <button 
                    className="contact-action-btn"
                    onClick={() => window.open('mailto:advocaciabrendaortiz@gmail.com', '_blank')}
                  >
                    Enviar email
                  </button>
                </div>
              </div>

              {/* Escritório */}
              <div className="contact-card enhanced">
                <div className="contact-icon-wrapper">
                  <div className="contact-icon">📍</div>
                </div>
                <div className="contact-details">
                  <h4>Escritório</h4>
                  <p>Av. Brigadeiro Faria Lima, 1572<br />Jardim Paulistano, São Paulo - SP</p>
                  <button className="contact-action-btn">
                    Ver localização
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Central */}
            <div className="cta-central">
              <div className="cta-card">
                <h3>Agende sua consulta estratégica</h3>
                <p>Atendimento online e presencial disponível</p>
                <p className="cta-subtitle">Resposta garantida em até 24 horas</p>
                
                <div className="cta-buttons">
                  <button 
                    className="cta-primary-btn"
                    onClick={() => window.open('https://calendly.com/advocaciabrendaortiz', '_blank')}
                  >
                    📅 AGENDAR NO CALENDARIO
                  </button>
                  
                  <button 
                    className="cta-secondary-btn"
                    onClick={() => window.open('https://wa.me/5511948364223?text=Olá! Gostaria de agendar uma consulta jurídica urgente.', '_blank')}
                  >
                    ⚡ CONTATO URGENTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>BRENDA ORTIZ ADVOGADOS</h3>
              <p>Dra. Brenda Ortiz Ferreira</p>
            </div>
            
            <div className="footer-info">
              <p>&copy; 2025 Brnda Ortiz Advogados. Todos os direitos reservados.</p>
              <p>OAB/SP - São Caetano do Sul | Direito Digital & Criminal</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <div className="whatsapp-float">
        <a 
          href="https://wa.me/5511948364223" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Contato via WhatsApp"
        >
          <div className="whatsapp-icon">💬</div>
        </a>
      </div>

      {/* Chat Widget Placeholder */}
      <div className="chat-widget">
        <button className="chat-button">Fale conosco!</button>
      </div>
    </div>
  );
};

export default LandingPage;