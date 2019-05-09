/* config-overrides.js */
const rewireLess = require('react-app-rewire-less');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    addBabelPlugins
} = require('customize-cra');

const addUglifyJsPlugin = (opts = {}) => config => {
    if (!config.optimization) {
        config.optimization = {};
    }
    if (!config.optimization.minimizer) {
        config.optimization.minimizer = [];
    }
    if (process.env.NODE_ENV === 'production') {
        config.optimization.minimizer.push(
            new uglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_console: true,
                        drop_debugger: true
                    }
                },
                ...opts
            })
        );
    }
    return config;
};

module.exports = {
    webpack: override(
        // 按需引入antd
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
        }),

        // less
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: {'@primary-color': '#1da57a'}
        }),

        // 设置别名，便于引用资源
        addWebpackAlias({
            '@': path.join(__dirname, '.', 'src')
        }),

        // 增加webpack插件，打包后去除浏览器console，warnings等
        addUglifyJsPlugin()
    ),

    devServer: (configFunction) => {
        return (proxy, allowedHost) => {
            // 配置代理，便于和不同的后端联调
            const config = configFunction({
                '/portrait-app': {
                    changeOrigin: true,
                    // target: 'https://www.easy-mock.com/mock/5be94defd04fbb4e5d598e1b'
                    // prod
                    target: 'http://103.28.212.196'
                }
            }, allowedHost);

            return config;
        };
    }
};
