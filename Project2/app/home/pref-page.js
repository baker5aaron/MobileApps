const HomeViewModel = require("./home-view-model");
const view = require("tns-core-modules/ui/core/view");
const frame = require("tns-core-modules/ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
}

function gotoHome(args) {
    frame.topmost().navigate( 'home/home-page' );
}

function gotoAbout(args) {
    frame.topmost().navigate( 'home/about-page' );
}

exports.gotoAbout = gotoAbout;
exports.gotoHome = gotoHome;