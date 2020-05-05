const xml = require('xml');

const buildUrlset = (urls) => [{
    urlset: [
        { _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
        ...urls
    ]
}];

const buildURLBlock = (loc, lastmod) => ({
    url: [ { loc }, { lastmod } ]
});

/** Генерирует карту сайта. */
module.exports = (posts) => new Promise((resolve) => {
  const entries = [
    buildURLBlock('https://cy6eria.ru/', '2018-03-17'),
    buildURLBlock('https://cy6eria.ru/about', '2018-03-17'),
  ];

  if (posts.length > 0) {
    entries.push(
      buildURLBlock('https://cy6eria.ru/posts', posts[0].updatedAt.toISOString())
    );

    posts.forEach((i) => {
      entries.push(buildURLBlock(
        `https://cy6eria.ru/posts/${i._id}`,
        i.updatedAt.toISOString(),
      ));
    });
  }

  resolve(xml(buildUrlset(entries), { declaration: true }))  
});
