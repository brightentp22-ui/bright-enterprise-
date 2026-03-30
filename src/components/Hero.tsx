import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const backgroundImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2070"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden group">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        {/* Preload images to prevent blank flashes */}
        <div className="hidden">
          {backgroundImages.map((src, index) => (
            <img key={index} src={src} alt="preload" />
          ))}
        </div>
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${backgroundImages[currentImageIndex]}")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply z-10" />
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-all border border-white/20 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-all border border-white/20 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-200 text-sm font-semibold tracking-wider mb-6 border border-brand-500/30 backdrop-blur-sm">
            8+ YEARS OF EXCELLENCE
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Welcome to <br className="hidden md:block" />
            <span className="text-[#2b7a96]">Bright Star</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 px-4 sm:px-0">
            {companyInfo.description} Delivering integrated Mechanical, Electrical, Fire fighting, and Plumbing solutions for commercial projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-colors duration-300 w-full sm:w-auto"
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-colors duration-300 w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
