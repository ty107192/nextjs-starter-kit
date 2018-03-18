const dotEnv = require('dotenv');

dotEnv.config();

const next = require('next');
const express = require('express');

// Middleware require
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const intlMiddleware = require('../middleware/intl');
const cors = require('cors');

// Routes require
const webRouter = require('../routes/web');
const apiRouter = require('../routes/api');

// Listen Logger
const logger = require('./logger');


const customHost = process.env.HOST_URL;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = webRouter.getRequestHandler(app);


app.prepare().then(() => {
    const server = express();

    server.use(cors({
        origin:
                prettyHost.indexOf('http') !== -1 ? prettyHost : `http://${prettyHost}`,
        credentials: true
    }));

    // Middleware
    server.use(helmet());
    server.use(cookieParser());
    server.use(intlMiddleware);

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
