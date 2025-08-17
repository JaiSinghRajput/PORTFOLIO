import type { About, Service, Project, Hero, ContactInfo, Blog, VideoType, Youtube, PersonalInfo } from '~/types/index';

// ----- Hero Data -----
export const heroData: Hero = {
  _id: 'hero-001',
  HeroTitle: 'Full Stack Developer & Tech Enthusiast',
  HeroSubtitle: 'Building modern web applications and digital experiences that make a difference',
  HeroBgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
  KPI: [
    {
      kpiPoint: 'Projects Completed',
      kpiValue: '50+'
    },
    {
      kpiPoint: 'Years Experience',
      kpiValue: '5+'
    },
    {
      kpiPoint: 'Happy Clients',
      kpiValue: '30+'
    },
    {
      kpiPoint: 'Technologies Mastered',
      kpiValue: '15+'
    }
  ]
};

// ----- Services Data -----
export const services: Service[] = [
  {
    _id: 'service-001',
    title: 'Web Development',
    slug: 'web-development',
    Price: '$1,000+',
    Description: 'Modern, fast, and scalable websites for businesses. I create fully responsive and SEO-friendly websites tailored to your business needs.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    timeline: '2–6 weeks depending on project scope',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    Features: [
      'Responsive design across all devices',
      'SEO optimization for better visibility',
      'Performance-focused development',
      'Modern UI/UX design',
      'Content Management System'
    ],
  },
  {
    _id: 'service-002',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    Price: '$2,000+',
    Description: 'Cross-platform apps for Android and iOS. I develop high-performance mobile apps with intuitive UI/UX and offline capabilities.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    timeline: '3–8 weeks',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Redux'],
    Features: [
      'Cross-platform compatibility',
      'Offline mode functionality',
      'Push notifications',
      'In-app purchases integration',
      'Real-time data synchronization'
    ],
  },
  {
    _id: 'service-003',
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    Price: '$1,500+',
    Description: 'Scalable, secure, and cost-efficient cloud systems. I architect and deploy cloud-based systems with security and scalability in mind.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    timeline: '2–5 weeks',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    Features: [
      'Cloud migration strategy',
      'Serverless architecture',
      'Auto-scaling infrastructure',
      'Cost optimization',
      '24/7 monitoring and alerts'
    ],
  },
  {
    _id: 'service-004',
    title: 'IT Consulting',
    slug: 'it-consulting',
    Price: '$100/hr',
    Description: 'Helping businesses choose the right tech strategy. I offer guidance and planning for tech adoption, upgrades, and digital transformation.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    timeline: 'Ongoing or per project basis',
    technologies: ['Various based on project needs'],
    Features: [
      'Technology audits and assessments',
      'Strategic planning and roadmaps',
      'Cost-benefit analysis',
      'Risk assessment and mitigation',
      'Team training and mentorship'
    ],
  },
];

// ----- About Data -----
export const aboutData: About = {
  _id: 'about-001',
  Overview: {
    aboutTitle: 'Passionate Full Stack Developer',
    content: 'I am a passionate developer with expertise in modern web technologies and a love for creating interactive experiences. With over 5 years of experience in the industry, I specialize in building scalable web applications and mobile solutions that deliver exceptional user experiences.',
    points: [
      { point: 'Expert in modern JavaScript frameworks and libraries' },
      { point: 'Strong background in both frontend and backend development' },
      { point: 'Passionate about clean code and best practices' },
      { point: 'Experience with cloud platforms and DevOps' },
      { point: 'Always learning and adapting to new technologies' }
    ],
    resumeLink: '/resume.pdf'
  },
  Skills: [
    { skillName: 'JavaScript', proficiency: 90 },
    { skillName: 'TypeScript', proficiency: 85 },
    { skillName: 'React', proficiency: 95 },
    { skillName: 'Node.js', proficiency: 80 },
    { skillName: 'Python', proficiency: 75 },
    { skillName: 'MongoDB', proficiency: 85 },
    { skillName: 'AWS', proficiency: 70 },
    { skillName: 'Docker', proficiency: 75 }
  ],
  Experience: [
    {
      companyName: 'TechCorp Solutions',
      position: 'Senior Frontend Developer',
      duration: '2021 - Present',
      description: 'Leading the development of responsive and performant web applications using React, TypeScript, and modern CSS frameworks. Mentoring junior developers and implementing best practices for code quality and testing.'
    },
    {
      companyName: 'Webify Digital',
      position: 'Full Stack Developer',
      duration: '2019 - 2021',
      description: 'Developed e-commerce and corporate websites using JavaScript, HTML, CSS, and Node.js. Worked closely with design teams to implement pixel-perfect user interfaces and optimized applications for performance.'
    },
    {
      companyName: 'StartupXYZ',
      position: 'Junior Developer',
      duration: '2018 - 2019',
      description: 'Built and maintained web applications using React and Express.js. Participated in agile development processes and collaborated with cross-functional teams to deliver high-quality software solutions.'
    }
  ]
};

// ----- Contact Info Data -----
export const contactInfoData: ContactInfo = {
  _id: 'contact-001',
  title: 'Get In Touch',
  description: 'I\'m always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology. Feel free to reach out!',
  details: [
    { key: 'Email', value: 'john.doe@example.com' },
    { key: 'Phone', value: '+1 (555) 123-4567' },
    { key: 'Location', value: 'San Francisco, CA' },
    { key: 'Timezone', value: 'PST (UTC-8)' }
  ],
  profileLinks: [
    { platform: 'GitHub', link: 'https://github.com/johndoe' },
    { platform: 'LinkedIn', link: 'https://linkedin.com/in/johndoe' },
    { platform: 'Twitter', link: 'https://twitter.com/johndoe' },
    { platform: 'Instagram', link: 'https://instagram.com/johndoe' }
  ],
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z'
};

// ----- Projects Data -----
export const projects: Project[] = [
  {
    _id: 'project-001',
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    category: 'Web Development',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
    detailedDescription: 'This comprehensive e-commerce solution includes user authentication, product catalog, shopping cart functionality, payment processing with Stripe, order management, and a complete admin panel. Built with modern web technologies for optimal performance and user experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS', 'JWT'],
    repositoryLink: 'https://github.com/johndoe/ecommerce-platform',
    liveLink: 'https://ecommerce-demo.johndoe.com',
    isFeatured: true,
  },
  {
    _id: 'project-002',
    title: 'Task Management App',
    slug: 'task-management-app',
    category: 'Mobile Development',
    coverImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'A cross-platform mobile app for team task management and collaboration.',
    detailedDescription: 'A comprehensive task management application built with React Native that allows teams to create, assign, and track tasks. Features include real-time notifications, file attachments, team chat, progress tracking, and offline synchronization.',
    technologies: ['React Native', 'Expo', 'Firebase', 'TypeScript', 'Redux Toolkit'],
    repositoryLink: 'https://github.com/johndoe/task-manager',
    liveLink: 'https://apps.apple.com/app/task-manager-pro',
    isFeatured: true,
  },
  {
    _id: 'project-003',
    title: 'AI Content Generator',
    slug: 'ai-content-generator',
    category: 'AI/ML',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'An AI-powered tool for generating marketing content and blog posts.',
    detailedDescription: 'A sophisticated web application that leverages OpenAI\'s GPT models to generate high-quality marketing content, blog posts, and social media content. Includes template management, content optimization suggestions, and team collaboration features.',
    technologies: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    repositoryLink: 'https://github.com/johndoe/ai-content-generator',
    liveLink: 'https://ai-content-gen.johndoe.com',
    isFeatured: true,
  },
  {
    _id: 'project-004',
    title: 'Personal Finance Dashboard',
    slug: 'finance-dashboard',
    category: 'Web Development',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'A comprehensive dashboard for tracking personal finances and investments.',
    detailedDescription: 'A full-stack web application for personal finance management featuring expense tracking, budget planning, investment portfolio monitoring, and financial goal setting. Includes data visualization, bank integration, and automated categorization of transactions.',
    technologies: ['React', 'Express.js', 'MongoDB', 'Chart.js', 'Plaid API'],
    repositoryLink: 'https://github.com/johndoe/finance-dashboard',
    liveLink: 'https://finance.johndoe.com',
    isFeatured: false,
  },
  {
    _id: 'project-005',
    title: 'Real Estate Platform',
    slug: 'real-estate-platform',
    category: 'Web Development',
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'A modern real estate platform with property listings and virtual tours.',
    detailedDescription: 'A comprehensive real estate platform featuring property search, virtual tours, mortgage calculator, agent profiles, and appointment scheduling. Includes advanced filtering, map integration, and mobile-responsive design for optimal user experience.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API', 'AWS S3'],
    repositoryLink: 'https://github.com/johndoe/real-estate-platform',
    liveLink: 'https://realestate-demo.johndoe.com',
    isFeatured: false,
  },
];
export const blogs: Blog[] = [
  {
    _id: '1',
    title: 'Markdown Syntax Showcase',
    slug: 'markdown-syntax-showcase',
    readTime: 10,
    excerpt: 'A comprehensive guide to Markdown syntax with examples and explanations.',
    coverImage:
      'https://www.gadgetinsiders.com/wp-content/uploads/2024/11/90-Best-Tech-Blogs-You-Should-Follow-in-2024.webp',
    content: `
# Heading Level 1
## Heading Level 2
### Heading Level 3

This is a paragraph with **bold text**, *italic text*, and ***bold italic text***.

You can also do ~~strikethrough~~ text.

---

## Lists

**Unordered List:**
- Item 1
  - Nested Item 1
  - Nested Item 2
- Item 2

**Ordered List:**
1. First
2. Second
3. Third

---

## Links & Images

[OpenAI](https://openai.com)

![Sample Image](https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1JHAo7.img)

---

## Blockquote

> This is a blockquote.
> 
> It can span multiple lines.

---

## Inline Code

Here is some \`inline code\`

---

## Code Block

\`\`\`javascript
// Example JavaScript code
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet("World");
\`\`\`

---

## Tables

| Syntax     | Description |
|------------|-------------|
| Header     | Title       |
| Paragraph  | Text        |

---

## Task Lists

- [x] Write blog post
- [ ] Add more content
- [ ] Publish

---

**Emoji:** 😄 🚀 🎉

    `,
    author: 'Jai Singh',
    isPublished: true,
    isFeatured: true,
    isMain: false,
    tags: ['Markdown', 'Testing', 'Blog'],
    createdAt: '2025-08-01T10:00:00Z',
    updatedAt: '2025-08-05T12:00:00Z',
  },
]
export const sampleVideos: Youtube[] = [
  {
    _id: 'vid001',
    title: "React 18 Features in 10 Minutes",
    slug: "react-18-features-10-minutes",
    coverImage: "https://img.youtube.com/vi/abcd1234/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/abcd1234",
    description: "A quick rundown of new React 18 features like concurrent mode and suspense.",
    type: "short" as VideoType,
    channelName: "DevQuickies",
    isFeatured: true,
    isPublished: true,
    tags: ["React", "JavaScript", "Frontend"],
    createdAt: "2024-05-01T10:00:00Z",
    updatedAt: "2024-05-01T10:00:00Z",
  },
  {
    _id: 'vid002',
    title: "Complete Node.js REST API Tutorial",
    slug: "complete-nodejs-rest-api-tutorial",
    coverImage: "https://img.youtube.com/vi/wxyz5678/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/wxyz5678",
    description: "Learn how to build a complete REST API with Node.js and Express step-by-step.",
    type: "long" as VideoType,
    channelName: "CodeAcademy",
    isFeatured: true,
    isPublished: true,
    tags: ["Node.js", "Express", "Backend"],
    createdAt: "2024-04-20T14:30:00Z",
    updatedAt: "2024-04-20T14:30:00Z",
  },
  {
    _id: 'vid003',
    title: "CSS Grid Layout Crash Course",
    slug: "css-grid-layout-crash-course",
    coverImage: "https://img.youtube.com/vi/efgh9012/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/efgh9012",
    description: "Master CSS Grid with this beginner-friendly crash course.",
    type: "short" as VideoType,
    channelName: "DesignPatterns",
    isFeatured: true,
    isPublished: true,
    tags: ["CSS", "Grid", "Web Design"],
    createdAt: "2024-06-10T09:00:00Z",
    updatedAt: "2024-06-10T09:00:00Z",
  },
  {
    _id: 'vid004',
    title: "Advanced TypeScript Tutorial for Professionals",
    slug: "advanced-typescript-tutorial",
    coverImage: "https://img.youtube.com/vi/ijkl3456/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/ijkl3456",
    description: "Deep dive into advanced TypeScript concepts for professional developers.",
    type: "long" as VideoType,
    channelName: "TechInsights",
    isFeatured: true,
    isPublished: true,
    tags: ["TypeScript", "JavaScript", "Programming"],
    createdAt: "2024-03-15T11:00:00Z",
    updatedAt: "2024-03-15T11:00:00Z",
  },
  {
    _id: 'vid005',
    title: "Next.js 14 New Features Overview",
    slug: "nextjs-14-new-features-overview",
    coverImage: "https://img.youtube.com/vi/mnop7890/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/mnop7890",
    description: "Get up to speed with Next.js 14 and its exciting new features.",
    type: "short" as VideoType,
    channelName: "FullStackDev",
    isFeatured: false, // Not featured so won't appear in featured section
    isPublished: true,
    tags: ["Next.js", "React", "Web Dev"],
    createdAt: "2024-07-01T08:00:00Z",
    updatedAt: "2024-07-01T08:00:00Z",
  },
];
// Example: data structure based on your interfaces
const contactInfo: ContactInfo = {
  _id: "1",
  title: "Get In Touch",
  description: "Have a project in mind or want to collaborate? Let's discuss how we can work together.",
  details: [
    { key: "Email Me", value: "john.doe@example.com" },
    { key: "Call Me", value: "+1 (555) 123-4567" },
    { key: "Location", value: "San Francisco, CA" },
    { key: "Response Time", value: "Usually within 24 hours" },
  ],
  profileLinks: [
    { platform: "LinkedIn", link: "https://linkedin.com/in/johndoe" },
    { platform: "GitHub", link: "https://github.com/johndoe" },
  ],
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const personalInfo: PersonalInfo = {
  name: "Jai Singh",
  email: "jaisinghmitrc@gmail.com",
  avatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1JHAo7.img",
};
