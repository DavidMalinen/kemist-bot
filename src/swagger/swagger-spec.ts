import packageJson from '@packageJson';

export default {
    openapi: '3.0.0',
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
        title: 'KEMIST BOT API',
        version: packageJson.version,
        description: 'Public APIs used by the KEMIST BOT'
    },
};
