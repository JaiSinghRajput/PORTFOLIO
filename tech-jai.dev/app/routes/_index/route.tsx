import { AboutSection } from "~/components/Home/About";
import { BlogSection } from "~/components/Home/Blogs";
import { ContactSection } from "~/components/Home/Contact";
import { HeroSection } from "~/components/Home/Hero";
import { ProjectsSection } from "~/components/Home/Projects";
import ServicesSection from "~/components/Home/Services";
import { FeaturedVideosSection } from "~/components/Home/YtVideos";
import { aboutData, projects, services, heroData, blogs, sampleVideos, personalInfo } from '~/data';
export default function AboutPage() {

  return (
    <main className="text-center">
      <HeroSection
        data={heroData}
      />
      <AboutSection data={aboutData} personal={personalInfo} />
      <ServicesSection services={services} />
      <ProjectsSection projects={projects} featuredOnly />
      <BlogSection posts={blogs} />
      <FeaturedVideosSection videos={sampleVideos} />;
      <ContactSection />
    </main>
  );
}
