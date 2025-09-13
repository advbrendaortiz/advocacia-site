import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const OfficePage = () => {
  // Mock office images (will be replaced with real images)
  const officeImages = [
    "https://customer-assets.emergentagent.com/job_be962a0e-f05e-4981-8a10-d43b0199bc8c/artifacts/qp96u76u_WhatsApp%20Image%202025-09-06%20at%2020.22.23.jpeg",
    "https://customer-assets.emergentagent.com/job_be962a0e-f05e-4981-8a10-d43b0199bc8c/artifacts/pv950jyp_WhatsApp%20Image%202025-09-06%20at%2020.22.24.jpeg",
    "https://customer-assets.emergentagent.com/job_be962a0e-f05e-4981-8a10-d43b0199bc8c/artifacts/ru9g8qn6_WhatsApp%20Image%202025-09-06%20at%2020.22.22.jpeg"
  ];

  return (
    <div>
      <Navigation />
      
      <main className="section-padding">
        <div className="container">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="heading-1 mb-4">Nosso Escritório</h1>
            <p className="body-large" style={{maxWidth: '600px', margin: '0 auto'}}>
              Localizado na prestigiosa Av. Brigadeiro Faria Lima, nosso escritório oferece um ambiente profissional e estratégico para atender nossos clientes.
            </p>
          </div>

          {/* Office Gallery */}
          <div style={{marginBottom: '80px'}}>
            <h2 className="heading-2 mb-6 text-center">Galeria do Escritório</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '32px',
              marginBottom: '60px'
            }}>
              {officeImages.map((image, index) => (
                <div key={index} className="hover-lift" style={{
                  borderRadius: '0',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-subtle)'
                }}>
                  <img
                    src={image}
                    alt={`Escritório Brenda Ortiz ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '280px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Location Info */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start'
          }}>
            {/* Address Info */}
            <div>
              <h2 className="heading-2 mb-6">Localização</h2>
              <div className="body-large mb-4">
                <strong>Endereço:</strong><br/>
                Av. Brigadeiro Faria Lima, 1572<br/>
                Jardim Paulistano<br/>
                São Paulo – SP, 01451-917
              </div>
              
              <div className="body-regular mb-6">
                <h3 className="heading-3 mb-4">Atendimento</h3>
                <p><strong>On-line:</strong> Nacional e Internacional</p>
                <p><strong>Presencial:</strong> São Paulo, com hora marcada</p>
              </div>

              <div className="body-regular mb-6">
                <h3 className="heading-3 mb-4">Contato</h3>
                <p><strong>WhatsApp:</strong> (11) 98651-2323</p>
                <p><strong>E-mail:</strong> advocaciabrendaortiz@gmail.com</p>
              </div>

              <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                <a
                  href="https://wa.me/5511986512323?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  WhatsApp
                </a>
                <a
                  href="https://calendly.com/advocaciabrendaortiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="heading-2 mb-6">Mapa</h2>
              <div style={{
                border: '2px solid var(--border-light)',
                borderRadius: '0',
                overflow: 'hidden',
                height: '400px'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7483567467396!2d-46.69409!3d-23.5815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5778c6c90f0d%3A0x1e6a559c5c7a7c1a!2sAv.%20Brig.%20Faria%20Lima%2C%201572%20-%20Jardim%20Paulistano%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001451-917!5e0!3m2!1spt!2sbr!4v1694000000000!5m2!1spt!2sbr"
                  width="100%"
                  height="100%"
                  style={{border: '0'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Brenda Ortiz Advocacia"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OfficePage;