import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {

    static async getInitialProps (context) {
        const props = await super.getInitialProps(context)

        const sheet = new ServerStyleSheet()
        const page = context.renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()

        const {req: {locale, localeDataScript}} = context
        return {
            ...props,
            ...page,
            styleTags,
            locale,
            localeDataScript
        }
    }



    render() {
        return (
            <html>
            <Head>
                <title>nextjs5-base-boilerplate</title>
                {this.props.styleTags}
            </Head>
            <body>
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
