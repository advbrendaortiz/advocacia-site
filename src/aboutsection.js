import React from 'react';
import { Target, Globe, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" style={{
      background: 'var(--bg-primary)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Content */}
          <div className="fade-in">
            <div style={{marginBottom: '24px'}}>
              <span className="body-small text-gold" style={{
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: '600'
              }}>
                Quem Somos
              </span>
            </div>
            
            <h2 className="heading-1 mb-6">
              Escritório estratégico com atuação nacional e internacional
            </h2>
            
            <div className="body-large mb-8" style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.8'
            }}>
              <p style={{marginBottom: '24px'}}>
                Fundado por <strong style={{color: 'var(--text-primary)'}}>Brenda Ortiz Ferreira</strong>, 
                nosso escritório jurídico-empresarial é especializado em empresas e demandas complexas.
              </p>
              <p style={{marginBottom: '24px'}}>
                Nosso foco está em <strong style={{color: 'var(--text-primary)'}}>empresários, startups, executivos e empresas</strong> que 
                precisam de proteção, estrutura e crescimento jurídico com visão estratégica.
              </p>
              <p>
                Combinamos expertise jurídica com visão empresarial para oferecer soluções 
                que realmente protegem e impulsionam negócios.
              </p>
            </div>

            {/* Key Features */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              marginTop: '48px'
            }}>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  border: '2px solid var(--brand-gold)'
                }}>
                  <Target size={24} style={{color: 'var(--brand-gold)'}} />
                </div>
                <h4 className="heading-3" style={{fontSize: '1rem', marginBottom: '8px'}}>
                  Foco Estratégico
                </h4>
                <p className="body-small">
                  Soluções jurídicas com visão empresarial
                </p>
              </div>

              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  border: '2px solid var(--brand-gold)'
                }}>
                  <Globe size={24} style={{color: 'var(--brand-gold)'}} />
                </div>
                <h4 className="heading-3" style={{fontSize: '1rem', marginBottom: '8px'}}>
                  Atuação Global
                </h4>
                <p className="body-small">
                  Nacional e internacional
                </p>
              </div>

              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  border: '2px solid var(--brand-gold)'
                }}>
                  <Users size={24} style={{color: 'var(--brand-gold)'}} />
                </div>
                <h4 className="heading-3" style={{fontSize: '1rem', marginBottom: '8px'}}>
                  Atendimento Seletivo
                </h4>
                <p className="body-small">
                  Personalizado e exclusivo
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="fade-in" style={{animationDelay: '0.2s'}}>
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '60px 40px',
              borderRadius: '0',
              textAlign: 'center',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{marginBottom: '32px'}}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--brand-navy)',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    color: 'var(--brand-gold)',
                    fontSize: '1.5rem',
                    fontFamily: 'Cinzel, serif',
                    fontWeight: '600'
                  }}>
                    BO
                  </span>
                </div>
                <h3 className="heading-2 mb-4">
                  OAB/SP 475.517
                </h3>
              </div>

              <div style={{
                background: 'var(--brand-white)',
                padding: '32px 24px',
                borderRadius: '0',
                border: '2px solid var(--brand-gold)'
              }}>
                <h4 className="heading-3 mb-4" style={{color: 'var(--brand-navy)'}}>
                  Nossa Missão
                </h4>
                <p className="body-regular" style={{
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic'
                }}>
                  "Transformar complexidade jurídica em estratégia empresarial, 
                  protegendo e impulsionando o crescimento dos nossos clientes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;