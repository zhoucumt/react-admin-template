export default {

    cookieExpires: 1,

    useI18n: true,

    /**
     * @description api请求基础路径
     */
    baseUrl: {
        // dev: 'https://www.easy-mock.com/mock/5be94defd04fbb4e5d598e1b',
        dev: '/hrm',
        pro: 'https://produce.com'
    },

    homeName: 'home',

    plugin: {
        'error-store': {
            showInHeader: true,
            developmentOff: true
        }
    }
}