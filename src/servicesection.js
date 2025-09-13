import React from 'react';
import { Shield, Smartphone, FileText } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield size={32} />,
      title: "Direito Penal Empresarial",
      description: "Defesa especializada em crimes corporativos, tributários e digitais. Protegemos empresários e executivos com estratégia jurídica sólida.",
      features: [
        "Crimes contra a ordem tributária",
        "Lavagem de dinheiro",
        "Crimes digitais e cibernéticos",
        "Defesa em inquéritos e ações penais"
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Direito Digital & LGPD",
      description: "Compliance digital, proteção de dados e segurança da informação para empresas que operam no mundo digital.",
      features: [
        "Adequação à LGPD",
        "Políticas de privacidade",
        "Contratos digitais",
        "Proteção de propriedade intelectual"
      ]
    },
    {
      icon: <FileText size={32} />,
      title: "Estratégia Jurídica",
      description: "Contratos estratégicos, blindagem patrimonial e reestruturação de negócios para crescimento seguro e sustentável.",
      features: [
        "Blindagem patrimonial",
        "Reestruturação societária",
        "Contratos empresariais",
        "Planejamento sucessório"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)'
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
              Áreas de Atuação
            </span>
          </div>
          <h2 className="heading-1 mb-6">
            Expertise jurídica para demandas complexas
          </h2>
          <p className="body-large" style={{
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Oferecemos soluções jurídicas especializadas nas áreas mais críticas 
            para empresas modernas, sempre com foco estratégico e visão de longo prazo.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginTop: '80px'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="hover-lift fade-in"
              style={{
                background: 'var(--brand-white)',
                padding: '48px 32px',
                borderRadius: '0',
                border: '1px solid var(--border-light)',
                textAlign: 'center',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--brand-navy)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                color: 'var(--brand-gold)'
              }}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="heading-2 mb-4" style={{color: 'var(--brand-navy)'}}>
                {service.title}
              </h3>
              
              <p className="body-regular mb-6" style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7'
              }}>
                {service.description}
              </p>

              {/* Features List */}
              <div style={{
                background: 'var(--bg-subtle)',
                padding: '24px',
                borderRadius: '0',
                marginBottom: '32px'
              }}>
                <ul style={{
                  listStyle: 'none',
                  textAlign: 'left'
                }}>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="body-small"
                      style={{
                        padding: '8px 0',
                        borderBottom: featureIndex < service.features.length - 1 ? '1px solid var(--border-light)' : 'none',
                        position: 'relative',
                        paddingLeft: '20px'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '12px',
                        width: '6px',
                        height: '6px',
                        background: 'var(--brand-gold)',
                        borderRadius: '50%'
                      }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="https://calendly.com/advocaciabrendaortiz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  color: 'var(--brand-navy)',
                  fontWeight: '600'
                }}
              >
                Consultar sobre esta área
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '60px 40px',
          background: 'var(--brand-navy)',
          borderRadius: '0',
          color: 'var(--brand-white)'
        }}>
          <h3 className="heading-2 mb-4" style={{color: 'var(--brand-white)'}}>
            Precisa de consultoria jurídica especializada?
          </h3>
          <p className="body-large mb-6" style={{
            color: 'var(--brand-gold)',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Agende uma consulta estratégica e descubra como podemos proteger e impulsionar seu negócio.
          </p>
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a
              href="https://calendly.com/advocaciabrendaortiz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Agendar Consulta
            </a>
            <a
              href="https://wa.me/5511986512323?text=Olá! Gostaria de saber mais sobre os serviços jurídicos."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                background: 'transparent',
                color: 'var(--brand-white)',
                borderColor: 'var(--brand-white)'
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;