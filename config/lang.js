const {join} = require('path');

const config = {
    preload: ['en-US', 'zh-CN', 'zh-TW'], // preload all langages
    whitelist: ['en-US', 'zh-CN', 'zh-TW'],
    fallbackLng: 'en-US',
    ns: ['common'], // need to preload all the namespaces
    defaultNS: 'common',
    load: 'currentOnly', // language codes to lookup, given set language is 'en-US': 'all' --> ['en-US', 'en', 'dev'], 'currentOnly' --> 'en-US', 'languageOnly' --> 'en'
    detection: {
        order: ['querystring', 'cookie', 'header'],
        lookupQuerystring: 'lang',
        lookupSession: 'i18next',
        caches: false // ['cookie']
    },
    backend: {
        loadPath: join(__dirname, '../resources/lang/{{lng}}/{{ns}}.json'),
        addPath: join(__dirname, '../resources/lang/{{lng}}/{{ns}}.missing.json')
    },
    // 追加
    debug: process.env.I18N_DEBUG === 'true',
    saveMissing: false,
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
        format: (value, format, lng) => {
            if (format === 'uppercase') return value.toUpperCase();
            return value;
        }
    }
};

module.exports = config;
