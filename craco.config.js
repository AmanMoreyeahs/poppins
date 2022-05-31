const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#4668D6","@link-color": "#4668D6" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
