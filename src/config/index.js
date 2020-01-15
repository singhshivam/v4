module.exports = {
  siteTitle: 'Shivam Singh | Software Engineer',
  siteDescription:
    'Shivam Singh is a software engineer based in New York who specializes in developing exceptional, high-quality websites and applications.',
  siteKeywords:
    'Shivam, Singh, Shivam Singh, software engineer, front-end engineer, web developer, javascript, rails, ruby, stony brook',
  siteUrl: 'https://singhshivam.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-51909229-3',
  googleVerification: 'vkyfk7CckGwWaXxLjPGquRktAAjyUg_P68NSvszOUnU',
  name: 'Shivam Singh',
  location: 'Stony Brook, NY',
  email: 'singhshivam.172@gmail.com',
  github: 'https://github.com/singhshivam',
  twitterHandle: '@s6s5a2',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/singhshivam',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/singhshivam172',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/singh404',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/s6s5a2',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
