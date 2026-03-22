import React from 'react';
import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Our Projects" 
        description="Explore our portfolio of successfully delivered and ongoing MEP projects."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
      />
      <Projects />
    </main>
  );
}
