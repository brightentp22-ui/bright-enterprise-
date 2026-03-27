import React from 'react';
import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';

export default function About() {
  return (
    <main className="bg-slate-50 min-h-screen pb-24">
      <PageHeader 
        title="About Us" 
        description="Learn more about our mission, experience, and commitment to excellence."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2070"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Who We Are</h3>
            <p className="text-slate-600 leading-relaxed">
              Bright Star is a premier MEP service provider based in New Delhi, India. We specialize in delivering integrated Mechanical, Electrical, Fire fighting, HVAC WORK and Plumbing solutions for commercial engineering projects.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">8 Years Experience</h3>
            <p className="text-slate-600 leading-relaxed">
              With nearly a decade of industry expertise, we have built a reputation for excellence, technical precision, and successful project delivery across various commercial and residential sectors.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h3>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to provide efficient, reliable, and cost-effective engineering solutions. We prioritize safety, compliance, and innovation in every project we undertake.
            </p>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
