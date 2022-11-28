$(function () {
    document.querySelectorAll('.wagtailstreamforms-disabled').forEach(function (parent) {
        parent.querySelectorAll("input").forEach(function (element) {
            element.disabled = true;
        });
    });
});
