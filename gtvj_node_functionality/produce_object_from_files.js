let fs = require("fs");
let path = require("path");

let produce_object_from_files = function (files, posts_directory) {

    let obj = {}, processed_count = 0;

    return new Promise((resolve, reject) => {

        files.forEach((fileName) => {

            let file = path.join(__dirname, posts_directory, fileName),
                stats = fs.statSync(file);

            if (stats.isFile() && fileName !== ".DS_Store") {

                fs.readFile(file, "UTF-8", (err, contents) => {

                    if (err) {
                        reject(err);
                    }

                    obj[fileName] = contents;

                    processed_count++;

                    if (files.length === processed_count) {
                        resolve(obj);
                    }
                })
            }
        })
    });
};

module.exports = produce_object_from_files;
