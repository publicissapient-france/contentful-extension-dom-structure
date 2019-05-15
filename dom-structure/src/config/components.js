const config = [
  {
    name: 'TextContent',
    specs: ['backgroundColor'],
    content: ['Title']
  },
  {
    name: 'MainTitle',
    specs: ['backgroundColor', 'color'],
    content: ['Title', 'Subtitle']
  },
  {
    name: 'Leading',
    specs: ['backgroundColor', 'color'],
    content: ['Title', 'Tagline']
  }
];/*
let components = [];
config.forEach((items, i) => {
  console.log('items :', items);
  components[i] = items;
});

console.log('components on CONFIGURATION', components); */

export default config;
