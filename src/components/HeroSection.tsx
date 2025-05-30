
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp, Database } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="text-blue-600">GeneScope</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Analyze biomedical data from NCBI's GEO repository. Compare healthy vs disease samples, 
            build classifiers, and discover differentially expressed genes through our intuitive web interface.
          </p>
          
          <div className="mt-10 flex justify-center space-x-6">
            <Button size="lg" className="px-8 py-3">
              <Search className="w-5 h-5 mr-2" />
              Start Analysis
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Database className="w-5 h-5 mr-2" />
              Browse Datasets
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Gene Query</h3>
              <p className="mt-2 text-sm text-gray-500">
                Search and analyze genes of interest across multiple datasets
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Expression Analysis</h3>
              <p className="mt-2 text-sm text-gray-500">
                Compare expression levels between healthy and disease samples
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">GEO Integration</h3>
              <p className="mt-2 text-sm text-gray-500">
                Direct access to NCBI's Gene Expression Omnibus repository
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
