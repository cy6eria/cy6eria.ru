import React, { Fragment } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    renderCounter = () => (
        <Fragment>
            <script src="/counter.js"></script>
            <noscript>
                <div>
                    <img
                        src="https://mc.yandex.ru/watch/47856335"
                        style={{
                            position: 'absolute',
                            left: '-9999px',
                        }}
                        alt=""
                    />
                </div>
            </noscript>
        </Fragment>
    )

    render () {
        const isDev = process.env.NODE_ENV === 'development';
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
                    { isDev ? null : this.renderCounter()}
                </body>
            </Html>
        );
    }
}

export default MyDocument;
