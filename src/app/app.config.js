var configEnv = require('configEnv').default;
const lodash = require('lodash');

var cfg = {
    applicationEnvironment: window.env,
    applicationModuleName: 'minidi'
};

cfg.appInfo = {
    companyName: 'SGMedia',
    version: '2.5',
    displayName: 'Minidi',
    releaseYear: '2018'
};

cfg.$icms = {
    settings: {},
    plugins: {},
    ui: {}
};

console.log(configEnv);
cfg = lodash.extend(cfg, configEnv);

export default cfg;