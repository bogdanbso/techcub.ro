import { BRAND_NAME, SITE_URL, CONTACT_EMAIL, CONTACT_PHONE } from './brand';

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: BRAND_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    areaServed: 'RO',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cluj-Napoca',
      addressCountry: 'RO',
    },
  };
}