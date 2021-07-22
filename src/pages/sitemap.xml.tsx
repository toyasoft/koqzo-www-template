import { GetServerSidePropsContext } from "next";

async function generateSitemapXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  xml += `
      <url>
        <loc>https://www.koqzo.com</loc>
        <lastmod>2021-07-21</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1</priority>
      </url>
    `;

  xml += `</urlset>`;
  return xml;
}

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml();

  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24時間のキャッシュ
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);

  return {
    props: {},
  };
};

const Sitemap = () => null;
export default Sitemap;
