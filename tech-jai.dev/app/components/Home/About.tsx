import React, { useState } from 'react';
import { Calendar, MapPin, Mail, Download } from 'lucide-react';

export interface AboutPoint {
  point: string;
}

export interface AboutOverview {
  aboutTitle: string;
  content: string;
  points: AboutPoint[];
  resumeLink: string;
}

export interface AboutSkill {
  skillName: string;
  proficiency: number;
}

export interface AboutExperience {
  companyName: string;
  position: string;
  duration: string;
  description: string;
}

export interface About {
  _id: string;
  Overview: AboutOverview;
  Skills: AboutSkill[];
  Experience: AboutExperience[];
}

interface PersonalInfo {
  name: string;
  avatar: string;
}

interface AboutSectionProps {
  data: About;
  personal: PersonalInfo;
}

export function AboutSection({ data, personal }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'experience'>('overview');
console.log("Rendering AboutSection with data:", data, "and personal info:", personal);
  return (
    <section id="about" className="py-24 about-theme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-4">
            {data.Overview.aboutTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.Overview.content}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-muted p-1 rounded-lg">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-theme-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-theme-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          {activeTab === 'overview' && (
            <div className="animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {data.Overview.content}
                  </p>
                  <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
                    {data.Overview.points.map((point, idx) => (
                      <li key={idx}>{point.point}</li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">5+ Years of Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm">Based in San Francisco, CA</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-sm">Available for new projects</span>
                    </div>
                  </div>
                  <a
                    href={data.Overview.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                    <div className="h-full bg-muted rounded-xl overflow-hidden flex items-center justify-center">
                      {personal.avatar ? (
                        <img
                          src={personal.avatar}
                          alt={personal.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-muted-foreground">Profile Image</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills */}
          {activeTab === 'skills' && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {data.Skills.map((skill, index) => (
                  <div key={skill.skillName} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.skillName}</span>
                      <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.proficiency}%`,
                          animationDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {activeTab === 'experience' && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold mb-8 text-center">Work Experience</h3>
              <div className="space-y-8">
                {data.Experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l border-border">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <h4 className="text-lg font-semibold">{exp.position}</h4>
                        <span className="text-sm text-muted-foreground">{exp.duration}</span>
                      </div>
                      <p className="text-primary font-medium">{exp.companyName}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
