// app/MetaTags.tsx
import Head from "next/head";

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  keywords?: string;
  author?: string;
}

const MetaTags = ({ 
  title, 
  description, 
  image = "/og-image.jpg", 
  url = "https://dashfloors.com",
  keywords = "events, customization, artists, merchandise, dashfloors",
  author = "Dashfloors Team"
}: MetaTagsProps) => {
  return (
    <Head>
      <title>{title}</title>
      
      {/* Meta Tags Essenciais */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default MetaTags;
