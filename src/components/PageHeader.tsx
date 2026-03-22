import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
