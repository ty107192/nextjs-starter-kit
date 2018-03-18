import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(context) {
        const props = await super.getInitialProps(context);

        const sheet = new ServerStyleSheet();
        const page = context.renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        const {req: {locale, localeDataScript}} = context;
        return {
            ...props,
            ...page,
            styleTags,
            locale,
            localeDataScript
        };
    }


    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="index,follow"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
                    <title>nextjs-base-boilerplate</title>

                    <link rel="stylesheet" href="/_next/static/style.css" />
                    {this.props.styleTags}
                </Head>
                <body className="body">
                    {/* _document */}
                    <Main/>

                    <script
                        dangerouslySetInnerHTML={{
                            __html: this.props.localeDataScript
                        }}
                    />

                    <NextScript/>
                </body>
            </html>
        );
    }
}
