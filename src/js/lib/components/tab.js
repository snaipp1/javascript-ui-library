import $ from '../core';

$.prototype.tab = function () {
    for (let i = 0; i < this.length; i += 1) {
        $(this[i]).on('click', () => {
            $(this[i])
            .addClasses('tab-item--active')
            .siblings()
            .removeClasses('tab-item--active')
            .closest('.tab')
            .find('.tab-content')
            .removeClasses('tab-content--active')
            .eq($(this[i]).index())
            .addClasses('tab-content--active');
        });
    }
};

$('[data-tabpanel] .tab-item').tab();