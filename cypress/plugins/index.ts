const injectDevServer = require('@cypress/react/plugins/next')

module.exports = (on: any, config: any) => {
  if (config.testingType === 'component') {
    injectDevServer(on, config)
  }

  return config
}
