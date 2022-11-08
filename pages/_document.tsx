import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body style={{ width: "100%", margin: 0 }}>
          <Main />
          <div id='modal'/>
          <NextScript />
        </body>
      </Html>
    );
  }
}