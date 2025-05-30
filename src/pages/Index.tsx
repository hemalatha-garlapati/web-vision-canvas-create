
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GeneSearchSection from '@/components/GeneSearchSection';
import DatasetBrowser from '@/components/DatasetBrowser';
import AnalysisDashboard from '@/components/AnalysisDashboard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <GeneSearchSection />
        <DatasetBrowser />
        <AnalysisDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
