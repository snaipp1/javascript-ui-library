import $ from '../core';

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i +=1) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
}

$.prototype.eq = function (i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i += 1) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;

    return this;
}

$.prototype.index = function () {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0];
    }

    return childs.findIndex(findMyIndex);
}

$.prototype.find = function (selector) {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i += 1) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j += 1) {
            this[counter] = arr[j];
            counter += 1;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems += 1) {
        delete this[numberOfItems];
    }

    return this;
}

$.prototype.closest = function (selector) {
    let counter = 0;
    
    for (let i = 0; i < this.length; i += 1) {
        this[i] = this[i].closest(selector) !== null ? this[i].closest(selector) : undefined;
        counter += 1;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter += 1) {
        delete this[counter];
    }

    return this;
}

$.prototype.siblings = function () {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i += 1) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j += 1) {
            if (copyObj[i] === arr[j]) {
                continue;
            }
            this[counter] = arr[j];
            counter += 1;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems += 1) {
        delete this[numberOfItems];
    }

    return this;
}



