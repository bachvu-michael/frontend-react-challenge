import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  //render default value
  render() {
    return (
      <Html>
        <Head >
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body className="directory">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument