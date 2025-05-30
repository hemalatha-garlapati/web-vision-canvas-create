import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">GeneScope</h3>
            <p className="text-gray-300 mb-4">
              A comprehensive platform for analyzing biomedical data from NCBI's GEO repository. 
              Built for researchers, by researchers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
              <li><a href="#" className="hover:text-white">Tutorials</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p><strong>Mentor:</strong> Rahman</p>
              <p><strong>Phone:</strong> 87902 49247</p>
              <p><strong>Theme:</strong> HealthTech & Bioinformatics</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 GeneScope. Built for open genomics research.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
