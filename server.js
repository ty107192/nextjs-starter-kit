const next = require('next');
const express = require('express');

// Middleware require
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {join} = require('path');

// Routes require
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

// config
const appConfig = require('./config/app');
const i18nextConfig = require('./config/lang');

// i18next
const {i18nInstance} = require('./app/modules/i18next');
const Backend = require('i18next-node-fs-backend');
const i18nextMiddleware = require('i18next-express-middleware');


// Listen Logger
const logger = require('./app/modules/logger');


const customHost = appConfig.hostUrl;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(appConfig.hostPort, 10);
const dev = appConfig.env !== 'production';
const app = next({dev});
const handle = webRouter.getRequestHandler(app);


// init i18next with serverside settings
// using i18next-express-middleware
i18nInstance
    .use(Backend)
    .use(cookieParser())
    .use(i18nextMiddleware.LanguageDetector)
    .init(i18nextConfig, () => {
        app.prepare().then(() => {
            const server = express();

            server.use(cors({
                credentials: true
            }));

            // Middleware
            server.use(express.static('static/root'));
            server.use(i18nextMiddleware.handle(i18nInstance));
            server.use('/resources/lang', express.static(join(__dirname, './resources/lang'))); // serve locales for client
            if (dev && i18nextConfig.saveMissing) {
                // 只有在開發模式才進行補單字
                server.post('/api/lang/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18nInstance));
            }

            server.use(helmet());
            server.use(cookieParser());

            // Routes
            server.get('/api/*', apiRouter);
            server.get('/view/*', (req, res) => {
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

