const skills = [
  {
    title: 'Javascript',
    competency: 9.5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    competency: 9,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 9.5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 6,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    competency: 6,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Git',
    competency: 8,
    category: ['Others'],
  },
  {
    title: 'Figma',
    competency: 7,
    category: ['Others'],
  },
  {
    title: 'Flutter',
    competency: 4,
    category: ['Others'],
  },
  {
    title: 'TypeScript',
    competency: 7,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'TailwindCSS',
    competency: 6,
    category: ['Web Development'],
  },
  {
    title: 'Python',
    competency: 6,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 6,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Haskell',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Dart',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'GraphQL',
    competency: 7,
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = ['#6968b3', '#40494e', '#515dd4', '#e47272', '#64cb7b'];

const categories = [
  'Languages',
  'Web Development',
  'Javascript',
  'Databases',
  'Others',
].map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
