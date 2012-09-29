define('bootstrapper',
    ['jquery', 'dataprimer', 'binder', 'citydata', 'weatherdata'],
    function ($, dataprimer, binder) {

        var run = function () {
            alert('start load');

           // $.when(dataprimer.Fetch())

            $.when(function () {
                 citydata.Fetch();
                 weatherdata.Fetch();
             })
             .done(binder.Bind);

            alert('load finished');
        };
        return { Run: run };
    });
