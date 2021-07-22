import NextHead from "next/head";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  keyword?: string;
  image?: string;
  jsonLd?: string;
};

const Head: React.FC<Props> = (props) => {
  const title = props.title ? props.title : "虚空蔵ウェブテンプレート";
  const description = props.description ? props.description : "";
  const keyword = props.keyword ? props.keyword : "";
  const url = props.url ? props.url : "https://www.koqzo.com";
  const image = props.image ? props.image : `image path`;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta name="format-detection" content="telephone=no" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@koqzo" />
      <meta name="twitter:creator" content="@koqzo" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={`/favicon.ico`} />
      <link rel="apple-touch-icon" href={`/apple-touch-icon.png`} />
      {props.jsonLd && (
        <script
          key="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: props.jsonLd }}
        />
      )}
    </NextHead>
  );
};

export default Head;
