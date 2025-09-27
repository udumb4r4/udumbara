import type { APIRoute } from 'astro';
import { withBase } from '../utils/helpers';

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(withBase('/sitemap-index.xml'), site);
  return new Response(getRobotsTxt(sitemapURL));
};