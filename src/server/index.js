const dotEnv = require('dotenv');

dotEnv.config();

const next = require('next');
const express = require('express');

// Middleware require
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const intlMiddleware = require('../middleware/intl');
const cors = require('cors');
const {join} = require('path');

// Routes require
const webRouter = require('../routes/web');
const apiRouter = require('../routes/api');

//i18next
const i18n = require('../i18next');
const Backend = require('i18next-node-fs-backend');
const i18nextMiddleware = require('i18next-express-middleware');


// Listen Logger
const logger = require('./logger');


const customHost = process.env.HOST_URL;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = webRouter.getRequestHandler(app);


// init i18next with serverside settings
// using i18next-express-middleware
i18n
    .use(Backend)
    .use(cookieParser())
    .use(i18nextMiddleware.LanguageDetector)
    .init({
        preload: ['en-US', 'zh-CN', 'zh-TW'], // preload all langages
        whitelist: ['en-US', 'zh-CN', 'zh-TW'],
        fallbackLng: 'en-US',
        ns: ['common'], // need to preload all the namespaces
        defaultNS: 'common',
        load: 'currentOnly', // language codes to lookup, given set language is 'en-US': 'all' --> ['en-US', 'en', 'dev'], 'currentOnly' --> 'en-US', 'languageOnly' --> 'en'
        detection: {
            order: ['querystring', 'cookie', 'header'],
            lookupQuerystring: 'lang',
            caches: false // ['cookie']
        },
        backend: {
            loadPath: join(__dirname, '../../static/locales/{{lng}}/{{ns}}.json'),
            addPath: join(__dirname, '../../static/locales/{{lng}}/{{ns}}.missing.json')
        }
    }, () => {

        app.prepare().then(() => {
            const server = express();

            server.use(cors({
                origin:
                    prettyHost.indexOf('http') !== -1 ? prettyHost : `http://${prettyHost}`,
                credentials: true
            }));

            // Middleware
            server.use(i18nextMiddleware.handle(i18n));
            server.use('/locales', express.static(join(__dirname, '../../static/locales'))); // serve locales for client
            server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n)); //missing keys

            server.use(helmet());
            server.use(cookieParser());

            // Routes
            server.get('/api/*', apiRouter);
            server.get('/app/*', (req, res) => {
                // 修正 Nextjs關閉文件路由,但 Client rander 問題
                res.status(404).json({error: 'not found'});
            });

            // Any Request
            server.get('*', (req, res) => handle(req, res));

            server.listen(port, host, (err) => {
                if (err) {
                    return logger.error(err.message);
                }
                logger.appStarted(port, prettyHost);
            });
        });

    });


i18n.on('languageChanged', (lng) => {
    // Keep language in sync
    req.language = req.locale = req.lng = lng;
    req.languages = i18next.services.languageUtils.toResolveHierarchy(lng);
    if (i18next.services.languageDetector) {
        i18next.services.languageDetector.cacheUserLanguage(req, res, lng);
    }
});