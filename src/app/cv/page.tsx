import { CV } from '@components';

const data = {
    name: 'Eugene Gundorov',
    position: 'Lead Front-end developer',
    contacts: [
      {
        type: 'location',
        value: 'Kazakhstan, Almaty',
      },
      {
        type: 'mail',
        value: 'e.n.gundorov@gmail.com',
      },
      {
        type: 'phone',
        value: '+7 (927) 418-22-16',
      },
      {
        type: 'telegram',
        value: 'cy6eria',
      },
      {
        type: 'github',
        value: 'cy6eria',
      }
    ],
    summary: 'Experienced JavaScript Developer with 10+ years in the industry. Proficient with React. Created web banking apps with big corporations and real time data visualization tools in a startup way.',
    workHistory: [
        {
            companyName: 'Multibonus',
            location: 'Russia, Moscow (Remote)',
            position: 'Lead Front-end developer',
            startDate: new Date(2021, 5),
            endDate: null,
            description: 'Multibonus is a virtual currency which our clients can convert in real money or spend in our marketplace.',
            responsibilities: `
* Initial estimation of epics as a representative of the front end team;
* Collaboration with analytics during development processes to confirm feature proposals and find a best solution;
* Managing tasks among front-end developers, control progress, responsibility for code, support release;
* Participation in team activities (Spring planning, review, retro);
* Development, code review, unit testing;
            `,
            achievements: `
* Increased involvement of developers in the discussion team sprint results;
* Initiated and support migration to more standard stack to make hire process easy;
            `,
            technologies: ['React', 'Typescript', 'Reatom', 'Effector', 'Styled Components', 'Webpack', 'Agile', 'git'],
        },
        {
            companyName: 'Sibintek',
            location: 'Russia, Moscow (Remote)',
            position: 'Full-stack developer, Lead Front-end developer',
            startDate: new Date(2018, 3),
            endDate: new Date(2021, 5),
            description: 'The company is focused on the IT solutons for the oil production business.',
            responsibilities: `
* Collaboration with stakeholders to launch projects from scratch, choosing technologies, providing design consulting;
* Managing tasks among front-end developers, control progress, responsibility for code, support release;
* Development, code review, unit testing;
* Initial selection of candidates, job interviews;
* Mentoring of junior developers;
            `,
            achievements: `
* Successfully launched 3 MVP projects;
* Integrated few junior front end developers in the production process of launched projects;
            `,
            technologies: ['React', 'Typescript', 'Redux', 'SCSS', 'Styled Components', 'Webpack', 'REST', 'GraphQL (Apollo)', 'Node.js', 'Docker', 'git'],
        },
        {
            companyName: 'Ak Bars Bank',
            location: 'Russia, Kazan',
            position: 'Front-end developer',
            startDate: new Date(2017, 9),
            endDate: new Date(2018, 3),
            description: 'Ak Bars is a biggest bank in my home region. I was a part of retail clients web app.',
            responsibilities: `
* Collaboration with PO to discuss details of new features;
* Participation in team activities (Spring planning, review, retro);
* Develop the new features, code review, unit testing;`,
            achievements: `
* Successfully implemented all features of the old version of an app and launched beta as a release version;
* Developed a self confidence as a lead developer;
`,
            technologies: ['React', 'Redux', 'SCSS', 'Webpack', 'Agile', 'git'],
        },
        {
            companyName: 'IBM EE/A',
            location: 'Russia, Moscow (Remote)',
            position: 'Front-end developer',
            startDate: new Date(2015, 2),
            endDate: new Date(2017, 9),
            description: 'As a part of collaboration between IBM and a biggest Russian bank, we were developing a new web app for business customers from scratch.',
            responsibilities: `
* Participation in the process of forming technological stack at the initial stages of the project
* Migration old features of the app to the new stack;
* Collaboration with stakeholders to discuss details of new features, UI/UX;
* Participation in team activities (Sprint planning, review, retro);
* Development, code review, unit testing;
            `,
            achievements: `
* Successfully implemented all features of the old version of an app and launched a new version as a beta;
            `,
            technologies: ['React', 'Redux', 'Typescript', 'SCSS', 'Webpack', 'Sketch', 'Agile', 'git'],
        },
        {
            companyName: 'Electronniy Rieltor',
            location: 'Russia, Kazan',
            position: 'Front-end developer',
            startDate: new Date(2014, 8),
            endDate: new Date(2015, 2),
            description: 'This is a real estate startup and my first SPA project.',
            responsibilities: `
* Collaboration with stakeholders to discuss details of new features, UI/UX;
* Development, code review;
            `,
            achievements: '* Successfully launched an MVP version.',
            technologies: ['AngularJS', 'Javascript', 'SCSS', 'Photoshop', 'git'],
        },
        {
            companyName: 'Flatstack',
            location: 'Russia, Kazan',
            position: 'Front-end developer',
            startDate: new Date(2013, 5),
            endDate: new Date(2014, 8),
            description: 'Flatstack is a outsourcing company who works with startups, mostly from US.',
            responsibilities: `
* Participation in team activities (Spring planning, review, retro);
* Creation templates for views according PSD mockups;
* Handling forms with JS code;
            `,
            achievements: '* Launched few different projects, but most of them weren\'t successful (which typical situation for startups);',
            technologies: ['Ruby on Rails', 'Javascipt', 'Coffescript', 'JQuery', 'SCSS', 'git', 'Photoshop', 'Agile'],
        },
        {
            companyName: 'Racoons Group',
            location: 'Russia, Kazan',
            position: 'Full-stack developer',
            startDate: new Date(2013, 0),
            endDate: new Date(2013, 5),
            description: 'This company provided outsource service for small companies and startups.',
            responsibilities: `
* Development of REST API with Ruby on Rails;
* Creation templates for views according PSD mockups;
* Handling forms with JS code;
            `,
            achievements: '* Launched a promo site for Russian Lucky Strike comeback company;',
            technologies: ['Ruby on Rails', 'Javascipt', 'Coffescript', 'JQuery', 'SCSS', 'Photoshop'],
        },
        {
            companyName: 'Finmarket',
            location: 'Russia, Kazan',
            position: 'Front-end developer',
            startDate: new Date(2012, 8),
            endDate: new Date(2012, 11),
            description: 'This was my first full-time job after year in army. The project was a CRM system for a microfinance company.',
            responsibilities: `
* Creation of templates for views according PSD mockups;
* Handling forms with JS code;
            `,
            technologies: ['Twig', 'JQuery', 'git', 'Photoshop'],
        },
        {
            companyName: 'Funbox',
            location: 'Russia, Kazan',
            position: 'Front-end developer',
            startDate: new Date(2011, 2),
            endDate: new Date(2011, 6),
            description: 'Another part-time job during my university course. Funbox is B2B company for cellular operators.',
            responsibilities: '* Development of promo pages for new products and events according PSD mockups;',
            achievements: '* Became familiar with new technologies (Ruby on Rails, Git);',
            technologies: ['HAML', 'JQuery', 'Less', 'git', 'Photoshop'],
        },
        {
            companyName: 'Brand',
            location: 'Russia, Kazan',
            position: 'Front-end developer',
            startDate: new Date(2010, 5),
            endDate: new Date(2011, 2),
            description: 'This is start of my carrier. It was part-time job during my university course.',
            responsibilities: `
* Development promo pages and e-shops for local companies;
* Setup Joomla CMS in the production environment;
            `,
            achievements: `
* Started to learn PHP;
* Became confident with MySQL and Apache Web Server.
            `,
            technologies: ['HTML', 'CSS', 'JQuery', 'Less', 'Joomla', 'Photoshop'],
        }
    ],
    keySkills: [
      {
        label: 'React',
        value: 8,
      },
      {
        label: 'Typescript',
        value: 4,
      },
      {
        label: 'Javascript',
        value: 12,
      },
      {
        label: 'HTML5',
        value: 12,
      },
      {
        label: 'CSS3',
        value: 12,
      },
    ],
    language: [
      {
        label: 'Russian',
        value: 'Fluent',
      },
      {
        label: 'English',
        value: 'B2',
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

export default function CVPage () {
  return (
    <CV
      name={data.name}
      position={data.position}
      contacts={data.contacts}
      summary={data.summary}
      workHistory={data.workHistory}
      education={data.education}
      language={data.language}
      keySkills={data.keySkills} 
    />
  );
}
