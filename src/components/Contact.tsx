import React from 'react';
import { motion } from 'motion/react';
import { companyInfo } from '../data';
import { Mail, Phone, MapPin, Building } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-lg">
              Ready to start your next MEP project? Contact us today to discuss how we can bring efficient, reliable, and cost-effective engineering solutions to your development.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-400">
                    <Building size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white">Proprietor</h3>
                  <p className="mt-2 text-slate-300">{companyInfo.proprietor}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-400">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-2 text-slate-300">{companyInfo.phone1}</p>
                  <p className="mt-1 text-slate-300">{companyInfo.phone2}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-400">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white">Email Address</h3>
                  <p className="mt-2 text-slate-300">
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-brand-400 transition-colors">
                      {companyInfo.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-400">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white">Office Address</h3>
                  <p className="mt-2 text-slate-300 max-w-xs leading-relaxed">
                    {companyInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
            <form 
              className="space-y-6" 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field" 
              action="/thank-you.html"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 border p-3 text-slate-900"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 border p-3 text-slate-900"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 border p-3 text-slate-900"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
