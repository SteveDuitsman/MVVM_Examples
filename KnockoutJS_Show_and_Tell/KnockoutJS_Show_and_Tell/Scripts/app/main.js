(function () {

    requirejs.config({
        baseUrl: "Scripts/app/"//,
        //paths: {
        //    "jquery": "Scripts/lib/jquery-1.7.1.js"
        //}
    });

    define('jquery', [], function () { return this.jQuery; });
    define('ko', [], function () { return this.ko; });

    require(['bootstrapper'],
        function (bootstrapper) {
            bootstrapper.Run();
        }
    );
})();