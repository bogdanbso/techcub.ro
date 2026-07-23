import { BRAND_NAME, SITE_URL, CONTACT_EMAIL, CONTACT_PHONE, LEGAL_NAME, LEGAL_ADDRESS, SOCIAL_PROFILES } from './brand';

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: BRAND_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    sameAs: SOCIAL_PROFILES,
    areaServed: [
      {
        '@type': 'City',
        name: 'Cluj-Napoca',
      },
      {
        '@type': 'Country',
        name: 'România',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: LEGAL_ADDRESS,
      addressCountry: 'RO',
    },
  };
}
