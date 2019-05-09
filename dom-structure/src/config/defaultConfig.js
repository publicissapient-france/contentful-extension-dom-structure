const defaultConfig = [
  {
    name: 'None',
    hex: 'None',
    shade: '',
    slug: 'None'
  },
  {
    name: 'Black',
    hex: '#000000',
    shade: '',
    slug: 'Black',
    rgb: '(0,0,0)'
  },
  {
    name: 'White',
    hex: '#FFFFFF',
    shade: '',
    slug: 'White',
    rgb: '(255,255,255)'
  },
  {
    name: 'Grey',
    hex: '#303030',
    shade: '90',
    slug: 'Grey-90',
    rgb: '(48,48,48)'
  },
  {
    name: 'Grey',
    hex: '#4C4C4C',
    shade: '80',
    slug: 'Grey-80',
    rgb: '(76,76,76)'
  },
  {
    name: 'Grey',
    hex: '#666666',
    shade: '70',
    slug: 'Grey-70',
    rgb: '(102,102,102)'
  },
  {
    name: 'Grey',
    hex: '#808080',
    shade: '60',
    slug: 'Grey-60',
    rgb: '(128,128,128)'
  },
  {
    name: 'Grey',
    hex: '#989898',
    shade: '50',
    slug: 'Grey-50',
    rgb: '(152,152,152)'
  },
  {
    name: 'Grey',
    hex: '#B2B2B2',
    shade: '40',
    slug: 'Grey-40',
    rgb: '(178,178,178)'
  },
  {
    name: 'Grey',
    hex: '#CBCBCB',
    shade: '30',
    slug: 'Grey-30',
    rgb: '(203,203,203)'
  },
  {
    name: 'Grey',
    hex: '#E5E5E5',
    shade: '20',
    slug: 'Grey-20',
    rgb: '(229,229,229)'
  },
  {
    name: 'Grey',
    hex: '#F0F0F0',
    shade: '10',
    slug: 'Grey-10',
    rgb: '(240,240,240)'
  },
  {
    name: 'Grey',
    hex: '#FAFAFA',
    shade: '5',
    slug: 'Grey-5',
    rbg: '(250,250,250)'
  }

];

const sections = [
  {
    name: 'FullLayout',
    specs: ['backgroundColor'],
    content: []
  },
  {
    name: 'BasicLayout',
    specs: ['backgroundColor'],
    content: ['title', 'content']
  }
];

const components = [
  {
    name: 'TextContent',
    specs: ['backgroundColor'],
    content: ['title', 'content']
  },
  {
    name: 'MainTitle',
    specs: ['backgroundColor', 'color'],
    content: ['title']
  }
];

export { defaultConfig, sections, components };
