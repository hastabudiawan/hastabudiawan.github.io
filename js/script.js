// ScrollSpy
(function ($) {
    "use strict";
    // all parameters are optional
    smartScroll.init({
        speed: 500, // default 500
        addActive: true, // default true
        activeClass: "active", // default active
        offset: 30 // default 100
    }, function () {
        console.log("callback");
    });
})(jQuery);