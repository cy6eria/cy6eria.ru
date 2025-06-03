export const settings = {
  workHistory: {
    title: 'Professional Experience',
    items: {
      responsibilities: 'Responsibilities',
      achievements: 'Achievements',
      technologies: 'Technologies',
    }
  },
  keySkills: {
    title: 'Key skills',
    year: 'yr.',
  },
  language: {
    title: 'Language'
  },
  education: {
    title: 'Education',
  },
  highlights: {
    title: 'Highlights',
  }
}

export const data = {
  name: 'Eugene Gundorov',
  position: 'Frontend (React) / Full-stack Developer',
  contacts: [
    {
      type: 'location',
      value: 'Barcelona, Spain',
    },
    {
      type: 'mail',
      value: 'e.n.gundorov@gmail.com',
    },
    {
      type: 'phone',
      value: '+34 632 333 535',
    },
    {
      type: 'linkedin',
      value: 'www.linkedin.com/in/cy6eria',
    },
    {
      type: 'github',
      value: 'github.com/cy6eria',
    }
  ],
  summary: 'Experienced engineer with over 15 years in the industry. Proficient in React, Typescript, and modern web technologies. Extensive experience leading distributed teams, creating scalable web applications, and developing innovative solutions such as Web3 marketplaces and real-time visualization tools.',
  highlights: [
    'Improved mobile UX and app performance across multiple products',
    'Hands-on with scalable architecture, legacy migrations, and modern tooling',
    'Passion for DX and performance',
  ],
  workHistory: [
    {
      companyName: 'Telleqt PTE, LTD',
      location: 'Singapore (Remote)',
      position: 'Full stack developer',
      startDate: new Date(2023, 2),
      endDate: new Date(2025, 5),
      description: '**Artacle.io** is AI-based platform intended to provide analytics to generative art professionals. It offers features like rarity scores, sales data, and analytics during the minting process, providing users with the ability to discover new collections and get valuable insights in one place.',
      responsibilities: `
* Collaborated with stakeholders in a distributed team to define and implement new features.
* Developed front-end (primarily) and back-end features; conducted code reviews and unit testing.
* Authored technical documentation.
      `,
      achievements: `
* Launched an NFT marketplace using the Seaport protocol which handled hundreds of transactions.
* Improved mobile engagement by 30% with optimized mobile UI/UX.
* Proposed and developed a PWA as a cost-effective alternative to a mobile app.
*  Migrated legacy JS codebase to TypeScript, reducing new bug reports by 15%.
      `,
      technologies: ['React', 'Redux', 'Typescript', 'Ethereum', 'viem', 'wagmi', 'Seaport', 'MUI', 'Webpack', 'Next.js', 'Node.js', 'Agile'],
    },
    {
      companyName: 'Multibonus',
      location: 'Russia (Remote)',
      position: 'Lead Front-end developer',
      startDate: new Date(2021, 5),
      endDate: new Date(2023, 1),
      description: 'Multibonus is a virtual currency platform enabling clients to convert points into real money or spend in a marketplace.',
      responsibilities: `
* Estimated epics as a front-end team representative.
* Collaborated with analytics to confirm feature proposals and identify optimal solutions.
* Managed tasks among front-end developers, reviewed code, and ensured quality releases.
      `,
      achievements: `
* Led a 3-person frontend team with focus on sprint engagement and delivery.
* Initiated migration from Reatom to Effector, streamlining issues handling and optimizing the hiring process for new developers.
      `,
      technologies: ['React', 'Typescript', 'Reatom', 'Effector', 'Styled Components', 'Webpack', 'Agile'],
    },
    {
      companyName: 'Sibintek',
      location: 'Russia (Remote)',
      position: 'Full-stack developer, Lead Front-end developer',
      startDate: new Date(2018, 3),
      endDate: new Date(2021, 5),
      description: 'Provider of IT solutions for the oil production business.',
      responsibilities: `
* Launched projects from scratch, selecting technologies and providing design consulting.
* Managed front-end tasks, reviewed code, and supported releases.
* Mentored junior developers and conducted candidate interviews.
      `,
      achievements: `
* Migrated legacy JQuery based codebase to React, reducing the render time from 2s to 0.02s on real-life dataset.
* Delivered 3 MVPs from scratch using React + Node.js, meeting all deadlines.
* Mentored junior developers and conducted over 20 technical interviews.
      `,
      technologies: ['React', 'Typescript', 'Redux', 'SCSS', 'Styled Components', 'Webpack', 'REST', 'GraphQL (Apollo)', 'Node.js', 'Docker', 'git'],
    },
    {
      companyName: 'Ak Bars Bank',
      location: 'Russia, Kazan',
      position: 'Front-end developer',
      startDate: new Date(2017, 9),
      endDate: new Date(2018, 3),
      description: 'Developed a retail client web application.',
      responsibilities: `
* Collaborated with the Product Owner to refine new features.
* Developed new features, reviewed code, and conducted unit testing.
      `,
      achievements: `
* Rebuilt legacy banking portal into a modern React-based SPA.
      `,
      technologies: ['React', 'Redux', 'SCSS', 'Webpack', 'Agile', 'git'],
    },
      {
          companyName: 'IBM EE/A',
          location: 'Russia (Remote)',
          position: 'Front-end developer',
          startDate: new Date(2015, 2),
          endDate: new Date(2017, 9),
          description: 'Worked on a business customer web application for the biggest Russian bank.',
          responsibilities: `
* Defined the tech stack during the project’s initial stages.
* Migrated old features to a new stack.
          `,
          achievements: `
* Implemented React migration strategy for large enterprise application.
* Delivered beta version with all legacy functionality integrated into modern stack.
          `,
          technologies: ['React', 'Redux', 'Typescript', 'SCSS', 'Webpack', 'Sketch', 'Agile', 'git'],
      },
      {
          companyName: 'Early Career',
          location: 'Russia, Kazan',
          position: 'Front-end developer',
          startDate: new Date(2010, 5),
          endDate: new Date(2015, 2),
          description: 'I was working in the companies such as Flatstack, Racoons Group, Finmarket, Funbox, Brand',
          achievements: `* Participated in early-stage startups and outsourcing projects.`,
          technologies: ['HTML', 'CSS', 'SCSS', 'JQuery', 'AngularJS', 'Javascript', 'PHP Symfony', 'Ruby on Rails', 'Photoshop', 'git'],
      },
  ],
  keySkills: [
    {
      label: 'Languages',
      value: 'JavaScript, TypeScript, HTML, CSS/SCSS',
    },
    {
      label: 'Front-end',
      value: 'React, Redux, Effector, Styled Components, Tailwind, Material UI, PWA',
    },
    {
      label: 'Back-end',
      value: 'Node.js, Next.js, GraphQL (Apollo)',
    },
    {
      label: 'Testing',
      value: 'Jest, react-testing-library, Cypress',
    },
    {
      label: 'Web3',
      value: 'Ethereum, Seaport, viem, wagmi',
    },
    {
      label: 'Tools',
      value: 'Docker, Webpack, Git, CI/CD',
    },
    {
      label: 'Practices',
      value: 'Agile (Scrum), Unit Testing, Code Review, TDD'
    }
  ],
  language: [
    {
      label: 'Russian',
      value: 'Fluent',
    },
    {
      label: 'English',
      value: 'B2+',
    },
    {
      label: 'Spanish',
      value: 'A1',
    },
  ],
  education: [
    {
      name: 'Kazan State Technical University',
      startDate: new Date(2006, 8),
      endDate: new Date(2011, 6),
      degree: 'Electronic measurement equipment engineering specialist',
    }
  ],
}
