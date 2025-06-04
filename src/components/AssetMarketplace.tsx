import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, DollarSign, Video, FileText, Smartphone } from 'lucide-react';

const AssetMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Assets' },
    { id: 'video', name: 'Video Content' },
    { id: 'documents', name: 'Documents' },
    { id: 'live', name: 'Live Events' },
    { id: 'iot', name: 'IoT Access' }
  ];

  const assets = [
    {
      id: 1,
      title: "Premium Coding Masterclass",
      description: "Advanced React and Web3 development course with 12 hours of content",
      price: "0.1 ETH",
      duration: "30 days",
      category: "video",
      icon: Video,
      users: 234,
      status: "active"
    },
    {
      id: 2,
      title: "Exclusive Research Report",
      description: "In-depth DeFi market analysis and investment strategies for Q4 2024",
      price: "0.05 ETH",
      duration: "7 days",
      category: "documents",
      icon: FileText,
      users: 89,
      status: "active"
    },
    {
      id: 3,
      title: "VIP Live Trading Session",
      description: "Real-time trading session with professional crypto trader",
      price: "0.2 ETH",
      duration: "2 hours",
      category: "live",
      icon: Users,
      users: 15,
      status: "live"
    },
    {
      id: 4,
      title: "Smart Office Access",
      description: "Access to premium co-working space in downtown for remote workers",
      price: "0.15 ETH",
      duration: "24 hours",
      category: "iot",
      icon: Smartphone,
      users: 45,
      status: "active"
    }
  ];

  const filteredAssets = selectedCategory === 'all' 
    ? assets 
    : assets.filter(asset => asset.category === selectedCategory);

  return (
    <section id="marketplace" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Asset Marketplace
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover and unlock premium digital assets from creators worldwide
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 bg-transparent'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredAssets.map((asset) => (
            <Card key={asset.id} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <asset.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{asset.title}</CardTitle>
                      <Badge variant="secondary" className={`${
                        asset.status === 'live' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                      }`}>
                        {asset.status === 'live' ? 'LIVE' : 'ACTIVE'}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-300">
                  {asset.description}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{asset.price}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{asset.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{asset.users} users</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Unlock Access
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 bg-transparent px-8 py-3">
            View All Assets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssetMarketplace;
