ko.bindingHandlers.slideVisible = {
    init: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor()); 
        $(element).toggle(value); 
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        var value = valueAccessor(), allBindings = allBindingsAccessor();

        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var duration = allBindings.slideDuration || 400; // 400ms is default duration unless otherwise specified

        if (valueUnwrapped == true)
            $(element).slideDown(duration);
        else
            $(element).slideUp(duration);
    }
};