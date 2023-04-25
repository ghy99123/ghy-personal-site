/* eslint-disable */

/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Skand',
    position: 'Fullstack Developer Intern',
    url: 'https://skand.io/',
    startDate: '2022-11-22',
    endDate: '2023-04-24',
    summary: `Worked as a fullstack developer intern at a Melbourne-based startup, assisting the company to build new features and to refactor existing products in Data management and Explore modules.`,
    highlights: [
      'Developed and maintained <strong>10+</strong> core UI components in the internal UI library using <strong>React.js</strong> and <strong>Storybook</strong>, enabling seamless sharing across 4 different frontend projects',
      'Utilised React.js, <strong>CSS-in-JS</strong> (Styled-components), and <strong>GraphQL</strong> to implement new frontend features and increase user engagement in data management and explore modules',
      'Followed <strong>Test-Driven Development (TDD)</strong> to complete backend logic with <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Jest</strong>, reducing the program’s bugs by <strong>5%</strong>',
    ],
  },
  {
    name: 'Ximalaya FM',
    position: 'Software Developer Intern',
    url: 'https://www.ximalaya.com/',
    startDate: '2022-02-10',
    endDate: '2022-05-20',
    summary: `<a href="https://www.ximalaya.com/">Ximalaya</a> is a popular Chinese audio media company that provides a platform for users to listen to, create, and share audio content such as podcasts, audiobooks, and music. I worked there as a frontend developer intern in the E-commercial department, collaborating with the members in an Agile development team to build a new platform that could bring revenues to company's E commerce field.`,
    highlights: [
      'Streamlined and maintained the supply chain management application by utilising <strong>TypeScript</strong> and React.js with <strong>20,000+</strong> daily orders through the <strong>Agile</strong> development process',
      'Designed and built components for new modules including order management, warehouse management, etc. with <strong>TailwindCSS</strong> and Ant design UI library to simplify CSS development and improve UI consistency',
      'Led the Migration of old modules in the E-commercial settlement platform to a new project with a <strong>micro-frontend</strong> architecture, resulting in faster and more isolated development and easier maintenance',
    ],
  },
  {
    name: 'LvAn Tech, Ltd.',
    position: 'Mobile Developer Intern',
    url: 'https://www.lvanitech.com/',
    startDate: '2020-07-01',
    endDate: '2020-10-30',
    summary: `<a href="https://www.lvanitech.com/">LvAn Tech, Ltd.</a> is a startup focusing on providing electronic signature software and services that comply with global regulatory requirements such as FDA, NMPA, and EMA. The related product is designed to help companies replace traditional paper-based signing processes with secure and efficient digital signatures. I worked there as a mobile developer intern, assisting the company to build their products on mobile end.`,
    highlights: [
      'Applied <strong>Flutter</strong> framework to expand company’s mobile end products on <strong>Android & iOS</strong> platforms, increasing company’s revenue by <strong>25%</strong>',
      'Optimised touch-screen signature process by creating a hand-drawn signature page module with <strong>Canvas</strong>, improving the user experience significantly for signing important digital documents',
    ],
  },
];

export default work;
