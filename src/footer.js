import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--brand-navy)',
      color: 'var(--brand-white)',
      paddingTop: '80px',
      paddingBottom: '40px'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '60px'
        }}>
          {/* Brand Column */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'var(--brand-gold)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Scale size={20} style={{color: 'var(--brand-navy)'}} />
              </div>
              <span style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--brand-white)'
              }}>
                Brenda Ortiz
              </span>
            </div>
            
            <p className="body-regular" style={{
              color: 'var(--brand-gold)',
              marginBottom: '16px',
              lineHeight: '1.6'
            }}>
              Estratégia jurídica para proteger, crescer e blindar negócios.
            </p>
            
            <div className="body-small" style={{color: 'rgba(255,255,255,0.7)'}}>
              <p>OAB/SP 475.517</p>
              <p>Atuação nacional e internacional</p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="heading-3" style={{
              color: 'var(--brand-white)',
              marginBottom: '24px',
              fontSize: '1.1rem'
            }}>
              Áreas de Atuação
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{marginBottom: '12px'}}>
                <a
                  href="#services"
                  className="body-regular"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  Direito Penal Empresarial
                </a>
              </li>
              <li style={{marginBottom: '12px'}}>
                <a
                  href="#services"
                  className="body-regular"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  Direito Digital & LGPD
                </a>
              </li>
              <li style={{marginBottom: '12px'}}>
                <a
                  href="#services"
                  className="body-regular"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  Estratégia Jurídica
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="body-regular"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  Blindagem Patrimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="heading-3" style={{
              color: 'var(--brand-white)',
              marginBottom: '24px',
              fontSize: '1.1rem'
            }}>
              Contato
            </h4>
            <div style={{marginBottom: '48px'}}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <Phone size={16} style={{color: 'var(--brand-gold)'}} />
                <a
                  href="https://wa.me/5511986512323"
                  className="body-regular"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none'
                  }}
                >
                  (11) 98651-2323
                </a>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <Mail size={16} style={{color: 'var(--brand-gold)'}} />
                <a
                  href="mailto:advocaciabrendaortiz@gmail.com"
                  className="body-regular"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none'
                  }}
                >
                  advocaciabrendaortiz@gmail.com
                </a>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <MapPin size={16} style={{color: 'var(--brand-gold)', marginTop: '2px'}} />
                <div className="body-regular" style={{color: 'rgba(255,255,255,0.8)'}}>
                  Av. Brig. Faria Lima, 1572<br/>
                  São Paulo – SP
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
              <a
                href="https://calendly.com/advocaciabrendaortiz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{
                  padding: '12px 20px',
                  minWidth: 'auto',
                  height: 'auto',
                  fontSize: '0.85rem'
                }}
              >
                Agendar
              </a>
              <a
                href="https://wa.me/5511986512323?text=Olá! Gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: 'transparent',
                  color: 'var(--brand-white)',
                  borderColor: 'var(--brand-white)',
                  padding: '12px 20px',
                  minWidth: 'auto',
                  height: 'auto',
                  fontSize: '0.85rem'
                }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="heading-3" style={{
              color: 'var(--brand-white)',
              marginBottom: '24px',
              fontSize: '1.1rem'
            }}>
              Links Úteis
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{marginBottom: '12px'}}>
                <a
                  href="/"
                  className="body-regular"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  Início
                </a>
              </li>
              <li style={{marginBottom: '12px'}}>
                <a
                  href="#about"
                  className="body-regular"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  Sobre nós
                </a>
              </li>
              <li style={{marginBottom: '12px'}}>
                <a
                  href="/escritorio"
                  className="body-regular"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  Nosso Escritório
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="body-regular"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div className="body-small" style={{color: 'rgba(255,255,255,0.6)'}}>
            © 2025 Brenda Ortiz Advocacia. Todos os direitos reservados.
          </div>
          
          <div className="body-small" style={{color: 'rgba(255,255,255,0.6)'}}>
            Desenvolvido com estratégia e precisão jurídica.
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;