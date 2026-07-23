import { BRAND_NAME, DEFAULT_OG_IMAGE, SITE_URL } from './brand';

export interface SeoInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function buildSeo({ title, description, path, ogImage }: SeoInput) {
  const canonical = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(ogImage || DEFAULT_OG_IMAGE, SITE_URL).toString();

  return {
    title: `${title} · ${BRAND_NAME}`,
    description,
    canonical,
    ogImage: imageUrl,
  };
}
