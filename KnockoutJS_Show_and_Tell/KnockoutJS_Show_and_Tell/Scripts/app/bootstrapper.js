define('bootstrapper',
    ['jquery', 'dataprimer', 'binder'],
    function ($, dataprimer, binder) {

        var run = function () {
            alert('start load');

            $.when(dataprimer.Fetch)
             .done(binder.Bind);

            alert('load finished');
        };
        return { Run: run };
    });
