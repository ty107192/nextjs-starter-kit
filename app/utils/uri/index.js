export function url(path) {
    if (process.env.CDN_URL) {
        return `${process.env.CDN_URL}/${path}`;
    }
    return `/${path}`;
}

export function asset(path) {
    if (process.env.ASSET_URL) {
        return `${process.env.ASSET_URL}/static/${path}`;
    }
    return `/static/${path}`;
}
