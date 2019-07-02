require('babel-register')({
  presets: ['es2015', 'react'],
});

const Sitemap = require('react-router-sitemap').default;
const router = require('./routes').default;

function generateSitemap() {
  return new Sitemap(router)
    .build('https://jonathanfilbert.netlify.com/')
    .save('./build/sitemap.xml');
}

generateSitemap();
