
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Gene Expression Explorer</h3>
            <p className="text-gray-300 mb-4">
              A comprehensive platform for analyzing biomedical data from NCBI's GEO repository. 
              Leveraging Python libraries like Pandas and SciPy for finding differentially expressed genes 
              and building classification models. Built for researchers, by researchers.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1"><strong>Theme:</strong> HealthTech & Bioinformatics</p>
              <p><strong>Focus:</strong> Gene Expression Analysis, Classification Models, Biomarker Discovery</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Analysis Tools</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Differential Expression</a></li>
              <li><a href="#" className="hover:text-white">Classification Models</a></li>
              <li><a href="#" className="hover:text-white">Python Integration</a></li>
              <li><a href="#" className="hover:text-white">GEO Data Access</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Gene Expression Explorer. Empowering biomedical research through data analysis.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
