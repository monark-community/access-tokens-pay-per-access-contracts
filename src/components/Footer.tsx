
import React from 'react';
import { Github, Twitter, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GP</span>
              </div>
              <span className="text-white font-bold text-xl">GatePay</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The premier decentralized access control platform for digital and physical assets. 
              Empowering creators and securing access through blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Creator Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 GatePay. All rights reserved. Built on the blockchain for the future of access control.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
