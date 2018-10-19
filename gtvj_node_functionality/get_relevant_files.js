let fs = require("fs");

let get_relevant_files = function (dir) {

    return new Promise((resolve, reject) => {
        fs.readdir(`./${dir}`, (err, files) => {
            if (err) {
                reject(err);
            }
            resolve(files, dir);
        })
    });
};

module.exports = get_relevant_files;