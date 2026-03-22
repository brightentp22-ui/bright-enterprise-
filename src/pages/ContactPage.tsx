import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with us to discuss your next engineering project."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070"
      />
      <Contact />
    </main>
  );
}
