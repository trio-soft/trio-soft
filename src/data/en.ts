// English content data

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export interface CaseCard {
  image: string;
  title: string;
  description: string;
  client?: string;
  detail?: string;
}

export interface NewsItem {
  category: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

export const en = {
  brand: 'Trio-Soft',
  nav: [
    { label: 'Services', href: '#/services' },
    { label: 'Our Work', href: '#/cases' },
    { label: 'About Us', href: '#/about' },
    { label: 'Contact', href: '#/contact' },
  ] as NavItem[],
  getStarted: 'Get Started',
  footer: {
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    copyright: '© 2025 Trio-Soft. All rights reserved.',
  },
  privacy: {
    pageTitle: 'Privacy Policy',
    content: `
      <h3>1. Introduction</h3>
      <p>Trio-Soft ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
      <h3>2. Information We Collect</h3>
      <p>We may collect personal information that you provide to us, such as your name, email address, and any other information you choose to provide when you contact us.</p>
      <h3>3. How We Use Your Information</h3>
      <p>We use the information we collect to respond to your inquiries, provide our services, and improve our website.</p>
      <h3>4. Information Sharing</h3>
      <p>We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website or providing our services.</p>
      <h3>5. Security</h3>
      <p>We take reasonable measures to protect your information from unauthorized access or disclosure.</p>
      <h3>6. Changes to This Policy</h3>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      <h3>7. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us at contact@trio-soft.biz.</p>
    `,
  },
  terms: {
    pageTitle: 'Terms of Service',
    content: `
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using our website, you agree to be bound by these Terms of Service.</p>
      <h3>2. Use of the Website</h3>
      <p>You agree to use the website only for lawful purposes and in accordance with these Terms.</p>
      <h3>3. Intellectual Property</h3>
      <p>All content on this website, including text, graphics, and logos, is the property of Trio-Soft and is protected by intellectual property laws.</p>
      <h3>4. Limitation of Liability</h3>
      <p>Trio-Soft shall not be liable for any damages arising from the use of or inability to use our website.</p>
      <h3>5. Governing Law</h3>
      <p>These Terms shall be governed by and construed in accordance with the laws of Japan.</p>
      <h3>6. Changes to Terms</h3>
      <p>We reserve the right to modify these Terms at any time. Your continued use of the website after any changes constitutes acceptance of the new Terms.</p>
      <h3>7. Contact Us</h3>
      <p>If you have any questions about these Terms, please contact us at contact@trio-soft.biz.</p>
    `,
  },
  home: {
    heroTitle: 'Trio-Soft: Architecting Your Digital Future',
    heroSubtitle: 'We specialize in system architecture consulting, software and app design, and AI solutions, helping businesses thrive in the digital age.',
    heroButton: 'Explore Our Services',
    expertiseTitle: 'Our Expertise',
    expertiseSubtitle: 'Comprehensive Solutions for Your Business Needs',
    expertiseDescription: 'From initial concept to deployment and beyond, Trio-Soft offers a full suite of services to ensure your success.',
    services: [
      {
        icon: 'gear',
        title: 'System Architecture Consulting',
        description: 'Crafting robust, scalable, and efficient system architectures tailored to your business objectives.',
      },
      {
        icon: 'app-window',
        title: 'Software and App Design',
        description: 'Designing intuitive and engaging software and applications that enhance user experience and drive growth.',
      },
      {
        icon: 'robot',
        title: 'AI Solutions',
        description: 'Leveraging the power of AI to create intelligent solutions that automate processes and unlock new opportunities.',
      },
    ] as ServiceCard[],
    casesTitle: 'Case Studies',
    cases: [
      {
        image: '/case-ecommerce.jpg',
        title: 'E-commerce Platform for Retailer',
        description: 'Developed a scalable e-commerce platform for a leading retailer, resulting in a 30% increase in online sales.',
      },
      {
        image: '/case-fitness.jpg',
        title: 'Mobile App for Fitness Tracking',
        description: 'Designed and built a user-friendly mobile app for fitness tracking, achieving a 4.8-star rating on app stores.',
      },
      {
        image: '/case-analytics.jpg',
        title: 'AI-Powered Analytics Dashboard',
        description: 'Created an AI-powered analytics dashboard for a financial institution, providing actionable insights and improving decision-making.',
      },
    ] as CaseCard[],
    newsTitle: 'Latest News',
    news: [
      {
        category: 'Tech Insights',
        title: 'The Future of AI in Business',
        description: 'Explore the latest trends and applications of artificial intelligence in various industries.',
        image: '/news-ai.jpg',
      },
      {
        category: 'Design Trends',
        title: 'User-Centric Design Principles',
        description: "Learn about the key principles of user-centric design and how they can improve your product's success.",
        image: '/news-design.jpg',
      },
    ] as NewsItem[],
    ctaTitle: 'Ready to Transform Your Business?',
    ctaButton: 'Get in Touch',
  },
  services: {
    pageTitle: 'Our Services',
    pageSubtitle: "Trio-Soft offers a comprehensive suite of services designed to empower your business through innovative technology solutions. From strategic consulting to cutting-edge AI applications, we're here to help you achieve your goals.",
    sections: [
      {
        title: 'Consulting & Strategy',
        cards: [
          { icon: 'presentation-chart', title: 'Information Systems Consulting', description: 'Expert guidance on optimizing your information systems for peak performance.' },
          { icon: 'gear', title: 'Computer Software Solutions', description: 'Comprehensive software solutions from planning to maintenance.' },
          { icon: 'cloud', title: 'Cloud Services Strategy', description: 'Strategic planning and operation of cloud services tailored to your needs.' },
          { icon: 'lightbulb', title: 'Business Efficiency Enhancement', description: 'Streamlining business processes with system development and support.' },
        ],
      },
      {
        title: 'Development & Implementation',
        cards: [
          { icon: 'globe', title: 'Web & Application Development', description: 'Creating and managing websites and web applications that drive results.' },
          { icon: 'app-window', title: 'IT Infrastructure Management', description: 'Design, construction, and support for robust IT infrastructure.' },
          { icon: 'device-mobile', title: 'Mobile Application Solutions', description: 'Innovative mobile applications from concept to distribution.' },
          { icon: 'code', title: 'Programming Education & Training', description: 'Training and courses to develop IT talent and programming skills.' },
        ],
      },
      {
        title: 'AI & Emerging Technologies',
        cards: [
          { icon: 'video', title: 'Online Learning Content', description: 'Engaging online learning content for continuous professional development.' },
          { icon: 'robot', title: 'AI & Machine Learning Services', description: 'Harnessing the power of AI and machine learning for innovative solutions.' },
          { icon: 'chart-line', title: 'AI-Driven Data Analysis', description: 'Data analysis and business automation through advanced AI techniques.' },
          { icon: 'headset', title: 'Technical Application Systems', description: 'Developing AI chatbots, image recognition, and natural language processing systems.' },
        ],
      },
      {
        title: 'Operations & Support',
        cards: [
          { icon: 'users', title: 'Self-Media Management', description: 'Planning and managing self-media platforms like YouTube and blogs.' },
          { icon: 'briefcase', title: 'IT Task Outsourcing', description: 'Outsourcing IT-related tasks for efficiency and cost-effectiveness.' },
          { icon: 'list-checks', title: 'Business Process Optimization', description: 'Improving business processes through design, optimization, and outsourcing support.' },
          { icon: 'gear', title: 'Comprehensive Support', description: 'Complete operational support for all our services and related activities.' },
        ],
      },
    ],
    ctaTitle: 'Ready to Transform Your Business?',
    ctaSubtitle: "Contact us today to discuss how Trio-Soft's services can help you achieve your business objectives.",
    ctaButton: 'Get in Touch',
  },
  cases: {
    pageTitle: 'Our Work',
    items: [
      {
        client: 'JVR Music',
        title: 'Enhancing Digital Presence for a Music Label',
        description: 'We revamped the digital presence for JVR Music, a prominent music label, by developing a modern, user-friendly website. The project involved integrating social media capabilities, enhancing content delivery, and optimizing for mobile devices. Technologies used included React, Node.js, and a headless CMS. The result was a 50% increase in website traffic.',
        image: '/cases/case_jvr.png',
      },
      {
        client: 'Simmons Taiwan',
        title: 'Optimizing E-commerce for a Brand',
        description: 'For Simmons Taiwan, we optimized their e-commerce platform to improve user experience and sales efficiency. The project scope included a complete redesign of the website, implementation of advanced search and filtering, and integration with a new payment gateway. We utilized technologies such as Vue.js, .NET Core, and SQLServer. The enhancements led to a 20% improvement in conversion rates and a 10% increase in average order value.',
        image: '/cases/case_simmons.png',
      },
      {
        client: 'VDS',
        title: 'Developing a Scalable Platform for a Retail Startup',
        description: 'We partnered with VDS, a retail startup, to develop a scalable and robust platform for their innovative product. The project focused on building a microservices architecture, implementing real-time data processing, and ensuring high availability. Technologies employed were Go, Kubernetes, and Kafka. The platform successfully supported a 10x increase in user base within the first year of launch.',
        image: '/cases/case_vds.png',
      },
    ] as CaseCard[],
    viewAll: 'Get in Touch',
    contactUs: 'Get in Touch',
  },
  about: {
    pageTitle: 'About Trio-Soft',
    intro: 'At Trio-Soft, we are a dynamic startup dedicated to revolutionizing the tech landscape through innovative system architecture consulting, bespoke software and app design, and cutting-edge AI technology. Our mission is to empower businesses with solutions that not only meet their current needs but also anticipate future challenges, ensuring sustainable growth and competitive advantage.',
    storyTitle: 'Our Story',
    story: 'Founded in 2025 by a team of seasoned tech experts, Trio-Soft emerged from a shared vision to bridge the gap between complex technological possibilities and practical business applications. We recognized the need for a more agile, client-focused approach to tech consulting and development, leading us to create a company that prioritizes innovation, collaboration, and tangible results.',
    teamTitle: 'Our Team',
    team: [
      { name: 'Bruce Tsai', role: 'CEO & Founder' },
    ] as TeamMember[],
    teamDescription: 'Our team comprises industry veterans and rising stars, each bringing a unique set of skills and experiences to the table. From strategic consulting to hands-on development, our experts are committed to delivering excellence and driving client success.',
    valuesTitle: 'Our Values',
    values: [
      { icon: 'lightbulb', title: 'Innovation', description: 'We embrace creativity and constantly seek new ways to solve problems and push the boundaries of technology.' },
      { icon: 'users', title: 'Collaboration', description: 'We believe in the power of teamwork and work closely with our clients to achieve shared goals.' },
      { icon: 'rocket', title: 'Excellence', description: 'We are dedicated to delivering high-quality solutions that exceed expectations and drive meaningful impact.' },
    ] as ValueCard[],
    ctaTitle: 'Ready to transform your business with cutting-edge technology?',
    ctaSubtitle: 'Reach out to us today to discuss your project and explore how Trio-Soft can help you achieve your goals.',
    ctaButton: 'Get in Touch',
  },
  contact: {
    pageTitle: 'Contact Us',
    pageSubtitle: "We're here to help. Reach out to us for any inquiries or support.",
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your Message',
    nameLabel: 'Name',
    emailLabel: 'Email',
    subjectLabel: 'Subject',
    messageLabel: 'Message',
    submit: 'Submit',
    infoTitle: 'Contact Information',
    address: 'Address: Room 414, 4th Floor, Helios Kannai Building, 3-21-2 Motohama-cho, Naka-ku, Yokohama-shi, Kanagawa, Japan',
    phone: 'Phone: +886-9-1030-9865',
    email: 'Email: contact@trio-soft.biz',
  },
  language: {
    title: 'Select Language / 言語を選択',
    subtitle: 'Choose your preferred language / お好みの言語を選択してください',
    en: { name: 'English', desc: 'English version', flag: '🇺🇸', href: '#/' },
    jp: { name: '日本語', desc: '日本語版', flag: '🇯🇵', href: '#/jp/' },
  },
};

export type SiteData = typeof en;
