export const settings = {
  workHistory: {
    title: 'Historial laboral',
    items: {
      responsibilities: 'Responsabilidades',
      achievements: 'Logros',
      technologies: 'Tecnologías',
    }
  },
  keySkills: {
    title: 'Habilidades clave',
    year: 'años',
  },
  language: {
    title: 'Lengua'
  },
  education: {
    title: 'Educación',
  }
}

export const data = {
  name: 'Eugene Gundorov',
  position: 'Desarrollador líder de front-end ',
  contacts: [
    {
      type: 'location',
      value: 'Barcelona, España',
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
      type: 'linkedin',
      value: 'www.linkedin.com/in/cy6eria',
    },
    {
      type: 'github',
      value: 'cy6eria',
    }
  ],
  summary: 'Experimentado desarrollador de JavaScript con más de 10 años en la industria. Profciente con React. Creó aplicaciones de banca web con grandes corporaciones y herramientas de visualización de datos en tiempo real de una manera de inicio. ',
  workHistory: [
        {
          companyName: 'Telleqt PTE, LTD',
          location: 'Singapur (Remoto)',
          position: 'Desarrollador front-end',
          startDate: new Date(2023, 2),
          endDate: null,
          description: 'Mi trabajo actual ',
          technologies: ['React', 'Typescript', 'Redux', 'Webpack', 'Agile', 'git'],
      },
      {
          companyName: 'Multibonus',
          location: 'Rusia, Moscú (Remoto)',
          position: 'Desarrollador Front-end líder',
          startDate: new Date(2021, 5),
          endDate: new Date(2023, 1),
          description: 'Multi bonus es una moneda virtual que nuestros clientes pueden convertir en dinero real o gastar en nuestro mercado.',
          responsibilities: `
* Estimación inicial de epics como representante del equipo front-end;
* Colaboración con análisis durante los procesos de desarrollo para confirmar propuestas de funciones y encontrar la mejor solución;
* Gestión de tareas entre desarrolladores front-end, control de progreso, responsabilidad del código, lanzamiento de soporte;
* Participación en actividades de equipo (planificación de primavera, revisión, retro) ;
* Desarrollo, revisión de código, pruebas unitarias;
          `,
          achievements: `
* Mayor participación de los desarrolladores en los resultados del sprint del equipo de discusión;
* Migración iniciada y respaldada a una pila más estándar para facilitar el proceso de contratación;
          `,
          technologies: ['React', 'Typescript', 'Reatom', 'Effector', 'Styled Components', 'Webpack', 'Agile', 'git'],
      },
      {
          companyName: 'Sibintek',
          location: 'Rusia, Moscú (Remoto)',
          position: 'Desarrollador de pila completa, Desarrollador Front-end líder',
          startDate: new Date(2018, 3),
          endDate: new Date(2021, 5),
          description: 'La compañía se centró en soluciones de TI para el negocio de producción de petróleo.',
          responsibilities: `
* Colaboración con las partes interesadas para lanzar proyectos desde cero, elegir tecnologías, proporcionar consultoría de diseño;
* Gestión de tareas entre desarrolladores front-end, control de progreso, responsabilidad del código, lanzamiento de soporte;
* Desarrollo, revisión de código, pruebas unitarias;
* Selección inicial de candidatos, entrevistas de trabajo;
* Tutoría de desarrolladores junior;
          `,
          achievements: `
* Lanzó con éxito 3 proyectos MVP;
* Integró pocos desarrolladores front-end junior en el proceso de producción de los proyectos lanzados;
          `,
          technologies: ['React', 'Typescript', 'Redux', 'SCSS', 'Styled Components', 'Webpack', 'REST', 'GraphQL (Apollo)', 'Node.js', 'Docker', 'git'],
      },
      {
          companyName: 'Ak Bars Bank',
          location: 'Rusia, Kazán',
          position: 'Desarrollador front-end',
          startDate: new Date(2017, 9),
          endDate: new Date(2018, 3),
          description: 'Ak Bars es el banco más grande de mi región natal. Formé parte de la aplicación web para clientes minoristas.',
          responsibilities: `
* Colaboración con PO para discutir los detalles de las nuevas características;
* Participación en actividades de equipo (planificación de primavera, revisión, retro) ;
* Desarrollar las nuevas características, revisión de código y pruebas unitarias;
          `,
          achievements: `
* Implementó con éxito todas las funciones de la versión anterior de una aplicación y lanzó la versión beta como versión de lanzamiento;
* Desarrolló confianza en sí mismo como desarrollador principal;
          `,
          technologies: ['React', 'Redux', 'SCSS', 'Webpack', 'Agile', 'git'],
      },
      {
          companyName: 'IBM EE/A',
          location: 'Rusia, Moscú (Remoto)',
          position: 'Desarrollador front-end',
          startDate: new Date(2015, 2),
          endDate: new Date(2017, 9),
          description: 'Como parte de una colaboración entre IBM y el mayor banco ruso, estábamos desarrollando una nueva aplicación web para clientes empresariales desde cero.',
          responsibilities: `
* Participación en el proceso de formación de una pila tecnológica en las etapas iniciales del proyecto
* Migración de funciones antiguas de la aplicación a la nueva pila;
* Colaboración con las partes interesadas para discutir detalles de nuevas características, UI / UX;
* Participación en actividades de equipo (planificación de sprint, revisión, retro);
* Desarrollo, revisión de código, pruebas unitarias;
          `,
          achievements: `
* Implementó con éxito todas las funciones de la versión anterior de una aplicación y lanzó una nueva versión como beta;
          `,
          technologies: ['React', 'Redux', 'Typescript', 'SCSS', 'Webpack', 'Sketch', 'Agile', 'git'],
      },
      {
          companyName: 'Electronniy Rieltor',
          location: 'Rusia, Kazán',
          position: 'Desarrollador front-end',
          startDate: new Date(2014, 8),
          endDate: new Date(2015, 2),
          description: 'Es una startup inmobiliaria y mi primer proyecto de SPA.',
          responsibilities: `
* Colaboración con las partes interesadas para discutir detalles de nuevas características, UI / UX;
* Desarrollo, revisión de código;
          `,
          achievements: '* Lanzó con éxito una versión MVP.',
          technologies: ['AngularJS', 'Javascript', 'SCSS', 'Photoshop', 'git'],
      },
      {
          companyName: 'Flatstack',
          location: 'Rusia, Kazán',
          position: 'Desarrollador front-end',
          startDate: new Date(2013, 5),
          endDate: new Date(2014, 8),
          description: 'Flat stack es una empresa de outsourcing que trabaja con startups, principalmente de Estados Unidos.',
          responsibilities: `
* Participación en actividades de equipo (planificación de primavera, revisión, retro) ;
* Creación de plantillas para vistas según maquetas PSD;
* Manejo de formularios con código JS;
          `,
          achievements: '* Lanzó algunos proyectos diferentes, pero la mayoría de ellos no tuvieron éxito (situación típica de las nuevas empresas);',
          technologies: ['Ruby on Rails', 'Javascipt', 'Coffescript', 'JQuery', 'SCSS', 'git', 'Photoshop', 'Agile'],
      },
      {
          companyName: 'Racoons Group',
          location: 'Rusia, Kazán',
          position: 'Desarrollador de pila completa',
          startDate: new Date(2013, 0),
          endDate: new Date(2013, 5),
          description: 'Esta empresa brinda servicios subcontratados para pequeñas empresas y nuevas empresas.',
          responsibilities: `
* Desarrollo de API REST con Ruby on Rails;
* Creación de plantillas para vistas según maquetas PSD;
* Manejo de formularios con código JS;
          `,
          achievements: '* Lanzó un sitio promocional para la compañía rusa de cambio de marca Lucky Strike;',
          technologies: ['Ruby on Rails', 'Javascipt', 'Coffescript', 'JQuery', 'SCSS', 'Photoshop'],
      },
      {
          companyName: 'Finmarket',
          location: 'Rusia, Kazán',
          position: 'Desarrollador front-end',
          startDate: new Date(2012, 8),
          endDate: new Date(2012, 11),
          description: 'Era mi primer trabajo a tiempo completo después de un año en el ejército. El proyecto fue un sistema CRM para una empresa de microfinanzas.',
          responsibilities: `
* Creación de plantillas para vistas según maquetas PSD;
* Manejo de formularios con código JS;
          `,
          technologies: ['Twig', 'JQuery', 'git', 'Photoshop'],
      },
      {
          companyName: 'Funbox',
          location: 'Rusia, Kazán',
          position: 'Desarrollador front-end',
          startDate: new Date(2011, 2),
          endDate: new Date(2011, 6),
          description: 'Otro trabajo a tiempo parcial durante mi curso universitario. Funbox es una empresa B2B para operadores celulares.',
          responsibilities: '* Desarrollo de páginas promocionales para nuevos productos y eventos de acuerdo con maquetas PSD;',
          achievements: '* Familiarizarse con las nuevas tecnologías (Ruby on Rails, Git) ;',
          technologies: ['HAML', 'JQuery', 'Less', 'git', 'Photoshop'],
      },
      {
          companyName: 'Brand',
          location: 'Rusia, Kazán',
          position: 'Desarrollador front-end',
          startDate: new Date(2010, 5),
          endDate: new Date(2011, 2),
          description: 'Es el comienzo de mi carrera. Era un trabajo a tiempo parcial durante mi curso universitario.',
          responsibilities: `
* Desarrollo de páginas promocionales y tiendas electrónicas para empresas locales;
* Configuración de Joomla CMS en el entorno de producción;
          `,
          achievements: `
* Comenzó a aprender PHP;
* Se volvió seguro con el servidor web MySQL y Apache.
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
      label: 'Ruso',
      value: 'Fluido',
    },
    {
      label: 'Inglés',
      value: 'B2',
    },
  ],
  education: [
    {
      name: 'Universidad Técnica Estatal de Kazán',
      startDate: new Date(2006, 8),
      endDate: new Date(2011, 6),
      degree: 'Especialista en ingeniería de equipos de medición electrónica',
    }
  ],
}
