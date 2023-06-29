module.exports = function (context, options) {
  const { id, ...pluginOptions } = options;
  return {
    name: "docusaurus-plugin-less-hash",
    configureWebpack(config, isServer, utils) {
      const { getStyleLoaders } = utils;
      const isProd = process.env.NODE_ENV === "production";
      return {
        module: {
          rules: [
            {
              test: /\.less$/,
              oneOf: [
                {
                  test: /\.module\.less$/,
                  use: [
                    ...getStyleLoaders(
                      isServer,
                      {
                        modules: {
                          localIdentName: "[name]_[local]_[hash:base64:5]",
                          exportOnlyLocals: isServer
                        },
                        importLoaders: 1,
                        sourceMap: !isProd
                      }
                    ),
                    {
                      loader: "less-loader",
                      options: pluginOptions || {}
                    }
                  ]
                },
                {
                  use: [
                    ...getStyleLoaders(isServer),
                    {
                      loader: "less-loader",
                      options: pluginOptions || {}
                    }
                  ]
                }
              ]
            }
          ]
        }
      };
    }
  };
};
