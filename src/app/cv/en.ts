export const settings = {
  workHistory: {
    title: 'Work history',
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
  }
}

export const data = {
  name: 'Eugene Gundorov',
  position: 'Lead Front-end developer',
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
      value: 'cy6eria',
    }
  ],
  summary: 'Experienced Front-end Software Engineer with over 15 years in the industry. Proficient in React, Typescript, and modern web technologies. Extensive experience leading distributed teams, creating scalable web applications, and developing innovative solutions such as Web3 marketplaces and real-time visualization tools.',
  workHistory: [
    {
      companyName: 'Telleqt PTE, LTD',
      location: 'Singapore (Remote)',
      position: 'Full stack developer',
      startDate: new Date(2023, 2),
      endDate: null,
      description: 'The NFT market analytics platform.',
      responsibilities: `
* Collaborated with stakeholders in a distributed team to define and implement new features.
* Developed front-end (primarily) and back-end features; conducted code reviews and unit testing.
* Authored technical documentation.
      `,
      achievements: `
* Launched an NFT marketplace using the Seaport protocol.
* Proposed and implemented a PWA as a cost-effective alternative to a mobile app.
* Migrated codebase to typescript what helped to increase quality of new features.
      `,
      technologies: ['React', 'Redux', 'Typescript', 'Ethereum', 'viem', 'wagmi', 'Seaport', 'MUI', 'Webpack', 'Next.js', 'Node.js', 'Agile'],
    },
    {
      companyName: 'Multibonus',
      location: 'Russia, Moscow (Remote)',
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
* Enhanced developer engagement in sprint discussions.
* Инициировал переход с Reatom на Effector, что упростило процесс найма и разработки.
      `,
      technologies: ['React', 'Typescript', 'Reatom', 'Effector', 'Styled Components', 'Webpack', 'Agile'],
    },
    {
      companyName: 'Sibintek',
      location: 'Russia, Moscow (Remote)',
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
* Delivered three MVP projects successfully.
* Integrated junior developers into the production process.
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
* Successfully implemented all legacy features and launched the beta version.
      `,
      technologies: ['React', 'Redux', 'SCSS', 'Webpack', 'Agile', 'git'],
    },
      {
          companyName: 'IBM EE/A',
          location: 'Russia, Moscow (Remote)',
          position: 'Front-end developer',
          startDate: new Date(2015, 2),
          endDate: new Date(2017, 9),
          description: 'Worked on a business customer web application for the biggest Russian bank.',
          responsibilities: `
* Defined the tech stack during the project’s initial stages.
* Migrated old features to a new stack.
          `,
          achievements: `
* Delivered a new beta version with all legacy features.
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
      value: 'React, Redux, Styled Components, Tailwind, Material UI',
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
      value: 'Ethereum, Seaport Protocol',
    },
    {
      label: 'Tools',
      value: 'Docker, Webpack, Git',
    },
    {
      label: 'Practices',
      value: 'Agile, Unit Testing, Code Review'
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
