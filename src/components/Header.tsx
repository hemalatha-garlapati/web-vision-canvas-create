
import React from 'react';
import { Search, Database, BarChart3, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">GEOSPACE</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#search" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              <Search className="inline-block w-4 h-4 mr-1" />
              Search
            </a>
            <a href="#datasets" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              <Database className="inline-block w-4 h-4 mr-1" />
              Datasets
            </a>
            <a href="#analysis" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              <BarChart3 className="inline-block w-4 h-4 mr-1" />
              Analysis
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
