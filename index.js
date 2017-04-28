var cyrillic = require('./lib/cyrillic');

module.exports = function(text) {
        return text.split('').map(function(a) {
                a = a.toUpperCase();
                if (!cyrillic.hasOwnProperty(a)) return a;
                return cyrillic[a][Math.floor(Math.random() * cyrillic[a].length)];
        }).join('');
};
