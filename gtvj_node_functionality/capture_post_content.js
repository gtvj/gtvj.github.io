let get_relevant_files = require("./get_relevant_files");
let produce_object_from_files = require("./produce_object_from_files");

let posts_directory = '../_includes';

get_relevant_files(posts_directory)
    .then((data, dir) => {
        return produce_object_from_files(data, posts_directory)
    })
    .then((data) => {
        console.log(data);
    });