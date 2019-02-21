const fs   = require('fs'),
      path = require('path');

module.exports = {
    getDataAll: () => {
            var self = this;
            let dataPath = __dirname + path.join('/data/data.json');
            return new Promise((resolve, reject) => {
                fs.readFile(dataPath, 'utf8', (err, readData) => {
                    resolve(JSON.parse(readData));
                });
            });
        }
};
