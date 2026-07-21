import { BRAND_NAME } from './brand';

export interface SeoInput {
  title: string;
  description: string;
  path: string;
}

export function buildSeo({ title, description, path }: SeoInput) {
  const siteUrl = 'https://exemplu.ro';
  const canonical = new URL(path, siteUrl).toString();

  return {
    title: `${title} · ${BRAND_NAME}`,
    description,
    canonical,
  };
}