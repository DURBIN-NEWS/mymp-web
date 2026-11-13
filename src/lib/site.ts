/**
 * The canonical origin for this deployment.
 *
 * Set NEXT_PUBLIC_SITE_URL in the host's environment settings once the real
 * domain is attached. Until then it falls back to the URL Vercel assigns, so
 * canonical links and the sitemap point at the site people can actually open
 * rather than a domain that is not serving this build yet.
 */
/** The site's own public channels, from the owner (2026-09-12). */
export const SITE_EMAIL = 'mymp.bangladesh@gmail.com';
export const SITE_FACEBOOK = 'https://www.facebook.com/mymp.bd';

/**
 * The founder, as the one Person entity published at mdhs.bd (its @id is the
 * link search engines follow), so the two sites describe the same person.
 */
export const FOUNDER_URL = 'https://mdhs.bd/';
export const FOUNDER = {
  '@type': 'Person',
  '@id': `${FOUNDER_URL}#person`,
  name: 'Md Sumon Howlader',
  alternateName: 'মো. সুমন হাওলাদার',
  url: FOUNDER_URL,
  sameAs: [
    'https://www.facebook.com/HeySumon.mdh/',
    'https://www.linkedin.com/in/sumon-mdh/',
    'https://x.com/sumon_mdh',
    'https://www.instagram.com/sumon_mdh',
    'https://www.threads.com/@sumon_mdh',
  ],
};

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');
