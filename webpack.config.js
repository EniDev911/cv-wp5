const path = require('path');
const webpack = require('webpack');

const envs = { development: 'dev', production: 'prod' };
const env = envs[process.env.NODE_ENV || 'development'];

const config = require(`./config/webpack.${env}.js`);

module.exports = config;
