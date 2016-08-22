"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent)
    .then(function (success) { return console.log('App launched successfully'); })
    .catch(function (error) { return console.log('Something messed up!'); });
//# sourceMappingURL=main.js.map