import $ from '../core';

$.prototype.addClasses = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
    }

    return this;
};

$.prototype.removeClasses = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClasses = function(classNames) {
    for (let i = 0; i < this.length; i++) {
        
        this[i].classList.toggle(classNames);
    }

    return this;
};