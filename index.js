'use strict';
const arvish = require('arvish');
const Inko = require('inko');
const inko = new Inko();

const result = inko.en2ko(arvish.input);
const item = [{
    title: result,
    subtitle: `Copy "${result}" to clipboard`,
    arg: result,
    icon: {
        path: './icon.png'
    }
}];

arvish.output(item);
