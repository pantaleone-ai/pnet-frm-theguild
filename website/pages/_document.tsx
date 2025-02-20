import Document, { Head, Html, Main, NextScript } from 'next/document';
import { OrganizationJsonLd } from 'next-seo';
import { getCssText } from '../stitches.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <OrganizationJsonLd
            url="https://pantaleone.net"
            logo="https://pnet-frm-theguild.vercel.app/pantaleone-header-logo.svg"
            name="Pantaleone.net"
          />
          <style dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <meta charSet="utf-8" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS Feed for Pantaleone.net"
            href="/feed.xml"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
