module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@configs": "./src/configs",
            "@constants": "./src/constants",
            "@containers": "./src/containers",
            "@controllers": "./src/controllers",
            "@helpers": "./src/helpers",
            "@hooks": "./src/hooks",
            "@interfaces": "./src/interfaces",
            "@models": "./src/models",
            "@navigation": "./src/navigation",
            "@pages": "./src/pages",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@store": "./src/store",
            "@themes": "./src/themes",
          },
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
