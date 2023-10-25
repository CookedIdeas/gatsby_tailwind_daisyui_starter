import React from 'react';
import { useSiteMetadata } from './useSiteMetadata';
import ogImage from './og-image.png';

const Seo = ({
  children,
  overwriteTitle,
  overwriteDescrption,
  pagePathname,
}) => {
  const { title, description, domain, lang } = useSiteMetadata();

  const headContent = {
    title: overwriteTitle || title,
    description: overwriteDescrption || description,
    lang: lang,
    url: `${domain}${pagePathname || ``}`,
  };

  return (
    <>
      <html lang={headContent.lang} />
      <title>{headContent.title}</title>
      <meta name="description" content={headContent.description} />
      <meta name="image" content={headContent.image} />
      <meta property="og:title" content={headContent.title} />
      <meta property="og:description" content={headContent.description}></meta>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={headContent.url} />
      <meta property="og:image" content={domain + '/' + ogImage} />
      <meta property="og:image:width" content="700" />
      <meta property="og:image:height" content="900" />
      {children}
    </>
  );
};
export default Seo;
