const siteUrl = 'https://www.shareuhack.com'

module.exports = {
  siteUrl,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  alternateRefs: [
    {
      href: `${siteUrl}/en-US`,
      hreflang: 'en-US',
    },
    {
      href: `${siteUrl}/zh-TW`,
      hreflang: 'zh-TW',
    },
    {
      href: `${siteUrl}/zh-CN`,
      hreflang: 'zh-CN',
    },
    {
      href: `${siteUrl}/zh-HK`,
      hreflang: 'zh-HK',
    },
    {
      href: `${siteUrl}/zh-MO`,
      hreflang: 'zh-MO',
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/about'),
    await config.transform(config, '/posts/about-us'),
    await config.transform(config, '/posts/best-resources-to-learn-negotiation'),
    await config.transform(config, '/posts/how-to-become-a-frontend-engineer'),
    await config.transform(config, '/posts/how-to-get-best-price-on-udemy-courses'),
    await config.transform(config, '/posts/how-to-get-pmp-2021'),
    await config.transform(config, '/posts/learn-to-financial-freedom-from-amazon-bestsellers'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      // {
      //   userAgent: 'test-bot',
      //   allow: ['/path', '/path-2'],
      // },
      // {
      //   userAgent: 'black-listed-bot',
      //   disallow: ['/sub-path-1', '/path-2'],
      // },
    ],
    // additionalSitemaps: [
    //   'https://example.com/my-custom-sitemap-1.xml',
    //   'https://example.com/my-custom-sitemap-2.xml',
    //   'https://example.com/my-custom-sitemap-3.xml',
    // ],
  },
}
