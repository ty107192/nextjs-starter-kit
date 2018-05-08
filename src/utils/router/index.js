import rules from '@routes/config';
import {find, words} from 'lodash';

/**
 * 網址路徑轉路由名稱
 * @param pathName
 * @returns {*}
 */
export function pathToName(pathName) {
    const basePath = words(pathName, /[^? ]+/g);
    const sameRoutePath = find(rules, {pattern: basePath[0]}); // get base path, not query string

    return sameRoutePath.name;
}
