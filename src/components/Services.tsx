import React from 'react';
import { motion } from 'motion/react';
import { services } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services({ limit }: { limit?: number }) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Our Core Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            We provide efficient, reliable, and cost-effective engineering solutions prioritizing safety, compliance, and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm text-brand-600 rounded-xl flex items-center justify-center shadow-sm">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-1">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
