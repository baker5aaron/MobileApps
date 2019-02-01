const HomeViewModel = require("./home-view-model");
const view = require("tns-core-modules/ui/core/view");
const frame = require("tns-core-modules/ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onNavigatingTo(args) {
    const page = args.object;
}

function gotoHome(args) {
    frame.topmost().navigate( 'home/home-page')
}

function gotoPrefs(args) {
    frame.topmost().navigate( 'home/pref-page' );
}

exports.gotoHome = gotoHome;
exports.gotoPrefs = gotoPrefs;