const { uuid } = require('../plugins/uuid.plugin');
const { http } = require('../plugins/hhtp-client.plugin');
const buildLogger = require('../plugins/logger.plgin')

module.exports = {
    uuid,
    http,
    buildLogger
}