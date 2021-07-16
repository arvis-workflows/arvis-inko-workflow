'use strict';
const arvish = require('arvish');
const Inko = require('inko');
const inko = new Inko();


const result = inko.ko2en(arvish.input);
const item = [{
    title: result,
    arg: result,
    icon: {
        path: './icon.png'
    }
}];

arvish.output(item);
