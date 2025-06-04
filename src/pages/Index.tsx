
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AssetMarketplace from '../components/AssetMarketplace';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Features />
      <AssetMarketplace />
      <Footer />
    </div>
  );
};

export default Index;
