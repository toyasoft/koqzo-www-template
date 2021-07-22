import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "src/components/templates/Layout";
import Head from "src/components/templates/Head";
import Main from "src/components/templates/Main";
import Loading from "src/components/templates/Loading";
// import { initEnvironment } from "src/libs/RelayEnvironment";
// import { fetchQuery } from "react-relay";
// import IndexPage_indexQuery from "src/queries/IndexPage";

const generateJsonLd = () => {
  const jsonLd = [
    {
      "@context": "http://schema.org",
      "@type": "website",
      name: "虚空蔵テンプレート",
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
      headline: "虚空蔵テンプレート",
      description: "",
      url: "https://www.koqzo.com",
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
      ],
    },
  ];
  return JSON.stringify(jsonLd);
};

type Props = {
  store: any;
};

const IndexPage: NextPage<Props> = (props) => {
  const router = useRouter();
  return (
    <>
      {router.isFallback ? (
        <Loading />
      ) : (
        <Layout>
          <Head jsonLd={generateJsonLd()} />
          <Main>KOQZO</Main>
        </Layout>
      )}
    </>
  );
};

// export async function getStaticProps() {
//   const environment = initEnvironment({});
//   let queryProps = null;

//   await fetchQuery(environment, IndexPage_indexQuery, {
//   })
//     .toPromise()
//     .then((data) => {
//       queryProps = data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   if (!queryProps) {
//     return {
//       notFound: true,
//     };
//   }

//   const initialRecords = environment.getStore().getSource().toJSON();
//   return {
//     props: {
//       ...queryProps,
//       initialRecords,
//     },
//     revalidate: 1,
//   };
// }

export default IndexPage;
