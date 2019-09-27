'use strict';

module.exports = function(app) {
    var kelalaianSholat = require('../service/kelalaian-sholat');

    app.route('/').get(kelalaianSholat.index);

    app.route('/kelalaian').get(kelalaianSholat.list);

    app.route('/kelalaian').post(kelalaianSholat.create);     
};