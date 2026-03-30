import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo, services } from '../data';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-bold text-white tracking-tight">
                {companyInfo.name}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {companyInfo.description} We deliver integrated Mechanical, Electrical, Fire fighting, and Plumbing solutions for commercial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="space-y-4">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link to="/services" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-slate-400 text-sm">{companyInfo.phone1}</span>
                  <span className="text-slate-400 text-sm">{companyInfo.phone2}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-slate-400 hover:text-brand-400 transition-colors text-sm">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Service Area */}
        <div className="pt-6 pb-2 text-center">
          <p className="text-slate-500 text-sm">
            <span className="font-medium text-slate-400">Bright Star MEP</span> proudly serves{' '}
            <span className="text-brand-400">New Delhi</span>,{' '}
            <span className="text-brand-400">Noida</span>,{' '}
            <span className="text-brand-400">Gurugram</span>, and the wider{' '}
            <span className="text-brand-400">Delhi NCR</span> region.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </div>
          <div className="text-slate-500 text-sm text-center md:text-right">
            Designed for Excellence in Engineering
          </div>
        </div>
      </div>
    </footer>
  );
}
