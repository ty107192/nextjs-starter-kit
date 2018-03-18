const dotEnv = require('dotenv');
dotEnv.config();

const next = require("next");
const express = require("express");

// Middleware require
const helmet = require('helmet');
const cookieParser = require('cookie-parser')
const intlMiddleware = require('./middleware/intl');


// Routes require
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api');


const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = webRouter.getRequestHandler(app)


app.prepare().then(() => {

    const server = express();

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

    //Any Request
    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> ready  on http://localhost:${port}`);
    });
});