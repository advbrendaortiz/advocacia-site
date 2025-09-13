import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - will be replaced with real backend integration
    console.log('Form submitted:', formData);
    alert('Obrigada pelo contato! Em breve retornaremos sua mensagem.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-light)'
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
              Entre em Contato
            </span>
          </div>
          <h2 className="heading-1 mb-6">
            Vamos conversar sobre seu <span className="text-gold">desafio jurídico</span>
          </h2>
          <p className="body-large" style={{
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            Agende uma consulta estratégica ou entre em contato para descobrir 
            como podemos proteger e impulsionar seu negócio.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
          marginTop: '80px'
        }}>
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="heading-2 mb-6">
              Múltiplas formas de contato
            </h3>
            
            {/* Contact Methods */}
            <div style={{marginBottom: '48px'}}>
              {/* WhatsApp */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '32px',
                padding: '24px',
                background: 'var(--brand-white)',
                borderRadius: '0',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--brand-navy)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={20} style={{color: 'var(--brand-gold)'}} />
                </div>
                <div>
                  <h4 className="heading-3" style={{fontSize: '1.1rem', marginBottom: '4px'}}>
                    WhatsApp
                  </h4>
                  <p className="body-regular" style={{color: 'var(--text-secondary)', marginBottom: '8px'}}>
                    (11) 98651-2323
                  </p>
                  <a
                    href="https://wa.me/5511986512323?text=Olá! Gostaria de agendar uma consulta jurídica."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{fontSize: '0.9rem'}}
                  >
                    Conversar agora
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '32px',
                padding: '24px',
                background: 'var(--brand-white)',
                borderRadius: '0',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--brand-navy)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={20} style={{color: 'var(--brand-gold)'}} />
                </div>
                <div>
                  <h4 className="heading-3" style={{fontSize: '1.1rem', marginBottom: '4px'}}>
                    E-mail
                  </h4>
                  <p className="body-regular" style={{color: 'var(--text-secondary)', marginBottom: '8px'}}>
                    advocaciabrendaortiz@gmail.com
                  </p>
                  <a
                    href="mailto:advocaciabrendaortiz@gmail.com"
                    className="btn-secondary"
                    style={{fontSize: '0.9rem'}}
                  >
                    Enviar e-mail
                  </a>
                </div>
              </div>

              {/* Address */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                marginBottom: '32px',
                padding: '24px',
                background: 'var(--brand-white)',
                borderRadius: '0',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--brand-navy)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={20} style={{color: 'var(--brand-gold)'}} />
                </div>
                <div>
                  <h4 className="heading-3" style={{fontSize: '1.1rem', marginBottom: '4px'}}>
                    Escritório
                  </h4>
                  <p className="body-regular" style={{color: 'var(--text-secondary)', marginBottom: '8px'}}>
                    Av. Brigadeiro Faria Lima, 1572<br/>
                    Jardim Paulistano, São Paulo – SP
                  </p>
                  <a
                    href="/escritorio"
                    className="btn-secondary"
                    style={{fontSize: '0.9rem'}}
                  >
                    Ver localização
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{
              background: 'var(--brand-navy)',
              padding: '32px 24px',
              borderRadius: '0',
              textAlign: 'center'
            }}>
              <h4 className="heading-3 mb-4" style={{color: 'var(--brand-white)'}}>
                Agende sua consulta estratégica
              </h4>
              <p className="body-regular mb-6" style={{color: 'var(--brand-gold)'}}>
                Atendimento online e presencial
              </p>
              <a
                href="https://calendly.com/advocaciabrendaortiz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Calendly - Agendar
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in" style={{animationDelay: '0.2s'}}>
            <div style={{
              background: 'var(--brand-white)',
              padding: '48px 40px',
              borderRadius: '0',
              border: '1px solid var(--border-light)'
            }}>
              <h3 className="heading-2 mb-6">
                Solicite uma proposta
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="direito-penal">Direito Penal Empresarial</option>
                    <option value="direito-digital">Direito Digital & LGPD</option>
                    <option value="estrategia-juridica">Estratégia Jurídica</option>
                    <option value="blindagem-patrimonial">Blindagem Patrimonial</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Descreva brevemente sua necessidade jurídica..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                  }}
                >
                  <Send size={18} />
                  Enviar solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;