const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Manually workaround resolution errors
config.resolver.resolveRequest = (context, moduleName, platform) => {
  switch (moduleName) {
    // See: https://github.com/TMeerhof/fractional-indexing-jittered/issues/1
    case 'fractional-indexing-jittered':
      // Resolve it as node module, meaning CJS code
      return { type: 'sourceFile', filePath: require.resolve('fractional-indexing-jittered') };

    default:
      return context.resolveRequest(context, moduleName, platform);
  }
}

module.exports = config;
