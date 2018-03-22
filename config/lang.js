const {join} = require('path');

const config = {
    preload: ['en-us'], // preload all langages
    whitelist: ['en-us', 'zh-cn', 'zh-tw'], // 白名單
    fallbackLng: 'en-us',
    ns: ['common'], // need to preload all the namespaces
    defaultNS: 'common',
    load: 'currentOnly', // language codes to lookup, given set language is 'en-US': 'all' --> ['en-US', 'en', 'dev'], 'currentOnly' --> 'en-US', 'languageOnly' --> 'en'
    detection: {
        order: ['querystring', 'cookie', 'header'],
        lookupQuerystring: 'lang',
        lookupSession: 'i18next',
        caches: false // client-side:false, server-side: ['cookie']
    },
    backend: {
        loadPath: join(__dirname, '../resources/lang/{{lng}}/{{ns}}.json'),
        addPath: join(__dirname, '../resources/lang/{{lng}}/{{ns}}.missing.json')
    },
    // 追加
    debug: process.env.I18N_DEBUG === 'true',
    saveMissing: false,
    lowerCaseLng: true // 是否改成小寫 en-US
};


module.exports = config;
