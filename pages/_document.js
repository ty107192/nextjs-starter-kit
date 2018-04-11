import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {asset} from "@utils/uri/index";

export default class MyDocument extends Document {
    static async getInitialProps({renderPage}) {

        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    render() {
        return (
            <html>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <title>nextjs-base-boilerplate</title>

                <link rel="stylesheet" href={asset('plugins/icomoon/style.css')} />
                <link rel="stylesheet" href="/_next/static/style.css"/>
                {this.props.styleTags}
            </Head>
            <body>
            {/* _document */}
            <Main/>

            <NextScript/>
            </body>
            </html>
        );
    }
}
