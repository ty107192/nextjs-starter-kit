const {join} = require('path');

const config = {
    debug: process.env.I18N_DEBUG === 'true',
    preload: ['en-us'], // 預先載入語系字典檔
    whitelist: ['en-us', 'zh-cn', 'zh-tw'], // 可使用的語系白名單
    fallbackLng: 'en-us', // 預設使用的語系(當沒指定任何語系的時候)
    ns: ['common'], // 預先載入的語系字典檔類別
    defaultNS: 'common', // 預設使用的字典檔類別
    load: 'currentOnly', // 語系碼格式 ex:
    //                               'all'          -> 'en-US', 'en', 'dev'
    //                               'currentOnly'  -> 'en-US
    //                               'languageOnly' -> 'en'
    saveMissing: false, // 是否儲存有使用到卻位定義的字典
    lowerCaseLng: true, // 是否改成小寫 en-US
    backend: {
        // 字典檔讀取路徑
        loadPath: process.env.NODE_ENV !== 'storybook' ? join(__dirname, '../../lang/{{lng}}/{{ns}}.json') : '//localhost:3001/lang/{{lng}}/{{ns}}.json',
        // 有使用到卻位定義的字典寫入路徑
        addPath: process.env.NODE_ENV !== 'storybook' ? join(__dirname, '../../lang/{{lng}}/{{ns}}.missing.json') : '//localhost:3001/lang/{{lng}}/{{ns}}.missing.json'
    },
    // ==================== 只有ServerSide使用, ClientSide不使用這裡的設定 ====================
    detection: {
        order: ['querystring', 'cookie', 'header'], // 允許設定語系的方法 (ex: querystring,cookie,header)
        lookupQuerystring: 'lang', // 如果使用querystring,設定Key （ex: lang -> //localhost/home?lang=en-us)
        lookupSession: 'i18next', // 如果使用session,設定Key
        caches: false // client-side:false, server-side: ['cookie']
    }
};


module.exports = config;
