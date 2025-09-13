import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import DifferentialsSection from '../components/DifferentialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;