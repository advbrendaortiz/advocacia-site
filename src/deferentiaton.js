import React from 'react';
import { Brain, Target, Star, Zap } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Brain size={28} />,
      title: "Visão empresarial integrada ao Direito",
      description: "Combinamos conhecimento jurídico profundo com entendimento estratégico de negócios para soluções que realmente funcionam."
    },
    {
      icon: <Target size={28} />,
      title: "Postura estratégica e racional",
      description: "Cada decisão é baseada em análise criteriosa e planejamento de longo prazo, sempre priorizando os melhores resultados."
    },
    {
      icon: <Star size={28} />,
      title: "Atendimento seletivo e personalizado",
      description: "Trabalhamos com um número limitado de clientes para garantir dedicação total e resultados excepcionais."
    },
    {
      icon: <Zap size={28} />,
      title: "Estrutura 100% digital com suporte presencial",
      description: "Tecnologia avançada para eficiência máxima, com atendimento presencial em São Paulo quando necessário."
    }
  ];

  return (
    <section className="section-padding" style={{
      background: 'var(--bg-primary)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div style={{marginBottom: '24px'}}>
            <span className="body-small text-gold" style={{
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: '600'
            }}>
              Nossos Diferenciais
            </span>
          </div>
          <h2 className="heading-1 mb-6">
            Por que escolher <span className="text-gold">Brenda Ortiz Advocacia</span>?
          </h2>
          <p className="body-large" style={{
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Nossa abordagem única combina expertise jurídica, visão estratégica e 
            atendimento personalizado para entregar resultados superiores.
          </p>
        </div>

        {/* Differentials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginTop: '80px',
          marginBottom: '80px'
        }}>
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="fade-in"
              style={{
                textAlign: 'center',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--bg-secondary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                color: 'var(--brand-gold)',
                border: '2px solid var(--brand-gold)'
              }}>
                {differential.icon}
              </div>

              {/* Content */}
              <h3 className="heading-3 mb-4" style={{
                color: 'var(--brand-navy)',
                lineHeight: '1.4'
              }}>
                {differential.title}
              </h3>
              
              <p className="body-regular" style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7'
              }}>
                {differential.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div style={{
          background: 'var(--bg-secondary)',
          padding: '60px 40px',
          borderRadius: '0',
          border: '1px solid var(--border-light)',
          marginTop: '80px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            <div>
              <div className="hero-medium text-gold mb-2">
                100%
              </div>
              <p className="body-regular" style={{color: 'var(--text-secondary)'}}>
                Dedicação aos casos
              </p>
            </div>
            
            <div>
              <div className="hero-medium text-gold mb-2">
                24/7
              </div>
              <p className="body-regular" style={{color: 'var(--text-secondary)'}}>
                Suporte digital
              </p>
            </div>
            
            <div>
              <div className="hero-medium text-gold mb-2">
                SP
              </div>
              <p className="body-regular" style={{color: 'var(--text-secondary)'}}>
                Atendimento presencial
              </p>
            </div>
            
            <div>
              <div className="hero-medium text-gold mb-2">
                Global
              </div>
              <p className="body-regular" style={{color: 'var(--text-secondary)'}}>
                Atuação internacional
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '60px 40px',
          background: 'var(--brand-white)',
          border: '2px solid var(--brand-gold)',
          borderRadius: '0'
        }}>
          <div style={{marginBottom: '32px'}}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'var(--brand-navy)',
              borderRadius: '50%',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Star size={24} style={{color: 'var(--brand-gold)'}} />
            </div>
            <h3 className="heading-2 mb-6" style={{color: 'var(--brand-navy)'}}>
              Compromisso com a Excelência
            </h3>
          </div>
          
          <blockquote className="body-large" style={{
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: '1.8'
          }}>
            "Cada cliente é único, cada caso é uma oportunidade de criar valor. 
            Nossa missão é transformar desafios jurídicos em vantagens competitivas 
            sustentáveis para nossos clientes."
          </blockquote>
          
          <div>
            <p className="body-regular" style={{
              fontWeight: '600',
              color: 'var(--brand-navy)',
              marginBottom: '4px'
            }}>
              Brenda Ortiz Ferreira
            </p>
            <p className="body-small text-gold">
              Fundadora • OAB/SP 475.517
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;