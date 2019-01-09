/* config-overrides.js */
const rewireLess = require('react-app-rewire-less');
const path = require('path');

// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     config = rewireLess.withLoaderOptions({
//         modifyVars: {
//             "@primary-color": "#1DA57A"
//         }
//     })(config, env);

//     return config;
// };

module.exports = {
    webpack: (config, env) => {
        // 配置less
        config = rewireLess.withLoaderOptions({
            modifyVars: {
                "@primary-color": "#1DA57A"
            }
        })(config, env);

        // 配置别名，便于文件路径的引用
        config.resolve.alias = {
            '@': path.join(__dirname, '.', 'src')
        };

        return config;
    },

    devServer: (configFunction) => {
        console.log('configFunction: ', configFunction);
        return function(proxy, allowedHost) {
            const config = configFunction({
                host: '0.0.0.0',
                port: 3000,
                https: false,
                hotOnly: false,
                proxy: {
                    '/hrm': {
                        changeOrigin: true,
                        target: 'https://www.easy-mock.com/mock/5be94defd04fbb4e5d598e1b'
                    }
                }
            }, allowedHost);

            return config;
        }
    }
};