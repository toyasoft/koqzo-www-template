// 記事
export const generateArticle = (article, name) => {
  if (article) {
    const siteUrl = "https://www.koqzo.com";
    const path = `/article/${article.id}`;
    const url = `${siteUrl}${path}`;
    const defaultOgp = ``;

    const imageUrl = article.images[0]
      ? `${process.env.NEXT_PUBLIC_IMAGE_HOST}/uploads/${article.images[0].id}`
      : defaultOgp;
    const jsonLd = [
      {
        "@context": "http://schema.org",
        "@type": "Article",
        name: article.subject,
        headline: article.subject,
        datePublished: article.createdAt,
        dateModified: article.createdAt,
        url: url,
        mainEntityOfPage: url,
        image: [imageUrl],
        description: ``,
        author: {
          "@type": "Person",
          name: "KOQZO",
        },
        publisher: {
          "@type": "Organization",
          name: "KOQZO",
          logo: {
            "@type": "ImageObject",
            url: defaultOgp,
          },
        },
      },
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.koqzo.com",
              name: "ホーム",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": `http://www.koqzo.com/${article.genre}`,
              name: name,
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": `http://www.koqzo.com/article/${article.id}`,
              name: article.title,
            },
          },
        ],
      },
    ];
    return JSON.stringify(jsonLd);
  }
};

// ページ
export const generatePage = (content, name) => {
  const jsonLd = [
    {
      "@context": "http://schema.org",
      "@type": "website",
      name: "虚空蔵ウェブテンプレート",
      inLanguage: "jp",
      publisher: {
        "@type": "Organization",
        name: "株式会社トヤソフト",
        logo: {
          "@type": "ImageObject",
          url: ``,
        },
      },
      copyrightYear: "2021",
      headline: `${name}｜koqzo - モノノベ`,
      description: `${name}をテーマにした記事。koqzo「モノノベ」とは世の中のあらゆる「モノ」について深掘りするデジタルモノメディアです。日々のライフスタイルの新たなスパイスになれば幸いです。`,
      url: `https://www.koqzo.com/${content}`,
    },
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": "https://www.koqzo.com",
            name: "ホーム",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": `https://www.koqzo.com/${content}`,
            name: name,
          },
        },
      ],
    },
  ];
  return JSON.stringify(jsonLd);
};
