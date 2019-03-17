import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render () {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="shortcut icon" href="/favicon/favicon.ico" />
                    <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
                    <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300|Roboto" />
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
