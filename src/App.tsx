import React from 'react';
import Header from './components/Header';
import HeadlineSection from './components/HeadlineSection';
import ProjectSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <HeadlineSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <hr className='text-primary border-2 opacity-50' />
      <Footer />
    </div>
  );
};

export default App;
