import xml from 'xml';

import Models from '../models';

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
export const renderSitemap = () => {
    return new Promise((resolve) => {
        Models.Post.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then((data) => {
            resolve(xml(buildUrlset([
                buildURLBlock('https://cy6eria.ru/', '2018-03-17'),
                buildURLBlock('https://cy6eria.ru/about', '2018-03-17'),
                buildURLBlock('https://cy6eria.ru/posts', data[0].dataValues.updatedAt.toISOString()),
                ...data.map(i => {
                    return buildURLBlock(
                        `https://cy6eria.ru/posts/${i.dataValues.id}`,
                        i.dataValues.updatedAt.toISOString()
                    );
                })
            ]), { declaration: true }));
        }, (err) => {
            resolve(xml(buildUrlset([
                buildURLBlock('https://cy6eria.ru/', '2018-03-17'),
                buildURLBlock('https://cy6eria.ru/about', '2018-03-17')
            ]), { declaration: true }))  
        });
    });
}
