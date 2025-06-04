
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Clock, Users, DollarSign, FileVideo, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Lock,
      title: "Smart Access Control",
      description: "Create gated content with blockchain-verified access rights and automatic expiration."
    },
    {
      icon: Clock,
      title: "Time-Limited Access",
      description: "Set precise access durations from minutes to months with automatic renewal options."
    },
    {
      icon: Users,
      title: "Creator Dashboard",
      description: "Manage your assets, track revenue, and analyze user engagement from one interface."
    },
    {
      icon: DollarSign,
      title: "Flexible Pricing",
      description: "One-time payments, subscriptions, or per-use pricing models for maximum flexibility."
    },
    {
      icon: FileVideo,
      title: "Multi-Asset Support",
      description: "Gate videos, documents, livestreams, or even physical devices and smart locks."
    },
    {
      icon: Smartphone,
      title: "Device Integration",
      description: "Connect to IoT devices, smart locks, and external systems via webhooks and APIs."
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Digital Asset Control
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to monetize and control access to your digital and physical assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
