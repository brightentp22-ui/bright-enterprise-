import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Our Services" 
        description="Comprehensive MEP solutions tailored to your project's unique requirements."
        image="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2070"
      />
      <Services />
    </main>
  );
}
