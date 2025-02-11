/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  outDir: "./public",
  changefreq: "monthly",
  priority: 0.7,
  additionalPaths: async (config) => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    return sections.map((section) => ({
      loc: `${config.siteUrl}/#${section}`,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
