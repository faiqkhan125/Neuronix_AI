import { 
  CourseTopic, 
  CourseOverviewFeature, 
  WhatYoullGetItem, 
  CourseExperienceStep,
  JourneyStep,
  WhyLearnItem, 
  LearnerProfile, 
  OnlineFeature, 
  FAQItem 
} from '../types';

export const COURSE_OVERVIEW_CARDS: CourseOverviewFeature[] = [
  {
    id: 'ov-1',
    title: 'Online Learning',
    description: 'Learn conveniently from anywhere with fully online, accessible live sessions.',
    iconName: 'Globe'
  },
  {
    id: 'ov-2',
    title: 'Live Interactive Classes',
    description: 'Attend live classes with direct engagement, real-time demonstrations, and two-way interaction.',
    iconName: 'Video'
  },
  {
    id: 'ov-3',
    title: 'Google Meet / Zoom',
    description: 'Sessions are hosted on Google Meet and Zoom with screen sharing and direct audio interaction.',
    iconName: 'Laptop'
  },
  {
    id: 'ov-4',
    title: 'Practical AI Learning',
    description: 'Focus on understanding concepts and applying them to real workflows and modern tools.',
    iconName: 'Cpu'
  },
  {
    id: 'ov-5',
    title: 'Beginner Friendly',
    description: 'No advanced AI background needed. Taught step-by-step from intuitive fundamentals.',
    iconName: 'Sparkles'
  }
];

export const WHAT_YOULL_GET_ITEMS: WhatYoullGetItem[] = [
  {
    id: 'get-1',
    title: 'Live Online Sessions',
    description: 'Students learn through live online sessions using Google Meet or Zoom.',
    iconName: 'Video'
  },
  {
    id: 'get-2',
    title: 'Practical Learning',
    description: 'Focus on understanding and applying Generative AI concepts rather than only theory.',
    iconName: 'Code'
  },
  {
    id: 'get-3',
    title: 'Modern AI Tools',
    description: 'Explore current Generative AI tools and workflows.',
    iconName: 'Wrench'
  },
  {
    id: 'get-4',
    title: 'AI Projects',
    description: 'Learn how AI concepts can be applied to practical projects.',
    iconName: 'Layers'
  },
  {
    id: 'get-5',
    title: 'Interactive Learning',
    description: 'Students can participate, ask questions and learn during live sessions.',
    iconName: 'Users'
  }
];

export const COURSE_EXPERIENCE_STEPS: CourseExperienceStep[] = [
  {
    number: '01',
    title: 'Learn',
    description: 'Understand the fundamentals of Generative AI.',
    iconName: 'BookOpen'
  },
  {
    number: '02',
    title: 'Explore',
    description: 'Explore modern AI tools and capabilities.',
    iconName: 'Compass'
  },
  {
    number: '03',
    title: 'Practice',
    description: 'Apply concepts through practical exercises.',
    iconName: 'Terminal'
  },
  {
    number: '04',
    title: 'Build',
    description: 'Create AI-powered projects and workflows.',
    iconName: 'Hammer'
  },
  {
    number: '05',
    title: 'Grow',
    description: 'Continue exploring AI for future study, freelancing, development and career opportunities.',
    iconName: 'TrendingUp'
  }
];

export const LEARNING_JOURNEY: JourneyStep[] = [
  {
    step: 'STEP 01',
    title: 'Understand AI',
    subtitle: 'The Intuitive Foundations',
    description: 'Demystify artificial intelligence from intuitive first principles. Learn how models learn, what data they consume, and why they behave the way they do.',
    iconName: 'Compass',
    skills: ['AI History & Fundamentals', 'Pattern Recognition', 'Neural Intuition']
  },
  {
    step: 'STEP 02',
    title: 'Learn Generative AI',
    subtitle: 'From Analysis to Creation',
    description: 'Discover how generative systems produce novel text, images, and code. Understand the difference between traditional ML and modern generative models.',
    iconName: 'Sparkles',
    skills: ['Diffusion & Transformers', 'Token Predictions', 'Latent Spaces']
  },
  {
    step: 'STEP 03',
    title: 'Master Prompting',
    subtitle: 'Talking to AI Like a Pro',
    description: 'Transform from a casual AI user to a prompt maestro. Learn role-prompting, few-shot prompting, chain-of-thought logic, and strict output formatting.',
    iconName: 'MessageSquareCode',
    skills: ['Chain-of-Thought (CoT)', 'System Instructions', 'Structured JSON']
  },
  {
    step: 'STEP 04',
    title: 'Explore AI Tools',
    subtitle: 'The Modern Ecosystem',
    description: 'Get hands-on experience with modern industry tools, playground environments, vector search, open-source models, and developer consoles.',
    iconName: 'Wrench',
    skills: ['Google GenAI Studio', 'OpenAI & Claude APIs', 'Hugging Face & Ollama']
  },
  {
    step: 'STEP 05',
    title: 'Build AI Projects',
    subtitle: 'Turn Theory into Working Code',
    description: 'Develop functional applications in live coding sessions—from intelligent knowledge assistants and chatbots to automated content workflows.',
    iconName: 'Code2',
    skills: ['Interactive Chatbots', 'Document Search', 'AI-Assisted Web Apps']
  },
  {
    step: 'STEP 06',
    title: 'Apply AI in Real Life',
    subtitle: 'Career, Startups & Productivity',
    description: 'Deploy your projects, add them to your resume and GitHub, and use Generative AI daily to accelerate your coursework, job, or startup idea.',
    iconName: 'Rocket',
    skills: ['Portfolio Showcase', 'Workplace Automation', 'Next-Gen Career Edge']
  }
];

export const WHAT_YOULL_LEARN_TOPICS: CourseTopic[] = [
  {
    id: 'topic-1',
    title: 'Introduction to Generative AI',
    description: 'Understand what Generative AI is, how it differs from traditional software, and why it is transforming the world.',
    iconName: 'Sparkles',
    tag: 'Foundations'
  },
  {
    id: 'topic-2',
    title: 'How Generative AI Works',
    description: 'Learn the underlying mechanics of neural networks, tokens, embeddings, and how models predict the next concept.',
    iconName: 'Cpu',
    tag: 'Core Concept'
  },
  {
    id: 'topic-3',
    title: 'Large Language Models (LLMs)',
    description: 'Discover how modern models like Gemini, GPT, Claude, and LLaMA process language, reason, and generate knowledge.',
    iconName: 'Brain',
    tag: 'LLMs'
  },
  {
    id: 'topic-4',
    title: 'Prompt Engineering',
    description: 'Master practical prompting frameworks, system instructions, few-shot examples, and techniques to get precise answers every time.',
    iconName: 'MessageSquareText',
    tag: 'Essential Skill'
  },
  {
    id: 'topic-5',
    title: 'AI Chatbots',
    description: 'Build responsive conversational bots with memory, personality, custom knowledge bases, and conversational flows.',
    iconName: 'Bot',
    tag: 'Hands-on'
  },
  {
    id: 'topic-6',
    title: 'AI Image Generation',
    description: 'Explore generative image models, prompt-to-image techniques, stylistic controls, and visual asset workflows.',
    iconName: 'Image',
    tag: 'Creative AI'
  },
  {
    id: 'topic-7',
    title: 'AI Content Generation',
    description: 'Create multi-format content generators for copy, reports, code documentation, and structured summaries at scale.',
    iconName: 'FileText',
    tag: 'Productivity'
  },
  {
    id: 'topic-8',
    title: 'AI Automation',
    description: 'Connect AI into automated routines that handle repetitive tasks, parse unstructured documents, and trigger actions.',
    iconName: 'Zap',
    tag: 'Workflow'
  },
  {
    id: 'topic-9',
    title: 'AI Agents',
    description: 'Understand autonomous agents that break big goals down into smaller tasks, plan steps, and reason through challenges.',
    iconName: 'Layers',
    tag: 'Autonomous AI'
  },
  {
    id: 'topic-10',
    title: 'Working with AI APIs',
    description: 'Learn how to connect software directly to frontier models using modern developer APIs and programmatic SDKs.',
    iconName: 'Code',
    tag: 'Developer'
  },
  {
    id: 'topic-11',
    title: 'Building AI-Powered Applications',
    description: 'Combine frontend interfaces, live model streams, and custom logic to produce complete, usable web applications.',
    iconName: 'Layout',
    tag: 'Full Projects'
  },
  {
    id: 'topic-12',
    title: 'Real-World Generative AI Use Cases',
    description: 'Examine high-impact applications across healthcare, finance, software, creative industries, and education.',
    iconName: 'Globe',
    tag: 'Industry'
  }
];

export const WHY_LEARN_REASONS: WhyLearnItem[] = [
  {
    id: 'why-1',
    title: 'Future-Ready Skill',
    description: 'Generative AI is redefining every industry. Learning how it works prepares you for the next decade of technology and innovation.',
    iconName: 'ShieldCheck',
    highlight: 'Essential for Tomorrow'
  },
  {
    id: 'why-2',
    title: 'Practical AI Knowledge',
    description: 'Skip tedious mathematical proofs. Gain actionable, usable skills you can immediately test, build with, and show off.',
    iconName: 'Wrench',
    highlight: 'Directly Actionable'
  },
  {
    id: 'why-3',
    title: 'Build AI-Powered Projects',
    description: 'Create functional chatbots, smart search engines, and automated workflows that build an impressive portfolio.',
    iconName: 'Layers',
    highlight: 'Real Portfolio'
  },
  {
    id: 'why-4',
    title: 'Improve Productivity',
    description: 'Automate tedious writing, research, brainstorming, and programming tasks to work 5x faster in whatever you do.',
    iconName: 'TrendingUp',
    highlight: 'Work 5x Faster'
  },
  {
    id: 'why-5',
    title: 'Explore AI Careers',
    description: 'Open doors to emerging roles like AI Engineer, Prompt Engineer, AI Product Builder, and Technical Consultant.',
    iconName: 'Briefcase',
    highlight: 'High Demand Roles'
  },
  {
    id: 'why-6',
    title: 'Understand Modern AI Tools',
    description: 'Gain total confidence navigating APIs, LLMs, image synthesizers, and developer platforms without feeling overwhelmed.',
    iconName: 'Cpu',
    highlight: 'Tools Mastery'
  }
];

export const LEARNER_PROFILES: LearnerProfile[] = [
  {
    id: 'prof-1',
    title: 'Students',
    badge: 'College & University',
    description: 'Learn in-demand modern AI skills to stand out in internships, college projects, and future opportunities.',
    benefits: [
      'Stand out in technical interviews',
      'Build practical AI projects',
      'Master modern AI tools'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'prof-2',
    title: 'Beginners',
    badge: 'Zero AI Experience Needed',
    description: 'No prior AI background needed. We break down every concept into clear, simple, step-by-step guidance.',
    benefits: [
      'Friendly, intuitive explanations',
      'Direct guidance during live calls',
      'Hands-on practical walkthroughs'
    ],
    iconName: 'Compass'
  },
  {
    id: 'prof-3',
    title: 'Developers',
    badge: 'Software Engineers',
    description: 'Expand your software capabilities by integrating foundation models and AI APIs into real applications.',
    benefits: [
      'Connect LLMs to frontend and backend code',
      'Work with live model streaming APIs',
      'Build AI-powered software'
    ],
    iconName: 'Code'
  },
  {
    id: 'prof-4',
    title: 'Freelancers',
    badge: 'Digital Creators & Pros',
    description: 'Offer modern Generative AI solutions to clients, automate workflows, and expand your service offerings.',
    benefits: [
      'Create custom AI workflows for clients',
      'Automate repetitive tasks',
      'Deliver cutting-edge AI solutions'
    ],
    iconName: 'Palette'
  },
  {
    id: 'prof-5',
    title: 'Entrepreneurs',
    badge: 'Founders & Builders',
    description: 'Prototype innovative AI product ideas rapidly, streamline workflows, and build AI MVPs efficiently.',
    benefits: [
      'Turn ideas into AI prototypes',
      'Automate internal workflows',
      'Build without heavy overhead'
    ],
    iconName: 'Rocket'
  },
  {
    id: 'prof-6',
    title: 'AI Enthusiasts',
    badge: 'Curious Minds',
    description: 'Understand how modern Generative AI tools and models actually work behind the user interface.',
    benefits: [
      'Understand the technology shaping the future',
      'Experiment with modern tools and models',
      'Learn alongside like-minded learners'
    ],
    iconName: 'Sparkles'
  }
];

export const LEARN_ANYWHERE_FEATURES: OnlineFeature[] = [
  {
    id: 'feat-1',
    iconEmoji: '🌐',
    iconName: 'Globe',
    title: '100% Online',
    subtitle: 'Learn from Anywhere',
    description: 'Join from your home, dorm, or workspace. All you need is a laptop and an internet connection.'
  },
  {
    id: 'feat-2',
    iconEmoji: '💻',
    iconName: 'Laptop',
    title: 'Live Classes',
    subtitle: 'Real-Time Engagement',
    description: 'Interactive classes where you write code live, observe instructor demos, and follow along step-by-step.'
  },
  {
    id: 'feat-3',
    iconEmoji: '🎥',
    iconName: 'Video',
    title: 'Google Meet / Zoom',
    subtitle: 'Crystal Clear Sessions',
    description: 'Direct high-definition audio and screen sharing with instant unmuting for questions and live screen-shares.'
  },
  {
    id: 'feat-4',
    iconEmoji: '📚',
    iconName: 'BookOpen',
    title: 'Practical Learning',
    subtitle: 'Zero Fluff, Real Skills',
    description: 'Focused on hands-on exercises, starter code repositories, and building working AI projects.'
  },
  {
    id: 'feat-5',
    iconEmoji: '🤝',
    iconName: 'Users',
    title: 'Interactive Sessions',
    subtitle: 'Ask Questions Live',
    description: 'Ask questions as concepts are explained, get live help, and participate in interactive discussions.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Who can join this course?',
    answer: 'The course is designed for students, beginners, developers, freelancers, entrepreneurs and anyone interested in learning Generative AI.'
  },
  {
    question: 'Do I need advanced AI knowledge?',
    answer: 'No. The course is designed to provide a beginner-friendly introduction to Generative AI.'
  },
  {
    question: 'Is the course online?',
    answer: 'Yes. The course is conducted online through live sessions.'
  },
  {
    question: 'Which platform will be used for classes?',
    answer: 'Classes will be conducted through Google Meet or Zoom.'
  },
  {
    question: 'Will there be practical learning?',
    answer: 'Yes. The course focuses on understanding Generative AI and applying concepts through practical learning.'
  },
  {
    question: 'How can I apply?',
    answer: 'Click the "Apply Now" button and complete the application form.'
  }
];
