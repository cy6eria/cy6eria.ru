import React from 'react';
import Document, {
  Html, Head, NextScript, Main,
} from 'next/document';
import { YandexMetrika } from '../components/YandexMetrika';

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {    
    const isDev = process.env.NODE_ENV === 'development';
    return (
      <Html>
        <Head>
          {isDev ? null : <YandexMetrika />}
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300|Pacifico:400" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
