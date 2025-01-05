const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require('path');
module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "orgPrit",
    projectName: "frontend2",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    devServer: {
      port: 8081,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  });
};
