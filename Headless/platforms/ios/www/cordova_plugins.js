cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.bez4pieci.cookies/www/cookies.js",
        "id": "com.bez4pieci.cookies.cookies",
        "clobbers": [
            "cookies"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.printer/www/printer.js",
        "id": "de.appplant.cordova.plugin.printer.Printer",
        "clobbers": [
            "plugin.printer",
            "cordova.plugins.printer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.bez4pieci.cookies": "0.0.1",
    "cordova-plugin-whitelist": "1.0.0",
    "de.appplant.cordova.plugin.printer": "0.6.2",
    "org.apache.cordova.statusbar": "0.1.10"
}
// BOTTOM OF METADATA
});