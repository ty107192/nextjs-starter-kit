// const dotEnv = require('dotenv').config();

const next = require('next');
const express = require('express');

// Middleware require
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {join} = require('path');

// Routes require
const webRouter = require('../routes');
const apiRouter = require('./api');




// i18next
const {i18nInstance} = require('../modules/i18next');
const Backend = require('i18next-node-fs-backend');
const i18nextMiddleware = require('i18next-express-middleware');
const i18nextConfig = require('../modules/i18next/config');


// Listen Logger
const logger = require('./utils/logger');


const customHost = process.env.HOST_URL;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10);
const dev = process.env.NODE_ENV !== 'production';
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

            // 切換語言時需要載入未載入的字典檔
            server.use('/lang', express.static(join(__dirname, '../lang')));
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
                app.render(req, res, '/404');
                // res.status(404).json({error: 'not found'});
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

