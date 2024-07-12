// metro.config.js
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    },
    resolver: {
      sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx'],
      assetExts: assetExts.filter(ext => ext !== 'svg'),
    },
    watchFolders: [
      // Add any additional watch folders here
    ],
    server: {
      // Custom server options
    },
    // Note: watchOptions was a typo or misunderstood config. Metro doesn't have a `watchOptions` field.
  };
})();
