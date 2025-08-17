import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import type { Hero } from '~/types';

export const HeroSection: React.FC<{ data: Hero }> = ({ data }) => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {data.HeroBgImage && (
          <img
            src={data.HeroBgImage}
            alt="Hero background"
            className="object-cover w-full h-full"
          />
        )}
        <div className="absolute inset-0 bg-gradient-theme-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-theme-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-theme-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-theme-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-fadeIn">
              <span className="block text-foreground">{data.HeroTitle}</span>
            </h1>
            <p
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              {data.HeroSubtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn"
            style={{ animationDelay: '0.4s' }}
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center px-8 py-4 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-foreground bg-transparent border-2 border-border rounded-lg hover:bg-muted transition-all duration-300 hover:scale-105"
            >
              Learn More About Me
            </button>
          </div>

          {/* Statistics (KPIs) */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
          >
            {data.KPI.map(({ kpiPoint, kpiValue }, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">{kpiValue}</div>
                <div className="text-sm text-muted-foreground">{kpiPoint}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};
