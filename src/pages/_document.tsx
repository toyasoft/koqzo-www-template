import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=G-WM3QG8PSJB`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "");
              `,
              }}
            />
          </>
        )}
      </Html>
    );
  }
}

export default MyDocument;
