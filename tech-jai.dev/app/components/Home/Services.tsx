import { useState } from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Lightbulb,
  Check,
  ArrowRight,
  X,
  Clock,
  DollarSign,
  Star,
  ExternalLink,
} from "lucide-react";
import type { Service } from '~/types/index';

interface ServicesSectionProps {
  services: Service[];
}

// Icon mapping based on service titles or categories
const getServiceIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('web') || lowerTitle.includes('development')) return Code;
  if (lowerTitle.includes('mobile') || lowerTitle.includes('app')) return Smartphone;
  if (lowerTitle.includes('cloud') || lowerTitle.includes('server')) return Cloud;
  if (lowerTitle.includes('consulting') || lowerTitle.includes('strategy')) return Lightbulb;
  return Code; // default
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 section-theme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I provide comprehensive digital solutions to help businesses grow
            and succeed in the modern digital landscape.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = getServiceIcon(service.title);

            return (
              <div
                key={service._id}
                className="group relative p-8 rounded-2xl service-card-theme animate-fadeIn border border-border hover:shadow-lg transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredService(service._id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service Image */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Icon Overlay */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold service-title group-hover:text-theme-primary transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-primary font-bold text-lg">
                      {service.Price}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {service.Description}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{service.timeline}</span>
                  </div>

                  {/* Key Features (first 3) */}
                  <div className="space-y-2">
                    {service.Features.slice(0, 3).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {service.Features.length > 3 && (
                      <p className="text-sm text-primary font-medium">
                        +{service.Features.length - 3} more features
                      </p>
                    )}
                  </div>

                  {/* Technologies Preview */}
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                        +{service.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <div
                    onClick={() => handleLearnMore(service)}
                    className={`flex items-center space-x-2 text-primary font-medium cursor-pointer transition-all duration-300 ${
                      hoveredService === service._id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with modern,
              scalable solutions.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-background border border-border rounded-xl shadow-2xl p-6 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {selectedService.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Service Code: {selectedService.slug}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Service Image */}
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      Service Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedService.Description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      What's Included
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedService.Features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg"
                        >
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedService.technologies?.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedService.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column - Service Details */}
                <div className="space-y-6">
                  {/* Pricing */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">
                        Starting Price
                      </h4>
                    </div>
                    <p className="text-3xl font-bold text-primary mb-2">
                      {selectedService.Price}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Final price may vary based on project scope and requirements
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="bg-muted/30 rounded-lg p-4 border border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">
                        Timeline
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      {selectedService.timeline}
                    </p>
                  </div>

                  {/* Process Steps */}
                  <div className="bg-muted/30 rounded-lg p-4 border border-border">
                    <div className="flex items-center space-x-2 mb-3">
                      <Star className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">
                        Process
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <span className="text-muted-foreground">Requirements Analysis</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <span className="text-muted-foreground">Design & Planning</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <span className="text-muted-foreground">Development</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">4</div>
                        <span className="text-muted-foreground">Testing & Delivery</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-3">
                      Ready to Get Started?
                    </h4>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Let's discuss your project requirements and create
                      something amazing together.
                    </p>
                    <button
                      onClick={() => {
                        closeModal();
                        const element = document.querySelector("#contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center space-x-2"
                    >
                      <span>Get Quote for {selectedService.title}</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}