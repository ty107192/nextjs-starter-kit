const next = require("next");
const webRouter = require('./src/routes/web')
const apiRouter = require('./src/routes/api');

//env
require('dotenv').config();

const express = require("express");
const accepts = require('accepts');
const { parse } = require('url');
const glob = require('glob');
const { basename } = require('path');
const { readFileSync } = require('fs');

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = webRouter.getRequestHandler(app)
// const handle = app.getRequestHandler()
const cookieParser = require('cookie-parser')

const whitelistLocale = ['zh','en'];

//console.log(AllSchema)
app.prepare().then(() => {

    const server = express();
    server.use(cookieParser());
    server.get('/api/*', apiRouter)
    server.get('/app/*', (req, res) => {
        res.status(404).json({error:'not found'});
    });


    const getMessages = (locale) => {
        return require(`./src/lang/${locale}.json`)
    }

    // Get the supported languages by looking for translations in the `lang/` dir.
    const languages = glob.sync('./src/lang/*.json').map((f) => basename(f, '.json'))

    // We need to expose React Intl's locale data on the request for the user's
    // locale. This function will also cache the scripts by lang in memory.
    const localeDataCache = new Map()
    const getLocaleDataScript = (locale) => {
        const lang = locale.split('-')[0]
        if (!localeDataCache.has(lang)) {
            const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`)
            const localeDataScript = readFileSync(localeDataFile, 'utf8')
            localeDataCache.set(lang, localeDataScript)
        }
        return localeDataCache.get(lang)
    }



    server.use(async (req, res, next) => {
        // const parsedUrl = parse(req.url, true)
        const accept = accepts(req);
        //預設為Client Browser,
        //若有設定get request locale,則優先設定 request locale
        //再來才判斷 cookie 的語系,來判斷
        let locale = accept.language(languages);
        if(req.query.locale && whitelistLocale.indexOf(req.query.locale) !== -1){
            locale = req.query.locale;
        }else if(req.cookies.locale && whitelistLocale.indexOf(req.cookies.locale) !== -1){
            locale = req.cookies.locale;
        }

        req.locale = locale;
        req.localeDataScript = getLocaleDataScript(locale);
        req.messages = await getMessages(locale);
        res.cookie("locale", locale);

        next()
    })




    server.get('*', (req, res) => {
        return handle(req, res)
    })
    server.listen(port, err => {
        if (err) throw err;
        console.log(`> ready  on http://localhost:${port}`);
    });
});