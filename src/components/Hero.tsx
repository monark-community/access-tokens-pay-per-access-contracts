
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Settings } from 'lucide-react';
const Hero = () => {
  return <section className="relative py-20 overflow-hidden bg-slate-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Unlock Digital Assets
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              with Token Payments
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            GatePay is the premier decentralized access control platform. Create gated content, 
            set smart pricing, and let users unlock your digital assets through secure blockchain transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg">
              Explore Marketplace
              <ArrowRight className="h-5 ml-2 hover:bg-white/10 hover:text-white" />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 bg-transparent px-8 py-6 text-lg">
              Start Creating
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <Shield className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure Access</h3>
            <p className="text-gray-300">Blockchain-verified access control ensures only paying users can unlock your content.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <Zap className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Instant Payments</h3>
            <p className="text-gray-300">Lightning-fast token transactions with immediate access rights verification.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <Settings className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Flexible Pricing</h3>
            <p className="text-gray-300">Set time-based, usage-based, or one-time access fees for your digital assets.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
