import $ from '../core';

$.prototype.collapse = function (headActive = 'collapse-head--active', 
                                contentActive = 'collapse-content--active', paddings = 40) 
                                {
        for (let i = 0; i < this.length; i += 1) {
            $(this[i]).click(() => {
                $(this[i]).toggleClasses(headActive);
                $(this[i].nextElementSibling).toggleClasses(contentActive);

                if(this[i].classList.contains(headActive)) {
                    this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight 
                                                                + paddings + 'px';
                } else {
                    this[i].nextElementSibling.style.maxHeight = "0px";
                }
            });
        }
};

$('.collapse-head').collapse();